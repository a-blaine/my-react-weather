import React, { useState } from "react";
import ForecastDay from "./ForecastDay";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3dce9b1c66837262a25b3f448d354a76";
    let longitude = coordinates.lon;
    let latitude = coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
