import React from "react";
import cn from "classnames";
import styles from "./service.module.css";

export default function Service({ service, extended = false }) {
  return (
    <div className={styles.service}>
      <h1 className={cn("hero", styles.number)}>{service.number}</h1>

      <div className={styles.breakline} />

      <div className={styles.content}>
        <h2 className={cn("heading-1", styles.title)}>{service.title}</h2>
        <p className={cn("paragraph-large", styles.description)}>
          {service.description}
        </p>

        {extended && (
          <div className={styles.items}>
            {service.items.map((item, index) => (
              <div key={index} className={styles.item}>
                <h3 className={cn("paragraph-large", styles.item_title)}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
