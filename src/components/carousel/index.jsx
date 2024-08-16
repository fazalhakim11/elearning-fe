import { useEffect } from "react";
import { Link } from "react-router-dom";
import "animate.css";

import useDataStore from "../../stores/dataStores";

const Carousel = (props) => {
  const { currentIndex, setCurrentIndex, contents } = useDataStore();

  const nextSlide = () => {
    setCurrentIndex(props.contents.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="md:flex md:flex-row-reverse md:justify-between">
      <div className="md:min-w-[500px] ">
        {contents.map((content, index) => (
          <img
            key={content.h}
            className={`animate__animated animate__fadeInRight h-[300px] md:h-[375px] mx-auto mb-[70px] ${
              index === currentIndex ? "" : "hidden"
            }`}
            src={content.image}
            alt="E-learning"
          />
        ))}
      </div>
      <div className="md:flex md:flex-col md:justify-center">
        {contents.map((content, i) => (
          <>
            <h1 key={content.h} className={`animate__animated animate__fadeInLeft md:text-[50px] text-3xl font-extrabold text-center mb-[30px] md:text-left ${i === currentIndex ? "" : "hidden"}`}>
              {content.h}
            </h1>
            <p key={content.p} className={`animate__animated animate__fadeInLeft md:text-xl text-center mb-[70px] max-w-[450px] mx-auto md:text-left ${i === currentIndex ? "" : "hidden"}`}>
              {content.p}
            </p>
          </>
        ))}
        {window.screen.width >= 1024 ? (
          <Link
            to="/login"
            className="animate__animated animate__fadeInLeft rounded-lg bg-[#4f7ff0] text-sm text-white font-medium msm:py-[10px] msm:px-[20px] py-[15px] px-[40px] md:w-[40%] md:text-center md:self-start"
          >
            Get Started
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Carousel;
