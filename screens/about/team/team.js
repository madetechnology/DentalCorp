import React from "react";
import cn from "classnames";
import styles from "./team.module.css";
import TextMarquee from "@/components/text-marquee";
import TeamMember from "@/components/team-member";
import mock from "@/constants/mock";

export default function Team({ members = mock.members }) {
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
        {members.slice(0, 4).map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
