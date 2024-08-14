import { useEffect } from "react";
import { Link } from "react-router-dom";

import useDataStore from "../../stores/dataStores";

const Carousel = (props) => {
  const { currentIndex, setCurrentIndex } = useDataStore();

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
        <img
          className="h-[300px] md:h-[375px] mx-auto mb-[70px] ease-in-out"
          src={props.contents[currentIndex].image}
          alt="E-learning"
        />
      </div>
      <div className="md:flex md:flex-col md:justify-center">
        <h1 className="md:text-[50px] text-3xl font-extrabold text-center mb-[30px] md:text-left ">
          {props.contents[currentIndex].h}
        </h1>
        <p className="md:text-xl text-center mb-[70px] max-w-[450px] mx-auto md:text-left">
          {props.contents[currentIndex].p}
        </p>
        {window.screen.width >= 1024 ? (
          <Link
            to="/login"
            className="rounded-lg bg-[#3D5CFF] text-sm text-white font-medium msm:py-[10px] msm:px-[20px] py-[15px] px-[40px] md:w-[40%] md:text-center md:self-start"
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
