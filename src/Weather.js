import React from "react";
import "./Weather.css";
//import axios from "axios";

<div></div>;

export default function Weather() {
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
      <h1>Ilsan</h1>
      <ul>
        <li>Thursday 13:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 ">
          <div className="d-flex">
            <div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly cloudy"
              />
            </div>
            <div>
              <span className="temperature">13</span>
              <span className="units"> °C | °F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 45%</li>
            <li>Humidity: 96%</li>
            <li>Wind: 4km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
