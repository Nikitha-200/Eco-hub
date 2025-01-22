import React from "react";
import "./Part.css";
import Recycle from "../Assets/recycle.png";
const Part = () => {
  return (
    <div>
      <div className="part">
        <div className="matter">
          <h4>
            Greening Consumption: <br />
            The Rise of Eco-Friendly Products
          </h4>
          <p>
            The surge in demand for eco-friendly products arises from their
            ability to minimize pollution, conserve resources, and mitigate
            climate change. By utilizing renewable materials and reducing carbon
            footprints, these products offer sustainable solutions while
            promoting healthier lifestyles. This growing market reflects a
            collective push towards environmental consciousness and drives
            businesses to adopt greener practices to meet consumer expectations
            for a more sustainable future.
          </p>
        </div>
        <div className="pic">
          <img src={Recycle} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Part;
