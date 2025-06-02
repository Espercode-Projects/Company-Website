"use client";

import { motion } from "framer-motion";
import {
  FaPinterest,
  FaLinkedin,
  FaBehance,
  FaDribbble,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const starVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socialIcons = [
    {
      Icon: FaGithub,
      href: "https://github.com/Espercode-Projects",
      color: "#333",
      label: "GitHub",
    },
    {
      Icon: FaWhatsapp,
      href: "https://wa.me/+6281226577201",
      color: "#0077B5",
      label: "Whatsapp",
    },
    {
      Icon: FaFacebook,
      href: "https://www.facebook.com/profile.php?id=61575600557984",
      color: "#1DA1F2",
      label: "Facebook",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/espercode/",
      color: "#E4405F",
      label: "Instagram",
    },
  ];

  const pages = ["About Us", "Portfolio", "FAQs"];

  return (
    <motion.footer
      className="bg-gray-900 text-white relative overflow-hidden min-h-screen flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h1
          className="text-[4rem] md:text-[8rem] lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-lime-400/20 to-transparent select-none"
          style={{
            WebkitTextStroke: "2px rgba(132, 204, 22, 0.3)",
            fontFamily: "Arial, sans-serif",
            letterSpacing: "0.1em",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          ESPERCODE
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-8">
              <motion.div
                variants={starVariants}
                className="w-12 h-12 bg-lime-400 flex items-center justify-center transform rotate-45"
                whileHover={{ scale: 1.1, rotate: 225 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/img/logo.png" className="-rotate-45" />
              </motion.div>
              <h2 className="text-2xl font-bold tracking-wider">ESPERCODE</h2>
            </div>
          </motion.div>

          {/* Pages Section */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <h3 className="text-lime-400 text-lg font-semibold mb-6 tracking-wider">
              PAGES
            </h3>
            <ul className="space-y-4">
              {pages.map((page, index) => (
                <motion.li key={page}>
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-lime-400 transition-colors duration-300 block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {page}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <h3 className="text-lime-400 text-lg font-semibold mb-6 tracking-wider">
              CONNECT WITH US
            </h3>
            <div className="space-y-4">
              {socialIcons.map(({ Icon, label }, index) => (
                <motion.div key={label} className="flex items-center space-x-3">
                  <motion.div
                    className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2, backgroundColor: "#a3e635" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="text-gray-900 text-sm" />
                  </motion.div>
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-lime-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {label}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <FaPhone className="text-lime-400" />
                  <span className="text-gray-400 text-sm">PHONE NUMBER</span>
                </div>
                <a
                  href="tel:+6281234567890"
                  className="text-xl font-semibold hover:text-lime-400 transition-colors duration-300"
                >
                  (+62) 812-2657-7201
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <FaEnvelope className="text-lime-400" />
                  <span className="text-gray-400 text-sm">EMAIL ADDRESS</span>
                </div>
                <a
                  href="mailto:info@espercode.com"
                  className="text-xl font-semibold hover:text-lime-400 transition-colors duration-300"
                >
                  espercode.main@gmail.com
                </a>
              </motion.div>

              <motion.p
                className="text-gray-400 text-sm leading-relaxed mt-6"
                variants={itemVariants}
              >
                With a team of passionate designers, marketers, and innovators,
                we specialize in delivering unique solutions that elevate your
                brand and captivate your audience.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          variants={itemVariants}
        >
          <motion.p
            className="text-gray-500 text-sm"
            whileHover={{ color: "#a3e635" }}
          >
            Espercode © 2025 All rights reserved
          </motion.p>
          <div className="flex space-x-8">
            <motion.a
              href="#"
              className="text-gray-500 hover:text-lime-400 transition-colors duration-300 text-sm"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-500 hover:text-lime-400 transition-colors duration-300 text-sm"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-lime-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-1 h-1 bg-lime-400 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.footer>
  );
};

export default Footer;
