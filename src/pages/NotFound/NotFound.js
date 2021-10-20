import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="text-6xl font-bold py-4 text-red-700">Oops!</h1>
      <h1 className="text-4xl font-semibold mb-5">
        <span className="text-yellow-600 font-bold">404</span> Page Not Found
      </h1>
      <Link
        to="/"
        className="text-blue-600 font-semibold border rounded py-2 px-3 hover:bg-purple-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
