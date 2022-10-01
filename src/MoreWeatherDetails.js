import React from "react";
import "./MoreWeatherDetails.css";
import { Container, Row, Col } from "react-bootstrap";

export default function MoreWeatherDetails() {
  let moreWeatherDetails = {
    realfeel: 28,
    wind: 23,
    humitidy: 77,
    rain: 10,
    sunriseHours: 6,
    sunriseMinutes: 46,
    sunsetHours: 20,
    sunsetMinutes: 37,
  };

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
            <p className="RealFeelRealTime">{moreWeatherDetails.realfeel}º</p>
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
            <p className="WindRealTime">{moreWeatherDetails.wind} km/h</p>
          </Col>

          <Col className="HumidityColumn">
            <p className="Humidity">
              <span role="img" aria-label="droplet">
                💧
              </span>{" "}
              Humidity
            </p>
            <p className="HumidityRealTime">{moreWeatherDetails.humitidy}%</p>
          </Col>

          <Col className="ChanceOfRainColumn">
            <p className="ChanceOfRain">
              <span role="img" aria-label="Cloud With Rain">
                🌧️{" "}
              </span>{" "}
              % of rain
            </p>
            <p className="ChanceOfRainRealTime">{moreWeatherDetails.rain}%</p>
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
              {moreWeatherDetails.sunriseHours}h
              {moreWeatherDetails.sunriseMinutes}
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
              {moreWeatherDetails.sunsetHours}h
              {moreWeatherDetails.sunsetMinutes}
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
