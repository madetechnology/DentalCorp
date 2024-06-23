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
      <TextMarquee>Our Process.</TextMarquee>

      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <AnimatedButton anchor="services">
            <p className={cn("label-large")}>View services</p>
          </AnimatedButton>
          <p className={cn("paragraph-2x-large", styles.description)}>
            From design to development, strategy to execution, we've got
            everything you need to elevate your digital presence and achieve
            your goals.
          </p>
        </div>
      </div>

      <div className={styles.image}>
        <Mouse className={styles.mouse} />

        <img src="/posts/design-harmony.webp" alt="Hero" />
      </div>
    </section>
  );
}
