import React from "react";
import Hero from "./hero";
import Layout from "@/components/Layout";
import AboutUs from "./about-us";
import Works from "./works";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Works />
    </Layout>
  );
}
