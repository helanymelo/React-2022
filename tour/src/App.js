import Loading from "./Loading/Loading";
import Tours from "./Tours/Tours"
import { useState, useEffect } from "react";
import axios from "axios";

const url =  'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading]=useState(false)
  const [tours, setTours]=useState([])


 const getTrips =() =>{
  axios.get('https://course-api.com/react-tours-project')
  .then((res)=>{
    console.log(res)
    setTours(res.data)
    setLoading(false)
  }).catch((err)=>{
    console.log(err)
    setLoading(true)
  })
  
 }

  useEffect(()=>{
    getTrips()
  },[])

  if(loading){
    return(
      <Loading/>
    )
  }
  return (
    <main className="App">
      <Tours tours={tours}/>      
    </main>
  );
}

export default App;
