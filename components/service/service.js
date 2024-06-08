import React from "react";
import cn from "classnames";
import styles from "./service.module.css";

export default function Service({ service }) {
  return (
    <div className={styles.service}>
      <h1 className={cn("hero", styles.number)}>{service.number}</h1>

      <div className={styles.breakline} />

      <h2 className={cn("heading-1", styles.title)}>{service.title}</h2>
      <p className={cn("paragraph-large", styles.description)}>
        {service.description}
      </p>
    </div>
  );
}
