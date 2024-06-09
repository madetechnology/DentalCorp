import React from "react";
import cn from "classnames";
import styles from "./team-member.module.css";

export default function TeamMember({ member }) {
  return (
    <div className={styles.team_member}>
      <div className={styles.image}>
        <img src={member.image} alt={member.name} />
      </div>

      <div className={styles.content}>
        <div className={cn("heading-6", styles.name)}>{member.name}</div>
        <div className={cn("paragraph-medium", styles.title)}>
          {member.title}
        </div>
      </div>
    </div>
  );
}
