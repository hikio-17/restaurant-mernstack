import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actionts/productActions";
import { getProductsByFilter } from "../redux/actionts/filterActions";
import Card from "./Card";
import { getCategories } from "./../redux/actionts/categoryActions";

const Shop = () => {
  const [text, setText] = useState("");
  const [categoryIds, setCategoryIds] = useState([]);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  //event handler
  const handleSearch = (event) => {
    resetState();
    setText(event.target.value);
    dispatch(getProductsByFilter({ type: "text", query: event.target.value }));
  };

  const handleCategory = (event) => {
    resetState();
    const currentCategoryChecked = event.target.value;
    const allCategoriesChecked = [...categoryIds];
    const indexFound = allCategoriesChecked.indexOf(currentCategoryChecked);

    let updatedCategoryIds;
    if (indexFound === -1) {
      //add
      updatedCategoryIds = [...categoryIds, currentCategoryChecked];
      setCategoryIds(updatedCategoryIds);
    } else {
      //remove
      updatedCategoryIds = [...categoryIds];
      updatedCategoryIds.splice(indexFound, 1);
      setCategoryIds(updatedCategoryIds);
    }

    dispatch(
      getProductsByFilter({ type: "category", query: updatedCategoryIds })
    );
  };

  const resetState = () => {
    setText("");
    setCategoryIds([]);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <section className="shop-page m-4">
      <div className="jumbotron">
        <h1 className="display-4">Shop</h1>
      </div>
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="text-muted mb-2">
            Filters <span className="fas fa-sliders-h"></span>
          </div>

          <nav className="navbar navbar-light bg-light justify-content-between border-top p-3">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control col-sm-8 mr-2"
                type="search"
                placeholder="Search....."
                aria-label="Search"
                name="search"
                value={text}
                onChange={handleSearch}
              />
              <button
                className="btn btn-outline-success  my-sm-0 "
                type="submit"
                disabled={true}
              >
                Search
              </button>
            </form>
          </nav>

          <div className="border-top border-bottom bg-light p-3">
            {categories &&
              categories.map((category) => (
                <div key={category._id} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="category"
                    value={category._id}
                    checked={categoryIds.includes(category._id)}
                    id="flexChecked"
                    onChange={handleCategory}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    {category.category}
                  </label>
                </div>
              ))}
          </div>
        </div>
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
