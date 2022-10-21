import React, { useState } from "react";
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
  let [currentData, setCurrentData] = useState({
    temperature: "",
    description: "",
    main: "",
    feels_like: "",
    temp_max: "",
    temp_min: "",
    pressure: "",
    speed: "",
    humidity: "",
  });

  const handleCityName = (event) => {
    setCityName(event.target.value);
  };

  const handleWeatherData = async () => {
    let city = await getCityData(cityName);
    return getWeather(city.lat, city.lon);
  };

  const createCurrentData = async () => {
    let current = await handleWeatherData();
    let city = current.name;
    let { country } = current.sys;
    let { feels_like, humidity, pressure, temp, temp_max, temp_min } =
      current.main;
    let { description, main } = current.weather[0];
    let speed = current.wind.speed;

    setCurrentData({
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

  const createData = async () => {
    createCurrentData();
  };

  const createDataEnter = async (event) => {
    if (event.keyCode === 13) {
      createCurrentData();
    }
  };

  return (
    <div className="flex flex-col xl:flex-row bg-gray-900 items-center justify-center h-screen p-12">
      <SearchSide
        handleChange={handleCityName}
        handleKeyDown={createDataEnter}
        handleClick={createData}
        location={currentData.city}
      />
      <InfoSide currentData={currentData} />
    </div>
  );
};

export default Main;
