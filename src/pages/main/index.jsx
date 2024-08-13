import image1 from "../../assets/image/Elearning-Image1.png";
import image2 from "../../assets/image/Elearning-Image2.png";
import image3 from "../../assets/image/Elearning-Image3.png";

import Carousel from "../../components/carousel";

import useDataStores from "../../stores/dataStores";

const Main = () => {
  const { currentIndex, setIndex } = useDataStores();

  const contents = [
    {
      image: image1,
      h: "Online Learning",
      p: `Study by yourself, anytime and anywhere. Lots of learning, international
          curricullum, and easy to understand`,
    },
    {
      image: image2,
      h: "All in One App",
      p: `Everything you need is present in your device. From natural science to 
          sosial science, and even further`,
    },
    {
      image: image3,
      h: "Future Education",
      p: `Various learning modes make it easier for you to understand, easy to use, and more
          importantly fun`,
    },
  ];

  const goToSlide = (index) => {
    setIndex(index);
  };

  return (
    <div className="flex flex-col px-8 my-[50px] text-[#32449b]">
      <Carousel contents={contents} />
      <div className="flex justify-between ">
        <div className="flex justify-center h-[max-content] space-x-2 py-2 m-auto">
          {contents.map((content, index) => (
            <button
              key={content.h}
              onClick={() => goToSlide(index)}
              className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-all duration-300 transform ${
                index === currentIndex
                  ? "bg-[#3d5cff] scale-150"
                  : "bg-gray-400 scale-100"
              }`}
            />
          ))}
        </div>
        <button className="rounded-lg bg-[#3D5CFF] text-sm text-white font-medium msm:py-[10px] msm:px-[20px] py-[15px] px-[40px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Main;
