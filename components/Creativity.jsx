"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { SecondRunningText } from "./SecondRunningText";

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Section - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={pulseAnimation}
                  className="w-4 h-4 bg-green-400 transform rotate-45"
                ></motion.div>
                <span className="text-green-400 font-semibold tracking-wider text-sm">
                  MEET THE EXPERT
                </span>
              </div>
              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                TEAM OF{" "}
                <motion.span
                  className="text-green-400"
                  animate={{
                    textShadow: [
                      "0 0 0px #10b981",
                      "0 0 20px #10b981",
                      "0 0 0px #10b981",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  EXPERT
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed max-w-lg"
              whileHover={{
                color: "#d1d5db",
                transition: { duration: 0.3 },
              }}
            >
              Our passionate team of developers, designers, and innovators work
              together to create extraordinary digital experiences that drive
              business growth and exceed client expectations.
            </motion.p>

            {/* Enhanced Stats */}
            <motion.div variants={itemVariants} className="flex gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  className="text-center"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <motion.span
                      className="text-4xl lg:text-5xl font-bold text-green-400"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    >
                      {stat.number}
                    </motion.span>
                    <motion.div
                      animate={floatingAnimation}
                      className="w-3 h-3 bg-green-400 transform rotate-45"
                    ></motion.div>
                  </div>
                  <p className="text-gray-400 text-sm font-semibold tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Section - Enhanced Team Cards */}
          <div className="relative">
            <div className="w-full flex justify-end">
              <div className="grid grid-cols-3 gap-4 justify-items-end">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    variants={cardVariants}
                    whileHover="hover"
                    className="relative overflow-hidden rounded-2xl group cursor-pointer"
                    style={{ perspective: "1000px" }}
                  >
                    <div className="w-56 h-[30rem] relative">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        variants={imageVariants}
                        animate={{
                          filter: [
                            "brightness(1) contrast(1)",
                            "brightness(1.1) contrast(1.1)",
                            "brightness(1) contrast(1)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                      />

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                        variants={overlayVariants}
                        initial="hidden"
                        whileHover="hover"
                      ></motion.div>

                      {/* Animated Arrow Button */}
                      <motion.div
                        className="absolute top-3 right-3 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                        variants={arrowVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        onClick={() => console.log("Navigate to portfolio")}
                      >
                        <a href={member.link} target="_blank">
                        <FaArrowRight className="w-4 h-4 text-white" />

                        </a>
                      </motion.div>

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: member.delay }}
                        >
                          <motion.h3
                            className="text-white text-lg font-bold mb-1"
                            whileHover={{
                              scale: 1.05,
                              color: "#10b981",
                              transition: { duration: 0.3 },
                            }}
                          >
                            {member.name}
                          </motion.h3>
                          <p className="text-green-400 text-xs font-semibold tracking-wider">
                            {member.role}
                          </p>
                        </motion.div>
                      </div>

                      {/* Surprise Sparkle Effect */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-1 h-1 bg-grey-400 rounded-full"
                        animate={{
                          scale: [0, 3, 0],
                          opacity: [0, 1, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 1.2,
                          ease: "easeInOut",
                        }}
                        style={{
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -right-8 w-16 h-16 bg-green-400/30 rounded-full blur-xl"
            ></motion.div>

            <motion.div
              animate={{
                y: [0, 25, 0],
                x: [0, 15, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-12 -left-8 w-12 h-12 bg-green-400 transform rotate-45 opacity-40"
            ></motion.div>

            {/* New Surprise Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 -left-12 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-sm"
            ></motion.div>
          </div>
        </motion.div>

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
              x: [-200, window.innerWidth + 200],
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
