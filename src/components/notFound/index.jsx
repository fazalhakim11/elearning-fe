
const index = (props) => {
  return (
    <div className=" flex justify-center h-screen">
        <div className="mt-[25vh] h-max rounded-lg p-5">
            <p className="bg-[#ca4242] p-3 rounded-lg text-sm font-bold text-white">{props.name} is Not Available</p>
        </div>
    </div>
  )
};

export default index
