"use client";

import { useLocale } from "@/app/ClientRootLayout";
import { motion } from "framer-motion";

import React from "react";

function SecondRunningText() {
  const { translations } = useLocale();

  const techServices = translations.second_running_text || [
    "We Are Espercode",
    "We Are Espercode",
    "We Are Espercode",
    "We Are Espercode",
    "We Are Espercode",
    "We Are Espercode",
    "We Are Espercode",
    "We Are Espercode",
    "We Are Espercode",
    "We Are Espercode",
  ];

  return (
    <motion.div
      className="absolute -bottom-14  right-0 left-0 z-10 mt-20 mb-8 overflow-hidden "
      style={{ transform: "rotate(-2deg)", transformOrigin: "center" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <motion.div
        className="bg-gradient-to-r from-green-400 to-green-600 py-2"
        style={{
          boxShadow:
            "0 0 30px rgba(34, 197, 94, 0.5), 0 0 60px rgba(34, 197, 94, 0.3)",
        }}
        animate={{
          boxShadow: [
            "0 0 30px rgba(34, 197, 94, 0.5), 0 0 60px rgba(34, 197, 94, 0.3)",
            "0 0 40px rgba(34, 197, 94, 0.7), 0 0 80px rgba(34, 197, 94, 0.4)",
            "0 0 30px rgba(34, 197, 94, 0.5), 0 0 60px rgba(34, 197, 94, 0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          style={{ transform: "rotate(2deg)" }}
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...techServices, ...techServices, ...techServices].map(
            (service, index) => (
              <motion.span
                key={index}
                className="mx-8 flex items-center gap-4 text-xl font-bold text-slate-900 hover:text-white transition-all duration-300 cursor-pointer"
                style={{
                  textShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                }}
              >
                {service}
                <img
                  src="/img/logo.png"
                  alt="separator"
                  className=" h-12 w-auto object-contain"
                />
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SecondRunningText;
