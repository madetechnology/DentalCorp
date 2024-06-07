"use client";

import React from "react";
import cn from "classnames";
import styles from "./about-us.module.css";
import AnimatedButton from "@/components/animated-button";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div>
            <motion.h1 className={cn("heading-3", styles.title)}>
              Timeless. ventures through the digital wilderness, guiding your
              brand to flourish in the vast online ecosystem.
            </motion.h1>
          </div>
          <AnimatedButton>
            <p className={cn("label-large")}>Learn More</p>
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
