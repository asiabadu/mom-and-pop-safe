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
        <Welcome></Welcome>
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
