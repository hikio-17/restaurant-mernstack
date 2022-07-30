import React, { useEffect } from "react";
import { getNewArrivals } from "./../redux/actionts/filterActions";
import { getProducts } from "../redux/actionts/productActions";
import { useDispatch, useSelector } from "react-redux";
import { showLoading } from "./../helpers/loading";
import Card from "./Card";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewArrivals());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { newArrivals } = useSelector((state) => state.filters);
  const { products } = useSelector((state) => state.products);
  const { loading } = useSelector((state) => state.loading);

  return (
    <section className="home-page">
      <div className="banner-image"></div>
      {loading ? (
        <div className="text-center">{showLoading()}</div>
      ) : (
        <>
          <div className="container">
            <hr className="py-3" />
            <h3 className="py-4">New Arrivals</h3>
            <div className="row">
              {newArrivals &&
                newArrivals.map((newArrival) => (
                  <Card
                    key={newArrival._id}
                    product={newArrival}
                    homePage={true}
                  />
                ))}
            </div>

            <hr className="py-3" />
            <h3 className="py-4">Menu</h3>
            <div className="row">
              {products &&
                products.map((product) => (
                  <Card key={product._id} product={product} homePage={true} />
                ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
