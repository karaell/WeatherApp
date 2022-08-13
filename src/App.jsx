import "./css/App.css";
// import { useSelector } from "react-redux/es/exports";

import { Header } from "./components/Header"
import { Body } from "./components/Body";

// import { getWeatherData } from "./components/Request";

function App() {
  /* const currentCityName = useSelector((state) => state.cityNameReducer.city);

  function getWeatherData(cityName) {
    console.log(cityName)
    getWeatherData(cityName);
  }
 */
  return (
    <div className="weather weather__wrapper">
      <Header  />
      <Body />
    </div>
  );
}

export default App;
