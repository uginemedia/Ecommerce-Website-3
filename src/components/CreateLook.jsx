import React from "react";
import createLook1 from "../assets/create-look-1.jpg"
import createLook2 from "../assets/create-look-2.jpg"
import createLook3 from "../assets/create-look-3.jpg"

const CreateLook = () => {
  return (
    <section className="create-look-section">
      <div className="container">
        <div className="create-look-content">
          <div className="look-display">
            <img src={createLook1} alt="Model wearing outfit" />
            <div className="hotspot" style={{ top: "30%", left: "60%" }}>
              <button className="hotspot-btn">+</button>
            </div>
            <div className="hotspot" style={{ top: "75%", left: "55%" }}>
              <button className="hotspot-btn">+</button>
            </div>
          </div>
          <div className="look-builder">
            <h2 className="section-title">
              Create Your
              <br />
              Perfect Look
            </h2>
            <div className="look-item">
              <img src={createLook2} alt="T-shirt" />
              <div className="look-item-info">
                <h3>T-Shirt With Tape Details</h3>
                <p>$120.00</p>
              </div>
            </div>
            <div className="look-item">
              <img src={createLook3} alt="Jeans" />
              <div className="look-item-info">
                <h3>Skinny Fit Jeans</h3>
                <p>$140.00</p>
              </div>
            </div>
            <div className="look-total">
              <p>
                Total: <span>$260.00</span>
              </p>
              <a href="#" className="btn btn-secondary">
                ADD ALL TO CART
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateLook;
