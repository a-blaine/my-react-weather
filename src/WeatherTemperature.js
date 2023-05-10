import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="temperature">{props.celsius}</span>
      <span className="units">°C</span>
    </span>
  );
}
