import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let currentWeather = {
    details: "Clear sky",
    image: "http://openweathermap.org/img/wn/02d@2x.png",
    celsiusTemperature: 30,
    currentMaxTemperature: 32,
    currentMinTemperature: 20,
  };

  return (
    <div className="CurrentWeather">
      <div>
        <img src={currentWeather.image} alt="" className="CurrentWeatherIcon" />
      </div>

      <span className="CurrentWeatherDetails">
        <p className="SkyDetails">{currentWeather.details}</p>
        <div className="CurrentTemperatureBlock">
          <span className="CurrentTemperature">
            {currentWeather.celsiusTemperature}
          </span>
          <span className="CelsiusFahrenheitBlock">
            <a href="./" className="Celsius, Active">
              ºC
            </a>{" "}
            |
            <a href="./" className="Fahrenheit">
              ºF
            </a>
          </span>
        </div>
        <p className="CurrentMaxMinTemp">
          ↑{" "}
          <span className="CurrentMaxTemp">
            {currentWeather.currentMaxTemperature}º
          </span>{" "}
          ↓
          <span className="CurrentMinTemp">
            {currentWeather.currentMinTemperature}º
          </span>
        </p>
      </span>
    </div>
  );
}
