import React from "react";
import cn from "classnames";
import styles from "./work.module.css";
import Magnetic from "../magnetic";

export default function Work({ work }) {
  return (
    <div className={styles.work}>
      <div className={styles.content}>
        <div className={cn("heading-1", styles.title)}>{work.title}</div>
        <p className={cn("paragraph-x-large", styles.description)}>
          {work.description}
        </p>
      </div>

      <div className={styles.image}>
        <Magnetic>
          <div className={styles.wrapper}>
            <button className={cn("label-large", styles.button)}>View</button>
          </div>
        </Magnetic>

        <img src={work.image} alt={work.title} />
      </div>
    </div>
  );
}
