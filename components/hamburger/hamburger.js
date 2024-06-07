import React from "react";
import cn from "classnames";
import styles from "./hamburger.module.css";

export default function Hamburger({ className, visibleNav, setVisibleNav }) {
  return (
    <button
      className={cn(styles.button, className)}
      onClick={() => setVisibleNav(!visibleNav)}
    >
      <div
        className={cn(styles.burger, {
          [styles.active]: visibleNav,
        })}
      ></div>
    </button>
  );
}
