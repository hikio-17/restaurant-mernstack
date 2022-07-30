import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../redux/actionts/productActions";
import { addToCart } from "./../redux/actionts/cartActions";

const Product = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.products);

  //event handlers
  const handleGoBackBtn = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);
  return (
    <section className="product-page m-4">
      <button
        className="btn btn-light text-primary mb-4"
        onClick={handleGoBackBtn}
      >
        Go Back
      </button>
      {product && (
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid w-100 mb-3"
              src={`/uploads/${product.fileName}`}
              alt="product"
            />
          </div>
          <div className="col-md-5">
            <h3 className="mb-4">{product.productName}</h3>
            <p className="text-muted border-top py-2">
              Price:{" "}
              {product.productPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <p className="text-muted border-top py-2">
              Status: {product.productQty <= 0 ? "Out of Stock" : "In Stock"}
            </p>
            <p className="text-muted border-top py-2">{product.productDesc}</p>
            <button
              className="btn btn-warning btn-large btn-block mb-5 py-2"
              disabled={product.productQty <= 0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
