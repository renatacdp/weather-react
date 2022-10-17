import "./App.css";

import WeatherApp from "./WeatherApp";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherApp defaultCity="Porto" />
      <div className="GithubLink">
        <a
          href="https://github.com/renatacdp/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Renata Pinto
      </div>
    </div>
  );
}
