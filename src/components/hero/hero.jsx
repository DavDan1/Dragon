import React from "react";
import { withRouter } from "react-router-dom";
import "./hero.style.scss";

const Hero = ({ history }) => {
  return (
    <section className="hero is-large is-info hero-image">
      <div className="hero-body">
        <h1 className="hero-title">
          Dragon Wristbands
        </h1>
        <div className="shop-now-btn" >
          <button className="button is-black" id="shop-now" onClick={() => history.push('/shop')}>
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  )
}

export default withRouter(Hero);