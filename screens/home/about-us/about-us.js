"use client";

import React from "react";
import cn from "classnames";
import styles from "./about-us.module.css";
import AnimatedButton from "@/components/animated-button";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <ScrollAnimatedText size="heading-3">
          Practices apply to nurses, not the other way round. Flip the script and enjoy the feeling when employers compete for you. It's a refreshing change!
          </ScrollAnimatedText>
          <Link href="/about">
            <AnimatedButton>
              <p className={cn("label-large")}>Learn More</p>
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
