import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <section id="banner">
        <Banner />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
