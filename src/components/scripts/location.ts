const API_KEY = "d4917a86ad00c8f97c306ecfa4544840";

export const getCity = async (city: string) => {
  return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`)
  .then(async (response) => {
      let data = response.json();
      let city = await data;
      return city[0];
    });
}
