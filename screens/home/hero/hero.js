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
  return (
    <section className={cn("section")}>
      <TextMarquee>Timeless.</TextMarquee>

      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <AnimatedButton>
            <p className={cn("label-large")}>See our work</p>
          </AnimatedButton>
          <p className={cn("paragraph-2x-large", styles.description)}>
            Welcome to our design and development studio, where creativity meets
            expertise to shape digital brilliance.
          </p>
        </div>

        <div className={styles.stack}>
          <p className={cn("paragraph-large", styles.text)}>Find me on:</p>

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

        <img src="/images/hero-image.webp" alt="Hero" />
      </div>
    </section>
  );
}
