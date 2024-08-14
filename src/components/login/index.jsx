import { useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useLogin";
import useDataStores from "../../stores/dataStores";
import Loading from "../loading";

const index = (props) => {
  const navigate = useNavigate();
  const {contents} = useDataStores()

  const [
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    handleLogin,
    handleSignup,
  ] = useLogin();
  const { isLoading } = useDataStores();

  const Login = () => {
    return (
      <div className="flex flex-col content-center mt-5 mb-5">
        <form onSubmit={handleLogin} className="flex flex-col self-center">
          <h1 className="mb-5 text-4xl font-extrabold text-center text-[#4f7ff0]">Login</h1>
          <label htmlFor="email" className="text-[#4f7ff0]">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={
              error === "Email is not registered"
                ? "border border-[#4f7ff0] rounded-xl px-3 h-8"
                : "border border-[#4f7ff0] rounded-xl px-3 h-8 mb-6"
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error === "Email is not registered" ? (
            <p className="text-red-500">{error}</p>
          ) : (
            ""
          )}
          <label htmlFor="password" className="text-[#4f7ff0]">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={
              error === "Bad request" ||
              error === "Invalid password" ||
              error === "Login failed"
                ? "border border-[#4f7ff0] rounded-xl px-3 h-8 "
                : "border border-[#4f7ff0] rounded-xl px-3 h-8 mb-8"
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error === "Invalid password" ? (
            <p className="text-red-500 mb-2">{error}</p>
          ) : (
            ""
          )}
          {error === "Bad request" ? (
            <p className="text-red-500 mb-2">Insert email and password</p>
          ) : (
            ""
          )}
          {error === "Login failed" ? (
            <p className="text-red-500 mb-2">{error}</p>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="rounded-xl mb-4 mt-4 bg-[#4f7ff0] text-white py-3"
          >
            Login
          </button>
        </form>
        <p className="text-[#858897] self-center">
          Don't have an account?{" "}
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="text-[#4f7ff0] font-bold"
          >
            Sign Up
          </button>
        </p>
      </div>
    );
  };

  const SignUp = () => {
    return (
      <div className="flex flex-col content-center mt-5 mb-5">
        <form className="flex flex-col self-center" onSubmit={handleSignup}>
          <h1 className="mb-5 text-4xl font-extrabold text-[#4f7ff0] text-center">Sign Up</h1>
          <label htmlFor="username" className="text-[#4f7ff0]">
            Username
          </label>
          <input
            type="username"
            name="username"
            id="username"
            value={name}
            className="border border-[#4f7ff0] rounded-lg px-3 h-8 mb-6"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="text-[#4f7ff0]">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            className={
              error === "Email already registered"
                ? "border border-[#4f7ff0] rounded-lg px-3 h-8"
                : "border border-[#4f7ff0] rounded-lg px-3 h-8 mb-6"
            }
            onChange={(e) => setEmail(e.target.value)}
          />
          {error === "Email already registered" ? (
            <p className="text-red-500">{error}</p>
          ) : (
            ""
          )}
          <label htmlFor="password" className="text-[#4f7ff0]">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            className={
              error === "Bad request" ||
              error === "Password is too weak" ||
              error === "Failed to register user"
                ? "border border-[#4f7ff0] rounded-lg px-3 h-8 "
                : "border border-[#4f7ff0] rounded-lg px-3 h-8 mb-8"
            }
            onChange={(e) => setPassword(e.target.value)}
          />
          {error === "Password is too weak" ? (
            <p className="text-red-500 mb-2">{error}</p>
          ) : (
            ""
          )}
          {error === "Bad request" ? (
            <p className="text-red-500 mb-2">Insert name, email and password</p>
          ) : (
            ""
          )}
          {error === "Failed to register user" ? (
            <p className="text-red-500 mb-2">{error}</p>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="rounded-xl mb-4 mt-4 bg-[#4f7ff0] text-white py-3"
          >
            Sign Up
          </button>
        </form>
        <p className="text-[#858897] self-center">
          Already have an account?{" "}
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="text-[#4f7ff0] font-bold"
          >
            Login
          </button>
        </p>
      </div>
    );
  };

  if (isLoading) {
    return <Loading login />;
  }

  return props.login ? (
    <>
      <img src={contents[0].image} className="h-[300px] mx-auto mt-5"/>
      <Login />
    </>
  ) : (
    <>
    <img src={contents[1].image} className="h-[250px] mx-auto mt-5"/>
    <SignUp />
    </>
  );
};

export default index;
