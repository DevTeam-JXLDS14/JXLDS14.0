import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/register"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/organizing-committee"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              OC Vanguards
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/facilitators"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Facilitators
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/room-allocation"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Room Allocation
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="/store"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Merch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
