import React from "react";
import "./Forecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <h4>{day()}</h4>
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt=" "
        className="ForecastWeather"
      />
      <div className="MaxMinTemp">
        ↑<span className="MaxTempDay1">{maxTemperature()}</span>
        <br />↓<span className="MinTempDay1">{minTemperature()}</span>
      </div>
    </div>
  );
}
