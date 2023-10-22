export function roundValue(value: number) {
  return Math.round(value)
}

export function convertTime(utcTime: number) {
  const date = new Date(utcTime * 1000);
  return `${date.getHours()}:${date.getMinutes()}`;
}

export function convertIconPath(code: string) {
  const iconPath = `https://openweathermap.org/img/wn/${code}@2x.png`;
  return iconPath;
}