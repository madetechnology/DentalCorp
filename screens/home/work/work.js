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
          <div>Hello</div>
        </div>
      </div>
    </section>
  );
}
