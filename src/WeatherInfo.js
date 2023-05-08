import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo({ data }) {
  return (
    <div className="WeatherInfo">
      <h1>{data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={data.date} />
        </li>
        <li className="text-capitalize">{data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 ">
          <div className="d-flex">
            <div>
              <img src={data.iconUrl} alt={data.description} />
            </div>
            <div>
              <span className="temperature">{data.temperature}</span>
              <span className="units"> °C | °F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {data.humidity}%</li>
            <li>Wind: {Math.round(data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
