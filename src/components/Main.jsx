import React, { useState, useEffect } from "react";
import SearchSide from "./ui/SearchSide";
import InfoSide from "./ui/InfoSide";

const Main = () => {
  const API_KEY = "d4917a86ad00c8f97c306ecfa4544840";

  const getCityData = async (cityName) => {
    return fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`
    ).then(async (response) => {
      let cityData = await response.json();
      return cityData[0];
    });
  };

  const getWeather = async (lat, lon) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    ).then(async (response) => {
      let weatherData = await response.json();
      return weatherData;
    });
  };

  let [cityName, setCityName] = useState();
  let [fullData, setFullData] = useState({});

  const handleCityName = (event) => {
    setCityName(event.target.value);
  };

  const handleWeatherData = async () => {
    let city = await getCityData(cityName);
    return getWeather(city.lat, city.lon);
  };

  const createFullData = async () => {
    let data = await handleWeatherData();
    let city = data.name;
    let { country } = data.sys;
    let { feels_like, humidity, pressure, temp, temp_max, temp_min } =
      data.main;
    let { description, main } = data.weather[0];
    let speed = data.wind.speed;

    setFullData({
      city,
      country,
      feels_like,
      humidity,
      pressure,
      temp,
      temp_max,
      temp_min,
      description,
      main,
      speed,
    });
  };

  return (
    <div className="flex flex-col xl:flex-row bg-gray-900 items-center justify-center h-screen p-12">
      <SearchSide
        handleChange={handleCityName}
        handleClick={createFullData}
        location={fullData.city}
      />
      <InfoSide
        temperature={(fullData.temp - 273).toFixed()}
        description={fullData.description}
        main={fullData.main}
        feelLike={(fullData.feels_like - 273).toFixed()}
        humidity={fullData.humidity}
        minTemp={(fullData.temp_min - 273).toFixed()}
        maxTemp={(fullData.temp_max - 273).toFixed()}
        speed={fullData.speed}
        pressure={fullData.pressure}
      />
    </div>
  );
};

export default Main;
