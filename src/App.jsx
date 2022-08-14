import "./css/App.css";
import { useSelector } from "react-redux/es/exports";
import store from "store";

import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { useEffect } from "react";

// import { getWeatherData } from "./components/Request";

function App() {
  const currentCityName = useSelector((state) => state.cityNameReducer.city);
  console.log("app");

  store.set("cityName", "Moscow");
  /* useEffect(() => {
    console.log("set")
    store.set("cityName", "Moscow");
  }) */
  
  return (
    <div className="weather weather__wrapper">
      <Header />
      <Body />
    </div>
  );
}

export default App;
