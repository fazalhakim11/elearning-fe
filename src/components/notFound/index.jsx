import img from "../../assets/image/Grade Image (2).png";

const index = (props) => {
  return (
    <div className="h-max">
      <div className="rounded-lg p-5 flex flex-col justify-center">
        <img src={img} alt="Not Found" className="mdd:max-w-[350px] mx-auto" />
        <div className="mdd:self-center">
          <h1 className="text-center font-bold text-lg text-[#ca4242]">
            Oops..
          </h1>
          <p className="text-center text-sm font-bold text-[#ca4242]">
            {props.name} is Not Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
