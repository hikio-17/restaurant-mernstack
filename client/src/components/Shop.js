import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actionts/productActions";
import Card from "./Card";
const Shop = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <section className="shop-page m-4">
      <div className="jumbotron">
        <h1 className="display-4">Shop</h1>
      </div>
      <div className="row">
        <div className="col-md-3 border-right">Filters go her</div>
        <div className="col-md-9">
          <div className="row">
            {products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
