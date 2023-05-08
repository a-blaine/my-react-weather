import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast({ coordinates }) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "7ae5e58d29dbe83f5367ad389e4a99a2";
  let latitude = coordinates.lat;
  let longitude = coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Tue</div>
          <WeatherIcon code="01n" size={36} />
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">19°</span>
            <span className="Forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
