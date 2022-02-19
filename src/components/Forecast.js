import React, { Component } from 'react';
import {initialDataForecast} from './data.js';

const DayForecast =({fourDayForecast})=>{
    
    return(
        fourDayForecast.map((forecast,i) =>{

            let tempForecast = Math.round(forecast.temp.day)
            let current = new Date();
            current.setDate(current.getDate()+i+1);
            let day = current.toDateString().split(" ")[0]
            let skyIcon=forecast.weather[0].main

             return(
                 <div key={i} className='forecast-container'>
                     <p className='day'>{day}</p>
                     <div>
                         <img className='forecastIcon' src={`./images/${skyIcon}.svg` }/>
                     </div>
                     <div>
                     <p className='temperature'>{tempForecast}<span>&#176;</span></p>
                </div>
                </div>
             )
        })
    )
}

export default class Forecast extends Component {
  render(props) {
  
      if (this.props.selectedCity.weather.daily) {
        const {daily}=this.props.selectedCity.weather;
        const fourDayForecast = [...daily].slice(0,4)

         return (
            <div className="forecast">
                <DayForecast  fourDayForecast={fourDayForecast}/>
            </div>
        )
      }else
        return (
            <div className="forecast">
                <DayForecast  fourDayForecast={initialDataForecast}/>
            </div>
        )
  }
}
