import React, { Component } from 'react';
import {cities} from './data.js';



export default class City extends Component {
    
  render(props) {
    
      const {getCityData,selectedCity} =this.props

   return (
      <div className='cities-container'>
          {cities.map((city,i) =>{
              return (
              <div key={i} 
                   id={i} 
                   className={selectedCity.cityId==i ? "city selected" : "city"} 
                   onClick={getCityData}>
                   {city}
              </div>
              )
          })}
      </div>
    )
  }
}
