const API_KEY = "d4917a86ad00c8f97c306ecfa4544840";

export const getWeather = async (lat: string, lon: string) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(async (response) => {
      let data = response.json();
      let weather = await data;
      return weather;
  });
}
