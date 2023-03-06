import React from "react";
import { withRouter } from "react-router-dom";
import dragon from "../../assets/smile.JPG";
import "./main-section.styles.scss";

const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={dragon} alt="dragon band" />
        </div>
        <div className="ms-m-description">
          <h2>DRAGON WRISTBANDS</h2>
          <p>
            Welcome! Here at <b>DRAGON WRISTBANDS</b>,
            our goal is simple: to provide parents with a toy/accessory
            that will help to improve positive behaviour with your young child.
            The Dragons on our wristbands are similar to Pokemon: they can level up,
            improve statistics, and evolve into larger/cooler dragons.
          </p>
          <button className="button is-black" id="shop-now" onClick={() => history.push('/shop')}>
            WRISTBANDS
          </button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(MainSection);