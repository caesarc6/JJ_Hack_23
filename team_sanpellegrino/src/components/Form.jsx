import React, { useState } from "react";

function Form() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  //import weather api key from .env file
  const apiKey = "4557cd8c282f4b10b46f50087026731b";

  const fetchWeatherData = async (event) => {
    event.preventDefault();

    try {
      const locationInput = event.target.location_input.value;
      const url = `https://api.weatherbit.io/v2.0/current?&postal_code=${locationInput}&key=${apiKey}`;
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

  const weatherTable = (
    <div className="center">
      {weatherData.data.slice(0, 2).map((item) => (
        <div key={item.ts} className="data-box">
          <h3>
            {item.state_code}, {item.city_name}
          </h3>
          <p>Air Quality: {item.aqi}</p>
          <p>PM2.5: {item.pm2_5}</p>
          <p>PM10: {item.pm10}</p>
          <p>O3: {item.o3}</p>
          <h5>{item.ob_time}</h5>
          <p>
            Quality Status:{" "}
            {item.aqi >= 0 && item.aqi <= 50 ? (
              <span style={{ color: "green" }}>
                Good - It is safe for you to travel outside today!
              </span>
            ) : item.aqi >= 51 && item.aqi <= 100 ? (
              <span style={{ color: "yellow" }}>
                Moderate - Please take extra caution traveling, stay indoor if
                possible.
              </span>
            ) : item.aqi >= 101 && item.aqi <= 150 ? (
              <span style={{ color: "red" }}>
                Bad - Please do not leave the house, you will quite literally
                die.
              </span>
            ) : (
              ""
            )}
          </p>
          <image src={item.weather.icon} alt="weather icon" />
        </div>
      ))}
    </div>
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
      {weatherTable}
    </div>
  );
}

export default Form;
