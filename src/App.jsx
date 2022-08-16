import "./css/App.css";
import { useEffect } from "react";
import store from "store";

import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { useDispatch } from "react-redux";
import { installCityName } from "./store/slices/cityNameSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cityName = store.get("cityName");
    console.log(cityName)
    dispatch(installCityName(cityName));
  }, [])

  return (
    <div className="weather weather__wrapper">
      <Header />
      <Body />
    </div>
  );
}

export default App;
