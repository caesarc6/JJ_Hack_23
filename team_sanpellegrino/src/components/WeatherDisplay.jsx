import React, { useState, useEffect } from 'react'

function WeatherDisplay({ city }) {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    
    useEffect(() => {
      const fetchWeatherData = async () => {
        try {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`;
          const response = await fetch(url);
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          setError(error);
        }
      };
  
      fetchWeatherData();
    }, [city]);
  
    if (error) {
      console.log("Failed to load weather data")
    }

    if (!weatherData) {
      console.log("Loading weather data...")
    }
  
    const weatherString = JSON.stringify(weatherData);
    return <div id="Display_Weather">{weatherString}</div>;
  }

export default WeatherDisplay
