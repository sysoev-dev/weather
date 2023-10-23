export function roundValue(value: number) {
  return Math.round(value)
}

export function convertTime(utcTime: number) {
  const date = new Date(utcTime * 1000);

  let hours;
  let minutes;

  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}

export function convertIconPath(code: string) {
  const iconPath = `https://openweathermap.org/img/wn/${code}@2x.png`;
  return iconPath;
}