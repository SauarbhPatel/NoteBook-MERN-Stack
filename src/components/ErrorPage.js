import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div id="notFoundPage" className="flex">
        <div className="notfound flex">
          <h1>404</h1>
          <h2>We are sorry, page not found!</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or temporarily unavailable
          </p>
          <Link className="loginButton" to="/"> Back To HomePage</Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
