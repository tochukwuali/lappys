import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Footer from "../components/Footer"
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Reliable Laptops"
          subtitle="get the best deals as low as 80K"
        >
          <Link to="/rooms" className="btn-primary">
            view devices
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <Footer />
    </>
  );
};

export default home;
