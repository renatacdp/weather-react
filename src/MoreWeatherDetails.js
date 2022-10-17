import React from "react";
import "./MoreWeatherDetails.css";
import { Container, Row, Col } from "react-bootstrap";

export default function MoreWeatherDetails(props) {
  function SunriseTime() {
    let hours = props.data.sunriseTime.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = props.data.sunriseTime.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return (
      <div>
        {hours}h{minutes}
      </div>
    );
  }

  function SunsetTime() {
    let hours = props.data.sunsetTime.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = props.data.sunsetTime.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return (
      <div>
        {hours}h{minutes}
      </div>
    );
  }

  return (
    <Container>
      <div className="MoreWeatherDetails">
        <Row className="RealFeelRow">
          <Col className="RealFeelColumn">
            <p className="RealFeel">
              <span role="img" aria-label="thermometer">
                🌡️
              </span>
              ️ RealFeel©
            </p>
            <p className="RealFeelRealTime">{props.data.realfeel}º</p>
          </Col>
        </Row>

        <Row className="WindHumidityRain">
          <Col className="WindColumn">
            <p className="Wind">
              <span role="img" aria-label="dash">
                💨
              </span>{" "}
              Wind
            </p>
            <p className="WindRealTime">{props.data.wind} km/h</p>
          </Col>

          <Col className="HumidityColumn">
            <p className="Humidity">
              <span role="img" aria-label="droplet">
                💧
              </span>{" "}
              Humidity
            </p>
            <p className="HumidityRealTime">{props.data.humitidy}%</p>
          </Col>

          <Col className="ChanceOfRainColumn">
            <p className="ChanceOfRain">
              <span role="img" aria-label="Cloud With Rain">
                🌧️{" "}
              </span>{" "}
              % of rain
            </p>
            <p className="ChanceOfRainRealTime">{props.data.rain}%</p>
          </Col>
        </Row>

        <Row className="SunriseSunset">
          <Col className="Col-6">
            <p className="Sunrise">
              <span role="img" aria-label="Sunrise">
                🌅
              </span>{" "}
              Sunrise
            </p>
            <p className="SunriseRealTime">
              {SunriseTime(props.data.sunriseTime)}
            </p>
          </Col>
          <Col className="Col-6">
            <p className="Sunset">
              <span role="img" aria-label="Sunrise">
                🌇
              </span>{" "}
              Sunset
            </p>
            <p className="SunsetRealTime">
              {SunsetTime(props.data.sunsetTime)}
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
