import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actionts/productActions";
import { getCategories } from "../redux/actionts/categoryActions";

const AdminEditProduct = () => {
  const { productId } = useParams();
  console.log(productId);
  //global state
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  // component state
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productQty, setProductQty] = useState("");

  useEffect(() => {
    if (!product) {
      dispatch(getProduct(productId));
      dispatch(getCategories());
    } else {
      setProductImage(product.fileName);
      setProductName(product.productName);
      setProductDesc(product.productDes);
      setProductPrice(product.productPrice);
      setProductCategory(product.productCategory);
      setProductQty(product.productQty);
    }
  }, [dispatch, productId, product]);

  return (
    <div>
      <h1>{JSON.stringify(categories)}</h1>
    </div>
  );
};

export default AdminEditProduct;
