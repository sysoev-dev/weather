<script setup lang="ts">
import WeatheReview from './components/WeatheReview.vue';
import WeatheDetails from './components/WeatherDetails.vue';
import { onMounted } from 'vue';
import { getWeatherData } from '@/api/weather-api';
import { storage } from "@/utils/storage";
import { useWeatherData } from '@/stores/weather-data';
const store = useWeatherData()

onMounted(async () => {
  const cityName = storage.getCurrentCity();
  const weatherData = await getWeatherData(cityName);
  store.data = weatherData;
})

</script>

<template>
  <header>
    <h1 class="title">Weather App</h1>
  </header>
  <main class="main">
    <div class="weather">
      <div class="weather__row">
        <WeatheReview />
        <WeatheDetails />
      </div>
      <div class="weather__row">
        s
      </div>
    </div>
  </main>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 24px;
  margin: 10px 0;
}

.weather {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  border: 2px solid var(--color-border);
  border-radius: 8px;
}

.weather__row {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1040px) {
  .weather__row {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
