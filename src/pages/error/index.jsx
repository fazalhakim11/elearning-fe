import { Link, useRouteError } from "react-router-dom";

const ErrorPage = (props) => {
  const error = useRouteError();
  return (
    <div className="text-center mt-10">
      {props.notFound ? (
        <>
          <h1>Oops!</h1>
          <p>{error.statusText || error.message}</p>
        </>
      ) : (
        <>
          <h1>Oops!</h1>
          <p>You have to login first</p>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default ErrorPage;
