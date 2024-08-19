import { useState, useEffect } from "react";

const Loading = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 500); // Delay for 1 second

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  
  return (
    show &&
    <div className={props.home ? 
        "flex justify-center h-screen"
        : 
        "bg-[#4f7ff0] md:bg-transparent flex justify-center h-screen"
    }
    >
        <div className={props.home?
            "mt-[25vh] h-max bg-[#4773d9] rounded-lg p-5"
            :
            "self-center bg-[#4773d9] rounded-lg p-5"
        }
        >
            <p className="bg-[#426bca] p-5 rounded-lg text-xl font-bold text-white">Loading...</p>
        </div>
    </div>
  )
};

export default Loading
