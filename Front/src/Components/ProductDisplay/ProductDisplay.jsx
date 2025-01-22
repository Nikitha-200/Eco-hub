import React, { useState } from 'react';
import './ProductDisplay.css';
import '../Enquiry/Enquiry.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const [result, setResult] = useState("");
    const [showResult, setShowResult] = useState(true);

    const scrollToForm = () => {
        const formSection = document.getElementById('enquiry-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        // setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "8bc5e211-5c68-4516-899f-0f8246652606");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert("Form Submitted Successfully")
            setResult("Form Submitted Successfully");
            event.target.reset();
            setShowResult(true); // Show result message
            setTimeout(() => {
              setShowResult(false)
            //   alert("Form Submitted Successfully")// Hide result message after 3 seconds
            },0);
          } else {
            alert("Form Not Submitted ")
            console.log("Error", data);
            // setResult(data.message);
          }
        };
      

    return (
        <>
            <div className='productdisplay'>
                <div className="productdisplay-left">
                    <div className="productdisplay-img">
                        <img onClick={window.scrollTo(0,0)} src={product.image} className='productdisplay-main-img' alt="" />
                    </div>
                    
                </div>
                <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="productdisplay-right-description">
                        <p className='productdisplay1'>{product.descriptive}</p>
                        {/* <p className='productdisplay2'>{product.descriptive2}</p> */}
                        {/* <p className='productdisplay3'>{product.descriptive3}</p> */}

                    </div>
                    <button onClick={scrollToForm}>Enquiry Now</button>
                    <p className="productdisplay-right-category">
                        <span>Category: </span>{product.category}
                    </p>
                    <p className="productdisplay-right-category">
                        <span>Tags: </span>EcoFriendly Products
                    </p>

                </div>
            </div>
            <div className="contact-container" id="enquiry-form">
                <div className="contact-container-left">
                    <h3>Looking for sustainable and eco friendly products in bulk?</h3>
                    <p>
                        We have wholesale options, corporate gifting and bulk gifting options for various events. Simply share your requirement and we can get started.
                    </p>
                    <ol >
                        <li className="contact-container-left-ol p-2" > High quality eco friendly products.</li>
                        <li className="contact-container-left-ol p-2" > Support homegrown brands</li>
                        <li className="contact-container-left-ol p-2" > Say no to plastic pollution & reduce your carbon footprint</li>
                        <li className="contact-container-left-ol p-2" > Amplify your brand reach</li>
                        <li className="contact-container-left-ol p-2" >Customizations and timely delivery</li>
                    </ol>
                </div>
                <div className="contact-container-right">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label className='pt-3' htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label className='pt-3' htmlFor="products">Which Products are you looking to Buy?</label>
                        <input type="text" id="products" name="products" required />

                        <label className='pt-3' htmlFor="reason">Reason:</label>
                        <input type="text" id="reason" name="reason" required />

                        <label className='pt-3' htmlFor="details">Any other details?</label>
                        <textarea id="details" name="details" placeholder="Enter any other details here"></textarea>

                        <button type="submit">Submit Form</button>
                    </form>
                    {showResult && <span className="result">{result}</span>}
                </div>
                
            </div>
        </>
    );
};

export default ProductDisplay;

