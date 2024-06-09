"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import AnimatedButton from "@/components/animated-button";
import Mouse from "@/components/mouse";
import TextMarquee from "@/components/text-marquee";

export default function Hero() {
  const handleScroll = () => {
    const section = document.querySelector("#our-story");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={cn("section")}>
      <TextMarquee>About us.</TextMarquee>

      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <AnimatedButton handleClick={handleScroll}>
            <p className={cn("label-large")}>View our story</p>
          </AnimatedButton>
          <p className={cn("paragraph-2x-large", styles.description)}>
            Where creativity meets technology. We are a digital agency that
            specializes in creating custom solutions for businesses that want to
            grow online.
          </p>
        </div>
      </div>

      <div className={styles.image}>
        <Mouse className={styles.mouse} />

        <img src="/posts/ui-design-essentials.webp" alt="Hero" />
      </div>
    </section>
  );
}
