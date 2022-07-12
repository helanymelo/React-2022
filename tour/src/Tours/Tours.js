import React from 'react'
import Tour from "../Tour/Tour"

const Tours = ({tours, deleteTrip}) => {
  return (
    <section>
        <div className='title'>
            <h2>Our Tours</h2>
            <div className='underline'></div>
            <div>
                {tours.map((tour)=>{
                    return<Tour key={tour.id} {...tour} deleteTrip={deleteTrip}></Tour>
                })}
            </div>

        </div>
    </section>
  )
}

export default Tours