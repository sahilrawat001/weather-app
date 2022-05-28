import React, { useState } from 'react'
import axios from 'axios'
import "./App.css"
const Weather = () => {
 const [data,setData]=useState({})
 const [location,setLocation]=useState('');
 const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d9f29f5b87cd92c2cb0f2223c4459d89`

const searchLocation =(event)=>{
    if(event.key==='Enter'){
    axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data )
    }  )
    setLocation('')
}
}

  return (
    <>
    <div className="search">
        <input
        value={location}
        onChange={event=>setLocation(event.target.value) }
        placeholder="enter location"
        onKeyPress={searchLocation}
        type="text" />
    </div>
         <div className="container" >
          <div className="top">
            <div className="location">
                <p>{data.name} </p>
            </div>
            <div className="temp">
                 {data.main? <h1>{data.main.temp.toFixed()} °C</h1>:null}
             </div>
            <div className="description">
            {data.weather? <p>{data.weather[0].description} </p>:null}

            </div>
          </div>

     {data.name!=undefined &&
          <div className="bottom">
                <div className="feels">
                    {data.main? <p className='bold' > {data.main.feels_like.toFixed() }   </p> :null}
                  <p>feels like</p> 
                    </div>
                    <div className="humidity">
                    {data.main? <p className='bold' > {data.main.humidity.toFixed() }%  </p> :null}
                        <p>humidity</p>
                    </div>
                    <div className="wind">
                    {data.wind? <p className='bold' > {data.wind.speed.toFixed() }MPH </p> :null}
                           
                         <p>Wind Speed</p>
                    </div>
          </div>
}
        </div>
    </>
  )
}

export default Weather
//                   
