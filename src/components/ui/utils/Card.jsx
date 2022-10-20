import React from "react";
import clearSky from "../../../assets/images/day-icons/clear-sky.png";
import fewClouds from "../../../assets/images/day-icons/few-clouds.png";
import scatteredClouds from "../../../assets/images/day-icons/scattered-clouds.png";
import brokenClouds from "../../../assets/images/day-icons/broken-clouds.png";
import rain from "../../../assets/images/day-icons/rain.png";
import showerRain from "../../../assets/images/day-icons/shower-rain.png";
import thunderstorm from "../../../assets/images/day-icons/thunderstorm.png";
import Moment from "moment";

const weatherIcon = (weatherDescription) => {
  const options = {
    "clear sky": clearSky,
    "few clouds": fewClouds,
    "scattered clouds": scatteredClouds,
    "broken clouds": brokenClouds,
    "overcast clouds": brokenClouds,
    rain: rain,
    "shower rain": showerRain,
    thunderstorm: thunderstorm,
    snow: "http://openweathermap.org/img/wn/13d@2x.png",
    mist: "http://openweathermap.org/img/wn/50d@2x.png",
  };
  return options[weatherDescription] ?? "Weather not found";
};

const Card = ({
  temperature,
  main,
  description,
  feelLike,
  humidity,
  minTemp,
  maxTemp,
  pressure,
  speed,
  today,
}) => {
  const currentDate = () => {
    if (today) {
      const formatDate = Moment().format("MMM Do YYYY");
      return formatDate;
    } else {
      const formatDate = Moment().add(1, "day").format("MMM Do YYYY");
      return formatDate;
    }
  };
  return (
    <div className="shadow-2xl w-11/12 h-64 rounded-2xl grid grid-cols-3 mt-6">
      <div className="self-center justify-self-center ml-12">
        <h1 className="text-3xl font-bold">{temperature}°C</h1>
        <div className="flex items-center">
          <h1 className="text-3xl">{main}</h1>
          <img src={weatherIcon(description)} className="w-14 h-14" />
        </div>
        <h1>{currentDate()}</h1>
      </div>
      <span className="h-5/6 w-1 self-center justify-self-center bg-gray-300" />
      <div className="self-center justify-self-center text-gray-600 mr-12">
        <p>
          Max Temp: <strong>{maxTemp}°</strong>
        </p>
        <p>
          Min Temp: <strong>{minTemp}°</strong>
        </p>
        <p>
          Feel like: <strong>{feelLike}°</strong>
        </p>
        <p>
          humidity: <strong>{humidity}%</strong>
        </p>
        <p>
          Pressure: <strong>{pressure}</strong>
        </p>
        <p>
          Speed: <strong>{speed}km</strong>
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Card;
