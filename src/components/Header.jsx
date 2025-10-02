import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="">SUNIC</a>
        </div>
        <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
          </ul>
        </nav>
        <div className="header-icons">
          <button className="icon-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <button className="icon-btn">
            <ion-icon name="person-outline"></ion-icon>
          </button>
          <button className="icon-btn cart-btn">
            <ion-icon name="cart-outline"></ion-icon>
            <span className="cart-count">0</span>
          </button>
        </div>
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
