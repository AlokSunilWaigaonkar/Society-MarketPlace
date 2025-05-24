import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getProducts, seedProducts } from "../utils/Storage";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    seedProducts();
    const all = getProducts();
    setProducts(all);
  }, []);

  useEffect(() => {
    const result = products.filter(
      (product) =>
        (product.title || "").toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategory === "All" ||
          (product.category || "").toLowerCase() === selectedCategory.toLowerCase())
    );
    setDisplayedProducts(result);
  }, [search, selectedCategory, products]);

  return (
    <>
      <Navbar />

      <div className="search-bar px-4 py-3">
        <input
          type="search"
          placeholder="Search by product name..."
          className="form-control input-section w-100 mb-2 mb-sm-0"
          style={{ maxWidth: "300px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="form-select w-auto mx-3 input-section"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All</option>
          <option>Books</option>
          <option>Furniture</option>
          <option>Electronics</option>
          <option>Fitness</option>
          <option>Appliances</option>
          <option>Home Decor</option>
          <option>Accessories</option>
        </select>
      </div>

      <div className="home container-fluid">
        <div className="row">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
                key={index}
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="mt-5 mx-5" style={{ color: "#5f6466" }}>
              <p>No Product Found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}