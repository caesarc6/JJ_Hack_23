import React, { useState, useEffect } from "react";

function WeatherDisplay({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const url = `https://api.weatherbit.io/v2.0/forecast/airquality?&postal_code=${city}&key=3140a681d3b34703bdbe0d30c8ddab50`;
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
    console.log("Failed to load weather data");
  }

  if (!weatherData) {
    console.log("Loading weather data...");
  }

  const weatherString = JSON.stringify(weatherData);
  return <div id="Display_Weather">{weatherString}</div>;
}

export default WeatherDisplay;
