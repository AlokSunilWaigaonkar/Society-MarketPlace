import React from "react";
import "../styles/ProductCard.css";
import image from "../resources/productImage.png"

export default function ProductCard({ product ,onDelete }) {
  return (
    
    <div className="product-card card shadow-sm " style={{ width: "18rem" }}>
    <img
      src={image}
      alt={product.title}
      className="product-img card-img-top"
      style={{ height: "130px", objectFit: "cover" }}
    />
    <div className="product-card-body card-body">
      <h5 className="product-title card-title">{product.title}</h5>
      <p className="prodcut-text text-muted mb-1">Seller: {product.seller}</p>
      <p className="product-text fw-bold text-success">₹{product.price}</p>
      <p className="product-text">{product.description}</p>
      <span className="badge bg-info mb-2">{product.category}</span>

      {onDelete && (
        <button
          className="btn btn-outline-danger btn-sm mt-2"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
      )}
    </div>
  </div>
  );
}