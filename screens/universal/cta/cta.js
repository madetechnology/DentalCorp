import React from "react";
import cn from "classnames";
import styles from "./cta.module.css";
import icons from "@/constants/icons";
import ScrollAnimatedText from "@/components/scroll-animated-text";

export default function CTA() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <ScrollAnimatedText size="heading-3">
            Contact us today to schedule a consultation and discover how we can
            help you achieve your goals.
          </ScrollAnimatedText>

          <button className={cn("button-stroke", styles.button)}>
            Reach out {icons.ArrowRight}
          </button>
        </div>
      </div>
    </section>
  );
}
