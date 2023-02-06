const API = {
  key: "fea8156ab6c3a3d6e364c8cbde587186",
};

const URL = {
  now: "https://api.openweathermap.org/data/2.5/weather",
  forecast: "https://api.openweathermap.org/data/2.5/forecast",
};

export async function getWeatherDataNow(cityName) {
  const url = `${URL.now}?q=${cityName}&appid=${API.key}&units=metric`;

  const responseWeatherNow = await fetch(url);
  const objWeatherNow = await responseWeatherNow.json();

  return objWeatherNow;
}

export async function getWeatherDataForecast(cityName) {
  const url = `${URL.forecast}?q=${cityName}&appid=${API.key}&units=metric`;

  const responseWeatherForecast = await fetch(url);
  const objWearherForecast = await responseWeatherForecast.json();

  return objWearherForecast;
}