import React from "react";
import cn from "classnames";
import styles from "./news-post.module.css";
import Link from "next/link";

export default function NewsPost({ post }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className={styles.post}>
      <Link href={`/posts/${post.id}`}>
        <div className={styles.image}>
          <img src={post.image} alt="News post" />
        </div>
      </Link>

      <div className={styles.content}>
        <p className={cn("paragraph-medium", styles.date)}>
          {formatDate(post.date)}
        </p>
        <div className={cn("heading-6", styles.title)}>{post.title}</div>
      </div>
    </div>
  );
}
