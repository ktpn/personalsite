import { useState } from "react";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const API_KEY ="bd73d437a1eb26994b3d99be1e96b419";

  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeatherData();
  };

  return (
    <div className="weathercard">
      <h1 className="weathertitle"><u>Weather App &#x26C5; </u></h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">Get weather</button>
      </form>
      {weatherData.main && (
        <div>
            <br></br>
        <div className="divider"></div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <h2>{(weatherData.main.temp*(9/5)+32).toFixed(2)}°F ({weatherData.main.temp}°C)</h2>
          <p>Feels like {(weatherData.main.feels_like*(9/5)+32).toFixed(2)}°F ({weatherData.main.feels_like}°C)</p>
          <p>{weatherData.weather[0].main}, {weatherData.weather[0].description}</p>
          <p>Humidity &#128167;: {weatherData.main.humidity}%</p>
          <div className="divider"></div>
          <p>Temperature range &#127777;: {(weatherData.main.temp_min*(9/5)+32).toFixed(2)}°F to {(weatherData.main.temp_max*(9/5)+32).toFixed(2)}°F ({weatherData.main.temp_min}°C to {weatherData.main.temp_max}°C)</p>
          <p>Wind speed &#128168;: {((weatherData.wind.speed)*2.2369).toFixed(2)} MPH ({weatherData.wind.speed} m/s) </p>
          <p>Sunrise &#127774;: {new Date(weatherData.sys.sunrise*1000).toLocaleTimeString('en-US', {timeZoneName: 'short'})}</p>
          <p>Sunset &#127770;: {new Date(weatherData.sys.sunset*1000).toLocaleTimeString('en-US', {timeZoneName: 'short'})}</p>
          <p>Latitude Longitude &#127758;: {weatherData.coord.lat} {weatherData.coord.lon}</p>
        </div>
      )}
        <p className="credit">Data/API is thanks to <a href="https://openweathermap.org/">OpenWeather</a></p>
    </div>
  );
};

export default Weather;
