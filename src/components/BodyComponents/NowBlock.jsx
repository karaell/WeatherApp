import { useSelector } from "react-redux";
import { convertDateTime } from "../../ConvertDateTime";

const URL = {
  ICON_WEATHER: "https://openweathermap.org/img/wn/",
};

export function NowBlock() {
  const weatherDataObj = useSelector(
    (state) => state.weatherDataNowReducer.weatherDataNow
  );

  let iconWeather;
  
  try {
    iconWeather = `${URL.ICON_WEATHER}${weatherDataObj.weather[0].icon}@4x.png` ;
  } catch (err) {
    console.log(err)
  }
  // const iconWeather = `${URL.ICON_WEATHER}${weatherDataObj.weather[0].icon}@4x.png` ;

  return (
    <div className="body__now now">
      <NowInfo weatherData={weatherDataObj} />
      <div className="now__weather-icon">
        <img src={iconWeather} alt="weather-icon" />
      </div>
      <NowDetails weatherData={weatherDataObj} />
    </div>
  );
}

function NowInfo(props) {
  const { weatherData } = props;

  return (
    <div className="now__info">
      <div className="now__info-city-name">{weatherData.name}</div>
      <div className="now__info-data-time">{convertDateTime(weatherData.dt)}</div>
      <div className="now__info-degree">
        {Math.round(weatherData.main?.temp)}°C
      </div>
    </div>
  );
}

function NowDetails(props) {
  const { weatherData } = props;

  return (
    <div className="now__details-items details-items">
      <NowDetailItem
        title="Feels like"
        subtitle={Math.round(weatherData.main?.feels_like) + "°C"}
      />
      <NowDetailItem
        title="Max"
        subtitle={Math.round(weatherData.main?.temp_max) + "°C"}
      />
      <NowDetailItem
        title="Min"
        subtitle={Math.round(weatherData.main?.temp_min) + "°C"}
      />
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