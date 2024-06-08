import Layout from "@/components/Layout";
import Hero from "./hero";
import Clients from "../universal/clients";
import CTA from "../universal/cta";

export default function WorksPage() {
  return (
    <Layout>
      <Hero />
      <Clients />
      <CTA />
    </Layout>
  );
}
