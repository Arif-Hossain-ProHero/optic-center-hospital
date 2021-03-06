import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    passwordLogin,
    googleSignIn,
    user,
    message,
    error,
    passwordReset,
    setIsLoading,
  } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const location = useLocation();

  const redirect_uri = location.state?.from || "/home";

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  // login with email and password
  const submitHandler = (e) => {
    e.preventDefault();
    if (user.email) {
      alert("You are already logged in.");
      return;
    }
    passwordLogin(email, password)
      .then((res) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // password reset
  const handlePasswordReset = () => {
    passwordReset(email);
  };
  //  google signin
  const googleSigninHandler = () => {
    googleSignIn()
      .then((res) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 form-container">
        <div className="md:w-1/2 px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">
            Login to your account
          </h3>
          <div>
            {message ? (
              <h2 className="text-green-600">{message}</h2>
            ) : (
              <h2 className="text-red-600">{error}</h2>
            )}
          </div>
          <form onSubmit={submitHandler}>
            <div className="mt-4">
              <div>
                <label className="block" for="email">
                  Email
                </label>
                <input
                  onBlur={emailHandler}
                  required
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  onBlur={passwordHandler}
                  required
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="flex items-baseline justify-between">
                <button className="w-full px-6 py-2 mt-4 text-white bg-gray-800 rounded-lg hover:bg-blue-900">
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
          {/* google singin option  */}
          <div className="mx-auto">
            <button
              onClick={googleSigninHandler}
              className="w-full px-6 py-2 font-semibold mt-4 text-black bg-white border-solid border-2 border-blue-500  rounded-lg"
            >
              <i className="text-blue-600 fab fa-google mr-3"></i>Sign in with
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
