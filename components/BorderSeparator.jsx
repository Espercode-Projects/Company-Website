"use client";
import { RunningText } from "./Hero";
import { motion } from "framer-motion";


function BorderSeparator() {
  return (
    <div>
      {/* Bottom decorative elements */}
      <motion.div
        className="absolute -bottom-5 left-0 w-full h-32 bg-gradient-to-r from-green-400/20 via-green-500/20 to-green-600/20"
        style={{ clipPath: "polygon(0 60%, 100% 20%, 100% 100%, 0% 100%)" }}
        animate={{
          background: [
            "linear-gradient(to right, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.2))",
            "linear-gradient(to right, rgba(34, 197, 94, 0.3), rgba(34, 197, 94, 0.4), rgba(34, 197, 94, 0.3))",
            "linear-gradient(to right, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.2))",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Running Text Services */}
      <RunningText />
    </div>
  );
}

export default BorderSeparator;
