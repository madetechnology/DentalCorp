import React from "react";
import cn from "classnames";
import styles from "./approach.module.css";

export default function Approach() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <div className={cn("subheading-large", styles.subtitle)}>
              Approach
            </div>

            <div className={styles.column}>
              <p className={cn("paragraph-large", styles.description)}>
                Our approach to design and development is rooted in
                collaboration, innovation, and excellence. We believe in
                partnering closely with our clients to understand their unique
                needs, goals, and challenges, ensuring that every solution we
                deliver is tailored to their specific requirements.
              </p>

              <div className={cn("subheading-large", styles.subtitle)}>
                Collaborative partnership
              </div>
              <p className={cn("paragraph-large", styles.description)}>
                We view our clients as partners, working hand in hand with them
                throughout the entire project lifecycle. From the initial
                consultation to final delivery, we prioritize open
                communication, transparency, and mutual respect.
              </p>
              <p className={cn("paragraph-large", styles.description)}>
                By fostering a collaborative environment, we're able to leverage
                the collective expertise of both our team and our clients,
                resulting in solutions that truly resonate and drive impact.
              </p>

              <div className={cn("subheading-large", styles.subtitle)}>
                Innovation at the core
              </div>
              <p className={cn("paragraph-large", styles.description)}>
                Innovation is at the heart of everything we do. We're constantly
                exploring new technologies, trends, and methodologies to push
                the boundaries of design and development. Whether it's
                experimenting with emerging design tools, adopting the latest
                coding languages, or implementing cutting-edge techniques, we're
                committed to staying at the forefront of digital innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
