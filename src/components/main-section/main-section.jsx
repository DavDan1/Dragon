import React from "react";
import { withRouter } from "react-router-dom";
import dragon from "../../assets/cool-pic.jpg";
import "./main-section.styles.scss";

const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={dragon} alt="dragon band" />
        </div>
        <div className="ms-m-description">
          <h2>Dragon wristbands</h2>
          <p>
            Welcome! Here at Dragon Wristbands,
            our goal is simple: to provide parents with a toy/accessory
            that will help to improve positive behavior with your young child.
            The Dragons on our wristbands are similar to Pokemon: they can level up,
            improve statistics, and evolve into larger/cooler dragons.
          </p>
          <button className="button is-black" id="shop-now" onClick={() => history.push('/shop')}>
            Wristbands
          </button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(MainSection);