"use client";

import React from "react";
import cn from "classnames";
import styles from "./header.module.css";
import Burger from "../burger";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    label: "Works",
    url: "/works",
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
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link href="/" className={cn("label-large", styles.logo)}>
          Timeless.
        </Link>

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
                className={cn("label-small", styles.link, {
                  [styles.active]: pathname === link.url,
                })}
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
