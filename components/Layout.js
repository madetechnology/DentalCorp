"use client";

import React from "react";
import Header from "./header";
import Footer from "./footer";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
  exit: { pathLength: 0, opacity: 0 },
};

export default function Layout({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <motion.svg
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none", // Ensures the SVG doesn't interfere with interactions
          }}
        >
          <motion.path
            d="M0 10 Q 25 0, 50 10 T 100 10"
            fill="transparent"
            stroke="#000"
            strokeWidth="2"
          />
        </motion.svg>
        <Header />
        {children}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
