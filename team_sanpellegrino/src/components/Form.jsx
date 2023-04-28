import React from "react"

function Form() {
    const fetchWeatherData = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`;
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
          } catch (error) {
            setError(error);
          }
    }

  return (
    <div>
      <form id="form_location">
        <input
          name="location_input"
          type="text"
          id="location_input"
          placeholder="Enter a location"
          className="location_input_bar"
        />
        <button onClick={fetchWeatherData()} type="submit" id="submit-btn" form="form_location">
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default Form;
