import { Link } from "react-router-dom";

import Carousel from "../../components/carousel";
import useDataStores from "../../stores/dataStores";

const Main = () => {
  const { currentIndex, setIndex, contents } = useDataStores();

  const goToSlide = (index) => {
    setIndex(index);
  };

  return window.screen.width >= 1024 ? (
    <div className="flex flex-col px-8 my-[50px] mb-0 text-[#32449b]">
      <Carousel contents={contents} />
      <div className="flex justify-between mdd:justify-center mdd:gap-[50px]">
        <div className="flex justify-between h-[max-content] space-x-2 py-2 m-auto mdd:m-0 mdd:my-auto">
          {contents.map((content, index) => (
            <button
              key={content.h}
              onClick={() => goToSlide(index)}
              className={`w-[12px] h-[12px] rounded-full cursor-pointer transition-all duration-300 transform ${
                index === currentIndex
                  ? "bg-[#3d5cff] scale-150"
                  : "bg-gray-400 scale-100"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col px-8 my-[50px] text-[#32449b]">
      <Carousel contents={contents} />
      <div className="flex justify-between mdd:justify-center mdd:gap-[50px]">
        <div className="flex justify-between h-[max-content] space-x-2 py-2 m-auto mdd:m-0 mdd:my-auto">
          {contents.map((content, index) => (
            <button
              key={content.h}
              onClick={() => goToSlide(index)}
              className={`w-[12px] h-[12px] rounded-full cursor-pointer transition-all duration-300 transform ${
                index === currentIndex
                  ? "bg-[#3d5cff] scale-150"
                  : "bg-gray-400 scale-100"
              }`}
            />
          ))}
        </div>
        <Link
          to="/login"
          className="rounded-lg bg-[#3D5CFF] text-sm text-white font-medium msm:py-[10px] msm:px-[20px] py-[15px] px-[40px]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Main;
