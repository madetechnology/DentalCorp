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
      "Craft beautiful, engaging experiences that inspire your audience and drive growth. Our design team blends form and function to bring your brand to life.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Build a solid foundation with a custom solution designed and developed to meet your unique needs. Our team of experts will bring your vision to life.",
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
