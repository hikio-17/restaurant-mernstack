import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import Signin from "./Signin";
import Signup from "./Signup";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
