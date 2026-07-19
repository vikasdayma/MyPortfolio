import React from "react";
import Hero from "./Hero";
import Work from "./Work";
import ContactPage from "./Contact";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col">
        <Work />
        <About />
        <ContactPage />
      </div>
    </div>
  );
};

export default Home;
