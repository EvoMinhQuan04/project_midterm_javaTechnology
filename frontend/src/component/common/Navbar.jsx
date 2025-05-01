import React, { useState } from "react";
import "../../style/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const isAdmin = ApiService.isAdmin();
  const isAuthenticated = ApiService.isAuthenticated();

  const { cart } = useCart();
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    navigate(`/?search=${searchValue}`);
  };

  const handleLogout = () => {
    const confirm = window.confirm("Are you sure you want to logout? ");
    if (confirm) {
      ApiService.logout();
      setTimeout(() => {
        navigate("/login");
      }, 500);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">
          {" "}
          <img src="/logo.png" alt="Fashion Trend Shop" />
        </NavLink>
      </div>
      {/* SEARCH FORM */}
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search products"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      <div className="navbar-link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/cart" className="cart-link">
          Cart
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </NavLink>
        {isAdmin && <NavLink to="/admin">Admin</NavLink>}
        {isAuthenticated && <NavLink to="/profile">Profile</NavLink>}
        {isAuthenticated && <NavLink onClick={handleLogout}>Logout</NavLink>}
        {!isAuthenticated && <NavLink to="/login">Login</NavLink>}
      </div>
    </nav>
  );
};
export default Navbar;
