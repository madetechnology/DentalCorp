import React from "react";
import cn from "classnames";
import styles from "./fact.module.css";

export default function Fact({ client }) {
  return (
    <div key={client.id} className={styles.fact}>
      <div className={cn("heading-3", styles.title)}>{client.title}</div>
      <div className={cn("paragraph-large", styles.description)}>
        {client.description}
      </div>
    </div>
  );
}
