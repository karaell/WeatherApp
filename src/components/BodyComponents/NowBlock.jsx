import { useSelector } from "react-redux";
import rain from "/0 Projects/WeatherApp/src/img/weather-icons/rain.svg";

export function NowBlock() {
  const weatherDataObj = useSelector(state => state.weatherDataNowReducer.weatherDataNow);

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
      <div className="now__info-data-time">{weatherData.dt}</div>
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
