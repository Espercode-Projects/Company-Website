"use client";


import React from "react";
import Hero, { RunningText } from "./Hero";
import Service from "./Service";
import WeAre from "./WeAre";
import BorderSeparator from "./BorderSeparator";
import WhoWeAre from "./Creativity";
import SecondRunningText from "./SecondRunningText";
import Footer from "./Footer";

function MainHome() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative flex flex-col">
        <Hero />

        <div className="relative ">
          <BorderSeparator />
        </div>

        <Service />

        <div className="relative">
          <SecondRunningText />
        </div>
        <WhoWeAre />
      </div>

      <WeAre />
      <Footer />
    </div>
  );
}

export default MainHome;
