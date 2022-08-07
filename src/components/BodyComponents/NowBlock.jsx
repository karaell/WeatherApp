import rain from "/0 Projects/WeatherApp/src/img/weather-icons/rain.svg"

export function NowBlock() {
  return (
    <div className="body__now now">
      <NowInfo />
      <NowForecast />
    </div>
  );
}

function NowInfo() {
  return (
    <div className="now__info">
      <div className="now__info-city-name">London</div>
      <div className="now__info-data-time">Sunday 07:09</div>
      <div className="now__info-degree">12°C</div>
    </div>
  );
}

function NowForecast() {
  return (
    <div className="now__forecast-items-row">
      <NowForecastItem />
      <NowForecastItem />
      <NowForecastItem />
      <NowForecastItem />
    </div>
  );
}

function NowForecastItem() {
  return (
    <div className="now__forecast-item forecast-item">
      <div className="forecast-item__time">08:30</div>
      <div className="forecast-item__weather-icon"> <img src={rain} alt="weather-icon"/></div>
      <div className="forecast-item__degree">13 C</div>
    </div>
  );
}
