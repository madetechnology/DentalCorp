import React from "react";
import cn from "classnames";
import styles from "./works.module.css";
import TextMarquee from "@/components/text-marquee";
import Work from "@/components/work";
import icons from "@/constants/icons";
import Link from "next/link";
import mock from "@/constants/mock";

export default function Works({ works = mock.works }) {
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
          {works.slice(0, 4).map((work) => (
            <Work key={work.id} work={work} />
          ))}
        </div>

        <Link href="/works" className={cn("button-stroke", styles.button)}>
          View All
          {icons.ArrowRight}
        </Link>
      </div>
    </section>
  );
}
