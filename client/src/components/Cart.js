import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ADD_TO_CART } from "../redux/constants/cartConstants";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  //event handlers
  const handleGoBackBtn = () => {
    navigate(-1);
  };

  const handleQtyChange = (event, product) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    cart.forEach((cartItem) => {
      if (cartItem._id === product._id) {
        cartItem.count = event.target.value;
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  };

  return (
    <div className="cart-page m-4">
      {cart.length <= 0 ? (
        <div className="jumbotron">
          <h1 className="display4">
            You cart is empty
            <button
              className="btn btn-light text-primary ml-4"
              onClick={handleGoBackBtn}
            >
              Go Back
            </button>
          </h1>
        </div>
      ) : (
        <>
          <div className="jumbotron">
            <h1 className="display4">Cart</h1>
          </div>
          <div className="row">
            <div className="col-md-8">
              <table className="table text-center border-top">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr key={product._id}>
                      <th scope="row">
                        {" "}
                        <img
                          style={{ maxWidth: "110px" }}
                          className="img-fluid w-100 mb-3"
                          src={`/uploads/${product.fileName}`}
                          alt="product"
                        />
                      </th>
                      <td>
                        {" "}
                        <Link to={`/product/${product._id}`}>
                          {product.productName}
                        </Link>
                      </td>
                      <td>
                        {product.productPrice.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>
                        <input
                          type="number"
                          value={product.count}
                          min="1"
                          max={product.productQty}
                          onChange={(e) => handleQtyChange(e, product)}
                        />
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-danger btn-sm">
                          <i className="far fa-trash-alt pr-1"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-4 border-left pl-4">
              <h2>Cart Summary</h2>
              <p className="font-weight-light text-muted border-bottom">
                {cart.length === 1 ? "(1) Items" : `(${cart.length}) Items`}
              </p>
              <p className="font-weight-bold">
                Total:{" "}
                {cart
                  .reduce(
                    (currentSum, currentCartItem) =>
                      currentSum +
                      currentCartItem.count * currentCartItem.productPrice,
                    0
                  )
                  .toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
              </p>
              <button className="btn btn-dark btn-large btn-block mb-5 py-2">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
