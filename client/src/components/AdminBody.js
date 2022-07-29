import React from "react";
import Card from "./Card";
// redux
import { useSelector } from "react-redux";

const AdminBody = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products &&
          products.map((product) => (
            <Card product={product} key={product._id} />
          ))}
      </div>
    </div>
  );
};

export default AdminBody;
