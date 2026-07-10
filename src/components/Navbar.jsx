import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

function Navbar({
  openWhyModal,
  openProjectsModal,
  openContactModal,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">

        <div className="logo">
          <Link to="/">
            <img src={logo} alt="SVES Logo" />
          </Link>
        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <button
              className="nav-btn"
              onClick={() => {
                openWhyModal();
                setMenuOpen(false);
              }}
            >
              Why Choose SVES
            </button>
          </li>

          <li>
            <button
              className="nav-btn"
              onClick={() => {
                openProjectsModal();
                setMenuOpen(false);
              }}
            >
              Projects
            </button>
          </li>

          <li>
            <button
              className="nav-btn"
              onClick={() => {
                openContactModal();
                setMenuOpen(false);
              }}
            >
              Contact Us
            </button>
          </li>

        </ul>

      </nav>
    </header>
  );
}

export default Navbar;