import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/ContactUs/Contact";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Grid from "./Pages/Resources/MultiItem.jsx";
import Mat1 from "./Pages/Resources/Mat1.jsx";
import Mat2 from "./Pages/Resources/Mat2.jsx";
import Mat3 from "./Pages/Resources/Mat3.jsx";
import Mat4 from "./Pages/Resources/Mat4.jsx";
import Mat5 from "./Pages/Resources/Mat5.jsx";
import Mat6 from "./Pages/Resources/Mat6.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Bamboo_banner from "./Components/Assets/Bamboo Products.png";
import comb_banner from "./Components/Assets/Comb_banner.png";
import grooming_banner from "./Components/Assets/Grooming_banner.png";
import hygiene_banner from "./Components/Assets/Hygeine_banner.png";
import hospit_banner from "./Components/Assets/Hospitality.png";
import cutlery_banner from "./Components/Assets/cutlery.png";
import Enquiry from "./Components/Enquiry/Enquiry.jsx";
// import Cart from './Components/Enquiry/Cart.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* <Route></Route> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
          <Route path="/resources" element={<Grid />} />
          <Route path="Mat1" element={<Mat1 />} />
          <Route path="Mat2" element={<Mat2 />} />
          <Route path="Mat3" element={<Mat3 />} />
          <Route path="Mat4" element={<Mat4 />} />
          <Route path="Mat5" element={<Mat5 />} />
          <Route path="Mat6" element={<Mat6 />} />
          <Route
            path="/Bamboo Products"
            element={
              <ShopCategory banner={Bamboo_banner} category="Bamboo Products" />
            }
          />
          <Route
            path="/Combs"
            element={<ShopCategory banner={comb_banner} category="Combs" />}
          />
          <Route
            path="/Personal Grooming"
            element={
              <ShopCategory
                banner={grooming_banner}
                category="Personal Grooming"
              />
            }
          />
          <Route
            path="/Hygiene Products"
            element={
              <ShopCategory
                banner={hygiene_banner}
                category="Hygiene Products"
              />
            }
          />
          <Route
            path="/Hospitality"
            element={
              <ShopCategory banner={hospit_banner} category="Hospitality" />
            }
          />
          <Route
            path="/Cutlery"
            element={
              <ShopCategory banner={cutlery_banner} category="Cutlery" />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/Enquiry" element={<Enquiry />} />
          {/* <Route path="/Cart" element={<Cart/>}/> */}
          {/* <AboutUs/>
        <ContactUs/>
        <Shop/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
