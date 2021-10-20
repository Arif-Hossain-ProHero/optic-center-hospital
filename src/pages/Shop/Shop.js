import React from "react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./fakeProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container my-16">
      <h1 className="text-center text-4xl font-bold mb-12 underline ">SHOP</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <Product key={product.key} product={product}></Product>
        ))}
      </div>
      <div className="text-center">
        <button className="rounded-full bg-gray-800 py-3 mt-5  px-6 text-white hover:bg-gray-700 transition duration-500">
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default Shop;
