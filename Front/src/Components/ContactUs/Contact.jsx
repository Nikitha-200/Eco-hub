import React, { useState } from "react";
import piccc from "../Assets/2.png";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    Message: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const contactUs = async () => {
    console.log("ContactUs executed", formData);
    // let responseData;
    // let user = formData;
    // let user_details = new FormData();
    await fetch("http://localhost:4000/ContactUs", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        data.success ? alert("Details submitted") : alert("Failed");
      });
  };

  return (
    <div>
      <div className="con_con">
        <img src={piccc} alt="SJ" />
      </div>
      <div className="con_det">
        <div className="con_inf">
          <h3>Send us an Email</h3>
          <p>sjmail@gmail.com</p>
          <h2>Write us a Letter</h2>
          <p>
            Plot No 2, Survey no 83, Sri Madava Amarjyothi Nagar, Chinna
            Thokatta,New Bownpally, Secunderabad Cantonment, Hyderabad - 500011,
            Telangana,India
          </p>
        </div>
        <div className="con_bigbox">
          <h4>Get in touch!</h4>
          <p>
            We’re here to help with any of your questions, concerns, or
            feedback.
          </p>
          {/* <form action="/action_page.php" className="con_form"> */}
          <div>
            <div className="con_name">
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                className="box"
                value={formData.firstname}
                // onChange={changeHandler}
                required
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastname"
                className="box"
                value={formData.lastname}
                // onChange={changeHandler}
                required
              />
            </div>
            <div className="con_mail">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="box"
                value={formData.email}
                // onChange={changeHandler}
                required
              />
            </div>
            <div className="con_mail">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="box"
                value={formData.subject}
                // onChange={changeHandler}
                required
              />
            </div>
            <div className="mail2 con_mail">
              <textarea
                placeholder="Message"
                id="w3review"
                name="Message"
                value={formData.Message}
                // onChange={changeHandler}
                rows="4"
                cols="50"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="con_button"
              onClick={() => {
                contactUs();
              }}
            >
              Submit
            </button>
            {/* <div className="popup" ref={popupRef}>
              <img src={picture} />
              <button type="button" onClick={closepopup}>
                OK
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
