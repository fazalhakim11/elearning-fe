import image1 from "../../assets/image/Elearning-Image1.png";

const Main = () => {
  return (
    <div className="flex flex-col px-8 my-[50px] text-[#32449b]">
      <img
        className="w-[300px] mx-auto mb-[70px]"
        src={image1}
        alt="E-learning"
      />
      <h1 className="text-3xl font-extrabold text-center mb-[30px]">
        Online Learning
      </h1>
      <p className=" text-center mb-[70px]">
        Study by yourself, anytime and anywhere. Lots of learning, international
        curricullum, and easy to understand
      </p>
      <div className="flex justify-between ">
        <div className="mx-auto">page</div>
        <button className="rounded-lg bg-[#3D5CFF] text-sm text-white font-medium msm:py-[10px] msm:px-[20px] py-[15px] px-[40px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Main;
