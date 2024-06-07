import React from "react";
import Hero from "./hero";
import Layout from "@/components/Layout";
import AboutUs from "./about-us";
import Work from "./work";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Work />
    </Layout>
  );
}
