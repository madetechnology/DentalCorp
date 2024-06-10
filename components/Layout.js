"use client";

import React from "react";
import Header from "./header";
import Footer from "./footer";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export default function Layout({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Header />
        {children}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
