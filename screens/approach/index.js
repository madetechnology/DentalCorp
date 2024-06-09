import Layout from "@/components/Layout";
import Hero from "./hero";
import Steps from "./steps";
import Slogan from "../universal/slogan";
import Facts from "../services/facts";
import CTA from "../universal/cta";

export default function ApproachPage() {
  return (
    <Layout>
      <Hero />
      <Steps />
      <Slogan />
      <Facts />
      <CTA />
    </Layout>
  );
}
