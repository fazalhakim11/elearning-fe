
const index = (props) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-4 relative">
        <div 
            className="bg-blue-600 h-4 rounded-full transition-width duration-500" 
            style={{ width: `${props.progress}%` }}
        >
        </div>
        <p 
            className={`${props.progress > 57 ? "text-[#ededed]" : ""}
                text-xs text-center absolute inset-x-0 bottom-0 top-[1px]`}
        >
            {props.progress}%
        </p>
    </div>
  )
};

export default index
