import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { addProducts } from "../utils/Storage";
import { getCurrentUser } from "../utils/auth";
import "../styles/AddProduct.css";
import image  from "../resources/productImage.png"

export default function AddProduct() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "Books",
    imageUrl: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, price, category, imageUrl } = formData;

    if (!title || !description || !price || !category ) {
      setMessage("⚠️ Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      addProducts({
        ...formData,
        seller: user.firstName || user.email,
      });

      setMessage("✅ Product added successfully!");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container  add-product-page">
        <div className="card shadow p-4">
          <h2 className="mb-4">Add New Product</h2>

          {message && <div className="mb-3">{message}</div>}

          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                name="title"
                placeholder="Product Title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                name="price"
                placeholder="Price (₹)"
                className="form-control"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12">
              <textarea
                name="description"
                placeholder="Description"
                rows="3"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-md-6">
              <select
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
              >
                <option>Books</option>
                <option>Furniture</option>
                <option>Electronics</option>
                <option>Fitness</option>
                <option>Appliances</option>
                <option>Home Decor</option>
                <option>Accessories</option>
              </select>
            </div>

            <div className="col-md-6">
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                className="form-control"
                value={image}
                readOnly
              />
            </div>

            <div className="col-12 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-warning px-4"
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}