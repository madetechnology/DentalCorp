import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import Marquee from "react-fast-marquee";
import AnimatedButton from "@/components/animated-button";
import Mouse from "@/components/mouse";
import icons from "@/constants/icons";
import Magnetic from "@/components/magnetic";

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: icons.Instagram,
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
  {
    name: "Facebook",
    url: "https://www.facebook.net/",
    icon: icons.Facebook,
  },
];

export default function Hero() {
  return (
    <section className={cn("section")}>
      <div className={styles.container}>
        <Marquee gradient={true} autoFill className={styles.marquee}>
          <h1 className={cn("hero", styles.title)}>Timeless.</h1>
        </Marquee>

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

        <div className={styles.image}>
          <Mouse className={styles.mouse} />

          <img src="/images/hero-image.webp" alt="Hero" />
        </div>
      </div>
    </section>
  );
}
