"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import AnimatedButton from "@/components/animated-button";
import Mouse from "@/components/mouse";
import TextMarquee from "@/components/text-marquee";

export default function Hero() {
  return (
    <section className={cn("section")}>
      <TextMarquee>Approach.</TextMarquee>

      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <AnimatedButton anchor="steps">
            <p className={cn("label-large")}>How we work</p>
          </AnimatedButton>
          <p className={cn("paragraph-2x-large", styles.description)}>
          We are a dedicated team passionate about innovation and excellence in the dental industry. We specialize in helping dental practices and organizations strengthen their teams by connecting them with top-tier talent. Our focus is on creating seamless recruitment experiences that not only meet the unique needs of our clients but also ensure a perfect fit for their practice’s culture and values.
          </p>
        </div>
      </div>

      <div className={styles.image}>
        <Mouse className={styles.mouse} />

        <img src="/posts/performance-boost.webp" alt="Hero" />
      </div>
    </section>
  );
}
