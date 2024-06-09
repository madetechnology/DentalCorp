import React from "react";
import cn from "classnames";
import styles from "./support.module.css";
import TextMarquee from "@/components/text-marquee";
import NewsPost from "@/components/news-post";
import mock from "@/constants/mock";
import TeamMember from "@/components/team-member";

export default function Support({ members = mock.members }) {
  return (
    <section className={cn("section")}>
      <TextMarquee>Support.</TextMarquee>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("subheading-x-large", styles.title)}>
            Support team
          </div>
          <p className={cn("paragraph-x-large", styles.description)}>
            Our support team is dedicated to ensuring that you receive the
            assistance and guidance you need, whenever you need it.
          </p>
        </div>
      </div>

      <div className={styles.members}>
        {members.slice(4, 6).map((member, index) => (
          <TeamMember key={index} member={member} className={styles.member} />
        ))}
      </div>
    </section>
  );
}
