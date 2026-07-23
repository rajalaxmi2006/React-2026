const API_KEY = "9efb19f1536e3563282234d4d6714ac5";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeatherByCity(city) {
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Invalid API key");
    }
    throw new Error("Something went wrong");
  }

  const data = await response.json();

  return {
    city: data.name,
    country: data.sys.country,
    temp: Math.round(data.main.temp),
    feelslike: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    wind: data.wind.speed,
    condition: data.weather[0].main,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
}
