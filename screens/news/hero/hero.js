"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import TextMarquee from "@/components/text-marquee";
import AnimatedButton from "@/components/animated-button";

export default function Hero() {
  const handleScroll = () => {
    const section = document.querySelector("#news");
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
    </section>
  );
}
