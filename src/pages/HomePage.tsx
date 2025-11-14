import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import { CardsGrid } from "@/components/Cards/InfoCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section id="banner">
        <Banner />
      </section>
      <section id="cards">
        <CardsGrid />
      </section>
      <section id="aboutus">
        <AboutUs />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
