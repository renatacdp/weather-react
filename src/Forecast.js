import React from "react";
import "./Forecast.css";

export default function Forecast() {
  let Forecast = {
    weekday: ["Wed", "Thu", "Fri", "Sat", "Sun"],
    image: "http://openweathermap.org/img/wn/01d@2x.png",
    currentMaxTemperature: [21, 23, 26, 29, 18],
    currentMinTemperature: [16, 18, 21, 24, 15],
  };

  return (
    <div className="ForecastWeek">
      <div>
        <h4>{Forecast.weekday[0]}</h4>
        <img src={Forecast.image} alt=" " className="ForecastWeather" />
        <p className="MaxMinTemp">
          ↑
          <span className="MaxTempDay1">
            {Forecast.currentMaxTemperature[0]}º
          </span>
          <br />↓
          <span className="MinTempDay1">
            {Forecast.currentMinTemperature[0]}º
          </span>
        </p>
      </div>
      <div>
        <h4>{Forecast.weekday[1]}</h4>
        <img src={Forecast.image} alt=" " className="ForecastWeather" />
        <p className="MaxMinTemp">
          ↑
          <span className="MaxTempDay1">
            {Forecast.currentMaxTemperature[1]}º
          </span>
          <br />↓
          <span className="MinTempDay1">
            {Forecast.currentMinTemperature[1]}º
          </span>
        </p>
      </div>
      <div>
        <h4>{Forecast.weekday[2]}</h4>
        <img src={Forecast.image} alt=" " className="ForecastWeather" />
        <p className="MaxMinTemp">
          ↑
          <span className="MaxTempDay1">
            {Forecast.currentMaxTemperature[2]}º
          </span>
          <br />↓
          <span className="MinTempDay1">
            {Forecast.currentMinTemperature[2]}º
          </span>
        </p>
      </div>
      <div>
        <h4>{Forecast.weekday[3]}</h4>
        <img src={Forecast.image} alt=" " className="ForecastWeather" />
        <p className="MaxMinTemp">
          ↑
          <span className="MaxTempDay1">
            {Forecast.currentMaxTemperature[3]}º
          </span>
          <br />↓
          <span className="MinTempDay1">
            {Forecast.currentMinTemperature[3]}º
          </span>
        </p>
      </div>
      <div>
        <h4>{Forecast.weekday[4]}</h4>
        <img src={Forecast.image} alt=" " className="ForecastWeather" />
        <p className="MaxMinTemp">
          ↑
          <span className="MaxTempDay1">
            {Forecast.currentMaxTemperature[4]}º
          </span>
          <br />↓
          <span className="MinTempDay1">
            {Forecast.currentMinTemperature[4]}º
          </span>
        </p>
      </div>
    </div>
  );
}
