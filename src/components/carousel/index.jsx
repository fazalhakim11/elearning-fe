import { useEffect } from "react";
import useDataStore from "../../stores/dataStores"
 
const Carousel = (props) => {
  const {currentIndex, setCurrentIndex} = useDataStore()

  const nextSlide = () => {
    setCurrentIndex(props.contents.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <>
      <img
        className="h-[300px] mx-auto mb-[70px] ease-in-out"
        src={props.contents[currentIndex].image}
        alt="E-learning"
      />
      <h1 className="text-3xl font-extrabold text-center mb-[30px]">
        {props.contents[currentIndex].h}
      </h1>
      <p className=" text-center mb-[70px]">{props.contents[currentIndex].p}</p>
    </>
  );
};

export default Carousel;
