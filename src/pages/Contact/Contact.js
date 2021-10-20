import React from "react";

const Contact = () => {
  return (
    <div className="container my-5">
      {/* ---------contact form----------- */}
      <h1 className=" text-5xl text-center font-semibold">Get In Touch</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Comment
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              placeholder="Leave Your Message"
            ></textarea>
          </div>
          <input
            className="rounded-full bg-gray-800 py-2 px-6 text-white hover:bg-purple-700 transition duration-500"
            type="button"
            value="Submit"
            name=""
            id=""
          />
        </div>
        {/* --------------address----------------- */}
        <div className="col-md-4 ps-4 my-6">
          <div className="mt-4">
            <address>
              <i className="fas fa-map-marker-alt text-blue-600 "></i>{" "}
              <p className="font-semibold">12 New Eskaton Road, Dhaka-1000</p>
            </address>
            <p>
              <i className="fas fa-phone-alt text-blue-600"></i> +880-XXXXXXXX
            </p>
            <p>
              <i className="fas fa-phone-alt text-blue-600"></i> +880-XXXXXXXX
            </p>
            <p className="text-blue-600 py-2">info@optic-center.com</p>
            <p>
              <i className="fab fa-facebook-square px-3 hover:text-blue-600"></i>
              <i className="fab fa-twitter-square px-3 hover:text-blue-600"></i>
              <i className="fab fa-instagram px-3 hover:text-blue-600"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
