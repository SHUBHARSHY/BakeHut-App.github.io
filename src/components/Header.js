import React, { useState } from "react";
import "./Header.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/hooks/useOnline";
import { useSelector } from "react-redux";
import Store from "../utils/Store";
import Mobile from "./header/Mobile";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={logo} alt="Food Fire Logo" />
  </a>
);

const Header = () => {
  const [Isloggedin, setIsloggedin] = useState(false);

  const isonline = useOnline();

  const cartItems = useSelector((Store) => Store.cart.items);
  console.log(cartItems);

  const [isOpen,setIsopen]= useState(false)

  return (
    <div className="header">
      <Title />

      <div className="upr-nav-items">
        <div className="nav-items">
          <ul>
            <Link to="/home" className="li">
              <li className="le">Home</li>
            </Link>
            <Link to="/about" className="li">
              <li className="le">About</li>
            </Link>
            <Link to="/contact" className="li">
              <li className="le">Contact</li>
            </Link>



            <Link to="/Login" className="li">
              {Isloggedin ? (
                <Link to="/home" className="li">
                  <li className="le" onClick={() => setIsloggedin(false)}>
                    Logout
                  </li>
                </Link>
              ) : (
                <li className="le" onClick={() => setIsloggedin(true)}>
                  Login{" "}
                </li>
              )}
            </Link>
            
          </ul>
        </div>


<div className="online-cart">

        <Link to="/cart" className="cart">
              <li className="in-cart">
                <span className="material-symbols-outlined">shopping_cart</span>
                {cartItems.length === 0 ? (
                  <span className="cart-length"></span>
                ) : (
                  <span className="cart-length">{cartItems.length}</span>
                )}
              </li>
            </Link>

        <p className="on-off" >
              {isonline ? (
                <img
                  src="https://img.icons8.com/parakeet/48/null/online.png"
                  style={{ height: "17px", width: "17px" }}
                />
              ) : (
                <img
                  src={require("../images/offline.png")}
                  style={{ height: "17px", width: "17px" }}
                />
              )}
            </p>

      <div className="mobile-menu">
          <div className="open-btn" onClick={()=>setIsopen(true)}>
          <span className="material-symbols-outlined">menu</span></div>
          {isOpen&& <Mobile isOpen={isOpen} setIsopen={setIsopen}/>}
        </div>
      </div>
</div>


    </div>
  );
};

export default Header;
