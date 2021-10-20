import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./NavBar.css";

function NavBar() {
  const [selected, setSelected] = useState(false);
  const [display, setDisplay] = useState("hidden");

  const { user, logOut } = useAuth();

  const handleToggle = () => {
    if (selected) {
      setSelected(false);
      setDisplay("");
    } else {
      setSelected(true);
      setDisplay("hidden");
    }
  };
  const handleLogout = () => {
    return logOut();
  };
  return (
    <div>
      {/* top navBar section */}
      <div className="md:flex justify-end p-3 space-x-4 hidden">
        <p>
          <i className="fas fa-phone-alt pr-2 text-blue-800"></i>
          <span className="font-semibold">Phone</span> 08+XXXXXXX
        </p>
        <p>
          <i className="far fa-envelope pr-2 text-blue-800"></i>
          <span className="font-semibold">Email</span> support@optic-center.com
        </p>
        <p>
          <i className="fas fa-map-marker-alt pr-2 text-blue-800"></i>
          <span className="font-semibold">Location</span> 123, Mirpur,
          Dhaka-1200
        </p>
        <p>
          <span className="font-semibold pr-2">Follow Us:</span>
          <i className="fab fa-facebook-square pr-2 hover:text-blue-800"></i>
          <i className="fab fa-twitter-square pr-2 hover:text-blue-800"></i>
          <i className="fab fa-instagram-square hover:text-blue-800"></i>
        </p>
      </div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  {/* logo of the company */}
                  <img
                    className="md:w-full md:block hidden "
                    src="https://i.ibb.co/P55PMnh/logo.png"
                    alt="Workflow"
                  />
                </Link>
              </div>
              {/* Menu bar */}
              <div className="hidden md:block">
                <div className="ml-10 flex justify-end space-x-4">
                  <Link
                    to="/"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="/appointment"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Appointment
                  </Link>

                  <Link
                    to="/contact"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact Us
                  </Link>

                  <Link
                    to="/about"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
            {/* login and logout option  */}
            <div className="md:float-right">
              {user.email ? (
                <button
                  onClick={handleLogout}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              )}
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Sign in as:{" "}
                <span className="text-yellow-600 font-semibold pl-2">
                  {user.displayName ? user.displayName : user.email}
                </span>
              </span>
            </div>
            {/* for mobile or tablet devices */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={handleToggle}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* menu for mobile  */}
        <div className={`md:hidden ${display}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>

            <Link
              to="/appointment"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Appointment
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>

            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
