// Navbar.js
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../Pages/Css/nav.css';
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <div className="header-head">
          <h3>EventJoy</h3>
        </div>
        <div className="navbar-center">
          <nav ref={navRef}>
            <Link to="/party">Party</Link>
            <Link to="/foodmenu">FoodMenu</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">User Profile</Link>
            <Link to="/userDashboard">User-Dashboard</Link>
            <button
              className="nav-btn nav-close-btn"
              onClick={showNavbar}
            >
              <FaTimes />
            </button>
          </nav>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
