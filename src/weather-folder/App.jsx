import React from 'react'
import axios from 'axios'
import "./App.css"
const Weather = () => {

  return (
    <>
         <div className="container" >
          <div className="top">
            <div className="location">
                <p>Dallas</p>
            </div>
            <div className="temp">
            <h1>61° C</h1>
            </div>
            <div className="description">
                 <p>cloud</p> 
            </div>
          </div>
          <div className="bottom">
                <div className="feels">
                  <p>65°C </p> 
                    </div>
                    <div className="humidity">
                        <p>
                            20%
                        </p>
                    </div>
                    <div className="wind">
                        <p>200</p>
                    </div>
          </div>
        </div>
    </>
  )
}

export default Weather