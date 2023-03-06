import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"
import CartIcon from "../cart-icon/cart-icon";
import { auth } from "../../firebase";
import { UserContext } from "../../context/user-context";
import 'font-awesome/css/font-awesome.min.css';
import "./header.styles.scss"

const Header = ({ history }) => {
  const { user } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false); // add state for menu display
  // console.log('user', user)

  return (
    <>
      <div className="welcome-txt">
        <span>Welcome to our page</span>
      </div>
      <div className="login-nav">
        <ul>
          {
            !user &&
            <li>
              <Link to='/sign-in'>
                Log in
              </Link>
            </li>
          }
          {
            user &&
            <li>
              <Link to='/my-pages'>
                My Pages
              </Link>
            </li>
          }
          {
            user &&
            <li onClick={() => auth.signOut() && history.push('/')}>
              Log out
            </li>
          }
          {
            !user &&
            <li>
              <Link to='/sign-up'>
                Sign up
              </Link>
            </li>
          }
        </ul>
      </div>
      {/* <hr className="login-hr"></hr> */}
      <nav className="nav-menu ">
            <button className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
              <i className="fa fa-bars"></i>
            </button>
        <div className="main-nav-continer">
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/dragonwristbands.appspot.com/o/logo-black.svg?alt=media&token=ae70fe31-5972-4c3b-9f5c-df45277ecf55" alt="logo" width={150} height={150} />
          </div>
          <div className="nav-menu">
            <h1 className="nav-menu-name">DRAGON WRISTBANDS</h1>
            <ul className={showMenu ? "show-menu" : ""}>
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/shop'>
                  Shop
                </Link>
              </li>
              <li>
                <Link to='/faq'>
                  Faq
                </Link>
              </li>
              <li>
                <Link to='/about-us'>
                  About us
                </Link>
              </li>
              <li>
                <CartIcon />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header