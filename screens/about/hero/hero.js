"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import AnimatedButton from "@/components/animated-button";
import Mouse from "@/components/mouse";
import icons from "@/constants/icons";
import Magnetic from "@/components/magnetic";
import TextMarquee from "@/components/text-marquee";

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: icons.Instagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: icons.Twitter,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/",
    icon: icons.Linkedin,
  },

  {
    name: "Dribbble",
    url: "https://dribbble.com/",
    icon: icons.Dribbble,
  },
];

export default function Hero() {
  const handleScroll = () => {
    const section = document.querySelector("#works");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={cn("section")}>
      <TextMarquee>About us.</TextMarquee>

      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <AnimatedButton handleClick={handleScroll}>
            <p className={cn("label-large")}>Learn more</p>
          </AnimatedButton>
          <p className={cn("paragraph-2x-large", styles.description)}>
            Where creativity meets technology. We are a digital agency that
            specializes in creating custom solutions for businesses that want to
            grow online.
          </p>
        </div>

        <div className={styles.stack}>
          <p className={cn("paragraph-large", styles.text)}>Find us on:</p>

          <div className={styles.socials}>
            {socials.map((social, index) => (
              <Magnetic>
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  {social.icon}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <Mouse className={styles.mouse} />

        <img src="/posts/ui-design-essentials.webp" alt="Hero" />
      </div>
    </section>
  );
}
