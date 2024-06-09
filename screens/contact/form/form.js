"use client";

import React from "react";
import cn from "classnames";
import styles from "./form.module.css";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import ContactForm from "@/components/contact-form";

export default function Form() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <ScrollAnimatedText size="heading-3">
            Let's start the conversation and explore how we can help bring your
            digital vision to life.
          </ScrollAnimatedText>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
