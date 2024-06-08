import React from "react";
import cn from "classnames";
import styles from "./footer.module.css";
import TextMarquee from "../text-marquee";

export default function Footer() {
  return (
    <section className={cn("section", styles.section)}>
      <TextMarquee gradient={false} color="var(--white)">
        GET IN TOUCH.
      </TextMarquee>
      <div className={cn("container")}>
        <div>Footer</div>
      </div>
    </section>
  );
}
