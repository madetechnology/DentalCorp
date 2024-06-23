import React from "react";
import Hero from "./hero";
import Layout from "@/components/Layout";
import AboutUs from "./about-us";
import Works from "./works";
import Services from "../universal/services";
import Clients from "../universal/clients";
import Slogan from "../universal/slogan";
import News from "./news";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Works />
      <Services />
      {/* <Clients /> */}
      <Slogan />
      <News />
    </Layout>
  );
}
