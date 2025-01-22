import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState , useRef} from "react";
import logo from "../Assets/sjlogo.png";
import cart from "../Assets/cart.png";
function Navbar() {
  const [menu, setMenu] = useState("Home");
  return (
    <>
      <nav>
        <div className="container">
          <div className="navbar-brand">
              <Link to='/'><img src={logo} alt="" /></Link>
          </div>
          <div className="navbar-nav">
            <ul>
              <li onClick={() => {setMenu("Home");}}><Link style={{ textDecoration: "none" }} to="/">Home</Link>{menu === "Home" ? <hr /> : <></>}</li>
              {/* <li onClick={() => {setMenu("Shop");}}><Link style={{ textDecoration: "none" }} to="/Shop">Shop</Link>{menu === "Shop" ? <hr /> : <></>}</li> */}
              <li onClick={() => {setMenu("Resources");}}><Link style={{ textDecoration: "none" }} to="/Resources">Resources</Link>{menu === "Resources" ? <hr /> : <></>}</li>
              <li onClick={() => {setMenu("AboutUs");}}><Link style={{ textDecoration: "none" }} to="/AboutUs">About Us</Link>{menu === "AboutUs" ? <hr /> : <></>}</li>
              <li onClick={() => {setMenu("ContactUs");}}><Link style={{ textDecoration: "none" }} to="ContactUs">Contact Us</Link>{menu === "ContactUs" ? <hr /> : <></>}</li>
            </ul>
          </div>
          <div className=" nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to="/login"><button>Login</button></Link>}
            {/* <Link to="/cart"><img src={cart} alt="Logo_image" /></Link>
            <div className="nav-cart-count">0</div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
