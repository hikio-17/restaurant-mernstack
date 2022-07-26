import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import Signin from "./Signin";
import Signup from "./Signup";
import Product from "./Product";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import AdminEditProduct from "./AdminEditProduct";
import Shop from "./Shop";
import Cart from "./Cart";
import Shipping from "./Shipping";
import Payment from "./Payment";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          {/** Protected admin route */}
          <Route element={<AdminRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>

          <Route element={<AdminRoute />}>
            <Route
              path="/admin/edit/product/:productId"
              element={<AdminEditProduct />}
            />
          </Route>

          {/** Protected user route */}
          <Route element={<UserRoute />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
