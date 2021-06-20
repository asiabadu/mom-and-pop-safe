import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <header className="home-header">
        <Nav></Nav>
        <Header></Header>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
export default Home;
