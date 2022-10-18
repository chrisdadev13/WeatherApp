import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BiTargetLock } from "react-icons/bi";

const Input = ({ name, value, onChange }) => {
  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        placeholder="Enter location"
        className="bg-gray-600 text-white w-96 h-10 p-4 rounded-lg placeholder:text-white"
        name={name}
        value={value}
        onChange={onChange}
      />
      <p className="text-white text-2xl absolute ml-72">
        <IoIosSearch />
      </p>
      <p className="text-white text-2xl ml-4">
        <BiTargetLock />
      </p>
    </div>
  );
};

export default Input;
