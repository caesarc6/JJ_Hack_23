import React, { useState, useEffect } from "react";

function Form() {
  const handleSubmit = (e) => {
    
    function WeatherDisplay({ city }) {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

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
    return <div>Failed to load weather data: {error.message}</div>;
  }

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  const weatherString = JSON.stringify(weatherData);
  return <div id="Display_Weather">{weatherString}</div>;
}


    console.log(e);
  };

  return (
    <div>
      <form id="form_location" onSubmit={handleSubmit}>
        <input
          name="location_input"
          type="text"
          id="location_input"
          placeholder="Enter a location"
          className="location_input_bar"
        />
        <button type="submit" id="submit-btn" form="form_location">
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default Form;
