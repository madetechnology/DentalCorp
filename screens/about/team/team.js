import React from "react";
import cn from "classnames";
import styles from "./team.module.css";
import TextMarquee from "@/components/text-marquee";
import TeamMember from "@/components/team-member";

const members = [
  {
    id: 1,
    name: "Jamez Rodriguez",
    title: "Senior developer",
    image: "/images/team/james-rodriguez.webp",
  },
  {
    id: 2,
    name: "Emily Chen",
    title: "UI/UX designer",
    image: "/images/team/emily-chen.webp",
  },
  {
    id: 3,
    name: "David Patel",
    title: "Product manager",
    image: "/images/team/david-patel.webp",
  },
  {
    id: 4,
    name: "Sara Miller",
    title: "Software engineer",
    image: "/images/team/sarah-miller.webp",
  },
];

export default function Team() {
  return (
    <section className={cn("section")}>
      <TextMarquee>Our team.</TextMarquee>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("subheading-x-large", styles.title)}>
            Meet the team
          </div>
          <p className={cn("paragraph-x-large", styles.description)}>
            We are a group of designers, engineers, and product managers who are
            dedicated to creating the best possible experience for our users.
          </p>
        </div>
      </div>

      <div className={styles.members}>
        {members.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
