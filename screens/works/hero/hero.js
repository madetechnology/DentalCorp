import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import TextMarquee from "@/components/text-marquee";
import AnimatedButton from "@/components/animated-button";
import Work from "@/components/work";
import { getSortedWorks } from "@/lib/works";

export default function Hero() {
  const works = getSortedWorks();
  return (
    <section className={cn("section")}>
      <TextMarquee>Our work.</TextMarquee>
      <div className={cn("container")}>
        <div className={styles.content}>
          <AnimatedButton anchor="works">
            <p className={cn("label-large")}>See our work</p>
          </AnimatedButton>
          <p className={cn("paragraph-2x-large", styles.description)}>
            We design and build digital products that solve real problems. Our
            work is a blend of strategy, design, and technology.
          </p>
        </div>

        <div id="works" className={styles.works}>
          {works.map((work) => (
            <Work key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
