import { useSelector } from "react-redux";
import { convertToFahrenheit } from "../../ConvertDegree";

const forecastCategoryNames = [
  "date",
  "time",
  "feels like",
  "humidity",
  "wind",
  "temperature",
];


export function ForecastBlock() {

  return (
    <div className="body__forecast forecast">
      <ForecastTable />
    </div>
  );
}

function ForecastTable() {
  const weatherForecast = useSelector((state) => state.weatherForecastReducer.weatherForecast);

  return (
    <div className="forecast__table">
      <ForecastTableHeader />
      {weatherForecast.map((res) => (
        <ForecastTableRow
          date={res.date}
          time={res.time}
          feels_like={res.feels_like}
          humidity={res.humidity}
          wind={res.wind}
          temperature={res.temperature}
        />
      ))}
    </div>
  );
}

function ForecastTableHeader() {
  return (
    <ul className="forecast__title-row title-row grid">
      {forecastCategoryNames.map((res) => (
        <li className="title-row__item">{res}</li>
      ))}
    </ul>
  );
}

function ForecastTableRow(props) {
  const { date, time, feels_like, humidity, wind, temperature } = props;

  const tempScale = useSelector((state) => state.tempScaleReducer.tempScale);

  const feelsLike = tempScale === "F" ? convertToFahrenheit(feels_like) : feels_like;
  const temp = tempScale === "F" ? convertToFahrenheit(temperature) : temperature;


  return (
    <ul className="forecast__info-item grid">
      <li>{date}</li>
      <li>{time}</li>
      <li>{Math.round(feelsLike) + "°C"}</li>
      <li>{humidity + " %"}</li>
      <li>{wind + " k/h"}</li>
      <li>{Math.round(temp) + "°C"}</li>
    </ul>
  );
}
