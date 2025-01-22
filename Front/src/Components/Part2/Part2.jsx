import React, { useState } from "react";
import "./Part2.css";

// import pic1 from "../Assets/pic2.jpg";
import pic2 from "../Assets/pic3.jpg";
import pic3 from "../Assets/pic4.jpg";
import pic4 from "../Assets/pic5.jpg";
import pic10 from "../Assets/pic10.jpg";
import pic6 from "../Assets/Bamboo-Ancillary-Products-Hospital-copy.png";
import pic7 from "../Assets/eco-hotel-amenities.jpg";
import { Link } from "react-router-dom";

const Part2 = () => {
  const [menu, setMenu] = useState("Bamboo Products");
  return (
    <div>
      <div className="layout">
        <div className="firstlayout">
          <div className="layoutone">
            <div className="layoutinside">
              <label htmlFor="input-cater">
                <Link to="/Bamboo Products">
                  <img src={pic4} alt="Welcome Group" />{" "}
                </Link>
              </label>
              <input
                onClick={() => {
                  setMenu("Bamboo Products");
                }}
                type="button"
                name="image"
                id="input-cater"
                hidden
              />
              {/* <img src={pic1} /> */}
            </div>
            <p>Bamboo Products</p>
          </div>
          <div className="layoutone">
            <div className="layoutinside">
              <label htmlFor="input-cater">
                <Link to="/Combs">
                  <img src={pic2} alt="Welcome Group" />{" "}
                </Link>
              </label>
              <input
                onClick={() => {
                  setMenu("Combs");
                }}
                type="button"
                name="image"
                id="input-cater"
                hidden
              />
              {/* <img src={pic2} /> */}
            </div>
            <p>Combs</p>
          </div>
          <div className="layoutone">
            <div className="layoutinside">
              <label htmlFor="input-cater">
                <Link to="/Personal Grooming">
                  <img src={pic3} alt="Welcome Group" />{" "}
                </Link>
              </label>
              <input
                onClick={() => {
                  setMenu("Personal Grooming");
                }}
                type="button"
                name="image"
                id="input-cater"
                hidden
              />
              {/* <img src={pic3} /> */}
            </div>
            <p>Personal Grooming</p>
          </div>
        </div>
        <div className="firstlayout">
          <div className="layoutone">
            <div className="layoutinside">
              <label htmlFor="input-cater">
                <Link to="/Hygiene Products">
                  <img src={pic10} alt="Welcome Group" />{" "}
                </Link>
              </label>
              <input
                onClick={() => {
                  setMenu("Hygiene Products");
                }}
                type="button"
                name="image"
                id="input-cater"
                hidden
              />
              {/* <img src={pic4} /> */}
            </div>
            <p>Hygiene Products</p>
          </div>
          <div className="layoutone">
            <div className="layoutinside">
              <label htmlFor="input-cater">
                <Link to="/Hospitality">
                  <img src={pic7} alt="Welcome Group" />{" "}
                </Link>
              </label>
              <input
                onClick={() => {
                  setMenu("Hospitality");
                }}
                type="button"
                name="image"
                id="input-cater"
                hidden
              />

              {/* <img src={pic5} /> */}
            </div>
            <p>Hospitality</p>
          </div>
          <div className="layoutone">
            <div className="layoutinside">
              <label htmlFor="input-cater">
                <Link to="/Cutlery">
                  <img src={pic6} alt="Welcome Group" />{" "}
                </Link>
              </label>
              <input
                onClick={() => {
                  setMenu("Cutlery");
                }}
                type="button"
                name="image"
                id="input-cater"
                hidden
              />

              {/* <img src={pic6} /> */}
            </div>
            <p>Cutlery</p>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="boxes">
    //     <div className="box1 box">
    //       <div className="Part2-container">
    //         <h2>Bamboo Items</h2>
    //         <div className="box-img">
    //           <label htmlFor="input-cater">
    //           <Link to='/Bamboo Items'><img src={pic1} alt="Welcome Group" />  </Link>
    //           </label>
    //           <input onClick={ ()=>{setMenu("Bamboo Items")}} type="button" name='image' id="input-cater" hidden/>
    //         </div>
    //         {/* <p>see more</p> */}
    //       </div>
    //     </div>
    //     <div className="box2 box">
    //       <div className="Part2-container">
    //         <h2>Combs</h2>
    //         <div className="box-img">
    //         <label htmlFor="input-cater">
    //         <Link to='/Combs'><img src={pic2} alt="Welcome Group" /></Link>
    //         </label>
    //         <input onClick={ ()=>{setMenu("Combs")}} type="button" name='image' id="input-cater" hidden/>
    //         </div>
    //         {/* <p>see more</p> */}
    //       </div>
    //     </div>
    //     <div className="box3 box">
    //       <div className="Part2-container">
    //         <h2>Mouth Essentials</h2>
    //         <div className="box-img">
    //         <label htmlFor="input-cater">
    //         <Link to='/Mouth Essentials'><img src={pic3} alt="Welcome Group" /></Link>
    //         </label>
    //         </div>
    //         <input onClick={ ()=>{setMenu("Mouth Essentials")}} type="button" name='image' id="input-cater" hidden/>
    //         {/* <p>see more</p> */}
    //       </div>
    //     </div>
    //     <div className="box4 box">
    //       <div className="Part2-container">
    //         <h2>Cutlery</h2>
    //         <div className="box-img">
    //         <label htmlFor="input-cater">
    //         <Link to='/Cutlery'><img src={pic4} alt="Welcome Group"/></Link>
    //         </label>
    //         </div>
    //         <input onClick={ ()=>{setMenu("Cutlery")}} type="button" name='image' id="input-cater" hidden/>
    //         {/* <p>see more</p> */}
    //       </div>
    //     </div>
    //     <div className="box1 box">
    //       <div className="Part2-container">
    //         <h2>Razors</h2>
    //         <div className="box-img">
    //         <label htmlFor="input-cater">
    //         <Link to='/Razors'><img src={pic5} alt="Welcome Group" /></Link>
    //         </label>
    //         </div>
    //         <input onClick={ ()=>{setMenu("Razors")}} type="button" name='image' id="input-cater" hidden/>
    //         {/* <p>see more</p> */}
    //       </div>
    //     </div>
    //     <div className="box2 box">
    //       <div className="Part2-container">
    //         <h2>Hospitality</h2>
    //         <div className="box-img">
    //         <label htmlFor="input-cater">
    //         <Link to='/Hospitality'><img src={pic4} alt="Welcome Group" /></Link>
    //         </label>
    //         </div>
    //         <input onClick={ ()=>{setMenu("Hospitality")}} type="button" name='image' id="input-cater" hidden/>
    //         {/* <p>see more</p> */}
    //       </div>
    //     </div>
    //     <div className="box3 box">
    //       <div className="Part2-container">
    //         <h2>Loofah</h2>
    //         <div className="box-img">
    //         <label htmlFor="input-cater">
    //         <Link to='/Loofah'><img src={pic1} alt="Welcome Group" /></Link>
    //         </label>
    //         </div>
    //         <input onClick={ ()=>{setMenu("Loofah")}} type="button" name='image' id="input-cater" hidden/>
    //         {/* <p>see more</p> */}
    //       </div>
    //     </div>
    //     <div className="box4 box">
    //       <div className="Part2-container">
    //         <h2>Tissues</h2>
    //         <div className="box-img">
    //         <label htmlFor="input-cater">
    //         <Link to='/Tissues'><img src={pic6} alt="Welcome Group" /></Link>
    //         </label>
    //         </div>
    //         <input onClick={ ()=>{setMenu("Tissues")}} type="button" name='image' id="input-cater" hidden/>
    //         {/* <p>see more</p> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Part2;

// import React from "react";
// import bamboo from "./bambo.jpg";
// import comb from "./combb.jpg";
// import bottle from "./Bottle.jpg";
// import pen from "./pen2.jpg";
// import razor from "./razor.jpg";
// import plastic from "./plastic.jpg";
// import "./Layoutt.css";
// const Layoutt = () => {
//   return (
//     <div>
//       <div className="layout">
//         <div className="firstlayout">
//           <div className="layoutone">
//             <div className="layoutinside">
//               <img src={bamboo} />
//             </div>
//             <p>Hospitality</p>
//           </div>
//           <div className="layoutone">
//             <div className="layoutinside">
//               <img src={comb} />
//             </div>
//             <p>Hospitality</p>
//           </div>
//           <div className="layoutone">
//             <div className="layoutinside">
//               <img src={bottle} />
//             </div>
//             <p>Hospitality</p>
//           </div>
//         </div>
//         <div className="firstlayout">
//           <div className="layoutone">
//             <div className="layoutinside">
//               <img src={pen} />
//             </div>
//             <p>Hospitality</p>
//           </div>
//           <div className="layoutone">
//             <div className="layoutinside">
//               <img src={razor} />
//             </div>
//             <p>Hospitality</p>
//           </div>
//           <div className="layoutone">
//             <div className="layoutinside">
//               <img src={plastic} />
//             </div>
//             <p>Hospitality</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layoutt;
