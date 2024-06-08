import React from "react";
import cn from "classnames";
import styles from "./services.module.css";
import TextMarquee from "@/components/text-marquee";
import Service from "@/components/service";

const services = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Navigate the digital landscape with confidence. Our strategic insights pave the path to success, blending market expertise with tailored solutions to elevate your brand.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Where creativity meets functionality. Our designs breathe life into ideas, crafting visually stunning experiences that captivate audiences and leave a lasting impression.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Turning concepts into reality. Our expert developers bring innovation to life, crafting robust solutions that stand the test of time and propel your brand forward in the digital realm.",
  },
];

export default function Services() {
  return (
    <section className={cn("section")}>
      <TextMarquee>Services.</TextMarquee>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("subheading-x-large", styles.title)}>
            What we do
          </div>
          <p className={cn("paragraph-x-large", styles.description)}>
            We offer a range of services to help you achieve your digital goals.
          </p>
        </div>

        <div className={styles.services}>
          {services.map((service, index) => (
            <Service key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
