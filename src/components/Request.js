const API = {
  key: "fea8156ab6c3a3d6e364c8cbde587186",
};

const URL = {
  now: "https://api.openweathermap.org/data/2.5/weather",
  forecast: "https://api.openweathermap.org/data/2.5/forecast",
};

export async function getWeatherDataNow(cityName) {
  const url = `${URL.now}?q=${cityName}&appid=${API.key}&units=metric`;

  const responseWeatherDataNow = await fetch(url);
  const objWeatherDataNow = await responseWeatherDataNow.json();

  return objWeatherDataNow;
  // console.log(objWeatherDataNow);
}
