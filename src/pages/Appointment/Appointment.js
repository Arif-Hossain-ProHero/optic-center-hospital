import React from "react";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className=" appointment-container">
      <div className="container mx-auto pb-5">
        <h1 className="text-4xl py-12 text-center">Book An Appointment</h1>
        <div className="flex">
          <div className="w-2/5 mr-3 hidden md:block">
            <img
              src="https://img.freepik.com/free-photo/male-doctor-ophthalmologist-is-checking-eye-vision-handsome-young-man-modern-clinic_56854-2432.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
          <div className="md:w-3/5 w-full mx-auto">
            <form className="form-control">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name.."
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
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
                <label for="exampleFormControlInput1" className="form-label">
                  Appointment Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  placeholder="Leave a message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <input
                className="rounded-full bg-gray-800 py-2 px-6 text-white hover:bg-gray-700 transition duration-500"
                type="button"
                value="Submit"
                name=""
                id=""
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
