import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import Columns from "../components/Columns";
import Offer from "../components/Offer";
import Video from "../components/Video";
import Clients from "../components/Clients";

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
      </main>
      <footer></footer>
    </>
  );
}
export default Home;
