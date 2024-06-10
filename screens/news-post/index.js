import Layout from "@/components/Layout";
import Hero from "./hero";
import Content from "./content";
import RelatedPosts from "./related-posts";

export default function NewsPostPage({ post }) {
  return (
    <Layout>
      <Hero post={post} />
      <Content post={post} />
      <RelatedPosts post={post} />
    </Layout>
  );
}
