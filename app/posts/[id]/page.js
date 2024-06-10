import { getPostData } from "@/lib/posts";
import NewsPostPage from "@/screens/news-post";

export default async function NewsPost({ params }) {
  const post = await getPostData(params.id);

  console.log("Post data: ", post);
  return <NewsPostPage post={post} />;
}
