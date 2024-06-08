import React from "react";
import cn from "classnames";
import styles from "./slogan.module.css";
import icons from "@/constants/icons";

export default function Slogan() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("hero-2", styles.title)}>
            Traversing the digital wilderness is our expertise.
          </div>

          <button className={cn("button-stroke", styles.button)}>
            Get in touch {icons.ArrowRight}
          </button>
        </div>
      </div>
    </section>
  );
}
