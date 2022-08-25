import { useSelector } from "react-redux";
import { convertDateTime } from "../../ConvertDateTime";
import { convertToFahrenheit } from "../../ConvertDegree";

const URL = {
  ICON_WEATHER: "https://openweathermap.org/img/wn/",
};

export function NowBlock() {
  const weatherDataObj = useSelector((state) => state.weatherDataNowReducer.weatherDataNow);

  let iconWeather;
  
  try {
    iconWeather = `${URL.ICON_WEATHER}${weatherDataObj.weather[0].icon}@4x.png` ;
  } catch (err) {
    console.log(err)
  }

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
  const degreeUnit = useSelector((state) => state.degreeUnitReducer.degreeUnit);

  const degree = degreeUnit === "F" ? convertToFahrenheit(weatherData.main?.temp) : weatherData.main?.temp;

  return (
    <div className="now__info">
      <div className="now__info-city-name">{weatherData.name}</div>
      <div className="now__info-data-time">
        {convertDateTime(weatherData.dt)}
      </div>
      <div className="now__info-degree">{checkDegree(Math.round(degree))}</div>
    </div>
  );
}

function NowDetails(props) {
  const { weatherData } = props;
  const degreeUnit = useSelector((state) => state.degreeUnitReducer.degreeUnit);

  // TO_DO: придумать функцию для массовой проверки на фаренгейт

  const feelsLike = degreeUnit === "F" ? convertToFahrenheit(weatherData.main?.feels_like) : weatherData.main?.feels_like;
  const maxTemp = degreeUnit === "F" ? convertToFahrenheit(weatherData.main?.temp_max) : weatherData.main?.temp_max;
  const minTemp = degreeUnit === "F" ? convertToFahrenheit(weatherData.main?.temp_min) : weatherData.main?.temp_min;

  return (
    <div className="now__details-items details-items">
      <NowDetailItem
        title="Feels like"
        subtitle={checkDegree(Math.round(feelsLike))}
      />
      <NowDetailItem title="Max" subtitle={checkDegree(Math.round(maxTemp))} />
      <NowDetailItem title="Min" subtitle={checkDegree(Math.round(minTemp))} />
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

function checkDegree (degree) {
  return isNaN(degree) === true ? "" : degree + "°C";
}
