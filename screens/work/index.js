import Layout from "@/components/Layout";
import Hero from "./hero";
import Content from "./content";
import RelatedWorks from "./related-works";

export default function WorkPage({ work }) {
  return (
    <Layout>
      <Hero work={work} />
      <Content work={work} />
      <RelatedWorks work={work} />
    </Layout>
  );
}
