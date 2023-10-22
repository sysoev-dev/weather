<script setup lang="ts">
import IconWind from '@/components/icons/IconWind.vue';
import IconPressure from '@/components/icons/IconPressure.vue';
import IconSunrise from '@/components/icons/IconSunrise.vue';

import { useWeatherData } from '@/stores/weather-data';
const store = useWeatherData();


</script>

<template>
  <div class="weather__details details">
    <h2 class="details__title">
      Today`s highlights
    </h2>
    <ul class="details__list">
      <li class="details__item">
        <h3 class="details__item-title">
          Wind
        </h3>
        <IconWind />
        <p>{{ store.data.wind }} <br> m/s</p>
      </li>
      <li class="details__item">
        <h3 class="details__item-title">
          Pressure
        </h3>
        <IconPressure />
        <p>{{ store.data.pressure }} <br> hPa</p>
      </li>
      <li class="details__item">
        <h3 class="details__item-title">
          Sunrise and sunset
        </h3>
        <IconSunrise />
        <p>
          sunrise: {{ store.data.sunrise }} <br>
          sunset: {{ store.data.sunset }}
        </p>
      </li>
    </ul>

    <ul class="details__list">
      <li class="details__item">
        <h3 class="details__item-title">
          1
        </h3>
      </li>
      <li class="details__item">
        <h3 class="details__item-title">
          2
        </h3>
      </li>
      <li class="details__item">
        <h3 class="details__item-title">
          3
        </h3>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.details {
  width: 70%;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: var(--vt-c-dark);
}

.details__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 15px;
}

.details__item {
  width: 33%;
  padding: 10px 10px;
  text-align: center;
  border-radius: 8px;
  font-size: 14px;
  background-color: var(--vt-c-dark-mute);
}
</style>