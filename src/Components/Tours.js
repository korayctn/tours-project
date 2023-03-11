import React from 'react'
import {Tour} from './Tour';

export const Tours = ({tours,removeTourApp}) => {
  const removeHandler = (id)=>{
    removeTourApp(id);
  }
  return (
    <section>
      <div className='title'>
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour,index)=>{
          return (<Tour key={index} {...tour} removeTour={removeHandler}/>)
        })}
      </div>
    </section>
    
  )
}
