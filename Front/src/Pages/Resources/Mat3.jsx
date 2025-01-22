import React from "react";
import logo106 from './Images/logo106.jpg';
import logo107 from './Images/logo107.jpg';
import './MultiItem.css';

function Mat3() {
  return (
    <div className="p-5">
      <h2 className="m-3">6 Ways To Make Sustainable Fashion:</h2>
      <p className="m-3">
        Choose clothing made from eco-friendly fabrics such as organic cotton, hemp, bamboo, or linen for your Raksha Bandhan outfits. Support ethical and sustainable fashion brands that prioritize fair labor practices and environmental stewardship.
      </p>

      <p className="m-3">
        Sustainable fashion involves making clothing, accessories, and footwear in an environmentally and socially responsible manner. Here are some ways to embrace sustainable fashion:
      </p>
      <br />

      <p className="m-3"><b>1. Choose Quality Over Quantity:</b></p>
      <p className="m-3">
        Invest in timeless, well-made pieces that will last for years rather than trendy items that quickly go out of style. Look for durable fabrics and craftsmanship that can withstand wear and tear.
      </p>

      <p className="m-3"><b>2. Support Sustainable Brands:</b></p>
      <p className="m-3">
        Research and support fashion brands that prioritize sustainability and ethical practices. Look for certifications such as Fair Trade, GOTS (Global Organic Textile Standard), or B Corp that indicate a commitment to social and environmental responsibility.
      </p>
      <img src={logo106} alt="clothes" className="m-3" />
      <br />

      <p className="m-3"><b>3. Upcycle and Repurpose:</b></p>
      <p className="m-3">
        Get creative and upcycle old clothing or fabrics into new garments or accessories. Cut, sew, and embellish to breathe new life into items that would otherwise end up in landfills.
      </p>
      <br />

      <p className="m-3"><b>4. Minimize Washing and Care for Clothes:</b></p>
      <p className="m-3">
        Wash clothing less frequently and in cold water to conserve energy and preserve fabric integrity. Air dry clothes whenever possible to reduce energy consumption and extend the lifespan of garments.
      </p>
      <br />

      <p className="m-3"><b>5. Support Local and Artisanal Craftspeople:</b></p>
      <p className="m-3">
        Purchase clothing and accessories from local designers and artisans who create small-batch, handmade items. Supporting local businesses fosters community resilience and reduces the carbon footprint associated with transportation and shipping.
      </p>
      <br />

      <p className="m-3"><b>6. Recycle and Donate Unwanted Clothing:</b></p>
      <p className="m-3">
        Instead of throwing away old or worn-out clothing, recycle textiles through designated programs or donate them to organizations that can repurpose or redistribute them to those in need.
      </p>
      <img src={logo107} alt="donate" className="m-3" />
      <br />
    </div>
  );
}

export default Mat3;