import React from "react";
import cn from "classnames";
import styles from "./clients.module.css";
import TextMarquee from "@/components/text-marquee";
import logos from "@/constants/logos";

const clients = [
  {
    id: 1,
    name: "ACMU",
    logo: logos.Acmu,
  },
  {
    id: 2,
    name: "Miro",
    logo: logos.Miro,
  },
  {
    id: 3,
    name: "Big fish",
    logo: logos.BigFish,
  },
  {
    id: 4,
    name: "Mir",
    logo: logos.Mir,
  },
  {
    id: 5,
    name: "Colab",
    logo: logos.Colab,
  },
  {
    id: 6,
    name: "The verge",
    logo: logos.Theverge,
  },
  {
    id: 7,
    name: "Hey",
    logo: logos.Hey,
  },
  {
    id: 8,
    name: "Vise",
    logo: logos.Vise,
  },
];

export default function Clients() {
  return (
    <section className={cn("section", styles.section)}>
      <TextMarquee>Clients.</TextMarquee>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("subheading-x-large", styles.title)}>
            Partnerships
          </div>
          <p className={cn("paragraph-x-large", styles.description)}>
            We are proud to work with a diverse range of clients, from small
            businesses to large corporations. Our partnerships are built on
            trust, reliability, and a commitment to quality.
          </p>
        </div>

        <div className={styles.clients}>
          {clients.map((client) => (
            <div key={client.id} className={styles.client}>
              {client.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
