import React from "react";
import "./hero.style.scss";

const Hero = () => {
  return (
    <section className="hero is-large is-info hero-image">
      <div className="hero-body">
        <h1 className="hero-title">
          Dragon Wristbands
        </h1>
        <div className="shop-now-btn">
          <button className="button is-black" id="shop-now">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero;