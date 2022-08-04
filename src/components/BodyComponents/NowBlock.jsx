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
      <div className="now__city-name">London</div>
      <div className="now__data-time">Sunday 07:09</div>
      <div className="now__degree">12 C</div>
    </div>
  );
}

function NowForecast() {
  return (
    <div className="now__forecast-items">
      <NowForecastItem />
    </div>
  );
}

function NowForecastItem() {
  return (
    <div className="now__forecast-item forecast-item">
      <div className="forecast-item__time">08:30</div>
      <div className="forecast-item__weather-icon"> <img  alt="weather-icon"/></div>
      <div className="forecast-item__degree">13 C</div>
    </div>
  );
}
