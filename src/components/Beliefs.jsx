import React from "react";
import beliefImg from "../assets/belief.jpg";

const Beliefs = () => {
  return (
    <section className="beliefs-section">
      <div className="container">
        <div className="beliefs-image">
          <img src={beliefImg} alt="Model listening to music" />
        </div>
        <div className="beliefs-text">
          <h2 className="section-title">WE BELIEVE IN THE POWER OF SOUND</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <a href="#" className="btn btn-secondary">
            DISCOVER NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default Beliefs;
