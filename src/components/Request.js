const API = {
  key: "fea8156ab6c3a3d6e364c8cbde587186",
};

const URL = {
  server: "https://api.openweathermap.org/data/2.5/weather",
  forecast: "https://api.openweathermap.org/data/2.5/forecast",
};

export async function getWeatherData(cityName) {
  const url = `${URL.forecast}?q=${cityName}&appid=${API.key}`;

  const response = await fetch(url);
  const obj = await response.json();
  console.log(obj);
}
