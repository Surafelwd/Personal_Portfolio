"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import React from "react";

export default function MotionProvider({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* ✅ Route transition wrapper */}
      <motion.div
        key={pathname} // unique per route
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* ✅ Ensure all children inside also have unique keys */}
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { key: child.key ?? index })
            : child
        )}
      </motion.div>
    </AnimatePresence>
  );
}
