import React from "react";

const Appointment = () => {
  return (
    <div className="container mx-auto mb-5">
      <h1 className="text-4xl my-12 text-center">Book An Appointment</h1>
      <div className="flex">
        <div className="w-2/5 mr-3">
          <img
            src="https://img.freepik.com/free-photo/male-doctor-ophthalmologist-is-checking-eye-vision-handsome-young-man-modern-clinic_56854-2432.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
        <div className="w-3/5">
          <form className="form-control">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Your Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name.."
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Date
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                placeholder="Leave a message"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
