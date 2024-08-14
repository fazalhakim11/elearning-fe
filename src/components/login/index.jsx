import {useNavigate} from "react-router-dom"

import {useLogin} from "../../hooks/useLogin"
import useDataStores from "../../stores/dataStores"
import Loading from "../loading"

const index = (props) => {
    const navigate = useNavigate()
    const [name, setName, email, setEmail, password, setPassword, error, setError, handleLogin, handleSignup] = useLogin()
    const {isLoading} = useDataStores()

    const login = () => {
      return(
        <div className="flex flex-col content-center mt-12">
          <form onSubmit={handleLogin} className="flex flex-col self-center">
          <h1 className="mb-20 text-4xl font-extrabold">Log In</h1>
          <label htmlFor="email" className="text-[#858897]">Email</label>
          <input 
            type="email" name="email" id="email" 
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
            type="password" name="password" id="password" 
            className={error === 'Bad request' || error === 'Invalid password' || error === 'Login failed' ? 
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
          {error === 'Login failed'? 
            <p className="text-red-500 mb-2">{error}</p>
          : 
          ''
          }
          <button type="submit" className="rounded-xl mb-4 mt-4 bg-[#4f7ff0] text-white py-3">Log In</button>
          </form>
          <p className="text-[#858897] self-center">
            Don't have an account? <button onClick={()=>{navigate("/signup")}} className="text-[#4f7ff0]">Sign Up</button>
          </p>
        </div>)
    }

    const signUp = () => {
      return (
        <div className="flex flex-col content-center mt-12">
          <form 
            className="flex flex-col self-center"
            onSubmit={handleSignup}
          >
            <h1 className="mb-10 text-4xl font-extrabold">Sign Up</h1>
            <label htmlFor="username" className="text-[#858897]">Username</label>
            <input 
              type="username" name="username" id="username" value={name}
              className="border border-slate-900 rounded-lg px-3 h-8 mb-6"
              onChange={e=> setName(e.target.value)}
            />
            <label htmlFor="email" className="text-[#858897]">Email</label>
            <input 
              type="email" name="email" id="email" value={email}
              className={error === 'Email already registered'? 
                "border border-slate-900 rounded-lg px-3 h-8" 
              : 
                "border border-slate-900 rounded-lg px-3 h-8 mb-6"}
              onChange={e=> setEmail(e.target.value)}
            />
            {error === 'Email already registered' ? 
              <p className="text-red-500">{error}</p>
            :
            ''
            }
            <label htmlFor="password" className="text-[#858897]">Password</label>
            <input 
              type="password" name="password" id="password" value={password}
              className={error === 'Bad request' || error === 'Password is too weak' || error === 'Failed to register user' ? 
                "border border-slate-900 rounded-lg px-3 h-8 "
              :
                "border border-slate-900 rounded-lg px-3 h-8 mb-8"
              }
              onChange={e=> setPassword(e.target.value)}
            />
            {error === 'Password is too weak' ? 
              <p className="text-red-500 mb-2">{error}</p>
            :
              ""
            }
            {error === 'Bad request' ? 
              <p className="text-red-500 mb-2">Insert name, email and password</p>
            : 
            ''
            }
            {error === 'Failed to register user'? 
              <p className="text-red-500 mb-2">{error}</p>
            : 
            ''
            }
            <button type="submit" className="rounded-xl mb-4 mt-4 bg-[#4f7ff0] text-white py-3">Sign Up</button>
          </form>
            <p className="text-[#858897] self-center">Already have an account? <button onClick={()=>{navigate("/login")}} className="text-[#4f7ff0]">Log In</button></p>
        </div>
      )
    }

    if (isLoading) {
      return <Loading login/>
    }

  return (
    props.login?
      login()
    :  
      signUp()
  )
};

export default index
