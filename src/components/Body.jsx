import "../css/Body.css";
import { useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { NowBlock } from "./BodyComponents/NowBlock";
import { DetailsBlock } from "./BodyComponents/DetailsBlock";
import { ForecastBlock } from "./BodyComponents/ForecastBlock";
import { getWeatherDataNow } from "./Request";

import { installWeatherDataNow } from "../store/slices/weatherDataNowSlice";

export function Body() {
  const currentCityName = useSelector((state) => state.cityNameReducer.city);
  const dispatch = useDispatch();

  async function showCurrentCity(cityName) {
    try {
      const weatherDataNow = await getWeatherDataNow(cityName);
      console.log(weatherDataNow)

      dispatch(installWeatherDataNow(weatherDataNow));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    showCurrentCity(currentCityName);
  });

  return (
    <div className="weather__body body">
      <NowBlock />
      <DetailsBlock />
      <ForecastBlock />
    </div>
  );
}

/* function getWeatherData() {

} */
