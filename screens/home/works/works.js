import React from "react";
import cn from "classnames";
import styles from "./works.module.css";
import TextMarquee from "@/components/text-marquee";
import Work from "@/components/work";
import icons from "@/constants/icons";

const works = [
  {
    title: "Dogma",
    description:
      "A modern, minimalist design that showcases your brand in the best possible light.",
    image: "/works/dogma.webp",
    href: "/works/dogma",
  },
  {
    title: "Elysium",
    description:
      "A sleek, sophisticated design that makes your brand stand out from the rest.",
    image: "/works/bonair.webp",
    href: "/works/elysium",
  },
  {
    title: "Polaris",
    description:
      "A clean, contemporary design that puts your brand front and center.",
    image: "/works/polaris.webp",
  },
  {
    title: "Aurora",
    description:
      "A fresh, modern design that captures the essence of your brand.",
    image: "/works/aurora.webp",
  },
];

export default function Works() {
  return (
    <section id="works" className={cn("section")}>
      <TextMarquee>Our work.</TextMarquee>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div className={cn("subheading-x-large", styles.title)}>
            Where the magic happens
          </div>
          <p className={cn("paragraph-x-large", styles.description)}>
            A showcase of digital masterpieces, each a testament to our
            creativity and expertise.
          </p>
        </div>

        <div className={styles.works}>
          {works.map((work, index) => (
            <Work key={index} work={work} />
          ))}
        </div>

        <button className={cn("button-stroke", styles.button)}>
          View All
          {icons.ArrowRight}
        </button>
      </div>
    </section>
  );
}
