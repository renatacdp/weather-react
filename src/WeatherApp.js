import React, { useState } from "react";
import { Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./WeatherApp.css";
import CurrentWeather from "./CurrentWeather";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";
import MoreWeatherDetails from "./MoreWeatherDetails";
import axios from "axios";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      city: response.data.name,
      celsiusTemperature: Math.round(response.data.main.temp),
      fahrenheitTemperature: Math.round((response.data.main.temp * 9) / 5 + 32),
      currentMaxTemperatureCelsius: Math.round(response.data.main.temp_max),
      currentMaxTemperatureFahrenheit: Math.round(
        (response.data.main.temp_max * 9) / 5 + 32
      ),
      currentMinTemperatureCelsius: Math.round(response.data.main.temp_min),
      currentMinTemperatureFahrenheit: Math.round(
        (response.data.main.temp_min * 9) / 5 + 32
      ),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      realfeel: Math.round(response.data.main.feels_like),
      wind: Math.round(response.data.wind.speed),
      humitidy: Math.round(response.data.main.humidity),
      rain: response.data.clouds.all,
      sunriseTime: new Date(response.data.sys.sunrise * 1000),
      sunsetTime: new Date(response.data.sys.sunset * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function getCurrentLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "701f06352d61835bc4fc894e7b084629";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocationEvent() {
    navigator.geolocation.getCurrentPosition(getCurrentLocation);
  }

  function search() {
    const apiKey = "701f06352d61835bc4fc894e7b084629";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="SearchForm">
          <Form className="SearchCityForm" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Enter city..."
                className="FormControl SearchCity"
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </Form.Group>

            <input type="submit" value="Go!" className="GoButton" />

            <FontAwesomeIcon
              icon={faLocationDot}
              className="CurrentLocation"
              alt="current location"
              title="My Current Location"
              onClick={getCurrentLocationEvent}
            />
          </Form>
        </div>
        <div>
          <h2>{weatherData.city}</h2>
        </div>
        <div>
          <h3>
            <FormattedDate data={weatherData} />
          </h3>
        </div>
        <CurrentWeather data={weatherData} />
        <hr />
        <Forecast data={weatherData} />
        <hr />
        <MoreWeatherDetails data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
