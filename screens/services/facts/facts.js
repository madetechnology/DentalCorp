import React from "react";
import cn from "classnames";
import styles from "./facts.module.css";
import TextMarquee from "@/components/text-marquee";
import Fact from "@/components/fact";

const facts = [
  {
    id: 1,
    title: "100+",
    description: "Projects completed",
  },
  {
    id: 2,
    title: "95%",
    description: "Satisfaction rate",
  },
  {
    id: 3,
    title: "10x",
    description: "Results",
  },
  {
    id: 4,
    title: "5*",
    description: "Customer reviews",
  },
  {
    id: 5,
    title: "100%",
    description: "Client retention",
  },
  {
    id: 6,
    title: "50+",
    description: "Team members",
  },
];

export default function Facts() {
  return (
    <section className={cn("section", styles.section)}>
      <TextMarquee>Facts.</TextMarquee>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("subheading-x-large", styles.title)}>
            x10 the results
          </div>
          <p className={cn("paragraph-x-large", styles.description)}>
            From startups to industry giants, explore how we've helped
            businesses like yours thrive in the digital landscape.
          </p>
        </div>

        <div className={styles.facts}>
          {facts.map((client) => (
            <Fact key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
