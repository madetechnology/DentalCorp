import React from "react";
import cn from "classnames";
import styles from "./slogan.module.css";
import icons from "@/constants/icons";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import Link from "next/link";

export default function Slogan() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <ScrollAnimatedText size="hero-2" className={styles.title}>
            Traversing the digital wilderness is our expertise.
          </ScrollAnimatedText>

          <Link href="/contact" className={cn("button-stroke", styles.button)}>
            Get in touch {icons.ArrowRight}
          </Link>
        </div>
      </div>
    </section>
  );
}
