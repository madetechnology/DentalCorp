"use client";

import React from "react";
import cn from "classnames";
import styles from "./header.module.css";
import Burger from "../burger";

const links = [
  {
    label: "Work",
    url: "/work",
  },
  {
    label: "About",
    url: "/search",
  },
  {
    label: "Services",
    url: "/services",
  },
  {
    label: "Approach",
    url: "/approach",
  },
  {
    label: "Insights",
    url: "/insights",
  },
];

export default function Header() {
  const [visibleNav, setVisibleNav] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <div className={cn("label-large", styles.logo)}>Timeless.</div>

        <nav
          className={cn(styles.nav, {
            [styles.active]: visibleNav,
          })}
        >
          <div className={styles.links}>
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className={cn("label-small", styles.link)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className={styles.wrapper}>
          <button className={cn("button-stroke-small", styles.button)}>
            Get in touch
          </button>

          <Burger
            className={styles.burger}
            visibleNav={visibleNav}
            setVisibleNav={setVisibleNav}
          />
        </div>
      </div>
    </header>
  );
}
