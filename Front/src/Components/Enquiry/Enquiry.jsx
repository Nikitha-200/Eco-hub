import React, { useState } from "react";
import "./Enquiry.css";
// import Cart from "./Cart";

export default function Enquiry() {
  const [result, setResult] = useState("");
  // const [enquiryCount, setEnquiryCount] = useState(0);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8bc5e211-5c68-4516-899f-0f8246652606");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setEnquiryCount((prevCount) => prevCount + 1);

      const newEnquiry = {
        id: new Date().getTime(),
        name: formData.get("name"),
        email: formData.get("email"),
        products: formData.get("products"),
        reason: formData.get("reason"),
        details: formData.get("details"),
      };

      // Call the function to add the new enquiry to the cart
      addToCart(newEnquiry);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="products">Which Products are you looking to Buy?</label>
        <input type="text" id="products" name="products" required />

        <label htmlFor="reason">Reason:</label>
        <input type="text" id="reason" name="reason" required />

        <label htmlFor="details">Any other details?</label>
        <textarea
          id="details"
          name="details"
          placeholder="Enter any other details here"
        ></textarea>

        <button type="submit">Submit Form</button>
      </form>
      <span className="result">{result}</span>
    </div>
  );
}
