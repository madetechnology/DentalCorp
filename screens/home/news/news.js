import React from "react";
import cn from "classnames";
import styles from "./news.module.css";
import TextMarquee from "@/components/text-marquee";
import NewsPost from "@/components/news-post";

const posts = [
  {
    id: 1,
    image: "/posts/front-end-trends.webp",
    title: "Front-end trends",
    description:
      "Learn about the latest front-end trends and how they can help you build better websites.",
    date: "2024-08-01",
  },
  {
    id: 2,
    image: "/posts/ui-design-essentials.webp",
    title: "UI design essentials",
    description:
      "Discover the essentials of UI design and how they can help you create better user experiences.",
    date: "2024-08-04",
  },
  {
    id: 3,
    image: "/posts/design-harmony.webp",
    title: "Design harmony",
    description:
      "Learn how to create design harmony and why it's important for your projects.",
    date: "2024-08-07",
  },
  {
    id: 4,
    image: "/posts/performance-boost.webp",
    title: "Performance boost",
    description:
      "Discover how to boost your website's performance and make it load faster.",
    date: "2024-08-10",
  },
];

export default function News() {
  return (
    <section className={cn("section")}>
      <TextMarquee>News.</TextMarquee>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("subheading-x-large", styles.title)}>
            Stay informed, stay ahead
          </div>
          <p className={cn("paragraph-x-large", styles.description)}>
            We are a team of creatives who are excited about unique ideas and
            help digital and fin-tech companies to create amazing identity by
            crafting top-notch UI/UX.
          </p>
        </div>
      </div>

      <div className={styles.posts}>
        {posts.map((post, index) => (
          <NewsPost key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
