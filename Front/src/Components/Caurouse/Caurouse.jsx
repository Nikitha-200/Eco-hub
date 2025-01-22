//Import necessary dependencies
import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import banner1 from "../Assets/3.png";
import banner2 from "../Assets/4.png";
import banner3 from "../Assets/5.png";
import Marq from "../Marq/Marq";
// Functional component for the dark variant carousel
function DarkVariantCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
          height="500px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
          height="500px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
          height="500px"
        />
      </Carousel.Item>
    </Carousel>
  );
}

// Main Blog component that includes the DarkVariantCarousel
const Blog = () => {
  return (
    <>
      <div>
        <DarkVariantCarousel />
      </div>
      <div>
        <Marq />
      </div>
    </>
  );
};
export default Blog;
