import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Link key={product._id} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-96 mb-4">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
