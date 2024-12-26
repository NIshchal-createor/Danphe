import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Assets/images";
import Background from "../HeroSection/Background";
import Country from "../BodySection/Country";
import Services from "../BodySection/Services";
import Connect from "../BodySection/Connect";
import Map from "../BodySection/Map";
import Footer from "../Footer/Footer";
import ScrollToTop from "../../usable-components/ScrollToTop";

const Navbar = () => {
  const contact = useRef<HTMLDivElement>(null);
  const services = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);

  // Define menuItems after refs are initialized
  const menuItems = [
    { name: "HOME", ref: null },
    { name: "ABOUT", ref: about },
    { name: "SERVICES", ref: services },
    { name: "BLOGS", ref: null },
    { name: "CONTACT", ref: contact },
  ];

  const handleClick = (elmRef: React.RefObject<HTMLDivElement> | null) => {
    if (elmRef && elmRef.current) {
      window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
    }
  };

  const [prev, setPrev] = useState(true);
  const displayHandler = () => {
    setPrev(!prev);
  };

  return (
    <>
      <div className="w-full bg-white px-2 py-3">
        <div className="flex justify-between gap-3 max-w-[1366px] mx-auto">
          <Link to="/">
            <img
              className="w-[5rem] min-w-10"
              src={Logo}
              alt="Danphe International Logo"
            />
          </Link>
          <div className="flex flex-col w-full items-end justify-between">
            <div className="flex gap-3 text-primary font-bold flex-wrap justify-end">
              <p className="text-xs sm:text-md md:text-lg">
                <a href="mailto:danphe202x2@gmail.com">danphe2022@gmail.com</a>
              </p>
              <p className="text-xs sm:text-md md:text-lg">
                <a href="tel:9841661139">9841661139</a>
              </p>
            </div>
            <div className="md:flex justify-around text-black font-semibold text-lg w-full hidden">
              {menuItems.map((item) => (
                <span key={item.name} className="relative group">
                  <button
                    className="group-hover:text-gray-600"
                    onClick={() => handleClick(item.ref)}
                  >
                    {item.name}
                  </button>
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop />
      <Background />
      <div className="w-full bg-white">
        <div className="flex flex-col mx-auto">
          <Country />
          <div ref={services}>
            <Services />
          </div>
          <div ref={contact}>
            <Connect />
          </div>
          <Map />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Navbar;
