import Layout from "@/components/Layout";
import Hero from "./hero";
import Story from "./story";
import Slogan from "../universal/slogan";
import Video from "./video";
import Team from "./team";

export default function AboutPage() {
  return (
    <Layout>
      <Hero />
      <Story />
      <Slogan />
      <Video />
      <Team />
    </Layout>
  );
}
