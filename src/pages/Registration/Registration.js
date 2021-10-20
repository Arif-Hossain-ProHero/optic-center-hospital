import React, { useState } from "react";
import "./Registration.css";
import useAuth from "../../hooks/useAuth";
import { Link, useHistory } from "react-router-dom";

const Registration = () => {
  const { createUser, googleSignIn, updateName, user, message, error } =
    useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passError, setPassError] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPassdHandler = (e) => {
    setConfirmPass(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPass) {
      createUser(email, password);
    } else {
      passError("Password doesn't match.");
      return;
    }
    user.email && updateName(name);
  };

  const googleSinginHandler = () => {
    googleSignIn();
  };
  return (
    <div>
      <div className="flex form-container items-center justify-center min-h-screen bg-gray-100 py-5">
        <div className="md:w-1/2 px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">Registration</h3>
          <div>
            {message ? (
              <h2 className="text-green-600">{message}</h2>
            ) : (
              <h2 className="text-red-600">{error}</h2>
            )}
            {passError}
          </div>
          <form onSubmit={submitHandler}>
            <div className="mt-4">
              <div>
                <label className="block c" for="name">
                  User Name
                </label>
                <input
                  onBlur={nameHandler}
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block c" for="email">
                  Email
                </label>
                <input
                  onBlur={emailHandler}
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  onBlur={passwordHandler}
                  required
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Confirm Password</label>
                <input
                  onBlur={confirmPassdHandler}
                  required
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button className="w-full px-6 py-2 mt-4 text-white bg-gray-800 rounded-lg hover:bg-blue-900">
                  Register
                </button>
              </div>
              <div>
                <Link to="/login" className="text-blue-600">
                  Already have an account?
                </Link>
              </div>
              <div className="text-center py-3">
                --------------------OR-------------------
              </div>
              <div className="mx-auto">
                <button
                  onClick={googleSinginHandler}
                  className="w-full px-6 py-2 mt-4 text-black font-semibold bg-white border-solid border-2 border-blue-500  rounded-lg"
                >
                  <i className="text-blue-600 fab fa-google mr-4 "></i>Sign in
                  with Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
