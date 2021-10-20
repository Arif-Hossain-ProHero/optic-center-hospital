import React from "react";

const Product = (props) => {
  const { name, img, price } = props.product;
  return (
    <div>
      <div className="col shadow transform hover:bg-blue-200 transition duration-500 md:hover:scale-105">
        <div className="card text-center">
          <img src={img} className="card-img-top bg-gray-200" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-2xl text-purple-800 font-bold">
              {name}
            </h5>
            <p className="card-text text-2xl text-indigo-800 ">{price}</p>
            <div className="py-3">
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
