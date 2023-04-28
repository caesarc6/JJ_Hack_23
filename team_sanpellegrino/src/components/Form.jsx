import React, { useState } from "react";

function Form() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");

  const fetchWeatherData = async (event) => {
    event.preventDefault();

    try {
      const locationInput = event.target.location_input.value;
      const url = `https://api.weatherbit.io/v2.0/forecast/airquality?&postal_code=${locationInput}&key=3140a681d3b34703bdbe0d30c8ddab50`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      setLocation(locationInput);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <div>Failed to load weather data: {error.message}</div>;
  }

  if (!weatherData) {
    return (
      <div className="center">
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

  const city = weatherData.city_name;
  const countryCode = weatherData.country_code;

  const weatherTable = (
    <table className="center">
      <thead>
        <tr>
          <th>Date</th>
          <th>Air Quality</th>
          <th>PM2.5</th>
          <th>PM10</th>
          <th>O3</th>
        </tr>
      </thead>
      <tbody>
        {weatherData.data.map((item) => (
          <tr key={item.ts}>
            <td>{item.datetime}</td>
            <td>{item.aqi}</td>
            <td>{item.pm2_5}</td>
            <td>{item.pm10}</td>
            <td>{item.o3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="center">
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
      <h2>{city}, {countryCode}</h2>
      {weatherTable}
    </div>
  );
}

export default Form;

