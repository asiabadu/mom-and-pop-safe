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
        header="who are we"
        text="Mom-and-Pop-Safe was started in 2020 by three women with a passion for IT. We are based in the heart of 
        Ashton, Idaho - the land of potatoes, boars and slow Internet connection. Let us shortly introduce ourselves:"
      ></Welcome>
      <MapComp></MapComp>
      <Divided
        class="divided-div right-divided"
        title="our story"
        text="All three of us used to work for big corporations and we have dealt with countless 
        cases of cyberattacks, which were possible to spot and prevent thanks to expensive 
        software, skilled professionals within the company and proper training. 
        
        The idea of Mom-and-Pop-Safe was inspired by Kasia's parents, who run a small bookshop 
        and during the COVID-19 pandemic moved their sales online. For their business, and countless 
        similar companies, a data breach could mean bankruptcy - and without the means of multinational 
        corporations, the owners have a hard time ensuring their business is protected on all fronts. 
        While not all small business owners are lucky enough to have a security-specialist-daughter 
        who can help protect their family business from cyberattacks, we believe everyone has the right 
        to focus on providing goods and services to their customers without losing sleep 
        over the online security of their business."
      ></Divided>
      <Divided
        class="divided-div left-divided"
        title="our mission"
        text="Enter Mom-and-Pop-Safe, a small business dedicated to making the Internet a safer place 
        for other small businesses. We offer a wide range of services from security software 
        and network protection to remote backup services, to Security Awareness trainings and consulting. 
        Our mission is to provide a comprehensive array of security measures tailored to 
        each of our clients' needs, which is why we offer <link to OUR SERVICES> three different options, 
        designed to fit different types of businesses. And we calculate the costs based on the number 
        of devices - so that any family-run shop or a freshly founded start-up can afford our services.
        
        The Internet is not only for the big players. Why should cybersecurity be any different?"
      ></Divided>
      <Footer></Footer>
    </div>
  );
}
export default About;
/* Kasia Badura: CEO of Mom-and-Pop-Safe, vegan, a mother to an 8-year old. Passionate about zero waste, prefers tea over coffee and it has absolutely nothing to do with her interest in British literature.
Anna Jarosz: Security specialist, knitter, struggling minimalist. Has one small but very long wiener dog. A big advocate of pineapple on pizza and nothing will convince her otherwise.
Joanna Skrzypczak:  Front-end developer by day, party animal by night. And by party animal we mean a mother of 3 inside cats, 
3 outside cats and a very big dog (Giant Shnauzer). Loves chocolate, computer games and insane amounts of coffee.*/