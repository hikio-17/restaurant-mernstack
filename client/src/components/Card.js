import React from "react";
//redux
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actionts/productActions";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={`http://localhost:5000/uploads/${product.fileName}`}
          className="img-fluid card-img-top"
          alt={product.productName}
        />
        <div className="card-body text-center">
          <h5>{product.productName}</h5>
          <hr />
          <h6 className="mb-3">
            <span className="text-secondary mr-2">
              Rp.{product.productPrice}
            </span>
          </h6>
          <p>{product.productDesc}</p>

          <Link
            to={`/admin/edit/product/${product._id}`}
            type="button"
            className="btn btn-secondary btn-sm "
          >
            <i className="far fa-edit pr-1"> Edit</i>
          </Link>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(deleteProduct(product._id))}
          >
            <i className="far fa-trash-alt pr-1"> Delete</i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
