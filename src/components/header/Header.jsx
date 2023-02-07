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
      <CartIcon />
    </nav>
  )
}

export default Header