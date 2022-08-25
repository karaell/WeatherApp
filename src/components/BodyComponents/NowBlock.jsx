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

  const degree = Math.round(weatherData.main?.temp);

  return (
    <div className="now__info">
      <div className="now__info-city-name">{weatherData.name}</div>
      <div className="now__info-data-time">
        {convertDateTime(weatherData.dt)}
      </div>
      <div className="now__info-degree">
        {convertDegree(Math.round(weatherData.main?.temp))}
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
        subtitle={convertDegree(Math.round(weatherData.main?.feels_like))}
      />
      <NowDetailItem
        title="Max"
        subtitle={convertDegree(Math.round(weatherData.main?.temp_max))}
      />
      <NowDetailItem
        title="Min"
        subtitle={convertDegree(Math.round(weatherData.main?.temp_min))}
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

function convertDegree (degree) {
  return isNaN(degree) === true ? "" : degree + "°C";
}