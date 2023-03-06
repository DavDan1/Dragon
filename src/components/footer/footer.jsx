import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div>
      <hr className="solid"></hr>
      <p className="about-us">About Us: Dragon Wristbands is THE store for wristband dragon accessories for young children. Opening in 2021, our goal is to provide a fun and stylish wristband game for your child that also encourages positive behaviour.</p>
      <hr className="solid"></hr>
    <div className="footer">
      {year} Ⓒ Dragon Wristbands
    </div>
    </div>
  )
}

export default Footer;