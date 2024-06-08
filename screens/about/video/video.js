import React from "react";
import cn from "classnames";
import styles from "./video.module.css";
import icons from "@/constants/icons";

export default function Video() {
  return (
    <section className={styles.section}>
      <div className={styles.play_button}>
        <div className={styles.circle}>{icons.PlayRight}</div>
      </div>
    </section>
  );
}
