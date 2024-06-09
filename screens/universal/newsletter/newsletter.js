import React from "react";
import cn from "classnames";
import styles from "./newsletter.module.css";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import icons from "@/constants/icons";

export default function Newsletter() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <ScrollAnimatedText size="heading-3">
            Don't miss out on the latest trends, tips, and industry
            news—subscribe now and stay ahead of the curve!
          </ScrollAnimatedText>

          <div className={styles.input}>
            <input
              className={cn("label-large")}
              type="email"
              placeholder="Enter your email address"
            />

            <button className={cn(styles.button)}>{icons.ArrowRight}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
