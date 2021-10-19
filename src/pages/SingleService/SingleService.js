import React from "react";

const SingleService = ({ item }) => {
  const { title, img, description, treatment } = item;
  return (
    <div className="container mx-auto mb-6">
      <h1 className="text-5xl text-center font-semibold my-12">{title}</h1>
      <div className="flex md:flex-row flex-col-reverse">
        <div className="w-3/5 mr-3">
          <div className=" mb-6">
            <h2 className="text-3xl mb-4">Description:</h2>
            <p className="leading-8">{description}</p>
          </div>
          <div>
            <h2 className="text-3xl mb-4">Treatment:</h2>
            {treatment}
          </div>
        </div>
        <div className="w-2/5">
          <img className="w-full" src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SingleService;
