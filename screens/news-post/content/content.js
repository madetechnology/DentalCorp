import React from "react";
import cn from "classnames";
import styles from "./content.module.css";

export default function Content({ post }) {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </section>
  );
}
