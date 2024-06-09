"use client";

import React from "react";
import cn from "classnames";
import styles from "./newsletter.module.css";
import ScrollAnimatedText from "@/components/scroll-animated-text";
import icons from "@/constants/icons";
import Magnetic from "@/components/magnetic";
import { useForm, ValidationError } from "@formspree/react";

export default function Newsletter() {
  const [state, handleSubmit] = useForm("mgeggwjn");

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <ScrollAnimatedText size="heading-3">
            Don't miss out on the latest trends, tips, and industry
            news—subscribe now and stay ahead of the curve!
          </ScrollAnimatedText>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={cn("label-large")}
              type="email"
              placeholder="Enter your email address"
              id="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <Magnetic>
              <button
                className={cn(styles.button)}
                type="submit"
                disabled={state.submitting}
              >
                {icons.ArrowRight}
              </button>
            </Magnetic>
          </form>

          {state.succeeded && (
            <div className={cn("paragraph-small", styles.success)}>
              <p>
                Thank you for subscribing! You'll receive a confirmation email
                shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
