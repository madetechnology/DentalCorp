import Layout from "@/components/Layout";
import Hero from "./hero";
import Content from "./content";

export default function NewsPostPage({ post }) {
  return (
    <Layout>
      <Hero post={post} />
      <Content post={post} />
    </Layout>
  );
}
