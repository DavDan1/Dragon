import React from "react";
import { Link } from "react-router-dom"
import "./header.styles.scss"

const Header = () => {
  return (
    <nav className="nav-menu container">
      <div className="logo">
        <Link to='/'>
          Dragon Wristband
        </Link>
      </div>
      <ul>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/'>
            Log in
          </Link>
        </li>
        <li>
          <Link to='/shop'>
            Shop now
          </Link>
        </li>
        <li>
          <Link to='/'>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header