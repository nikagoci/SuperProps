import React from "react";
import Features from "./Features/Features";
import Audience from "./Audience/Audience";
import Client from "./Client/Client";
import Header from "./Header/Header";
import HowTo from "./HowTo/HowTo";
import Testimonial from "./Testimonial/Testimonial";
import Pricing from "./Pricing/Pricing";
import Author from "./Author/Author";
import Community from "./Community/Community";
import Frequently from "./Frequently/Frequently";
import Business from "./Business/Business";
import Footer from "./Footer/Footer";

const AllPage = () => {
  return (
    <>
      <Header />
      <Client />
      <HowTo />
      <Audience />
      <Features />
      <Testimonial />
      <Pricing />
      <Author />
      <Community />
      <Frequently />
      <Business />
      <Footer />
    </>
  );
};

export default AllPage;
