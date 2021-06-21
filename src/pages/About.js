import React from "react";
import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import MapComp from "../components/Map";
import Divided from "../components/Divided";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about">
      <Nav></Nav>
      <header className="about-header"></header>
      <Welcome
        header="we are a team of dreamers and builders"
        text="Based in the heart of Ashton, Idaho, our team of developers, security specialists and data analysts share years of experience in building simple and human consumer products. Together, our goal is to create a world of frictionless and intuitive experiences."
      ></Welcome>
      <MapComp></MapComp>
      <Divided
        class="divided-div right-divided"
        title="our story"
        text="Cupcake ipsum dolor sit amet carrot cake cake topping. Cake muffin cake candy. Dessert jelly beans soufflé cake marshmallow sugar plum I love I love. Gingerbread muffin sweet roll fruitcake. Jelly-o oat cake jujubes chocolate sweet roll cotton candy gummies. Dragée marshmallow dessert cotton candy bonbon candy canes. udding caramels macaroon jelly I love pie gummies bear claw jelly. Pastry cotton candy oat cake croissant I love lollipop pie. Chocolate bar I love jelly soufflé croissant powder sugar plum I love. Sweet brownie carrot cake cheesecake liquorice cotton candy pudding pie ice cream."
      ></Divided>
      <Divided
        class="divided-div left-divided"
        title="how we think"
        text="Tootsie roll pudding chocolate bar pie chocolate bar. Biscuit candy apple pie gingerbread sweet carrot cake candy tart. Pudding caramels macaroon jelly I love pie gummies bear claw jelly. Pastry cotton candy oat cake croissant I love lollipop pie. Chocolate bar I love jelly soufflé croissant powder sugar plum I love. Sweet brownie carrot cake cheesecake liquorice cotton candy pudding pie ice cream. Dessert I love icing candy muffin tootsie roll jelly-o macaroon chocolate. Candy cookie dragée cupcake carrot cake biscuit marzipan croissant tiramisu. Donut pastry sugar plum oat cake jelly-o powder chocolate bar liquorice. Muffin halvah sugar plum marshmallow apple pie oat cake."
      ></Divided>
      <Footer></Footer>
    </div>
  );
}
export default About;
