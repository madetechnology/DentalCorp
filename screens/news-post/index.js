import Layout from "@/components/Layout";
import Content from "./content";

export default function NewsPostPage({ post }) {
  return (
    <Layout>
      <Content post={post} />
    </Layout>
  );
}
