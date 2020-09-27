import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const ComingSoon = () => {
  return (
    <Hero>
      <Banner title="Coming Soon" subtitle="Stay Tuned, We're bringing more your way ">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default ComingSoon;
