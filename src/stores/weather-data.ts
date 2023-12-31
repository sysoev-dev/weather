import { defineStore } from "pinia";
import { ref } from "vue";
import type { Data } from "@/types/types";

export const useWeatherData = defineStore('weatherData', () => {
  const data = ref<Data>({
    city: 'Moscow',
    country: 'RU',
    descr: 'Cloud',
    temp: 27,
    feelsTemp: 35,
    humidity: 65,
    wind: 3,
    pressure: 787,
    sunrise: '07:00',
    sunset: '22:00',
    icon: 'https://openweathermap.org/img/wn/04d@2x.png',
    date: '00:00'
  })

  return { data }
})
