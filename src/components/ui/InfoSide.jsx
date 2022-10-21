import React from "react";
import Card from "./utils/Card";

const InfoSide = ({
  currentData,
  tomorrowData
}) => {
  return (
    <div className="bg-white rounded-br-2xl rounded-tr-2xl h-full w-1/3 py-20 px-8">
      <h1 className="text-5xl font-bold">Today</h1>
      <div className="flex justify-center">
        <Card
          temperature={(currentData.temp - 273).toFixed()}
          description={currentData.description}
          main={currentData.main}
          feelLike={(currentData.feels_like - 273).toFixed()}
          humidity={currentData.humidity}
          minTemp={(currentData.temp_min - 273).toFixed()}
          maxTemp={(currentData.temp_max - 273).toFixed()}
          pressure={currentData.pressure}
          speed={currentData.speed}
          today={true}
        />
      </div>
   </div>
  );
};

export default InfoSide;
