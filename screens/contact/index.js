import Layout from "@/components/Layout";
import Hero from "./hero";
import CTA from "../universal/cta";
import Form from "./form";
import Support from "./support";

export default function ContactPage() {
  return (
    <Layout>
      <Hero />
      <Form />
      <Support />
      <CTA />
    </Layout>
  );
}
