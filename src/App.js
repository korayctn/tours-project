import React, { useState, useEffect } from 'react'
import {Loading} from './Components/Loading';
import {Tours} from './Components/Tours';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setTours(tours);
    }
    catch(err){
      setLoading(false);
      console.log(err);
    }
    setLoading(false);
  }
  const removeTourApp = (id)=>{
    const newList = tours.filter((item)=>{
      return item.id != id
    })
    setTours(newList)
  }  

  if(loading){
    return (<main>
      <Loading/>
    </main>)
  }
  else{
    if(tours.length === 0){
      return(
        <main>
          <div className="title">
            <h2>no tours left</h2>
            <button className='btn' onClick={()=>{fetchData()}}>Fetch Courses</button>
          </div>
        </main>
      )
    }
    else{
      return(
        <main>
          <Tours tours={tours} removeTourApp={removeTourApp}/>
        </main>
      )
    }
    
  }
}

export default App
