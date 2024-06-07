import React from "react";
import cn from "classnames";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <div className={cn("label-large", styles.logo)}>Timeless.</div>

        <button className={cn("button-stroke-small", styles.button)}>
          Get in touch
        </button>
      </div>
    </header>
  );
}
