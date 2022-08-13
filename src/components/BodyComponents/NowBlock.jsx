import { useSelector } from "react-redux";
import { format } from "date-fns";

import rain from "/0 Projects/WeatherApp/src/img/weather-icons/rain.svg";

export function NowBlock() {
  const weatherDataObj = useSelector(state => state.weatherDataNowReducer.weatherDataNow);
  // console.log(Date.now())
  return (
    <div className="body__now now">
      <NowInfo weatherData={weatherDataObj} />
      <div className="now__weather-icon">
        <img src={rain} alt="weather-icon" />
      </div>
      <NowDetails weatherData={weatherDataObj} />
    </div>
  );
}

function NowInfo(props) {
  const {weatherData} =  props;

  return (
    <div className="now__info">
      <div className="now__info-city-name">{weatherData.name}</div>
      <div className="now__info-data-time">{convertTime(weatherData.dt)}</div>
      <div className="now__info-degree">{Math.round(weatherData.main?.temp)}°C</div>
    </div>
  );
}

function NowDetails(props) {
  const { weatherData } = props;

  return (
    <div className="now__details-items details-items">
      <NowDetailItem title="Feels like" subtitle={Math.round(weatherData.main?.feels_like) +"°C"}/>
      <NowDetailItem title="Max" subtitle={Math.round(weatherData.main?.temp_max) +"°C"} />
      <NowDetailItem title="Min" subtitle={Math.round(weatherData.main?.temp_min) +"°C"} />
    </div>
  );
}

function NowDetailItem(props) {
  const { title, subtitle } = props;

  return (
    <div className="now__details-item">
      <div className="now__details-item-title">{title}</div>
      <div className="now__details-item-subtitle">{subtitle}</div>
    </div>
  );
}

function convertTime(unixTime) {
  try {
    const time = unixTime * 1000;

    return format(time, "EEEE hh:mm aaa");
  } catch (err) {
    console.log(err)
  }
  
}