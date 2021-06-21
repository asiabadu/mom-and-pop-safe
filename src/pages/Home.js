import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import Columns from "../components/Columns";
import Offer from "../components/Offer";
import Video from "../components/Video";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <header className="home-header">
        <Nav></Nav>
        <Header></Header>
      </header>
      <main>
        <Welcome
          header="welcome"
          text="Cupcake ipsum dolor sit amet chocolate cake chocolate. Croissant
          tootsie roll pudding fruitcake jelly-o oat cake carrot cake. Toffee
          caramels icing. Icing pudding I love sugar plum apple pie dragée candy
          lollipop. Fruitcake chocolate cake pastry I love marzipan lemon drops
          sweet roll. Sweet roll lemon drops gummi bears. Oat cake jelly beans
          sugar plum."
        ></Welcome>
        <Columns></Columns>
        <Offer></Offer>
        <Video></Video>
        <Clients></Clients>
        <Testimonials></Testimonials>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
export default Home;
