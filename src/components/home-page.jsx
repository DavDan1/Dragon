import React from "react";
import Layout from "./shared/layout";
import Hero from "./hero/hero";
import MainSection from "./main-section/main-section";
import FeaturedCollection from "./featured-collection/featured-collection";
import CustomerReviews from "./carousel/customer-reviews";

const HomePage = ({ children }) => {

  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
        <CustomerReviews/>
      </Layout>
    </>
  )
}

export default HomePage;