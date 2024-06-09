"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import TextMarquee from "@/components/text-marquee";
import AnimatedButton from "@/components/animated-button";
import mock from "@/constants/mock";
import NewsPost from "@/components/news-post";

export default function Hero({ posts = mock.posts }) {
  const handleScroll = () => {
    const section = document.querySelector("#posts");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={cn("section")}>
      <TextMarquee>News.</TextMarquee>
      <div className={cn("container")}>
        <div className={styles.content}>
          <AnimatedButton handleClick={handleScroll}>
            <p className={cn("label-large")}>View more</p>
          </AnimatedButton>
          <p className={cn("paragraph-2x-large", styles.description)}>
            Where we delve into the latest trends, innovations, and best
            practices shaping the digital landscape.
          </p>
        </div>
      </div>

      <div id="posts" className={styles.posts}>
        {posts.map((post, index) => (
          <NewsPost key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
