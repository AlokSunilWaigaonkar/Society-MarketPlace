import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getCurrentUser } from "../utils/auth";
import { deleteProduct, myListings } from "../utils/Storage";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

export default function MyListings() {
  const [listings, setListings] = useState([]);
  const user = getCurrentUser();
  const identity = user?.firstName || user?.email;

  

  useEffect(() => {
    if (identity) {
      const results = myListings(user.firstName || user.email); 
      setListings(results);
    }
    // eslint-disable-next-line
  }, [identity]);

  const handleDelete = (id) => {
    deleteProduct(id);
    const updated = myListings(user.firstName || user.email);
    setListings(updated);
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      <div className="container mt-5">
        <h2 className="mb-4">My Listings</h2>
        <div className="row">
          {listings.length > 0 ? (
            listings.map((product, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center" key={index}>
                <ProductCard product={product} onDelete={handleDelete} />
              </div>
            ))
          ) : (
            <div className="mt-5 mx-3" style={{ color: "#5f6466" }}>
              <p>You haven't added any products yet.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}