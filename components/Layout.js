"use client";

import React from "react";
import Header from "./header";
import Footer from "./footer";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
  enter: { clipPath: "circle(100% at 50% 50%)", opacity: 1 },
  exit: { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
};

export default function Layout({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          boverflow: "hidden",
          position: "relative",
        }}
      >
        <Header />
        {children}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
