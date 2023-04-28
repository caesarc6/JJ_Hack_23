import React, { useState } from "react";

function Form() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (event) => {
    event.preventDefault();

    try {
      const location = event.target.location_input.value;
      const url = `https://api.weatherbit.io/v2.0/forecast/airquality?&postal_code=${location}&key=3140a681d3b34703bdbe0d30c8ddab50`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <div>Failed to load weather data: {error.message}</div>;
  }

  if (!weatherData) {
    return (
      <div>
        <form id="form_location" onSubmit={fetchWeatherData}>
          <input
            name="location_input"
            type="text"
            id="location_input"
            placeholder="Enter a location"
            className="location_input_bar"
          />
          <button type="submit" id="submit-btn">
            Get Weather
          </button>
        </form>
      </div>
    );
  }

  const weatherString = JSON.stringify(weatherData);
  return <div id="weather-data">{weatherString}</div>;
}

export default Form;
