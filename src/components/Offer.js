import React from "react";
import codePic from "../assets/code.jpg";
function Offer() {
  return (
    <div className="offer-section">
      <div className="offer-image-div">
        <img
          src={codePic}
          alt="laptop with code editor"
          className="offer-image"
        ></img>
      </div>
      <div className="offer-text-div">
        <div className="offer-text">
          <h2>services</h2>
          <span className="horizontal-line">
            <hr></hr>
          </span>
          <p>
            Cupcake ipsum dolor sit amet chocolate cake chocolate. Croissant
            tootsie roll pudding fruitcake jelly-o oat cake carrot cake. Toffee
            caramels icing. Icing pudding I love sugar plum apple pie dragée
            candy lollipop. Fruitcake chocolate cake pastry I love marzipan
            lemon drops sweet roll. Sweet roll lemon drops gummi bears. Oat cake
            jelly beans sugar plum.
          </p>
          <p>Cupcake ipsum dolor sit amet chocolate cake chocolate.</p>
          <p>Cupcake ipsum dolor sit amet chocolate cake chocolate.</p>
          <p>Cupcake ipsum dolor sit amet chocolate cake chocolate.</p>
        </div>
      </div>
    </div>
  );
}
export default Offer;
