import React from "react";
import HomePagebanner from "./../../../components/HomePagebanner";
import { AppleCardsDemo } from "./../../../components/Card";

function HomePage() {
  return (
    <div className="w-[80vw] mx-auto px-5 py-5">
      <HomePagebanner></HomePagebanner>
      <div className="flex">
        <AppleCardsDemo></AppleCardsDemo>
      </div>
    </div>
  );
}

export default HomePage;
