import React from 'react';
import './Shop.css';
import box_1 from '../Assets/box_1.png';
import box_2 from '../Assets/box_2.png';
import box_3 from '../Assets/box_3.png';
import box_4 from '../Assets/box_4.png';
// import box2 from '../Assets/box2.png';
// import box3 from '../Assets/box3.png'
const Shop = () => {
  return (
    <>
      {/* <div className="boxes">
        <div className="box1 box">
          <div className="container">
            <h2>Revamp your home in style</h2>
            <div className="box-img" style={{ backgroundImage: url(${box_1}) }}></div>
            <p>see more</p>
          </div>
        </div>
        <div className="box2 box">
          <div className="container">
            <h2>Up to 60% off | Styles for men</h2>
            <div className="box-img" style={{ backgroundImage: url(${box_2}) }}></div>
            <p>see more</p>
          </div>
        </div>
        <div className="box3 box">
          <div className="container">
            <h2>Up to 60% off | Styles for men</h2>
            <div className="box-img" style={{ backgroundImage: url(${box_3}) }}></div>
            <p>see more</p>
          </div>
        </div>
        <div className="box4 box">
          <div className="container">
            <h2>Up to 60% off | Styles for men</h2>
            <div className="box-img" style={{ backgroundImage: url(${box_4}) }}></div>
            <p>see more</p>
          </div>
        </div>
      </div> */}
      <div className="shop-sec">
        <div className="box1 box">
            <div className="box-content">
            {/* <h2>Deals in PCs</h2> */}
            <div className="box-image" style={{ backgroundImage: `url(${box_1})`}}></div>
            {/* <p>Shop now</p> */}
            </div>
        </div>
        <div className="box2 box">
            <div className="box-content">
                {/* <h2>Fill your Eater basket with joy</h2> */}
                <div className="box-image" style={{ backgroundImage: `url(${box_2})`}}></div>
                {/* <p>Shop gifts</p> */}
                </div>
        </div>
        <div className="box">
            <div className="box-content">
                {/* <h2>Deals in PCs</h2> */}
                <div className="box-image" style={{ backgroundImage: `url(${box_3})` }}></div>
                {/* <p>Shop now</p> */}
                </div>
        </div>
        <div className="box">
            <div className="box-content">
                 <h2>Deals in PCs</h2> 
                <div className="box-image" style={{ backgroundImage: `url(${box_4})`}}></div> 
                <p>Shop now</p>
                </div>
        </div> 
        </div>
    </>
  );
}

export default Shop;