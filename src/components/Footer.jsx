import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>SUNIC</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit veritatis tempora repellat dolore distinctio?.</p>
          </div>
          <div className="footer-col">
            <h4>For Her</h4>
            <ul>
              <li>
                <a href="#">Women Jeans</a>
              </li>
              <li>
                <a href="#">Tops and T-Shirts</a>
              </li>
              <li>
                <a href="#">Women Jackets</a>
              </li>
              <li>
                <a href="#">Heels and Flats</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>For Him</h4>
            <ul>
              <li>
                <a href="#">Men Jeans</a>
              </li>
              <li>
                <a href="#">Men Shirts</a>
              </li>
              <li>
                <a href="#">Men Shoes</a>
              </li>
              <li>
                <a href="#">Men Accessories</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Subscribe</h4>
            <form className="subscribe-form">
              <input type="email" placeholder="Your email address..." />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Sunic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
