import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mb-6">
      <h1 className="text-5xl text-center font-semibold my-12">About Us</h1>
      <div className="flex md:flex-row flex-col-reverse mx-auto container">
        <div className="w-3/5 mr-3">
          <div className=" mb-6">
            <p className="leading-8">
              "Optic Eye Center" is one of the world's leading facilities for
              the diagnosis and treatment of diseases of the eyes, ears, nose,
              and throat, and related structures of the head and neck. Founded
              in 2005, NYEE is the first and most historic specialty hospital in
              the nation, as well as one of the busiest. With a rich heritage
              and a mission of providing the highest quality patient care,
              graduate and continuing medical education, scientific research,
              and community outreach, NYEE has built upon its strengths to
              maintain a leadership position in the fields of ophthalmology,
              otolaryngology/head and neck surgery, and plastic and
              reconstructive surgery. Commitment to excellence has earned NYEE a
              ranking as one of U.S. News & World Report's "Best Hospitals" for
              Ophthalmology, and a number of its medical staff are included in
              nationwide "Top Doctor" directories. The hospital has been awarded
              its third consecutive Magnet® designation for excellence in
              nursing care.
            </p>
          </div>
        </div>
        <div className="w-2/5">
          <img
            className="w-full"
            src="https://i.ibb.co/0nS6wfN/Group-of-medical-doctors-Isolated-on-white-background.jpg"
            alt="img"
          />
        </div>
      </div>
      {/* doctor section */}
      <div>
        <h1 className="text-5xl text-center font-semibold my-12">
          Our Specialist
        </h1>
        <div className="md:grid grid-cols-3 gap-8 container mx-auto">
          <div>
            <div className="rounded shadow-lg transform hover:bg-blue-200 transition duration-500 md:hover:scale-105">
              <img
                className="service-img"
                src="https://templates.hibootstrap.com/opnix/default/assets/images/doctors/main1.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2 text-center pb-3">
                <p className="text-2xl font-semibold">Dr. Anjelina</p>
                <p className="text-2xl">Surgery Specialist</p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded shadow-lg transform hover:bg-blue-200 transition duration-500 md:hover:scale-105">
              <img
                className="service-img"
                src="https://templates.hibootstrap.com/opnix/default/assets/images/doctors/main3.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2 text-center pb-3">
                <p className="text-2xl font-semibold">Dr. Jhon</p>
                <p className="text-2xl">Surgery Specialist</p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded shadow-lg transform hover:bg-blue-200 transition duration-500 md:hover:scale-105">
              <img
                className="service-img"
                src="https://templates.hibootstrap.com/opnix/default/assets/images/doctors/main2.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2 text-center pb-3">
                <p className="text-2xl font-semibold">Dr. Sarah</p>
                <p className="text-2xl">Lasik Specialist</p>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="rounded shadow-lg transform hover:bg-blue-200 transition duration-500 md:hover:scale-105">
              <img
                className="service-img"
                src="https://templates.hibootstrap.com/opnix/default/assets/images/doctors/main5.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2 text-center pb-3">
                <p className="text-2xl font-semibold">Dr. Ema Watson</p>
                <p className="text-2xl">Contact Lens Specialist</p>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="rounded shadow-lg transform hover:bg-blue-200 transition duration-500 md:hover:scale-105">
              <img
                className="service-img"
                src="https://templates.hibootstrap.com/opnix/default/assets/images/doctors/main4.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 pt-4 pb-2 text-center pb-3">
                <p className="text-2xl font-semibold">Dr. Helena</p>
                <p className="text-2xl ">Retina specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
