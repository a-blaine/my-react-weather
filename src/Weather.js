import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";

<div></div>;

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Thursday 13:00",
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="off"
                autoComplete="off"
                className="form-control"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6 ">
            <div className="d-flex">
              <div>
                <img src={weatherData.iconUrl} alt={weatherData.description} />
              </div>
              <div>
                <span className="temperature">{weatherData.temperature}</span>
                <span className="units"> °C | °F</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b6a665e3f83ec547fffce7205be8c2d2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    return (
      <div className="d-flex">
        <div className="sync-loader">
          <SyncLoader
            color={"black"}
            loading={true}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  }
}
