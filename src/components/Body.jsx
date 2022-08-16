import "../css/Body.css";
import { useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import store from "store";

import { NowBlock } from "./BodyComponents/NowBlock";
import { DetailsBlock } from "./BodyComponents/DetailsBlock";
import { ForecastBlock } from "./BodyComponents/ForecastBlock";
import { getWeatherDataNow, getWeatherDataForecast } from "./Request";

import { installWeatherDataNow } from "../store/slices/weatherDataNowSlice";
import { installWeatherForecast } from "../store/slices/weatherForecastSlice";

import { convertDate, convertTime } from "../ConvertDateTime";

export function Body() {
  const currentCityName = useSelector((state) => state.cityNameReducer.city); // имя в запрос идет из стейта
  const dispatch = useDispatch();
  // const currentCityName = store.get("cityName");

  async function showCurrentCity(cityName) {
    try {
      const weatherDataNow = await getWeatherDataNow(cityName);
      const weatherForecast = await getWeatherDataForecast(cityName);

      const forecastArr = getForecastArr(weatherForecast.list);

      dispatch(installWeatherDataNow(weatherDataNow));
      dispatch(installWeatherForecast(forecastArr));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    showCurrentCity(currentCityName);
  }, [currentCityName]);

  return (
    <div className="weather__body body">
      <NowBlock />
      <DetailsBlock />
      <ForecastBlock />
    </div>
  );
}

function getForecastArr(weatherForecastList) {
  const forecastArr = [];

  for (let i = 0; i < 3; i++) {
    const weatherForecastItem = {
      date: convertDate(weatherForecastList[i].dt),
      time: convertTime(weatherForecastList[i].dt),
      feels_like: Math.round(weatherForecastList[i].main.feels_like) + "°C",
      humidity: weatherForecastList[i].main.humidity + " %",
      wind: weatherForecastList[i].wind.speed + " k/h",
      temperature: Math.round(weatherForecastList[i].main.temp) + "°C",
    };

    forecastArr.push(weatherForecastItem);
  }

  return forecastArr;
}
