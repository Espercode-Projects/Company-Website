import React, { useState, useEffect, useCallback } from "react";
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
  FaInstagram,
  FaFacebook,
  FaJava,
} from "react-icons/fa";
import { useLocale } from "@/app/ClientRootLayout";
import {
  SiAndroidstudio,
  SiCanva,
  SiCashapp,
  SiKotlin,
  SiNextdotjs,
  SiPhp,
  SiTailwindcss,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

const TeamCard = () => {
  const { translations } = useLocale();
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer untuk mengoptimalkan animasi
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const element = document.getElementById("team-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px"; // Prevent layout shift
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [selectedMember]);

  // Optimized close handler
  const handleCloseModal = useCallback((e) => {
    e.stopPropagation();
    setSelectedMember(null);
  }, []);

  // Optimized backdrop click handler
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setSelectedMember(null);
    }
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Adi Firmansyah",
      role: "Digital Marketing",
      image: "/img/adi_profile.avif",
      skills: ["Facebook", "Instagram", "Whatsapp", "Canva"],
      bio: "Experienced digital marketer focused on creating impactful social media campaigns across Facebook, Instagram, and WhatsApp. Skilled in using Canva to design engaging content that boosts brand visibility and audience interaction.",
      link: "#",
    },
    {
      id: 2,
      name: "Rifal Ali Fahri",
      role: "Backend Developer",
      image: "/img/rifal_profile.avif",
      skills: ["PHP", "Java", "Kotlin", "Python"],
      bio: "Backend developer skilled in building robust APIs and server-side systems.",
      link: "https://portofolio-rifalalis-projects.vercel.app/",
    },
    {
      id: 3,
      name: "Nando Abdillah Salam",
      role: "Frontend Developer",
      image: "/img/nando_profile.avif",
      skills: ["React", "NextJs", "Tailwinds", "PHP"],
      bio: "Frontend developer focused on building fast and responsive web interfaces.",
      link: "https://nando-abdillah-profile.vercel.app/",
    },
  ];

  const stats = [
    { number: "6+", label: `${translations.team_stats_label?.[0]}` },
    { number: "3+", label: `${translations.team_stats_label?.[1]}` },
    { number: "4+", label: `${translations.team_stats_label?.[2]}` },
  ];

  const getSkillIcon = (skill) => {
    const icons = {
      React: <FaReact className="text-blue-400" />,
      JavaScript: <FaJs className="text-yellow-400" />,
      Python: <FaPython className="text-blue-500" />,
      Instagram: <FaInstagram className="text-red-500" />,
      Facebook: <FaFacebook className="text-blue-600" />,
      Canva: <SiCanva className="text-blue-500" />,
      Whatsapp: <SiWhatsapp className="text-green-600" />,
      AndroidStudio: <SiAndroidstudio className="text-green-500" />,
      Java: <FaJava className="text-yellow-800" />,
      Kotlin: <SiKotlin className="text-blue-500" />,
      Tailwinds: <SiTailwindcss className="text-blue-600" />,
      NextJs: <SiNextdotjs className="text-white" />,
      PHP: <SiPhp className="text-indigo-500" />
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

  // Optimized pulse animation - hanya berjalan saat in view
  const pulseAnimation = isInView ? {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  } : {};

  // Optimized text shadow animation - hanya berjalan saat in view
  const textShadowAnimation = isInView ? {
    textShadow: [
      "0 0 0px #10b981",
      "0 0 20px #10b981",
      "0 0 0px #10b981",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  } : {};

  // Optimized stats animation - hanya berjalan saat in view
  const getStatsAnimation = (index) => isInView ? {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.5,
    },
  } : {};

  // Optimized floating effects - hanya berjalan saat in view
  const floatingEffect1 = isInView ? {
    y: [0, -20, 0],
    rotate: [0, 360],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  } : {};

  const floatingEffect2 = isInView ? {
    y: [0, 15, 0],
    rotate: [0, -360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  } : {};

  return (
    <div className="px-4 sm:px-6 lg:px-8" id="team-section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
                  {translations.team_persuasive}
                </span>
              </div>
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                {translations.team_title?.[0]}{" "}
                <motion.span
                  className="text-green-400"
                  animate={textShadowAnimation}
                >
                  {translations.team_title?.[1]}
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg"
            >
              {translations.team_description}
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
                      animate={getStatsAnimation(index)}
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
                    animate={isInView ? "visible" : "hidden"}
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
          <div className="hidden lg:block relative">
            <div className="relative w-full h-96 overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center">
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
                      animate={isInView ? "visible" : "hidden"}
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
                animate={floatingEffect1}
                className="absolute top-4 right-4 w-12 h-12 bg-green-400/30 rounded-full blur-lg"
              />

              <motion.div
                animate={floatingEffect2}
                className="absolute bottom-4 left-4 w-8 h-8 bg-green-400 transform rotate-45 opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Full Screen Modal - Optimized */}
        <AnimatePresence mode="wait">
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
              onClick={handleBackdropClick}
              style={{ touchAction: 'none' }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button - Fixed positioning and larger touch target */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-10 touch-manipulation"
                  style={{ minWidth: '48px', minHeight: '48px' }}
                  aria-label="Close modal"
                >
                  <FaTimes className="w-5 h-5 text-white" />
                </button>

                <div className="grid md:grid-cols-2 gap-6 items-start">
                  {/* Profile Image */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="relative"
                  >
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>

                  {/* Profile Info */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <motion.h2
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="text-3xl font-bold text-white mb-2"
                      >
                        {selectedMember.name}
                      </motion.h2>
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        className="text-green-400 font-semibold text-lg"
                      >
                        {selectedMember.role}
                      </motion.p>
                    </div>

                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      className="text-gray-300 leading-relaxed"
                    >
                      {selectedMember.bio}
                    </motion.p>

                    {/* Skills Section */}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                    >
                      <h3 className="text-white font-semibold mb-4 text-lg">
                        Skills & Expertise
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedMember.skills.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              delay: 0.7 + index * 0.05,
                              duration: 0.2,
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
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.3 }}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
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