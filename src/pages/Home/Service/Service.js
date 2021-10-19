import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, title, img, description } = service;
  return (
    <div>
      <div className="rounded shadow-lg transform hover:bg-blue-200 transition duration-500 md:hover:scale-105">
        <img className="service-img" src={img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description.slice(0, 120)}...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 text-center pb-3">
          <div className="px-6 pt-4 pb-2 text-center">
            <Link to={`/service-detail/${id}`}>
              {" "}
              <button className="rounded-full bg-gray-700 py-2 px-5 text-white hover:bg-gray-800">
                View More
              </button>
            </Link>
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default Service;
