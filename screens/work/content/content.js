import React from "react";
import cn from "classnames";
import styles from "./content.module.css";

export default function Content({ work }) {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: work.contentHtml }}
        />
      </div>
    </section>
  );
}
