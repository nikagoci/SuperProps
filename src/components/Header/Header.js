import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <section id="header">
      <div className="banner" />
      <Navbar />
      <Hero />
    </section>
  );
};

export default Header;
