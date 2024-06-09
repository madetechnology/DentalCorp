import React from "react";
import cn from "classnames";
import styles from "./statement.module.css";
import ScrollAnimatedText from "@/components/scroll-animated-text";

export default function Statement() {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <ScrollAnimatedText size="heading-3">
            We offer a comprehensive range of services to help you thrive in the
            digital landscape.
          </ScrollAnimatedText>
        </div>
      </div>
    </section>
  );
}
