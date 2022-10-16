<script lang="ts">
  import Sunny from "./utils/Sunny.svelte";
  import PartlyCloudy from "./utils/PartlyCloudy.svelte";
  import Cloudy from "./utils/Cloudy.svelte";
  import Rainy from "./utils/Rainy.svelte";
  import Thundery from "./utils/Thundery.svelte";
  import { getWeather } from "./scripts/weather";
  import { getCity } from "./scripts/location";

  let cityInput = "Caracas";
  const receiveCity = async (city) => {
    let data = await getCity(city);
    return data;
  }

  const receiveWeather = async () => {
    let cityData = await receiveCity(cityInput);
    let data = await getWeather(cityData.lat, cityData.lon)
    const { feels_like, humidity, pressure, temp, temp_max, temp_min } = data.main;
    return data;
  }
</script>

<main>

</main>
