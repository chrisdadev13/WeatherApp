import React, { useState } from "react";
import SearchSide from "./ui/SearchSide";
import InfoSide from "./ui/InfoSide";

const Main = () => {
  const API_KEY = "d4917a86ad00c8f97c306ecfa4544840";

  const getCityData = async (cityName) => {
    return fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`
    ).then(async (response) => {
      let data = await response.json();
      return data[0];
    });
  };

  const getCityWeather = async (lat, lon) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    ).then(async (response) => {
      let data = await response.json();
      return data;
    });
  };

  const [currentLocation, setLocation] = useState("");

  const inputLocation = (event) => {
    setLocation(event.target.value);
  };

  getCityData("Caracas");

  return (
    <div className="flex bg-gray-900 items-center justify-center h-screen p-12">
      <SearchSide handleChange={inputLocation} />
      <InfoSide />
    </div>
  );
};

export default Main;
