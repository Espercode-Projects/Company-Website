import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaTimes,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

const TeamCard = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Sample team data with skills
  const teamMembers = [
  
    {
      id: 1,
      name: "Adi Firmansyah",
      role: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=1031",
      skills: ["Node.js", "Python", "Docker", "Git"],
      bio: "Full-stack engineer specializing in scalable backend systems and cloud architecture.",
      link: "#",
    },
    {
      id: 2,
      name: "Rifal Ali Fahri",
      role: "Backend Developer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=1031",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      bio: "Creative designer focused on user-centered design and creating intuitive digital experiences.",
      link: "#",
    },
    {
      id: 3,
      name: "Nando Abdillah Salam",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&h=1031",
      skills: ["AWS", "Kubernetes", "CI/CD", "Monitoring"],
      bio: "Infrastructure specialist ensuring smooth deployment and system reliability.",
      link: "#",
    },
  ];

  const stats = [
    { number: "50+", label: "PROJECTS" },
    { number: "15+", label: "EXPERTS" },
    { number: "5+", label: "YEARS" },
  ];

  const getSkillIcon = (skill) => {
    const icons = {
      React: <FaReact className="text-blue-400" />,
      JavaScript: <FaJs className="text-yellow-400" />,
      "Node.js": <FaNodeJs className="text-green-500" />,
      Python: <FaPython className="text-blue-500" />,
      HTML: <FaHtml5 className="text-orange-500" />,
      CSS: <FaCss3Alt className="text-blue-400" />,
      Git: <FaGitAlt className="text-red-500" />,
      Docker: <FaDocker className="text-blue-600" />,
    };
    return icons[skill] || <div className="w-4 h-4 bg-gray-400 rounded-full" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      rotateY: -15,
      z: -100,
    },
    visible: (index) => ({
      opacity: 1,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -30,
      rotateZ: 0,
      scale: 1.15,
      z: 100,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={pulseAnimation}
                  className="w-4 h-4 bg-green-400 transform rotate-45"
                />
                <span className="text-green-400 font-semibold tracking-wider text-sm">
                  MEET THE EXPERT
                </span>
              </div>
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight"
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
              className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg"
            >
              Our passionate team of developers, designers, and innovators work
              together to create extraordinary digital experiences that drive
              business growth and exceed client expectations.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 sm:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <motion.span
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400"
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
                    <div className="w-2 h-2 bg-green-400 transform rotate-45" />
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Team Cards - Stack Layout */}
            <div className="block lg:hidden">
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-gray-300 aspect-[3/4]">
                      {/* Card Image */}
                      <div className="h-3/4 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Card Info */}
                      <div className="h-1/4 p-3 bg-gradient-to-r from-gray-900 to-black text-white flex flex-col justify-center">
                        <h3 className="font-bold text-sm truncate">
                          {member.name}
                        </h3>
                        <p className="text-green-400 text-xs font-semibold">
                          {member.role}
                        </p>
                      </div>

                      {/* Card Accents */}
                      <div className="absolute top-2 left-2 w-3 h-3 bg-green-400 rounded-full opacity-80" />
                      <div className="absolute bottom-2 right-2 w-2 h-2 bg-green-400 transform rotate-45 opacity-60" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Section - Desktop Fan Card Effect */}
          <div className="hidden lg:block relative  ">
            <div className="relative w-full h-96 overflow-visible  ">
              <div className="absolute inset-0 flex items-center justify-center  ">
                {teamMembers.map((member, index) => {
                  // Responsive fan calculation
                  const baseX = -100 + index * 80; 
                  const baseY = -20 + index * 15;
                  const rotation = -45 + index * 30; 
                  const rotationDef = -15 + index * 20; 

                  return (
                    <motion.div
                      key={member.id}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className="absolute cursor-pointer"
                      style={{
                        left: `calc(50% + ${baseX}px)`,
                        top: `calc(10% + ${baseY}px)`,
                        rotate: `${rotationDef}deg`,
                        transform:
                          hoveredIndex === index
                            ? `translate(-50%, -50%) rotate(0deg) scale(1.1) translateY(-20px)`
                            : `translate(-50%, -50%) rotate(${rotation}deg)`,
                        transformOrigin: "center bottom",
                        zIndex: hoveredIndex === index ? 50 : 10 + index,
                        transition: "all 0.3s ease-out",
                      }}
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      onClick={() => setSelectedMember(member)}
                    >
                      <div className="w-52 h-72 bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-gray-300">
                        {/* Card Image */}
                        <div className="h-3/4 overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Card Info */}
                        <div className="h-1/4 p-4 bg-gradient-to-r from-gray-900 to-black text-white flex flex-col justify-center">
                          <h3 className="font-bold text-base truncate">
                            {member.name}
                          </h3>
                          <p className="text-green-400 text-sm font-semibold">
                            {member.role}
                          </p>
                        </div>

                        {/* Card Accents */}
                        <div className="absolute top-3 left-3 w-4 h-4 bg-green-400 rounded-full opacity-80" />
                        <div className="absolute bottom-3 right-3 w-3 h-3 bg-green-400 transform rotate-45 opacity-60" />
                      </div>

                      {/* Hover Arrow */}
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-3 -right-3 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <FaArrowRight className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Floating Effects */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 360] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 right-4 w-12 h-12 bg-green-400/30 rounded-full blur-lg"
              />

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -360] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-4 left-4 w-8 h-8 bg-green-400 transform rotate-45 opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Full Screen Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <FaTimes className="w-5 h-5 text-white" />
                </button>

                <div className="grid md:grid-cols-2 gap-6 items-start">
                  {/* Profile Image */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Profile Info */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl font-bold text-white mb-2"
                      >
                        {selectedMember.name}
                      </motion.h2>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-green-400 font-semibold text-lg"
                      >
                        {selectedMember.role}
                      </motion.p>
                    </div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-300 leading-relaxed"
                    >
                      {selectedMember.bio}
                    </motion.p>

                    {/* Skills Section */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="text-white font-semibold mb-4 text-lg">
                        Skills & Expertise
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedMember.skills.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              delay: 0.8 + index * 0.1,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3 hover:bg-gray-700/50 transition-colors"
                          >
                            <div className="text-xl">{getSkillIcon(skill)}</div>
                            <span className="text-white font-medium">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Contact Button */}
                    <motion.a
                      href={selectedMember.link}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>View Portfolio</span>
                      <FaArrowRight className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TeamCard;