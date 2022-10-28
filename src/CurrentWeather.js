import React, { useState } from "react";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [unit, setUnit] = useState("metric");

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "metric") {
    return (
      <div className="CurrentWeather">
        <div>
          <img src={props.data.icon} alt="" className="CurrentWeatherIcon" />
        </div>
        <div className="CurrentWeatherDetails">
          <span className="SkyDetails">
            <span>{props.data.description}</span>
          </span>
          <div className="CurrentTemperatureBlock">
            <span className="CurrentTemperature">
              {props.data.celsiusTemperature}
            </span>
            <span className="CelsiusFahrenheitBlock">
              <a href="./" className="Celsius, Active" onClick={displayCelsius}>
                ºC
              </a>{" "}
              |
              <a href="./" className="Fahrenheit" onClick={displayFahrenheit}>
                ºF
              </a>
            </span>
          </div>
          <div className="CurrentMaxMinTemp">
            ↑{" "}
            <span className="CurrentMaxTemp">
              {props.data.currentMaxTemperatureCelsius}º
            </span>{" "}
            ↓
            <span className="CurrentMinTemp">
              {props.data.currentMinTemperatureCelsius}º
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentWeather">
        <div>
          <img src={props.data.icon} alt="" className="CurrentWeatherIcon" />
        </div>
        <div className="CurrentWeatherDetails">
          <span className="SkyDetails">
            <span>{props.data.description}</span>
          </span>
          <div className="CurrentTemperatureBlock">
            <span className="CurrentTemperature">
              {props.data.fahrenheitTemperature}
            </span>
            <span className="CelsiusFahrenheitBlock">
              <a href="./" className="Celsius" onClick={displayCelsius}>
                ºC
              </a>{" "}
              |
              <a
                href="./"
                className="Fahrenheit, Active"
                onClick={displayCelsius}
              >
                ºF
              </a>
            </span>
          </div>
          <div className="CurrentMaxMinTemp">
            ↑{" "}
            <span className="CurrentMaxTemp">
              {props.data.currentMaxTemperatureFahrenheit}º
            </span>{" "}
            ↓
            <span className="CurrentMinTemp">
              {props.data.currentMinTemperatureFahrenheit}º
            </span>
          </div>
        </div>
      </div>
    );
  }
}
