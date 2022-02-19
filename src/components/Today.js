import React, { Component } from 'react'


export default class today extends Component {
    render(props) {

        const {current} =this.props.selectedCity.weather
        const temperature = Math.round(current.temp)
        const skyIcon =current.weather[0].main

    return (
      <div className='today-container'>
          <p className='today'>today</p>
          <div className="today-weather">
            <div className='todayIcon-container'>
               <img className='todayIcon' src={`./images/${skyIcon}.svg`} alt=""/>
            </div>
            <div >
               <p className='temperature'>{temperature}<span>&#176;</span></p>
               <p >{skyIcon}</p>
            </div>
          </div>
      </div>
    )
  }
}
