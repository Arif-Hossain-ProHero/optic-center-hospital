import React from "react";
import Slider from "react-slick";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="container mx-auto my-12">
      <h2 className="text-center text-4xl font-semibold mb-12">
        {" "}
        Multiple items{" "}
      </h2>
      <Slider {...settings}>
        <div>
          <div className="rounded shadow-lg transform hover:bg-blue-200 transition duration-500 md:hover:scale-105">
            <img
              className="service-img"
              src="https://images.medicinenet.com/images/article/main_image/perrla-eye-assessment-test.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                qui architecto quaerat repellat velit accusantium aperiam
                tempore dolore ipsum quae, sint blanditiis unde atque.
                Distinctio quia adipisci corporis modi nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center pb-5">
              <button className="rounded-full bg-gray-700 py-2 px-5 text-white hover:bg-gray-800">
                View More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded shadow-lg transform hover:bg-blue-200 transition duration-500 md:hover:scale-105">
            <img
              className="service-img"
              src="https://images.medicinenet.com/images/article/main_image/perrla-eye-assessment-test.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                qui architecto quaerat repellat velit accusantium aperiam
                tempore dolore ipsum quae, sint blanditiis unde atque.
                Distinctio quia adipisci corporis modi nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center pb-5">
              <button className="rounded-full bg-gray-700 py-2 px-5 text-white hover:bg-gray-800">
                View More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded shadow-lg transform hover:bg-blue-200 transition duration-500 md:hover:scale-105">
            <img
              className="service-img"
              src="https://images.medicinenet.com/images/article/main_image/perrla-eye-assessment-test.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                qui architecto quaerat repellat velit accusantium aperiam
                tempore dolore ipsum quae, sint blanditiis unde atque.
                Distinctio quia adipisci corporis modi nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center pb-5">
              <button className="rounded-full bg-gray-700 py-2 px-5 text-white hover:bg-gray-800">
                View More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded shadow-lg transform hover:bg-blue-200 transition duration-500 md:hover:scale-105">
            <img
              className="service-img"
              src="https://images.medicinenet.com/images/article/main_image/perrla-eye-assessment-test.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                qui architecto quaerat repellat velit accusantium aperiam
                tempore dolore ipsum quae, sint blanditiis unde atque.
                Distinctio quia adipisci corporis modi nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center pb-5">
              <button className="rounded-full bg-gray-700 py-2 px-5 text-white hover:bg-gray-800">
                View More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded shadow-lg transform hover:bg-blue-200 transition duration-500 md:hover:scale-105">
            <img
              className="service-img"
              src="https://images.medicinenet.com/images/article/main_image/perrla-eye-assessment-test.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                qui architecto quaerat repellat velit accusantium aperiam
                tempore dolore ipsum quae, sint blanditiis unde atque.
                Distinctio quia adipisci corporis modi nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center pb-5">
              <button className="rounded-full bg-gray-700 py-2 px-5 text-white hover:bg-gray-800">
                View More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded shadow-lg transform hover:bg-blue-200 transition duration-500 md:hover:scale-105">
            <img
              className="service-img"
              src="https://images.medicinenet.com/images/article/main_image/perrla-eye-assessment-test.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Title</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                qui architecto quaerat repellat velit accusantium aperiam
                tempore dolore ipsum quae, sint blanditiis unde atque.
                Distinctio quia adipisci corporis modi nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center pb-5">
              <button className="rounded-full bg-gray-700 py-2 px-5 text-white hover:bg-gray-800">
                View More
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Blog;
