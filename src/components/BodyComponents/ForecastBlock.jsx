/* export function ForecastBlock() {
    return (
        <div className="body__forecast forecast grid">
            <ForecastTitleRow />
            <ForecastInfo />
        </div>
    )
}

function ForecastTitleRow() {
    return (
      <ul className="forecast__title-row title-row">
        <li className="title-row__item">date</li>
        <li className="title-row__item">time</li>
        <li className="title-row__item">chance of rain</li>
        <li className="title-row__item">humidity</li>
        <li className="title-row__item">wind</li>
        <li className="title-row__item">temperature</li>
      </ul>
    );
}

function ForecastInfo() {
    return (
      <div className="forecast__info">
        <ForecastInfoItem />
        <ForecastInfoItem />
        <ForecastInfoItem />
      </div>
    );
}

function ForecastInfoItem() {
    return (
      <ul className="forecast__info-item">
        <li>17 May</li>
        <li>07:09</li>
        <li>9%</li>
        <li>57%</li>
        <li>10 km\h</li>
        <li>19</li>
      </ul>
    );
} */

import { useSelector } from "react-redux";

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
  const weatherForecast = useSelector(
    (state) => state.weatherForecastReducer.weatherForecast
  );

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

  return (
    <ul className="forecast__info-item grid">
      <li>{date}</li>
      <li>{time}</li>
      <li>{feels_like}</li>
      <li>{humidity}</li>
      <li>{wind}</li>
      <li>{temperature}</li>
    </ul>
  );
}
