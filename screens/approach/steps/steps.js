import React from "react";
import cn from "classnames";
import styles from "./steps.module.css";
import ScrollAnimatedText from "@/components/scroll-animated-text";

const steps = [
  {
    id: 1,
    title: "Discovery Phase",
    description:
      "We kick off every project with an in-depth discovery phase. We take the time to understand your goals, objectives, and vision for the project. Through detailed discussions and thorough research, we gain valuable insights into your industry, target audience, and competitive landscape.",
  },
  {
    id: 2,
    title: "Collaborative Planning",
    description:
      "With a clear understanding of your objectives, we collaborate closely with you to develop a customized strategy tailored to your specific needs and goals. We work hand in hand with you to define project milestones, establish timelines, and allocate resources effectively.",
  },
  {
    id: 3,
    title: "Creative Execution",
    description:
      "Armed with a solid strategy, our talented team of designers, developers, and strategists gets to work bringing your vision to life. We combine creativity, innovation, and expertise to craft solutions that are not only visually stunning and technically robust, but also highly effective in achieving your objectives.",
  },
  {
    id: 4,
    title: "Continuous Improvement",
    description:
      "Our commitment to your success doesn't end with project delivery. We believe in continuous optimization, constantly monitoring and refining our solutions to ensure they remain effective and relevant in an ever-changing digital landscape. We provide ongoing support and guidance, helping you navigate challenges and seize opportunities as they arise.",
  },
];

export default function Steps() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <ScrollAnimatedText size="heading-3">
            We believe that success is not just about delivering great
            results—it's about how we get there.
          </ScrollAnimatedText>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.id} className={styles.step}>
              <h3 className={cn("subheading-x-large", styles.title)}>
                {step.title}
              </h3>
              <p className={cn("paragraph-large", styles.description)}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
