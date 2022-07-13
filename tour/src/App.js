import Loading from "./Loading/Loading";
import Tours from "./Tours/Tours"
import { useState, useEffect } from "react";
import axios from "axios";

const url =  'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading]=useState(false)
  const [tours, setTours]=useState([])


 const deleteTrip = (id) =>{
  const newListTour =  tours.filter((tour)=> tour.id !== id)
  setTours(newListTour)
  alert('Viagem deletada com sucesso')
  console.log(newListTour)
 }

 

 const getTrips =() =>{
  axios.get(url)
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

  if(tours.length === 0){
    return(
      <div>
        <h1>Nothing Here :( !!!!  </h1>       
        <button className='refresh-btn' onClick={getTrips}>REFRESH</button>
      </div>
    )
     
   
     
  }
  return (
    <main className="App">
      <Tours tours={tours} deleteTrip={deleteTrip}/>
               
    </main>
  );
}

export default App;
