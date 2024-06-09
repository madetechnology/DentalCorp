"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import AnimatedButton from "@/components/animated-button";
import Mouse from "@/components/mouse";
import TextMarquee from "@/components/text-marquee";

export default function Hero() {
  const handleScroll = () => {
    const section = document.querySelector("#works");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={cn("section")}>
      <TextMarquee>Contact.</TextMarquee>

      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <AnimatedButton handleClick={handleScroll}>
            <p className={cn("label-large")}>Reach out</p>
          </AnimatedButton>
          <p className={cn("paragraph-2x-large", styles.description)}>
            We'd love to hear from you! Whether you have a project in mind, a
            question about our services, or just want to say hello, we're here
            to help.
          </p>
        </div>
      </div>

      <div className={styles.image}>
        <Mouse className={styles.mouse} />

        <img src="/posts/responsive-design.webp" alt="Responsive design" />
      </div>
    </section>
  );
}
