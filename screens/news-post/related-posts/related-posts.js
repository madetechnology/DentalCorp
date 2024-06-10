import React from "react";
import cn from "classnames";
import styles from "./related-posts.module.css";
import TextMarquee from "@/components/text-marquee";
import { getSortedPosts } from "@/lib/posts";
import NewsPost from "@/components/news-post";

export default function RelatedPosts({ post }) {
  const posts = getSortedPosts();
  const currentPostId = post.id;

  const relatedPosts = posts
    .filter((post) => post.id !== currentPostId)
    .slice(0, 4);

  return (
    <section className={cn("section", styles.section)}>
      <TextMarquee>Related.</TextMarquee>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("subheading-x-large", styles.title)}>
            We help businesses grow.
          </div>
          <p className={cn("paragraph-x-large", styles.description)}>
            From startups to industry giants, explore how we've helped
            businesses like yours thrive in the digital landscape.
          </p>
        </div>
      </div>

      <div className={styles.posts}>
        {relatedPosts.map((post) => (
          <NewsPost key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
