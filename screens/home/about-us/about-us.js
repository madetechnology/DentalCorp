"use client";

import React from "react";
import cn from "classnames";
import styles from "./about-us.module.css";
import AnimatedButton from "@/components/animated-button";
import ScrollAnimatedText from "@/components/scroll-animated-text";

export default function AboutUs() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <ScrollAnimatedText size="heading-3">
            Timeless. ventures through the digital wilderness, guiding your
            brand to flourish in the vast online ecosystem.
          </ScrollAnimatedText>
          <AnimatedButton>
            <p className={cn("label-large")}>Learn More</p>
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
