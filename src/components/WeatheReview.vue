<script setup lang="ts">
import WeatherForm from './WeatherForm.vue';
import { useWeatherData } from '@/stores/weather-data';

const store = useWeatherData();
</script>

<template>
  <div class="weather__review">
    <WeatherForm />
    <img class="weather__review-icon" :src="store.data.icon">
    <p class="weather__review-temp">
      {{ store.data.temp }} °C
    </p>
    <p class="weather__review-desc">
      {{ store.data.descr }}
    </p>
    <p class="weather__review-city">
      {{ store.data.city }}
    </p>
    <p class="weather__review-date">
      Updated: {{ store.data.date }}
    </p>
  </div>
</template>

<style scoped>
.weather__review {
  width: 30%;
  margin-right: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--vt-c-dark);
}

.weather__review-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: block;
}

.weather__review-temp {
  font-size: 32px;
}

.weather__review-city {
  font-size: 24px;
}

.weather__review-desc,
.weather__review-date {
  font-size: 14px;
  margin-bottom: 10px;
}

@media (max-width: 1040px) {
  .weather__review {
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>