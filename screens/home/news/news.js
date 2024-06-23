import React from "react";
import cn from "classnames";
import styles from "./news.module.css";
import TextMarquee from "@/components/text-marquee";
import NewsPost from "@/components/news-post";
import { getSortedPosts } from "@/lib/posts";

export default function News() {
  const posts = getSortedPosts();

  console.log(posts);

  return (
    <section className={cn("section")}>
      <TextMarquee>News.</TextMarquee>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("subheading-x-large", styles.title)}>
            Stay informed, stay ahead
          </div>
          <p className={cn("paragraph-x-large", styles.description)}>
          We are a dedicated team passionate about innovation and excellence in the dental industry. We specialize in helping dental practices and organizations strengthen their teams by connecting them with top-tier talent. Our focus is on creating seamless recruitment experiences that not only meet the unique needs of our clients but also ensure a perfect fit for their practice’s culture and values.
          </p>
        </div>
      </div>

      <div className={styles.posts}>
        {posts.slice(0, 4).map((post, index) => (
          <NewsPost key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
