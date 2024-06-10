import React from "react";
import cn from "classnames";
import styles from "./related-works.module.css";
import TextMarquee from "@/components/text-marquee";
import Work from "@/components/work";
import icons from "@/constants/icons";
import Link from "next/link";
import { getSortedWorks } from "@/lib/works";

export default function RelatedWorks() {
  const works = getSortedWorks();

  return (
    <section id="works" className={cn("section")}>
      <TextMarquee>Related.</TextMarquee>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div className={cn("subheading-x-large", styles.title)}>
            Related Works
          </div>
          <p className={cn("paragraph-x-large", styles.description)}>
            Explore more of our work and see how we helped our clients achieve
            their goals.
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
