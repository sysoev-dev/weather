<script setup lang="ts">
import WeatheReview from './components/WeatheReview.vue';
import WeatheDetails from './components/WeatherDetails.vue';

</script>

<template>
  <header>
    <h1>Weather App</h1>
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
.weather {
  width: 1000px;
  margin: 0 auto;
  padding: 15px;
  background-color: var(--vt-c-black);
  border: 2px solid var(--color-border);
  border-radius: 8px;
}

.weather__row {
  display: flex;
  justify-content: space-between;
}
</style>
