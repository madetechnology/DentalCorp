import React from "react";
import cn from "classnames";
import styles from "./footer.module.css";
import TextMarquee from "../text-marquee";

const links = [
  {
    title: "Services",
    links: [
      { title: "Work", url: "/about" },
      { title: "About", url: "/about" },
      { title: "Services", url: "/services" },
      { title: "Approach", url: "/approach" },
      { title: "News", url: "/news" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Facebook", url: "/facebook" },
      { title: "Instagram", url: "/instagram" },
      { title: "Twitter", url: "/twitter" },
      { title: "LinkedIn", url: "/linkedin" },
    ],
  },
];

const guides = [
  { title: "Style guide", url: "/" },
  { title: "Licenses", url: "/" },
  { title: "Changelog", url: "/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className={cn("section", styles.section)}>
        <TextMarquee gradient={false} color="var(--white)">
          GET IN TOUCH.
        </TextMarquee>
        <div className={cn("container", styles.container)}>
          <div className={styles.content}>
            <button className={cn("button-stroke", styles.button)}>
              Get in touch
            </button>
            <div className={cn("paragraph-x-large", styles.description)}>
              Welcome to our design and development studio, where creativity
              meets expertise to shape digital brilliance.
            </div>
          </div>

          <div className={styles.wrapper}>
            {links.map((group) => (
              <div className={styles.column}>
                <div className={cn("subheading-medium", styles.title)}>
                  {group.title}
                </div>
                <div className={styles.links}>
                  {group.links.map((link) => (
                    <a
                      href={link.url}
                      className={cn("label-medium", styles.link)}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.bottom}>
        <div className={cn("container", styles.copyright)}>
          <div className={cn("label-small", styles.copy)}>
            © {currentYear} Timeless - All Rights Reserved.
          </div>

          <div className={styles.guides}>
            {guides.map((guide) => (
              <a href={guide.url} className={cn("label-small", styles.guide)}>
                {guide.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
