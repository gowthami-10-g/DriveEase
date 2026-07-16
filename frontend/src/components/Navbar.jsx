import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          🚗 <span>DriveEase</span>
        </Link>
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/cars" onClick={() => setMenuOpen(false)}>
          Cars
        </NavLink>

        <NavLink to="/booking" onClick={() => setMenuOpen(false)}>
          Booking
        </NavLink>

        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>

        <NavLink to="/admin-login" onClick={() => setMenuOpen(false)}>
          Login
        </NavLink>

        <NavLink to="/admin" onClick={() => setMenuOpen(false)}>
          Admin
        </NavLink>
      </nav>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </header>
  );
}

export default Navbar;