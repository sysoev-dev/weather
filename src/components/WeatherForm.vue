<script setup lang="ts">
import { ref } from 'vue';
import { getWeatherData } from '@/api/weather-api';
import { useWeatherData } from '@/stores/weather-data';
import { storage } from '@/utils/storage';
import IconSearch from '@/components/icons/IconSearch.vue';

const store = useWeatherData()

const inputText = ref('')

async function handleSubmitForm() {
  const cityName = inputText.value;
  storage.setCurrentCity(cityName);
  const weatherData = getWeatherData(cityName);
  store.data = await weatherData;
  inputText.value = '';
}
</script>

<template>
  <div>
    <form class="weather__form" action="#" method="get" @submit.prevent="handleSubmitForm">
      <input v-model="inputText" class="weather__form-input" type="search" name="search-input"
        placeholder="Введите город">
      <button class="weather__form-button" type="submit">
        <IconSearch />
        Найти
      </button>
    </form>
  </div>
</template>

<style scoped>
.weather__form {
  display: flex;
  gap: 5px;
  justify-content: space-between;
}

.weather__form-input {
  flex-grow: 1;
  padding: 7px;
  font-size: 16px;
  background-color: var(--vt-c-black);
  border: none;
  outline: none;
  color: var(--vt-c-white-mute);
}

.weather__form-button {
  font-size: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: opacity 0.3s;
}

.weather__form-button:hover {
  opacity: 0.7;
}
</style>