import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {AuthProvider} from './components/Context/AuthContext'

import {onAuthStateChanged} from 'firebase/auth'
import {useState, useEffect} from 'react';
import {useAuth} from './hooks/useAuth'
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
  const [ user, setUser]=useState(undefined)
  const {auth} = useAuth()
  const loadingUser = user ===undefined

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  },[auth])


  if(loadingUser){
    return <p>Carregando...</p>
  }


  return (
    <BrowserRouter>
      <NavBar/>
      <div className='container'>
        <AuthProvider value={user}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cadastro' element={<Register/>}/>
            <Route path='/post/criar' element={<CreatePost/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        </AuthProvider>
      </div>
      <Footer/>
     
    </BrowserRouter>
  );
}

export default App;
