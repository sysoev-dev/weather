export const storage = {
  defaultCity: 'Moscow',

  setCurrentCity(cityName: string) {
    localStorage.setItem('currentCity', cityName);
  },

  getCurrentCity() {
    const cityName = localStorage.getItem('currentCity') || this.defaultCity;
    return cityName;
  }
}