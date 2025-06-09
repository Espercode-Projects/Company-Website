"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { SecondRunningText } from "./SecondRunningText";
import TeamCard from "./TeamCard";

const WhoWeAre = () => {
  const teamMembers = [
    {
      id: 1,
      name: "ADI FIRMANSYAH",
      role: "MARKETING ",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
      delay: 0.2,
      link : "#"
    },
    {
      id: 2,
      name: "RIFAL ALI FAHRI ",
      role: "BACKEND DEVELOPER",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
      delay: 0.4,
      link : "https://portofolio-rifalalis-projects.vercel.app/"
    },
    {
      id: 3,
      name: "NANDO ABDILLAH S",
      role: "FRONTEND DEVELOPER",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
      delay: 0.6,
      link : "https://nando-abdillah-profile.vercel.app/"
    },
  ];

  const stats = [
    { number: "300+", label: "SUCCESSFUL PROJECTS" },
    { number: "200+", label: "BRANDS GROW GLOBALLY" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -15,
      rotateY: 5,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.15,
      rotate: 2,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const arrowVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      backgroundColor: "#10b981",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const statsVariants = {
    hidden: { scale: 0, rotateX: 90 },
    visible: {
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    x: [0, 10, 0],
    rotate: [0, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen py-20 px-4 relative overflow-hidden ">
      {/* Enhanced Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            #10b981 20px,
            #10b981 22px
          )`,
          }}
        ></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              #10b981 40px,
              #10b981 42px
            )`,
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 relative z-10">
        
        <TeamCard />

        {/* Enhanced Animated Background Elements */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-20 right-20 w-3 h-3 bg-green-400 rounded-full opacity-60"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 45, 90, 135, 180],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-20 w-4 h-4 bg-green-400 transform rotate-45 opacity-30"
        ></motion.div>

        {/* Surprise Animated Lines */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"
            animate={{
              x: [-200, 800 + 200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
            style={{
              top: `${20 + i * 20}%`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
