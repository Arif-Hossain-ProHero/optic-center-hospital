import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { passwordLogin, googleSignIn, user, message, error, passwordReset } =
    useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (user.email) {
      alert("You are already logged in.");
      return;
    }

    passwordLogin(email, password);
  };
  const handlePasswordReset = () => {
    passwordReset(email);
  };

  const googleSinginHandler = () => {
    googleSignIn();
  };
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen bg-gray-100 form-container">
        <div class="md:w-1/2 px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 class="text-2xl font-bold text-center">Login to your account</h3>
          <div>
            {message ? (
              <h2 className="text-green-600">{message}</h2>
            ) : (
              <h2 className="text-red-600">{error}</h2>
            )}
          </div>
          <form onSubmit={submitHandler}>
            <div class="mt-4">
              <div>
                <label class="block" for="email">
                  Email
                </label>
                <input
                  onBlur={emailHandler}
                  required
                  type="text"
                  placeholder="Email"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="mt-4">
                <label class="block">Password</label>
                <input
                  type="password"
                  onBlur={passwordHandler}
                  required
                  placeholder="Password"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div class="flex items-baseline justify-between">
                <button class="w-full px-6 py-2 mt-4 text-white bg-gray-800 rounded-lg hover:bg-blue-900">
                  Login
                </button>
              </div>
              <div>
                <button
                  onClick={handlePasswordReset}
                  className="mr-3 text-blue-700"
                >
                  Forgot Password?
                </button>
                <Link to="/registration" className="text-blue-700">
                  Need an Account?
                </Link>
              </div>
              <div className="text-center py-3">
                --------------------OR-------------------
              </div>
            </div>
          </form>
          <div className="mx-auto">
            <button
              onClick={googleSinginHandler}
              class="w-full px-6 py-2 mt-4 text-black bg-white border-solid border-2 border-blue-500  rounded-lg"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
