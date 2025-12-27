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
        <Link to="/" className="nav-logo">
          <img
            src="/images/14.0 Yellow.png"
            alt="JXLDS 14.0"
            className="nav-logo-img"
          />
        </Link>

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
              OC Team
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
          <li className="nav-item">
            <Link
              to="/store"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Store
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
