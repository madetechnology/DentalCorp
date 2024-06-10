import Layout from "@/components/Layout";
import Hero from "./hero";
import Content from "./content";

export default function WorkPage({ work }) {
  return (
    <Layout>
      <Hero work={work} />
      <Content work={work} />
    </Layout>
  );
}
