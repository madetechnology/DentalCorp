import React from "react";
import cn from "classnames";
import styles from "./works.module.css";
import TextMarquee from "@/components/text-marquee";
import Work from "@/components/work";
import icons from "@/constants/icons";
import Link from "next/link";
import { getSortedWorks } from "@/lib/works";

export default function Works() {
  const works = getSortedWorks();

  return (
    <section id="works" className={cn("section")}>
      <TextMarquee>The Hiring Process. </TextMarquee>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div className={cn("subheading-x-large", styles.title)}>
            Where the magic happens
          </div>
          <p className={cn("paragraph-x-large", styles.description)}>
          Top practices find outstanding Dentist and Dental Assistants with Dental Org. 
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
