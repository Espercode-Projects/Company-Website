"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  MessageCircle,
  Facebook,
  Instagram,
  Clock,
  Globe,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocale } from "../ClientRootLayout";
import { Navbar } from "@/components/Navbar";
import { MobileMenu, SocialMedia } from "@/components/Hero";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // console.log("Form submitted:", formData);
    window.open(`https://wa.me/+6281226577201?text=${generateMessage(formData)}`)
    setFormData({
      name: "", 
      email: "",
      subject: "",
      message: "",
    });
  };

  const generateMessage = (formData) => {
    let greeting = "Selamat "
    const options = {
        timeZone: "Asia/Jakarta",
        hour: "numeric",
        hour12: false
    };
    const hours = parseInt(new Date().toLocaleString("en-US", options))
    if (hours >= 3 && hours < 11) {
        greeting += "Pagi";
    } else if (hours >= 11 && hours < 15) {
        greeting += "Siang";
    } else if (hours >= 16 && hours < 18) {
        greeting += "Sore";
    } else {
        greeting += "Malam";
    }
    return encodeURIComponent(`Halo, ${greeting}. Saya ${formData.name} ingin bicara tentang ${formData.subject}, \n\n\"${formData.message}\"\n\nBerikut email saya yang bisa dihubungi: ${formData.email}`)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

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

  const animatedTexts = ["INNOVATION", "SOLUTIONS", "EXCELLENCE", "FUTURE"];

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
      const lang = localStorage.getItem('lang')
      if (lang) {
        setCurrentLanguage(lang.toUpperCase())
      }
      return;
    }

    setCurrentLocale(currentLanguage.toLowerCase());
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', currentLanguage.toLowerCase());
    }
  }, [currentLanguage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      {/* Header Section */}
      <motion.div
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
      

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8  pb-16">
          <motion.div className="text-center" variants={itemVariants}>
            <motion.span
              className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-6"
              variants={itemVariants}
            >
              {translations.hero_information}
            </motion.span>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              {translations.hero_title?.[0]} <span className="text-green-500">{translations.hero_title?.[1]}</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {translations.hero_description}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="container  px-4 sm:px-6 lg:px-8 pb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 ">
            {/* Contact Information */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  {translations.contact_title?.[0]}{" "}
                  <span className="text-green-500">{translations.contact_title?.[1]}</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  {translations.contact_description}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <motion.div
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 group"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500/20 p-3 rounded-xl group-hover:bg-green-500/30 transition-colors">
                      <Mail className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {translations.contact_email_title}
                      </h3>
                      <p className="text-gray-300">espercode.main@gmail.com</p>
                      <p className="text-gray-400 text-sm mt-1">
                        {translations.contact_email_description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 group"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500/20 p-3 rounded-xl group-hover:bg-green-500/30 transition-colors">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {translations.contact_phone_title}
                      </h3>
                      <p className="text-gray-300">(+62) 812-2657-7201</p>
                      <p className="text-gray-400 text-sm mt-1">
                        {translations.contact_phone_description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 group"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500/20 p-3 rounded-xl group-hover:bg-green-500/30 transition-colors">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {translations.contact_location_title}
                      </h3>
                      <p className="text-gray-300">{translations.contact_location_content}</p>
                      <p className="text-gray-400 text-sm mt-1">Indonesia</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Media */}
              {/* <motion.div
                className="pt-8 border-t border-slate-700"
                variants={itemVariants}
              >
                <h3 className="text-white font-semibold text-lg mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: MessageCircle, href: "#", label: "WhatsApp" },
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="bg-slate-800/50 p-3 rounded-xl hover:bg-green-500/20 transition-all duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div> */}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              variants={cardVariants}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {translations.form_title}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {translations.form_name_label}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder={translations.form_name_placeholder}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {translations.form_email_label}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder={translations.form_email_placeholder}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.form_subject_label}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder={translations.form_subject_placeholder}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.form_message_label}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder={translations.form_message_placeholder}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>{translations.form_main_cta}</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Contact;
