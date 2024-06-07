import React from "react";
import cn from "classnames";
import styles from "./text-marquee.module.css";
import Marquee from "react-fast-marquee";

export default function TextMarquee({ children }) {
  return (
    <Marquee gradient={true} autoFill={true} speed={100}>
      <h1 className={cn("hero", styles.title)}>{children}</h1>
    </Marquee>
  );
}
