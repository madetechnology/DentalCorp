import React from "react";
import cn from "classnames";
import styles from "./scroll-animated-text.module.css";

export default function ScrollAnimatedText({ size, className, children }) {
  return (
    <div>
      <h1 className={cn(size, styles.title, className)}>{children}</h1>
    </div>
  );
}
