import React from "react";
import cn from "classnames";
import styles from "./content.module.css";
import icons from "@/constants/icons";
import Link from "next/link";
import Mouse from "@/components/mouse";

export default function Content({ post }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

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
