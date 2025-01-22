import React from "react";
import logo101 from './Images/logo101.jpg';
import logo102 from './Images/logo102.jpg';
import './MultiItem.css';

function Mat1() {
  return (
    <div className="p-5">
      <h2 className="m-3">8 Ways To Make DIY Decorations:</h2>
      <p className="m-3">
        Create festive decorations using natural or recycled materials. For example, make paper garlands from old magazines or newspapers, decorate with fresh flowers or potted plants, and use reusable cloth banners or bunting instead of disposable plastic decorations.
      </p>
      <br />
      <p className="m-3"><b>1. Paper Flower Wall Art:</b></p>
      <p className="m-3">
        Create beautiful flower decorations using recycled paper. Cut out flower shapes from colorful paper, fold and layer them to add dimension, and arrange them on a wall to create a stunning floral display.
      </p>
      <img className="m-3" src={logo101} alt="flower" />
      <br />
      <p className="m-3"><b>2. Upcycled Glass Jar Lanterns:</b></p>
      <p className="m-3">
        Repurpose glass jars into lanterns by decorating them with paint, ribbons, or twine. Place tea light candles or LED lights inside the jars to create a warm and cozy ambiance.
      </p>
      <img className="m-3" src={logo102} alt="flower" />
      <br />
      <p className="m-3"><b>3. Fabric Bunting or Garlands:</b></p>
      <p className="m-3">
        Make bunting or garlands using scrap fabric or old clothing. Cut the fabric into triangles or other shapes, and string them together using twine or ribbon to create colorful and festive decorations.
      </p>
      <br />
      <p className="m-3"><b>4. Nature-inspired Centerpieces:</b></p>
      <p className="m-3">
        Gather natural materials such as pine cones, acorns, leaves, and branches to create rustic centerpieces for tables. Arrange them in vases or bowls along with candles or LED lights for a charming and eco-friendly display.
      </p>
      <br />
      <p className="m-3"><b>5. Woven Wall Hangings:</b></p>
      <p className="m-3">
        Use natural fibers like jute or cotton to create woven wall hangings. Experiment with different weaving techniques to add texture and visual interest to your decor.
      </p>
      <br />
      <p className="m-3"><b>6. Driftwood or Branch Mobiles:</b></p>
      <p className="m-3">
        Collect driftwood or branches from nature and use them to make mobiles. Hang them from a wooden hoop or a sturdy branch using twine or fishing line, and add decorative elements like beads or feathers for extra flair.
      </p>
      <br />
      <p className="m-3"><b>7. Recycled Paper Lanterns:</b></p>
      <p className="m-3">
        Fold and cut recycled paper into intricate lantern designs, then attach them to LED lights or string lights to create eco-friendly and decorative lighting for indoor or outdoor spaces.
      </p>
      <br />
      <p className="m-3"><b>8. Clay Pot Planters:</b></p>
      <p className="m-3">
        Paint or decorate clay pots with eco-friendly paint or decoupage techniques. Plant herbs, succulents, or flowers in the pots and arrange them as table centerpieces or on windowsills for a fresh and natural touch.
      </p>
    </div>
  );
}

export default Mat1;