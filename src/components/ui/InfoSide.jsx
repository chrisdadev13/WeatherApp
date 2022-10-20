import { max } from "moment";
import React from "react";
import Card from "./utils/Card";

const InfoSide = ({
  temperature,
  main,
  description,
  feelLike,
  humidity,
  minTemp,
  maxTemp,
  pressure,
  speed,
}) => {
  return (
    <div className="bg-white rounded-br-2xl rounded-tr-2xl h-full w-1/3 py-20 px-8">
      <h1 className="text-5xl font-bold">Today</h1>
      <div className="flex justify-center">
        <Card
          temperature={temperature}
          description={description}
          main={main}
          feelLike={feelLike}
          humidity={humidity}
          minTemp={minTemp}
          maxTemp={maxTemp}
          pressure={pressure}
          speed={speed}
        />
      </div>
    </div>
  );
};

export default InfoSide;
