import Banner from "@/components/Banner";
import { CardsGrid } from "@/components/Cards/InfoCard";
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
      <Footer />
    </div>
  );
};

export default HomePage;
