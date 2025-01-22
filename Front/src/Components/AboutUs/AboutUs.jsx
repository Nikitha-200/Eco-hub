import React from 'react'
import about from '../Assets/Abt2.jpg';
import './AboutUs.css'
import img5 from '../Assets/img5.avif'
import img6 from '../Assets/img6.avif'
import img4 from '../Assets/About.png'
import img10 from '../Assets/About3.png'
import img13 from '../Assets/About2.png'
import img7 from '../Assets/img7.jpg'
const AboutUs = () => {
  return (
    <>
        <div className="App">
      <main>
        <section className="content">
      <div className="header">
        <img src={about} alt="Your Photo" className="header-photo" />
      </div>
     
         <section className="left-align">
         <br /> <br /> <br />
            {/* <h2 className="pb-3">About Us</h2> */}
            <p className="pb-5">
              Established in 2014, SJ Enterprises has emerged as a trusted name in the realm of personal grooming products. As a proprietor firm, we take pride in 
              our commitment to quality and customer satisfaction. Over the years, we have garnered a reputation as a leading wholesaler and trader, offering a 
              diverse range of products tailored to meet the needs of our discerning clientele.
            </p>
            <p className="pb-5">
            At SJ Enterprises, we specialize in offering a wide array of grooming essentials, ranging from bamboo combs to shaving razors. Our carefully curated selection reflects our dedication to providing high-quality products that combine functionality with style. Whether it's achieving the perfect shave or maintaining well-groomed hair, our offerings cater to every aspect of personal grooming.
           </p>
            <p className="pb-5">
            We understand the importance of sourcing products that meet the highest standards of craftsmanship and sustainability. That's why we prioritize working with reputable suppliers who share our values and ethos. Each product in our inventory undergoes rigorous quality checks to ensure durability, performance, and safety, giving our customers peace of mind with every purchase.   
            </p>
            <p className="pb-5">
            At SJ Enterprises, our mission goes beyond just selling grooming products; we aim to foster long-term relationships with our customers built on trust and reliability. With a commitment to excellence and a passion for innovation, we continue to expand our product range and enhance our services, staying at the forefront of the grooming industry.
            </p>
            
            
            <section>
              <h2>Founder</h2>
           <p  className="pb-5">
            Amod Malviya is a co-founder of udaan. He founded udaan in 2016 with 
            Vaibhav Gupta and Sujeet Kumar, who were both former senior executives at Flipkart.Prior to founding udaan, Amod was heading technology  at Flipkart. He has done his BTech in Electrical Engineering from  IIT,KGP.
          
            </p>
            
          </section>
          

            <h2 className="pb-3">What We Offer</h2>
            <p className="pb-5">
              At SJ Enterprises, we specialize in offering a wide array of grooming essentials, ranging from bamboo combs to shaving razors. Our carefully curated selection reflects our dedication to providing high-quality products that combine functionality with style. Whether it's achieving the perfect shave or maintaining well-groomed hair, our offerings cater to every aspect of personal grooming. 
            </p>
            

            <h2 className="pb-3"> Our Mission</h2>
            <p className="pb-5">
            At SJ Enterprises, our mission goes beyond just selling grooming products; we aim to foster long-term relationships with our customers built on trust and reliability. With a commitment to excellence and a passion for innovation, we continue to expand our product range and enhance our services, staying at the forefront of the grooming industry.
           </p>
           <div className="header d-flex flex-row justify-content-center">
        <img src={img5} alt="Your Photo" className="img5" />
        <img src={img6} alt="Your Photo" className="img6" />

        
      </div>
            <h2 className="pb-3">Our Values</h2>
            <p className="pb-5">
            We understand the importance of sourcing products that meet the highest standards of craftsmanship and sustainability. That's why we prioritize working with reputable suppliers who share our values and ethos. Each product in our inventory undergoes rigorous quality checks to ensure durability, performance, and safety, giving our customers peace of mind with every purchase.
           </p>
          </section>

        

          <section className="left-align">
            <h2 className="pb-3">Our Products</h2>
            <p className="pb-3 pb-5">
              We specialize in bamboo-based products, including combs, toothbrushes, and more. Each item is thoughtfully designed to minimize environmental impact without compromising on functionality or aesthetic appeal.
            </p>
            <br/>  
           
            {/* <div className="pic">
  <img src={img7} alt="Your Photo" className="img7" />
</div> */}

          </section>
          

          <section className="left-align">
            <h2 className="pb-3">Our Commitment to Sustainability</h2>
            <p className="pb-5">
              We meticulously source our materials, ensuring they're renewable, biodegradable, or recycled whenever possible. Plus, we're constantly exploring innovative ways to reduce waste throughout our supply chain and operations.
            </p>
            
            <div className="header d-flex flex-row justify-content-center">
        <img src={img4} alt="Your Photo" className="img4" />
        <img src={img10} alt="Your Photo" className="img10" />
        <img src={img13} alt="Your Photo" className="img13" />
      </div>
    
          </section>

          <section className="left-align">
            <h2 className="pb-3">Join Us</h2>
            <p className="pb-5">
              Join us in our mission to make eco-conscious living accessible and enjoyable for all. Together, we can create a more sustainable future, one eco-friendly product at a time. If you need any advice or guidance on sourcing materials or developing eco-friendly products, feel free to reach out to us. Together, we can make a difference.
            </p>
            
            
          </section>
         <br/><br/><br/>
  <h2 className="gs">Legal and compliance details</h2>
  
  <p className='gst'>
    GST Number
  </p>
  <p className='gst'>
    36ABEPY1766G1ZB
  </p>


        </section>
      </main>
    </div>
    </>
  )
}

export default AboutUs
