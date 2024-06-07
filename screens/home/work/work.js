import React from "react";
import cn from "classnames";
import styles from "./work.module.css";
import TextMarquee from "@/components/text-marquee";

export default function Work() {
  return (
    <section className={cn("section")}>
      <TextMarquee>Our Work.</TextMarquee>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("subheading-x-large", styles.title)}>
            Discover our works
          </div>
          <p className={cn("paragraph-x-large", styles.description)}>
            A showcase of digital masterpieces, each a testament to our
            creativity and expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
