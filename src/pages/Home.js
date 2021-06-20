import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Welcome from "../components/Welcome";

function Home() {
  return (
    <>
      <header className="home-header">
        <Nav></Nav>
        <Header></Header>
      </header>
      <main>
        <Welcome></Welcome>
      </main>
      <footer></footer>
    </>
  );
}
export default Home;
