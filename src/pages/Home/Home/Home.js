import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Accordion from "../Accordion/Accordion";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="top-section p-8 md:p-36 md:flex">
        <div className="w-3/5">
          <h2 className="text-2xl font-semibold">
            <span className="text-purple-900">
              <i class="fas fa-eye"></i>ptic
            </span>{" "}
            Eye Center
          </h2>
          <div className="py-5">
            <h1 className="text-6xl font-bold pb-7">
              We Only Give Best Care To Your Eyes
            </h1>
            <p className="leading-7 pb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              debitis amet doloribus harum voluptatibus totam voluptate magni
              est nemo illum.
            </p>
          </div>
          <div>
            <Link
              to="/appointment"
              className="rounded-full bg-gray-800 py-3 px-6 text-white hover:bg-gray-700 transition duration-500"
            >
              Get An Appointment
            </Link>
          </div>
        </div>
      </div>
      <Services></Services>
      <Accordion></Accordion>
      <Blog></Blog>
    </>
  );
};

export default Home;
