import image1 from "../../assets/image/Elearning-Image1.png";
import image2 from "../../assets/image/Elearning-Image2.png";
import image3 from "../../assets/image/Elearning-Image3.png";

import Carousel from "../../components/carousel";

const Main = () => {
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

  return (
    <div className="flex flex-col px-8 my-[50px] text-[#32449b]">
      <Carousel contents={contents}/>
      <div className="flex justify-between ">
        <div>...</div>
        <button className="rounded-lg bg-[#3D5CFF] text-sm text-white font-medium msm:py-[10px] msm:px-[20px] py-[15px] px-[40px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Main;
