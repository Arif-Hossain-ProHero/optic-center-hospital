import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Blog.css";
import useWindowSize from "../../../hooks/useWindowSize";

const Blog = () => {
  const [number, setNumber] = useState(3);
  const [height, width] = useWindowSize();
  useEffect(() => {
    messure();
  }, [width]);
  const messure = () => {
    if (width < 800) {
      setNumber(1);
    } else if (width > 800 && width < 1300) {
      setNumber(2);
    } else {
      setNumber(3);
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: number,
    slidesToScroll: 2,
  };

  return (
    <div className="container mx-auto my-12">
      <h2 className="text-center text-4xl font-bold mb-12"> Blogs </h2>
      <Slider {...settings}>
        <div className="mr-3">
          <div className="custom-width rounded shadow-lg">
            <img
              className="service-img"
              src="http://www.simpleimageresizer.com/_uploads/photos/12669b88/choose-main1_400x272.jpg"
              alt="eye"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Important Eye Care Tips For Kids
              </div>
              <p className="text-gray-700 text-base font-semibold">
                20th Oct 2021
              </p>
              <p className="text-gray-700 text-base">
                Eye care is just as important for children as it is for adults.
                The sooner you teach your children how to care for their eyes
                The sooner you teach your their eyes...
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center pb-5">
              <Link className="text-red-500" to="/read">
                Read More<i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="mr-3">
          <div className="custom-width rounded shadow-lg">
            <img
              className="service-img"
              src="http://www.simpleimageresizer.com/_uploads/photos/12669b88/main2_400x272.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                How to Deal with Contact Lens Discomfort
              </div>
              <p className="text-gray-700 text-base font-semibold">
                20th Oct 2021
              </p>
              <p className="text-gray-700 text-base">
                Do your eyes become irritated and itchy when you wear contact
                lenses? Could be dry eye syndrome, allergies or the contact
                lenses...
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center pb-5">
              <Link className="text-red-500" to="/read">
                Read More<i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="mr-3">
          <div className="custom-width rounded shadow-lg">
            <img
              className="service-img"
              src="https://images.medicinenet.com/images/article/main_image/perrla-eye-assessment-test.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                6 Ways To Maintain Eye Health If You’re Over 50
              </div>
              <p className="text-gray-700 text-base font-semibold">
                20th Oct 2021
              </p>
              <p className="text-gray-700 text-base">
                As we age our eyes start to change, but that doesn’t mean you
                have to struggle with declining vision. Find out what you can do
                to
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center pb-5">
              <Link className="text-red-500" to="/read">
                Read More<i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="mr-3">
          <div className="custom-width rounded shadow-lg">
            <img
              className="service-img"
              src="http://www.simpleimageresizer.com/_uploads/photos/12669b88/blog-4_400x272.jpg"
              alt="eye"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Why Eye Exams Are More Important Than Ever
              </div>
              <p className="text-gray-700 text-base font-semibold">
                20th Oct 2021
              </p>
              <p className="text-gray-700 text-base">
                Although COVID is still present in our lives, we are slowly
                returning to a semi-normal life. With so many disruptions
                this...
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center pb-5">
              <Link className="text-red-500" to="/read">
                Read More<i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="mr-3">
          <div className="custom-width rounded shadow-lg">
            <img
              className="service-img"
              src="https://images.medicinenet.com/images/article/main_image/perrla-eye-assessment-test.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Childhood Myopia Is in Crisis
              </div>
              <p className="text-gray-700 text-base font-semibold">
                20th Oct 2021
              </p>
              <p className="text-gray-700 text-base">
                More and more children are being diagnosed with myopia, a common
                refractive error associated with developing serious eye.
                Childhood Myopia Is in Crisis...
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center pb-5">
              <Link className="text-red-500" to="/read">
                Read More<i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Blog;
