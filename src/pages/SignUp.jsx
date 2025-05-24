import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUsers , saveUser  } from '../utils/Storage';
import "../styles/signup.css"

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName :"",
    lastName:"",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [errorClass, setErrorClass] = useState("signup-message");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName , email, password } = formData;
  
    if (!firstName || !lastName || !email || !password) {
      setMessage("⚠️ Please fill in all fields.");
      setErrorClass("signup-message shake");
      setTimeout(() => setErrorClass("signup-message"), 5000);
      return;
    }
  
    setLoading(true); // Start loading
  
    try {
      const users = getUsers(); // get all users 
      const userExits = users.find((u)=>u.email === email); // check if user exists

      if(userExits){
        setMessage("❌ User already exists. Please login.");
        setErrorClass("signup-message shake");
        setTimeout(()=>setErrorClass("signup-message"),5000);
        setLoading(false);
        return;
      }

      const newuser = {firstName , lastName ,email , password}
      saveUser(newuser);
      setMessage("✅ Account created! Redirecting to login...");
      setTimeout(()=>navigate("/"),1000);
  
      
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong. Please try again.");
  }finally{
    setLoading(false);
  }
}

  return (
    <>
    <Navbar />
      <div className="signup">
        <div className="signup-body">
          <div className="card signup-card">
            <div className="card-body">
              <h2 className="signup-title text-center">Sign Up</h2>
              {message && <div className={errorClass}>{message}</div>}
              <form onSubmit={handleSubmit} className="signup-form">
              <input
                name="firstName"
                onChange={handleChange}
                placeholder='First Name'
                className="input-sec"
                value={formData.firstName}
              />
              <input
                name="lastName"
                onChange={handleChange}
                placeholder='Last Name '
                className="input-sec"
                value={formData.lastName}
              />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="input-sec"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  className="input-sec"
                  onChange={handleChange}
                />
                <button
  type="submit"
  className="btn sub-btn btn-outline-primary"
  disabled={loading}
>
  {loading ? (
    <>
      <span className="spinner"></span> Creating Account...
    </>
  ) : (
    "Create Account"
  )}
</button>
                <p className="text-center mt-3">
                  Already have an account?{" "}
                  <Link to="/" style={{ textDecoration: "underline" }}>
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  }
