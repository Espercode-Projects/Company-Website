"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaRocket,
  FaBolt,
  FaCode,
  FaMobile,
  FaPalette,
  FaBrain,
  FaCaretDown,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { useLocale } from "@/app/ClientRootLayout";
import { Navbar } from "./Navbar";


// Social Media Component
export const SocialMedia = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Espercode-Projects",
      color: "#333",
      name: "GitHub",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/+6281226577201",
      color: "#0077B5",
      name: "LinkedIn",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/profile.php?id=61575600557984",
      color: "#1DA1F2",
      name: "Twitter",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/espercode/",
      color: "#E4405F",
      name: "Instagram",
    },
  ];

  return (
    <motion.div
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-full flex items-center justify-center text-white hover:text-green-400 transition-all duration-300 group relative overflow-hidden"
          whileHover={{
            scale: 1.2,
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2 + index * 0.1 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{
              boxShadow: "inset 0 0 20px rgba(34, 197, 94, 0.5)",
            }}
          />
          <social.icon className="text-lg relative z-10" />

          {/* Tooltip */}
          <motion.div
            className="absolute left-full ml-3 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            style={{
              boxShadow: "0 0 10px rgba(34, 197, 94, 0.3)",
            }}
          >
            {social.name}
          </motion.div>
        </motion.a>
      ))}

      {/* Vertical line */}
      <motion.div
        className="w-0.5 h-16 bg-gradient-to-b from-green-400 to-transparent mx-auto"
        initial={{ height: 0 }}
        animate={{ height: 64 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          boxShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
        }}
      />
    </motion.div>
  );
};

