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
            <div className="RealFeel">
              <span role="img" aria-label="thermometer">
                🌡️
              </span>
              ️ RealFeel©
            </div>
            <div className="RealFeelRealTime">{props.data.realfeel}º</div>
          </Col>
        </Row>

        <Row className="WindHumidityRain">
          <Col className="WindColumn">
            <div className="Wind">
              <span role="img" aria-label="dash">
                💨
              </span>{" "}
              Wind
            </div>
            <div className="WindRealTime">{props.data.wind} km/h</div>
          </Col>

          <Col className="HumidityColumn">
            <div className="Humidity">
              <span role="img" aria-label="droplet">
                💧
              </span>{" "}
              Humidity
            </div>
            <div className="HumidityRealTime">{props.data.humitidy}%</div>
          </Col>

          <Col className="ChanceOfRainColumn">
            <div className="ChanceOfRain">
              <span role="img" aria-label="Cloud With Rain">
                🌧️{" "}
              </span>{" "}
              % of rain
            </div>
            <div className="ChanceOfRainRealTime">{props.data.rain}%</div>
          </Col>
        </Row>

        <Row className="SunriseSunset">
          <Col className="Col-6">
            <div className="Sunrise">
              <span role="img" aria-label="Sunrise">
                🌅
              </span>{" "}
              Sunrise
            </div>
            <div className="SunriseRealTime">
              {SunriseTime(props.data.sunriseTime)}
            </div>
          </Col>
          <Col className="Col-6">
            <div className="Sunset">
              <span role="img" aria-label="Sunrise">
                🌇
              </span>{" "}
              Sunset
            </div>
            <div className="SunsetRealTime">
              {SunsetTime(props.data.sunsetTime)}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
