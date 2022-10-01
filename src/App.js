import "./App.css";

import SearchForm from "./SearchForm";
import CityDateAndTimeDetails from "./CityDateAndTimeDetails";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import MoreWeatherDetails from "./MoreWeatherDetails";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchForm />
      <CityDateAndTimeDetails />
      <CurrentWeather />
      <hr />
      <Forecast />
      <hr />
      <MoreWeatherDetails />
      <Footer />
    </div>
  );
}
