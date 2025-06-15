"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Code2,
  Smartphone,
  Globe,
  Users,
  Award,
  Target,
  Lightbulb,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useLocale } from "../ClientRootLayout";
import { Navbar } from "@/components/Navbar";
import { MobileMenu, SocialMedia } from "@/components/Hero";
import Footer from "@/components/Footer";

const About = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const foundersRef = useRef(null);
  const valuesRef = useRef(null);
  const achievementsRef = useRef(null);
  const missionRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.1 });
  const isStatsInView = useInView(statsRef, { once: true, threshold: 0.1 });
  const isServicesInView = useInView(servicesRef, {
    once: true,
    threshold: 0.1,
  });
  const isFoundersInView = useInView(foundersRef, {
    once: true,
    threshold: 0.1,
  });
  const isValuesInView = useInView(valuesRef, { once: true, threshold: 0.1 });
  const isAchievementsInView = useInView(achievementsRef, {
    once: true,
    threshold: 0.1,
  });
  const isMissionInView = useInView(missionRef, { once: true, threshold: 0.1 });
  const isCtaInView = useInView(ctaRef, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const stats = [
    { number: "50+", label: "Projects Completed", icon: CheckCircle },
    { number: "30+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "100%", label: "Success Rate", icon: TrendingUp },
  ];

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Membangun website modern dan responsif dengan teknologi terdepan untuk menghadirkan pengalaman pengguna yang optimal.",
      features: [
        "React/Next.js",
        "Node.js",
        "Full-Stack Development",
        "E-commerce Solutions",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Mengembangkan aplikasi mobile native dan cross-platform yang user-friendly dan performa tinggi.",
      features: [
        "React Native",
        "Flutter",
        "iOS Development",
        "Android Development",
      ],
    },
    {
      icon: Code2,
      title: "Custom Software",
      description:
        "Solusi perangkat lunak khusus yang disesuaikan dengan kebutuhan bisnis spesifik Anda.",
      features: [
        "System Integration",
        "API Development",
        "Database Design",
        "Cloud Solutions",
      ],
    },
    {
      icon: Target,
      title: "Digital Consultation",
      description:
        "Konsultasi strategis untuk transformasi digital dan optimalisasi proses bisnis Anda.",
      features: [
        "Digital Strategy",
        "Tech Consulting",
        "Business Analysis",
        "Process Optimization",
      ],
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Selalu menggunakan teknologi terbaru dan pendekatan inovatif dalam setiap proyek untuk memberikan solusi terdepan.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Berkomitmen pada kualitas tinggi dengan testing menyeluruh dan standar coding yang ketat.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description:
        "Mengoptimalkan setiap proses pengembangan untuk memberikan hasil terbaik dalam waktu yang efisien.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Mengutamakan kepuasan klien dengan komunikasi yang transparan dan layanan yang responsif.",
    },
  ];

  const achievements = [
    "Berhasil menyelesaikan 50+ proyek digital dengan tingkat kepuasan klien 100%",
    "Menjadi partner teknologi terpercaya untuk berbagai industri",
    "Mengembangkan solusi inovatif yang meningkatkan efisiensi bisnis klien hingga 40%",
    "Membangun tim developer berpengalaman dengan keahlian multi-platform",
    "Menjalin kemitraan strategis dengan teknologi cloud terdepan",
  ];

  const { setCurrentLocale, translations } = useLocale();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
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

  useEffect(() => {
    setCurrentLocale(currentLanguage.toLowerCase());
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

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute  bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-6"
            >
              <span className="text-emerald-400 font-medium">About Us</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Transforming Ideas Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                Digital Reality
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Espercode adalah perusahaan teknologi yang berdedikasi untuk
              menghadirkan solusi digital inovatif. Kami mengkhususkan diri
              dalam pengembangan web, aplikasi mobile, dan konsultasi teknologi
              untuk membantu bisnis Anda berkembang di era digital.
            </motion.p>

            {/* <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-1">
                Lihat Portfolio
              </button>
              <button className="px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-xl hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 transform hover:-translate-y-1">
                Hubungi Kami
              </button>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate={isMissionInView ? "visible" : "hidden"}
              variants={slideInFromLeft}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Misi & Visi Kami
              </h2>

              <div className="space-y-8">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">
                    Misi
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Memberikan solusi teknologi terdepan yang mengubah cara
                    bisnis beroperasi, dengan fokus pada inovasi, kualitas, dan
                    kepuasan klien untuk menciptakan dampak positif dalam
                    transformasi digital.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Visi</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Menjadi mitra teknologi terpercaya yang memimpin inovasi
                    digital di Indonesia, memberdayakan bisnis untuk mencapai
                    potensi maksimal mereka melalui solusi teknologi yang cerdas
                    dan berkelanjutan.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isMissionInView ? "visible" : "hidden"}
              variants={slideInFromRight}
              className="relative"
            >
              <motion.div
                variants={floatingAnimation}
                animate="animate"
                className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700/50"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Komitmen Kualitas
                  </h3>
                  <p className="text-slate-300 mb-6">
                    Setiap proyek yang kami kerjakan mencerminkan dedikasi
                    tinggi terhadap kualitas dan inovasi teknologi terbaru.
                  </p>
                  <div className="flex justify-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section ref={foundersRef} className="py-16 lg:py-24 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isFoundersInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Tim Founder
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Dibalik kesuksesan Espercode, terdapat tim founder berpengalaman
                yang berkomitmen untuk memberikan yang terbaik
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={slideInFromLeft} className="relative">
                <div className="relative overflow-hidden rounded-3xl group">
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 aspect-[4/3] flex items-center justify-center">
                    <img
                      src="/img/team2.jpg"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100 scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div variants={slideInFromRight} className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Kepemimpinan Berpengalaman
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Tim founder kami terdiri dari tiga profesional berpengalaman
                    dengan latar belakang yang kuat di bidang teknologi, bisnis,
                    dan inovasi.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>
                        Pengalaman gabungan lebih dari 4 tahun di industri
                        teknologi
                      </span>
                    </li>
                    <li className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>
                        Track record membangun solusi untuk berbagai industri
                      </span>
                    </li>
                    <li className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>
                        Komitmen pada inovasi dan kualitas yang berkelanjutan
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-3">
                    Filosofi Tim
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    "Kami percaya bahwa teknologi terbaik adalah yang tidak
                    hanya canggih, tetapi juga mudah digunakan dan memberikan
                    nilai nyata bagi pengguna."
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Nilai-Nilai Kami
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Prinsip-prinsip yang memandu setiap langkah perjalanan kami
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500/30 transition-colors">
                    <value.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-16 lg:py-24 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isAchievementsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Pencapaian Kami
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Milestone yang telah kami raih dalam perjalanan membangun solusi
                teknologi terbaik
              </p>
            </motion.div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section ref={ctaRef} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 border border-emerald-500/30 p-8 lg:p-16"
          >
            <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm"></div>
            <div className="relative text-center">
              <motion.h2
                variants={itemVariants}
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
              >
                Siap Memulai Proyek Digital Anda?
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
              >
                Mari berkolaborasi untuk mewujudkan ide Anda menjadi solusi
                teknologi yang mengubah bisnis. Tim ahli kami siap membantu Anda
                mencapai tujuan digital.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-1 flex items-center justify-center group">
                  Mulai Konsultasi Gratis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-xl hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 transform hover:-translate-y-1">
                  Lihat Portfolio
                </button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
              >
                <div className="flex items-center justify-center text-slate-300">
                  <Mail className="w-5 h-5 text-emerald-400 mr-2" />
                  <span>info@espercode.com</span>
                </div>
                <div className="flex items-center justify-center text-slate-300">
                  <Phone className="w-5 h-5 text-emerald-400 mr-2" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center justify-center text-slate-300">
                  <MapPin className="w-5 h-5 text-emerald-400 mr-2" />
                  <span>Surabaya, Indonesia</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default About;
