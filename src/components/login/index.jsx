import {useNavigate} from "react-router-dom"
const index = (props) => {
    const navigate = useNavigate()
  return (
    props.login?
        <div className="flex flex-col content-center mt-16">
          <form className="flex flex-col self-center">
            <h1 className="mb-20 text-4xl font-extrabold">Log In</h1>
            <label htmlFor="email" className="text-[#858897]">Email</label>
            <input type="email" name="email" id="email" className="border border-slate-900 rounded-lg px-3 h-8 mb-6"/>
            <label htmlFor="password" className="text-[#858897]">Password</label>
            <input type="password" name="password" id="password" className=" border border-slate-900 rounded-lg px-3 h-8 mb-6"/>
            <button type="submit" className="rounded-xl mb-4 mt-4 bg-[#3D5CFF] text-white py-3">Log In</button>
          </form>
            <p className="text-[#858897] self-center">Don't have an account? <button onClick={()=>{navigate("/signup")}} className="text-[#3D5CFF]">Sign Up</button></p>
        </div>
    :
        <div className="flex flex-col content-center mt-16">
          <form className="flex flex-col self-center">
            <h1 className="mb-10 text-4xl font-extrabold">Sign Up</h1>
            <label htmlFor="username" className="text-[#858897]">Username</label>
            <input type="username" name="username" id="username" className="border border-slate-900 rounded-lg px-3 h-8 mb-6"/>
            <label htmlFor="email" className="text-[#858897]">Email</label>
            <input type="email" name="email" id="email" className="border border-slate-900 rounded-lg px-3 h-8 mb-6"/>
            <label htmlFor="password" className="text-[#858897]">Password</label>
            <input type="password" name="password" id="password" className=" border border-slate-900 rounded-lg px-3 h-8 mb-6"/>
            <button type="submit" className="rounded-xl mb-4 mt-4 bg-[#3D5CFF] text-white py-3">Sign Up</button>
          </form>
            <p className="text-[#858897] self-center">Already have an account? <button onClick={()=>{navigate("/")}} className="text-[#3D5CFF]">Log In</button></p>
        </div>
  )
};

export default index
