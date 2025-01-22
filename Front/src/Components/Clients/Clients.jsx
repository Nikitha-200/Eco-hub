import React from "react";
import "./Clients.css";
import pic1 from "../Assets/client1.jpg";
import pic2 from "../Assets/client2.jpg";
import pic3 from "../Assets/client3.jpg";
import pic4 from "../Assets/client4.jpg";
import pic5 from "../Assets/client5.jpg";
import pic6 from "../Assets/client6.jpg";
export default function Clients() {
  return (
    <div>
      <div className="text">
        <h1>Our Clients</h1>
      </div>
      <div className="clients">
        <div className="first3">
          <a href="https://www.itchotels.com/in/en/itchotels?utm_source=bing&utm_medium=cpc&utm_campaign=HQ-DTL%7CCHN%7CAllIndia%7CNA%7CSearch%7CConversions%7CPanIndia%7Calways-on%7COwned%7CLC%7CBing%7CNA%7CNA%7CNA%7CNA%7CBrand%7CMarch&utm_content=search&utm_adgroup=ITCHotel%7CPureBrand%7CExact&msclkid=3fd66e26e32d1da6b741083ca0d32730">
            <img src={pic1} alt="Welcome Group" />
          </a>
          <a href="https://www.mandarinoriental.com/en/?src=ps.brand.mohg.bng&&msclkid=66ffab3040a01a2fe00dcd2a03d87dac&gclid=66ffab3040a01a2fe00dcd2a03d87dac&gclsrc=3p.ds">
            <img src={pic2} alt="Mandarin Oriental" />
          </a>
          <a href="https://www.tajhotels.com/">
            <img src={pic3} alt="Taj India" />
          </a>
        </div>
        <div className="first3 x">
          <a href="https://www.theleela.com/special-offers/blissful-escapes?utm_source=bing&utm_medium=cpc&utm_campaign=IA_Bing_Corporate_Brand_Neev_India&msclkid=e228a3235036138a732cc53914d8792e&utm_term=leela%20group%20of%20hotels&utm_content=Leela%20Hotels">
            <img src={pic4} alt="The Leela" />
          </a>
          <a href="https://www.toniconline.com/">
            <img src={pic5} alt="Tonic Hotel" />
          </a>
          <a href="https://www.lemontreehotels.com/">
            <img src={pic6} alt="Lemon Tree" />
          </a>
        </div>
      </div>
    </div>
  );
}
