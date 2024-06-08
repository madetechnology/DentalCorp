import React from "react";
import cn from "classnames";
import styles from "./story.module.css";
import ScrollAnimatedText from "@/components/scroll-animated-text";

export default function Story() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <ScrollAnimatedText size="heading-3">
            We have been dedicated to pushing the boundaries of design and
            development, bringing ideas to life with passion and precision.
          </ScrollAnimatedText>

          <div className={styles.wrapper}>
            <div className={cn("subheading-large", styles.subtitle)}>
              Our story
            </div>

            <div className={styles.column}>
              <p className={cn("paragraph-large", styles.description)}>
                We are a team of passionate designers and developers who are
                dedicated to creating the best websites and mobile applications.
              </p>
              <p className={cn("paragraph-large", styles.description)}>
                Our journey started in 2010 when we were just a small team of
                designers and developers. We have grown over the years and now
                have a team of over 100 people working on various projects.
              </p>
              <p className={cn("paragraph-large", styles.description)}>
                We have worked with some of the biggest brands in the world and
                have created some of the most innovative and creative websites
                and mobile applications.
              </p>
              <p className={cn("paragraph-large", styles.description)}>
                We are always looking for new challenges and opportunities to
                push the boundaries of design and development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
