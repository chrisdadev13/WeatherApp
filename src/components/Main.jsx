import React from "react";
import SearchSide from "./ui/SearchSide";
import InfoSide from "./ui/InfoSide";

const Main = () => {
  return (
    <div className="flex items-center justify-center h-screen p-12">
      <SearchSide />
      <InfoSide />
    </div>
  );
};

export default Main;
