import React from "react";
import cn from "classnames";
import styles from "./services.module.css";
import TextMarquee from "@/components/text-marquee";
import Service from "@/components/service";

const services = [
  {
    number: "01",
    title: "Strategic Recruitment",
    description:
      "Navigate the competitive landscape of dental staffing with confidence. Our strategic insights merge deep industry knowledge with customized recruitment solutions to place top dental assistants and elevate your practice.",
    items: [
      {
        title: "Market Research",
      },
      {
        title: "Digital Strategy",
      },
      {
        title: "Communication Strategy",
      },
    ],
  },
  {
    number: "02",
    title: "Innovative Design",
    description:
      "Where functionality meets healthcare needs. Our platform is designed to breathe life into your staffing strategy, creating visually appealing and user-friendly experiences that connect dental practices with the best assistants, leaving a lasting impression.",
    items: [
      {
        title: "User Experience Design",
      },
      {
        title: "User Interface Design",
      },
      {
        title: "Animation and Interaction Design",
      },
    ],
  },
  {
    number: "03",
    title: "Technical Development",
    description:
      "Turning staffing needs into seamless solutions. Our expert developers innovate the recruitment process, crafting robust platforms that stand the test of time and propel your dental practice forward in the ever-evolving world of healthcare.",
    items: [
      {
        title: "Web Development",
      },
      {
        title: "Mobile Development",
      },
      {
        title: "E-commerce Development",
      },
    ],
  },
];

export default function Services({ extended }) {
  return (
    <section id="services" className={cn("section")}>
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
            <Service key={index} service={service} extended={extended} />
          ))}
        </div>
      </div>
    </section>
  );
}
