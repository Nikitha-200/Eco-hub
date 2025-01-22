import React from "react";
import logo103 from './Images/logo103.jpg';
import logo104 from './Images/logo104.jpg';
import './MultiItem.css';

function Mat2() {
  return (
    <div className="p-5">
      <h2 className="m-3">7 Ways To Make DIY Natural Beauty Products:</h2>
      <p className="m-3">
        Make homemade natural beauty products like face masks, scrubs, or bath salts using simple ingredients like oatmeal, honey, and essential oils. Package them in reusable glass jars or containers as thoughtful Raksha Bandhan gifts.
      </p>
      <br />
      <p className="m-3"><b>1. Coconut Oil Hair Mask:</b></p>
      <p className="m-3">
        Coconut oil is deeply nourishing for hair. Simply warm up a tablespoon or two of coconut oil until it's melted, then massage it into your scalp and through the lengths of your hair. Leave it on for at least 30 minutes or overnight before washing it out with shampoo.
      </p>
      <p className="m-3"><b>2. Avocado and Banana Face Mask:</b></p>
      <p className="m-3">
        Mash together half an avocado and half a ripe banana to create a hydrating face mask. Apply the mixture to clean skin and leave it on for 10-15 minutes before rinsing off with warm water. This mask nourishes and moisturizes the skin, leaving it glowing and refreshed.
      </p>
      <img className="m-3" src={logo103} alt="flower" />
      <br />
      <p className="m-3"><b>3. Honey and Oatmeal Face Scrub:</b></p>
      <p className="m-3">
        Mix together equal parts of honey and finely ground oatmeal to create a gentle exfoliating scrub. Apply it to damp skin in circular motions, then rinse off with warm water. This scrub helps to remove dead skin cells and leaves your skin feeling soft and smooth.
      </p>
      <p className="m-3"><b>4. Green Tea Toner:</b></p>
      <p className="m-3">
        Brew a cup of green tea and allow it to cool completely. Transfer the tea to a spray bottle and use it as a refreshing facial toner. Green tea is rich in antioxidants and helps to tighten pores and reduce inflammation.
      </p>
      <br />
      <p className="m-3"><b>5. Lemon and Sugar Lip Scrub:</b></p>
      <p className="m-3">
        Mix together equal parts of lemon juice and granulated sugar to create a lip scrub. Gently massage the scrub onto your lips to exfoliate away dry skin, then rinse off with warm water. Follow up with a moisturizing lip balm for soft and smooth lips.
      </p>
      <br />
      <p className="m-3"><b>6. Aloe Vera Gel Sunburn Soother:</b></p>
      <p className="m-3">
        Scoop out the gel from an aloe vera leaf and apply it directly to sunburned skin. Aloe vera has soothing and cooling properties that help to relieve pain and reduce inflammation associated with sunburn.
      </p>
      <img src={logo104} className="m-3" alt="gel" />
      <br />
      <p className="m-3"><b>7. Rosewater Facial Mist:</b></p>
      <p className="m-3">
        Fill a spray bottle with rosewater and use it as a refreshing facial mist throughout the day. Rosewater helps to hydrate and tone the skin, leaving it feeling revitalized and dewy.
      </p>
    </div>
  );
}

export default Mat2;