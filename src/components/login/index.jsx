import {useNavigate} from "react-router-dom"

import {useLogin} from "../../hooks/useLogin"

const index = (props) => {
    const navigate = useNavigate()
    const [email, setEmail, password, setPassword, error, setError, handleLogin] = useLogin()

  return (
    props.login?
        <div className="flex flex-col content-center mt-12">
          <form onSubmit={handleLogin} className="flex flex-col self-center">
            <h1 className="mb-20 text-4xl font-extrabold">Log In</h1>
            <label htmlFor="email" className="text-[#858897]">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className={error === 'Email is not registered'? 
                "border border-slate-900 rounded-lg px-3 h-8" 
                : 
                "border border-slate-900 rounded-lg px-3 h-8 mb-6"}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {error === 'Email is not registered' ? 
              <p className="text-red-500">{error}</p>
            :
            ''
            }
            <label htmlFor="password" className="text-[#858897]">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              className={error === 'Bad request' || error === 'Invalid password' ? 
                "border border-slate-900 rounded-lg px-3 h-8 "
              :
                "border border-slate-900 rounded-lg px-3 h-8 mb-8"
              }
              value={password}
              onChange={e=> setPassword(e.target.value)}
            />
            {error === 'Invalid password' ? 
              <p className="text-red-500 mb-2">{error}</p>
            :
              ""
            }
            {error === 'Bad request' ? 
              <p className="text-red-500 mb-2">Insert email and password</p>
            : 
            ''
            }
            <button type="submit" className="rounded-xl mb-4 mt-4 bg-[#3D5CFF] text-white py-3">Log In</button>
          </form>
            <p className="text-[#858897] self-center">
              Don't have an account? <button onClick={()=>{navigate("/signup")}} className="text-[#3D5CFF]">Sign Up</button>
            </p>
        </div>
    :
        <div className="flex flex-col content-center mt-12">
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
