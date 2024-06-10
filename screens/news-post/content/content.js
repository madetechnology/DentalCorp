import React from "react";
import cn from "classnames";
import styles from "./content.module.css";
import icons from "@/constants/icons";
import Link from "next/link";

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
        <div className={styles.content}>
          <div className={cn("paragraph-medium", styles.date)}>
            {formatDate(post.date)}
          </div>
          <h1 className={cn("heading-1", styles.title)}>{post.title}</h1>
          <Link href="/news" className={cn("button-ghost", styles.button)}>
            {icons.ArrowLeft}
            Go back
          </Link>
        </div>
      </div>
    </section>
  );
}