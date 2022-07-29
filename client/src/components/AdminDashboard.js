import React, { useEffect } from "react";
//component
import AdminHeader from "./AdminHeader";
import AdminActionBtns from "./AdminActionBtns";
import AdminCategoryModal from "./AdminCategoryModal";
import AdminProductModal from "./AdminProductModal";
import AdminBody from "./AdminBody";

// redux
import { useDispatch } from "react-redux";
import { getCategories } from "../redux/actionts/categoryActions";
import { getProducts } from "../redux/actionts/productActions";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <section>
      <AdminHeader />
      <AdminActionBtns />
      <AdminCategoryModal />
      <AdminProductModal />
      <AdminBody />
    </section>
  );
};

export default AdminDashboard;
