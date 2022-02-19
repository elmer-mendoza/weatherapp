import React, { Component } from 'react';
import City from './components/City';
import Today from './components/Today';
import Forecast from './components/Forecast';

export default class App extends Component {
  
  state = {
    cityId:"null",
    city:"",
    weather:{
      current:{
        temp:"5",
        weather:[{main:"clouds"}]
      }
    }
  }
  
  componentDidMount(){
     this.getCityData()
  }
  
getCityData = async(e) => {

  this.setState({...this.state,cityId:e.target.id})
  const targetCity= e.target.firstChild.nodeValue 
  const appId =process.env.REACT_APP_APP_ID;

   await  fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${targetCity}&appid=${appId}`)
  .then(response => response.json())
  .then(async(geoLoc) =>{
      const lat = geoLoc[0].lat;
      const lon = geoLoc[0].lon;
      const data = await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${appId}&units=metric&lang=en`)
      const dataSelectedCity =await data.json();
      this.setState({...this.state,weather:dataSelectedCity})
      })
  }

  render() {

    return (
      <div className='app-container'>
        <City getCityData={this.getCityData} selectedCity={this.state} />
        <div className="weather-container">
          <Today selectedCity={this.state}/>
          <Forecast selectedCity={this.state}/>
        </div>
      </div>

    )
  }
}
