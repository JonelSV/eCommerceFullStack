import React from 'react';
import { useState, useEffect } from 'react';
import { getWeatherData } from './ApiData';

// import weatherdata from apidata folder

// use parsefloat and -273.15 for conversion to celcius. toFixed to indicate
// number of digits afeter decimal point

const Weather = () => {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState('Boston');
 

  const getData = async () => {
    try{
       
        const data = await getWeatherData(city);
        setWeatherData(data);
        
    }catch(error) {
      console.log(error.message);
     
    }
  }
 
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="card">
        <h2 className="title"><i className="fa fa-cloud"></i>Check the Weather at your destination</h2>
        <div className="search-form">
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name"/>
          <button type="button" onClick={() => getData()}>Search</button>
        </div>
      
          {weatherdata !== null ? (
          <div className="main-container">
            <h4>Live Weather Condition</h4>
            <div className="weather-icon">
              <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="imgicon"/>
            </div>
            <h3>{weatherdata.weather[0].main}</h3>
            <div className="temprature">
              <h1>{(weatherdata.main.temp - 273.15).toFixed(1)}&deg;C</h1>
            </div>
            <div className="location">
            <h3><i className="fas fa-map-marked-alt"> </i> {weatherdata.name} | {weatherdata.sys.country}</h3>
            </div>
            <div className="temprature-range">
              <h6>Min: {parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)}&deg;C 
              || Max: {parseFloat(weatherdata.main.temp_max - 273.15).toFixed(1)}&deg;C 
              || Humidity: {weatherdata.main.humidity}%</h6>
            </div>
        </div>
        ) : null}
           
      </div>
    </div>
  );
};

export default Weather;
