import React from "react";
import "./Footer.css";
import Logo from "../Assets/Footer_logo.png";
export default function Footer() {
  return (
    <div>
      <div className="Footerr_man1">
        <div className="matter_man">
          <div className="Footer_box_man">
            <h6>Eco Products</h6>
            <div className="Footer_p">
                <p>Shop</p>
                <p>Resources</p>
            </div>
          </div>
          <div className="Footer_box_man">
            <h6>Information</h6>
            <div className="Footer_p">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Clients</p>
            </div>
          </div>
          <div className="Footer_box_man">
            <h6 className="heading_man">Customer Service</h6>
            <div className="Footer_p">
                <p>Privacy Policy </p>
                <p>Terms And Conditions</p>
                <p></p>
            </div>
          </div>
        </div>
        <div className="Footer_logo_man">
          <img src={Logo} alt="logo"></img>
        </div>
      </div>
      <div className="Footerr_man2">
        <div className="Footer_copyright">
          {/* <hr /> */}
          <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
      </div>

     
    </div>
  );
}
