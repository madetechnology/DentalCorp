import React from "react";
import cn from "classnames";
import styles from "./mouse.module.css";

export default function Mouse({ className }) {
  return (
    <div className={cn(styles.mouse, className)}>
      <div className={styles.scroll}>
        <div className={styles.thumb} />
      </div>
    </div>
  );
}
