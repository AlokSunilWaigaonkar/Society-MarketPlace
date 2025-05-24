import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from "../resources/logo.png"
import "../styles/Navbar.css"
import { useState } from 'react'
import { useNavigate , useLocation } from 'react-router-dom'
import { getCurrentUser, logout } from '../utils/auth'

export default function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const user = getCurrentUser();
const initials =
  (user?.firstName?.[0]?.toUpperCase() || "U") +
  (user?.lastName?.[0]?.toUpperCase() || "U");
  
  useEffect(()=>{
    const user = getCurrentUser();
    setIsLoggedIn(!!user)
    setShowDropdown(false); 
  },[location.pathname])

 

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  const handleAddProductClick = ()=>{
    navigate("/addproduct")
  }
  const handleMyListingsClick = ()=>{
    navigate("/mylistings")
  }
  const handleLogout = ()=>{
    console.log("Logging out user " , getCurrentUser()) 
    logout();
    setTimeout(()=>navigate("/") , 2000)
    
  }

  return (
    <>
      <nav className="navbar bg-dark text-white px-3 py-2">
      <div className="container-fluid d-flex flex-wrap   align-items-center justify-content-between ">
        {/* Logo + Title */}
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <Link to="/home" className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="logo" style={{ width: "50px" }} />
          </Link>
          <h1 className="fs-5 mb-0 ms-2 text-white">Society Marketplace</h1>
        </div>

        {/* Profile or Auth Buttons */}
        {isLoggedIn ? (
          <div className="position-relative mt-2 mt-md-0">
            <div className="user-icon  text-white fw-bold rounded-circle d-flex justify-content-center align-items-center"
              style={{
                width: "40px",
                height: "40px",
                cursor: "pointer",
                fontSize: "1rem",
                flexShrink: 0, // ✅ ensures it doesn't shrink in flex
              }}
              onClick={toggleDropdown}
            >
              {initials}
            </div>

            {showDropdown && (
              <div className="dropdown-menu show position-absolute end-0 mt-2 p-0 border rounded shadow-sm" style={{ minWidth: "160px",zIndex: 1055 }}>
                <button className="dropdown-item" onClick={() => navigate("/home")}>Home</button>
                <button className="dropdown-item" onClick={handleAddProductClick}>Add Product</button>
                <button className="dropdown-item" onClick={handleMyListingsClick}>My Listings</button>
                <button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <div className="buttons d-none  d-md-flex gap-2 align-items-center  mt-2 mt-md-0 justify-content-lg-end justify-content-center justify-content-sm-center">
            <Link to="/signup" className="btn   w-md-auto">Sign Up</Link>
            <Link to="/" className="btn  w-md-auto">Log In</Link>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}
