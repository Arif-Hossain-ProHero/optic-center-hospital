import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="top-section p-8 md:p-36 md:flex">
        <div className="w-3/5">
          <h2 className="text-2xl font-semibold">
            <span className="text-purple-900">
              <i className="fas fa-eye"></i>ptic
            </span>{" "}
            Eye Center
          </h2>
          <div className="py-5">
            <h1 className="text-6xl font-bold pb-7">
              We Only Give Best Care To Your Eyes
            </h1>
            <p className="leading-7 text-2xl pb-5">
              We offer world-class Lasik eye surgery procedures to treat
              nearsightedness, farsightedness, and astigmatism.
            </p>
          </div>
          <div>
            <Link
              to="/appointment"
              className="rounded-full bg-gray-800 py-3 px-6 text-white hover:bg-purple-700 transition duration-500"
            >
              Get An Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
