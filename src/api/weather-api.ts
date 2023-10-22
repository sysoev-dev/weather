const API_KEY = '59fecd6bd3599df2ee4a3f003ce85f4a';
const SERVER_URL = 'http://api.openweathermap.org';
const WEATHER_LINK = `${SERVER_URL}/data/2.5/weather`
import { roundValue, convertTime, convertIconPath } from "@/utils/utils";
import type { Data } from "@/types/types";


export async function getWeatherData(cityName: string) {
  const url = `${WEATHER_LINK}?q=${cityName}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json();
      const weatherData: Data = {
        city: data.name,
        country: data.sys.country,
        descr: data.weather[0].description,
        temp: roundValue(data.main.temp),
        wind: data.wind.speed,
        pressure: data.main.pressure,
        sunrise: convertTime(data.sys.sunrise),
        sunset: convertTime(data.sys.sunset),
        icon: convertIconPath(data.weather[0].icon),
        date: convertTime(data.dt)
      }

      return weatherData
    }
  } catch (error) {
    console.log(error);
  }
}