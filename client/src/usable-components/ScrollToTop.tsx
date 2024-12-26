import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let hideValue = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > hideValue) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={goTop}
          className="fixed bottom-10 right-10 z-20 bg-black h-8 w-8 rounded-full overflow-hidden flex justify-center items-center cursor-pointer"
        >
          <button id="scrollToTop" className="text-white">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
