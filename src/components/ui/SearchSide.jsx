import React from "react";
import Input from "./utils/Input";
import { MdOutlineLocationOn } from "react-icons/md";

const SearchSide = () => {
  const LocationWrapper = ({ currentLocation }) => {
    return (
      <div className="flex items-center bg-gray-700 text-white w-52 h-14 rounded-lg">
        <div>
          <span className="text-3xl">
            <MdOutlineLocationOn />
          </span>
        </div>
        <div>
          <p className="text-sm">Current Location</p>
          <p className="text-1xl font-extrabold">{currentLocation}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-alpine-img bg-cover h-full w-2/3 rounded-3xl">
      <div className="h-full w-full bg-black opacity-80 rounded-3xl">
        <div className="flex justify-end p-4">
          <LocationWrapper currentLocation={"Caracas"} />
        </div>
        <div className="flex flex-col items-center justify-center h-4/6">
          <h1 className="text-white text-4xl capitalize font-semibold">
            The Only weather forecast you need
          </h1>
          <span className="h-2 w-36 bg-white my-5" />
          <Input />
        </div>
      </div>
    </div>
  );
};

export default SearchSide;