// Mobile Menu Component
export const MobileMenu = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  currentLanguage,
  setCurrentLanguage,
}) => {
  const { translations } = useLocale();

  const languages = [
    { code: "EN", name: "English", country: "US" },
    { code: "ID", name: "Indonesia", country: "ID" },
    { code: "DE", name: "Deutsch", country: "DE" },
    { code: "JP", name: "日本語", country: "JP" },
    { code: "CN", name: "中文", country: "CN" },
  ];

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <motion.div
            className="absolute right-0 top-0 h-full w-4/5 bg-slate-900/95 backdrop-blur-md border-l border-green-400/20"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            style={{
              boxShadow: "-10px 0 30px rgba(34, 197, 94, 0.2)",
            }}
          >
            <div className="p-6">
              <div className="flex justify-end mb-8">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-white text-2xl"
                  whileHover={{
                    scale: 1.1,
                    color: "#22c55e",
                    textShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>
              </div>

              <nav className="space-y-6">
                {[
                  translations.nav_home,
                  translations.nav_about,
                  translations.nav_service,
                  translations.nav_portofolio,
                  translations.nav_contact,
                ].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="block text-white text-lg font-medium hover:text-green-400 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      x: 10,
                      textShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

              {/* Mobile Language Selector */}
              <motion.div
                className="mt-8 pt-8 border-t border-white/10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div
                  className="text-green-400 text-sm mb-4"
                  style={{ textShadow: "0 0 8px rgba(34, 197, 94, 0.8)" }}
                >
                  Select Language
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang, index) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => setCurrentLanguage(lang.code)}
                      className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${
                        currentLanguage === lang.code
                          ? "bg-green-400/20 text-green-400"
                          : "text-white hover:bg-white/5"
                      }`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow:
                          currentLanguage === lang.code
                            ? "0 0 15px rgba(34, 197, 94, 0.5)"
                            : "0 0 10px rgba(255, 255, 255, 0.1)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ReactCountryFlag
                        countryCode={lang.country}
                        svg
                        style={{ width: "1.2em", height: "1.2em" }}
                      />
                      <span className="text-sm">{lang.code}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Running Text Component
export const RunningText = () => {
  const techServices = [
    "React Development",
    "Node.js Solutions",
    "Python AI/ML",
    "DevOps Services",
    "Mobile Apps",
    "UI/UX Design",
    "API Integration",
    "Database Design",
  ];

  return (
    <motion.div
      className="absolute -bottom-14  right-0 left-0 z-10 mt-20 mb-8 overflow-hidden rotate-[2deg]"
      style={{ transform: "rotate(-2deg)", transformOrigin: "center" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <motion.div
        className="bg-gradient-to-r from-green-400 to-green-600 py-4"
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
                className="mx-8 text-xl font-bold text-slate-900 hover:text-white transition-all duration-300 cursor-pointer"
                // whileHover={{
                //   scale: 1.1,
                //   textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                // }}
                // style={{
                //   textShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                // }}
              >
                {service} •
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Hero Content Component
const HeroContent = ({ mousePosition, currentTextIndex }) => {
  const { translations } = useLocale();
  const animatedTexts = translations.hero_animated_texts || "[]";

  return (
    <div className="flex-1 max-w-4xl mb-12 lg:mb-0 lg:pr-12">
      {/* Main Title */}
      <div className="mb-8">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 leading-tight mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.5))",
          }}
        >
          {translations.hero_header}
        </motion.h1>

        {/* Animated changing text */}
        <div className="relative h-24 lg:h-32 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentTextIndex}
              className="absolute text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                filter: "drop-shadow(0 0 10px rgba(34, 197, 94, 0.5))",
              }}
            >
              {animatedTexts[currentTextIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.div
          className="text-xl md:text-2xl text-white/80 font-light mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
          }}
        >
          " {translations.hero_subheader} "
        </motion.div>
      </div>

      {/* Description */}
      <motion.p
        className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{
          textShadow: "0 0 8px rgba(255, 255, 255, 0.2)",
        }}
      >
        {translations.hero_description}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.a
          className="bg-gradient-to-r from-green-400 to-green-600 text-slate-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-3 group relative overflow-hidden"
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)",
          }}
          href="#service"
          
        >
          <motion.div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10">{translations.hero_main_cta}</span>
          <motion.div
            className="relative z-10"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowRight />
          </motion.div>
        </motion.a>

        <motion.button
          className="border border-green-400/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400/10 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
          whileHover={{
            scale: 1.05,
            borderColor: "rgba(34, 197, 94, 0.8)",
            boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)",
            textShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10">
            {translations.hero_secondary_cta}
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

// Hero Image Component
const HeroImage = ({ mousePosition }) => {
  return (
    <div className="flex-1 relative max-w-lg">
      {/* Floating elements */}
      <motion.div
        className="absolute -top-10 -left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          boxShadow: "0 0 40px rgba(34, 197, 94, 0.4)",
        }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        style={{
          boxShadow: "0 0 50px rgba(34, 197, 94, 0.5)",
        }}
      />

      {/* Main container */}
      <div className="relative">
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-green-600/30 rounded-3xl blur-2xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            boxShadow: "0 0 60px rgba(34, 197, 94, 0.4)",
          }}
        />

        {/* Image container */}
        <motion.div
          className="relative z-10 rounded-3xl overflow-hidden border border-green-400/20 backdrop-blur-sm "
          style={{
            transform: `translate(${mousePosition.x * 8}px, ${
              mousePosition.y * 8
            }px)`,
          }}
          whileHover={{
            scale: 1.05,
            borderColor: "rgba(34, 197, 94, 0.5)",
            boxShadow: "0 0 40px rgba(34, 197, 94, 0.3)",
          }}
          // transition={{ duration: 0.3 }}
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="/img/programmer.avif"
            alt="Technology Innovation"
            className="w-full h-90 object-cover "
          />

          {/* Tech overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

          {/* Floating tech icons */}
          <motion.div
            className="absolute top-4 right-4 w-12 h-12 bg-green-400/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
            // animate={{
            //   y: [0, -10, 0],
            //   boxShadow: [
            //     "0 0 15px rgba(34, 197, 94, 0.3)",
            //     "0 0 25px rgba(34, 197, 94, 0.5)",
            //     "0 0 15px rgba(34, 197, 94, 0.3)",
            //   ],
            // }}
            // transition={{ duration: 2, repeat: Infinity }}
          >
            <FaBolt className="text-2xl text-green-400" />
          </motion.div>
          <motion.div
            className="absolute bottom-4 left-4 w-12 h-12 bg-green-400/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
            // animate={{
            //   scale: [1, 1.1, 1],
            //   boxShadow: [
            //     "0 0 15px rgba(34, 197, 94, 0.3)",
            //     "0 0 25px rgba(34, 197, 94, 0.5)",
            //     "0 0 15px rgba(34, 197, 94, 0.3)",
            //   ],
            // }}
            // transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            <FaRocket className="text-2xl text-green-400" />
          </motion.div>
        </motion.div>

        {/* Geometric decorations */}
        <motion.div
          className="absolute top-10 -right-5 w-16 h-16 border-2 border-green-400/50 rounded-full"
          // animate={{
          //   rotate: 360,
          //   borderColor: [
          //     "rgba(34, 197, 94, 0.5)",
          //     "rgba(34, 197, 94, 0.8)",
          //     "rgba(34, 197, 94, 0.5)",
          //   ],
          // }}
          // transition={{
          //   rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          //   borderColor: { duration: 2, repeat: Infinity },
          // }}
          style={{
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
          }}
        />
        <motion.div
          className="absolute -bottom-5 -left-5 w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg"
          // animate={{
          //   rotateZ: [0, 180, 360],
          //   boxShadow: [
          //     "0 0 15px rgba(34, 197, 94, 0.4)",
          //     "0 0 25px rgba(34, 197, 94, 0.6)",
          //     "0 0 15px rgba(34, 197, 94, 0.4)",
          //   ],
          // }}
          // transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

// Particle System Component
const ParticleSystem = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-green-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Main Hero Component
const Hero = () => {
  const { currentLocale, setCurrentLocale, translations } = useLocale();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(currentLocale.toUpperCase());
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const animatedTexts = translations.hero_animated_texts || ["INNOVATION", "SOLUTIONS", "EXCELLENCE", "FUTURE"];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [isInitialRender, setIsInitialRender] = useState(true);
  
  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }

    setCurrentLocale(currentLanguage.toLowerCase());
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', currentLanguage.toLowerCase())
      }
  }, [currentLanguage]);

  return (
    <div className="relative  min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div className="absolute inset-0" style={{ y: y1 }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 35%, rgba(34, 197, 94, 0.1) 50%, transparent 65%),
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(34, 197, 94, 0.05) 20px,
                rgba(34, 197, 94, 0.05) 40px
              )
            `,
          }}
        />

        {/* Enhanced floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            boxShadow: "0 0 100px rgba(34, 197, 94, 0.2)",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          style={{
            boxShadow: "0 0 120px rgba(34, 197, 94, 0.25)",
          }}
        />

        {/* Additional ambient elements */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-32 h-32 bg-green-300/5 rounded-full blur-2xl"
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity },
          }}
        />
      </motion.div>

      {/* Particle System */}
      <ParticleSystem />

      {/* Navbar */}
      <Navbar
        isServiceHovered={isServiceHovered}
        setIsServiceHovered={setIsServiceHovered}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isLanguageOpen={isLanguageOpen}
        setIsLanguageOpen={setIsLanguageOpen}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />

      {/* Social Media Links */}
      <SocialMedia />

      {/* Mobile Menu */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-[6rem] py-12 min-h-[calc(100vh-200px)] mb-5"
        style={{ y: y2 }}
      >
        {/* Left Content */}
        <HeroContent
          mousePosition={mousePosition}
          currentTextIndex={currentTextIndex}
        />

        {/* Right Content - Tech Image */}
        <HeroImage mousePosition={mousePosition} />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2  mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-white/60 text-sm">{translations.hero_hint}</span>
        <motion.div className="w-6 h-10 border-2 border-green-400/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-green-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
