import React from "react";
import Hero from "./hero";
import Layout from "@/components/Layout";
import AboutUs from "./about-us";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
    </Layout>
  );
}
