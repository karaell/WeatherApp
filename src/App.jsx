import "./css/App.css";

import { Header } from "./components/Header"
import { Body } from "./components/Body";

import { getWeatherData } from "./components/Request";

function App() {
  /* function handleGetWeatherData(cityName) {
    console.log(cityName)
    getWeatherData(cityName);
  } */

  return (
    <div className="weather weather__wrapper">
      <Header  />
      <Body />
    </div>
  );
}

export default App;
