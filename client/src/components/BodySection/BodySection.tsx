import React from "react";
import Country from "./Country";
import Services from "./Services";
import Connect from "./Connect";
import Map from "./Map";
import Background from "../HeroSection/Background";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const BodySection = () => {
  return (
    <>
      <Header />
      <Background />
      <div className="w-full bg-white">
        <div className="flex flex-col mx-auto">
          <Country />
          <Services />
          <Connect />
          <Map />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BodySection;
