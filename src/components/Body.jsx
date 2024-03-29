import React from "react";

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
  const currentCityName = useSelector((state) => state.cityNameReducer.city);
  const dispatch = useDispatch();

  async function showCurrentCity(cityName) {
    try {
      const weatherData = await Promise.all([getWeatherDataNow(cityName), getWeatherDataForecast(cityName)]);
      const [weatherDataNow, weatherForecast] = weatherData;

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
      feels_like: weatherForecastList[i].main.feels_like,
      humidity: weatherForecastList[i].main.humidity,
      wind: weatherForecastList[i].wind.speed,
      temperature: weatherForecastList[i].main.temp,
    };

    forecastArr.push(weatherForecastItem);
  }

  return forecastArr;
}
