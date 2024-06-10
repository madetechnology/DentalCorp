import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import AnimatedButton from "@/components/animated-button";
import Mouse from "@/components/mouse";
import TextMarquee from "@/components/text-marquee";

export default function Hero({ work }) {
  return (
    <section className={cn("section")}>
      <TextMarquee>{work.title}.</TextMarquee>

      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <AnimatedButton anchor="works">
            <p className={cn("label-large")}>View details</p>
          </AnimatedButton>
          <p className={cn("paragraph-2x-large", styles.description)}>
            {work.description}
          </p>
        </div>
      </div>

      <div className={styles.image}>
        <Mouse className={styles.mouse} />

        <img src={work.image} alt={work.title} />
      </div>
    </section>
  );
}
