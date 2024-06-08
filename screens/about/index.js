import Layout from "@/components/Layout";
import Hero from "./hero";
import Story from "./story";
import Slogan from "../universal/slogan";

export default function AboutPage() {
  return (
    <Layout>
      <Hero />
      <Story />
      <Slogan />
    </Layout>
  );
}
