import { Link, useRouteError } from "react-router-dom";

const ErrorPage = (props) => {
  const error = useRouteError();
  return props.notFound ? (
    <div className="d-flex">
      <h1>Oops!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className="text-center min-h-[100vh]"
    >
      <h1 style={{ fontWeight: "700", fontSize: "24px" }}>Oops!!</h1>
      <p>You have to login first</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default ErrorPage;
