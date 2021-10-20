import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Accordion from "../Accordion/Accordion";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Accordion></Accordion>
      <Blog></Blog>
    </>
  );
};

export default Home;
