import React, { useContext } from "react";
import { Link } from "react-router-dom"
import CartIcon from "../cart-icon/cart-icon";
import { auth } from "../../firebase";
import { UserContext } from "../../context/user-context";
import "./header.styles.scss"

const Header = () => {
  const { user } = useContext(UserContext);
  console.log('user', user)

  return (
    <nav className="nav-menu container">
      <div className="main-nav-continer">
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/dragonwristbands.appspot.com/o/logo-black.png?alt=media&token=83dfd1cd-0f72-4467-82d3-763ee63be53b" alt="logo" width={150} height={150} />
        </div>
        <div className="nav-menu">
          <h1 className="nav-menu-name">DRAGON WRISTBANDS</h1>
          <ul>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>

            <li>
              <Link to='/shop'>
                Shop now
              </Link>
            </li>
            {
              !user &&
              <li>
                <Link to='/sign-in'>
                  Sign in
                </Link>
              </li>
            }
            {
              user &&
              <li onClick={() => auth.signOut()}>
                Sign out
              </li>
            }
            {
              user &&
              <Link to='/my-pages'>
                My Pages
              </Link>
            }
            {
              !user &&
              <li>
                <Link to='/sign-up'>
                  Register
                </Link>
              </li>
            }
            <li>
              <Link to='/'>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      <CartIcon />

      </div>

    </nav>
  )
}

export default Header