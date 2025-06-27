"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "../ClientRootLayout";
import { MobileMenu, SocialMedia } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  
  const { currentLocale, setCurrentLocale, translations } = useLocale();
  
  const projects = [
    {
      id: 1,
      title: `${translations?.content_projects?.[0]?.title}`,
      description:
        `${translations.content_projects?.[0].description}`,
      fullDescription:
        `${translations.content_projects?.[0].full_description}`,
      image: "/api/placeholder/400/300",
      category: "web-development",
      tags: ["React", "Laravel", "MySQL"],
      client: "",
      year: "2024",
      status: "completed",
      link: "https://techstore.example.com",
      features: [
        `${translations.content_projects?.[0].features?.[0]}`, 
        `${translations.content_projects?.[0].features?.[1]}`, 
        `${translations.content_projects?.[0].features?.[2]}`, 
        `${translations.content_projects?.[0].features?.[3]}`, 
        `${translations.content_projects?.[0].features?.[4]}`, 
      ],
      technologies: ["React", "Node.js", "MySQL", "Laravel", "Socket.io", "JWT Authentication", "Cloudinary"],
      timeline: `${translations.content_projects?.[0].timeline}`,
      teamSize: `${translations.content_projects?.[0].team_size}`, 
      challenges: [
        `${translations.content_projects?.[0].challenges?.[0]}`, 
        `${translations.content_projects?.[0].challenges?.[1]}`, 
        `${translations.content_projects?.[0].challenges?.[2]}`, 
        `${translations.content_projects?.[0].challenges?.[3]}`, 
      ],
      results: [
        `${translations.content_projects?.[0].results?.[0]}`, 
        `${translations.content_projects?.[0].results?.[1]}`, 
        `${translations.content_projects?.[0].results?.[2]}`, 
        `${translations.content_projects?.[0].results?.[3]}`, 
      ]
    },
    {
      id: 2,
      title: `${translations.content_projects?.[1].title}`,
      description:
        `${translations.content_projects?.[1].description}`,
      fullDescription:
        `${translations.content_projects?.[1].full_description}`,
      image: "/api/placeholder/400/300",
      category: "mobile-app-development",
      tags: [
        "Kotlin",
        "Laravel",
        "MySQL",
      ],
      client: "",
      year: "2024",
      status: "completed",
      link: "#",
      features: [
        `${translations.content_projects?.[1].features?.[0]}`, 
        `${translations.content_projects?.[1].features?.[1]}`, 
        `${translations.content_projects?.[1].features?.[2]}`, 
        `${translations.content_projects?.[1].features?.[3]}`, 
        `${translations.content_projects?.[1].features?.[4]}`, 
      ],
      technologies: ["Android Studio", "Kotlin", "Laravel", "MySQL", "Firebase", "JWT Authentication"],
      timeline: `${translations.content_projects?.[1].timeline}`,
      teamSize: `${translations.content_projects?.[1].team_size}`, 
      challenges: [
        `${translations.content_projects?.[1].challenges?.[0]}`, 
        `${translations.content_projects?.[1].challenges?.[1]}`, 
        `${translations.content_projects?.[1].challenges?.[2]}`, 
        `${translations.content_projects?.[1].challenges?.[3]}`, 
      ],
      results: [
        `${translations.content_projects?.[1].results?.[0]}`, 
        `${translations.content_projects?.[1].results?.[1]}`, 
        `${translations.content_projects?.[1].results?.[2]}`, 
        `${translations.content_projects?.[1].results?.[3]}`, 
      ]
    },
    {
      id: 3,
      title: `${translations.content_projects?.[2].title}`,
      description:
        `${translations.content_projects?.[2].description}`,
      fullDescription:
        `${translations.content_projects?.[2].full_description}`,
      image: "/api/placeholder/400/300",
      category: "mobile-app-development",
      tags: ["Kotlin", "Laravel", "MySQL"],
      client: "",
      year: "2024",
      status: "completed",
      link: "https://majubersama.example.com",
      features: [
        `${translations.content_projects?.[2].features?.[0]}`, 
        `${translations.content_projects?.[2].features?.[1]}`, 
        `${translations.content_projects?.[2].features?.[2]}`, 
        `${translations.content_projects?.[2].features?.[3]}`, 
        `${translations.content_projects?.[2].features?.[4]}`, 
      ],
      technologies: ["Android Studio", "Kotlin", "Laravel", "MySQL", "JWT Authentication"],
      timeline: `${translations.content_projects?.[2].timeline}`,
      teamSize: `${translations.content_projects?.[2].team_size}`, 
      challenges: [
        `${translations.content_projects?.[2].challenges?.[0]}`, 
        `${translations.content_projects?.[2].challenges?.[1]}`, 
        `${translations.content_projects?.[2].challenges?.[2]}`, 
        `${translations.content_projects?.[2].challenges?.[3]}`, 
      ],
      results: [
        `${translations.content_projects?.[2].results?.[0]}`, 
        `${translations.content_projects?.[2].results?.[1]}`, 
        `${translations.content_projects?.[2].results?.[2]}`, 
        `${translations.content_projects?.[2].results?.[3]}`, 
      ]
    }
  ];
  
  const prevProjectsRef = useRef(projects);

  const filterCategories = [
    { id: "all", label: `${translations.content_categories?.[0]}`, icon: "🎯" },
    { id: "web-development", label: `${translations.content_categories?.[1]}`, icon: "🌐" },
    { id: "mobile-app-development", label: `${translations.content_categories?.[2]}`, icon: "📱", },
    { id: "ui-ux-design", label: `${translations.content_categories?.[3]}`, icon: "🎨" },
    { id: "backend-development", label: `${translations.content_categories?.[4]}`, icon: "⚙️" },
    // { id: "tech-consulting", label: "Tech Consulting", icon: "💡" },
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeProjectModal();
      }
    };

    if (isProjectModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isProjectModalOpen]);

  useEffect(() => {
    setIsLoading(true)
    if (JSON.stringify(projects) !== JSON.stringify(prevProjectsRef.current)) {
      if (projects.length > 0 && projects[0].title !== undefined) {
        const filtered = projects.filter((project) => {
          if (activeFilter === "all") return true;
          return project.category === activeFilter;
        });
        setFilteredProjects(filtered);
      }
      prevProjectsRef.current = projects;
    }
    setIsLoading(false)
  }, [projects]);

  useEffect(() => {
    setIsLoading(true)
    if (prevProjectsRef.current !== undefined) {
      if (activeFilter == "all") {
        setFilteredProjects(prevProjectsRef.current)
      } else {
        setFilteredProjects(
          prevProjectsRef.current.filter((project) => project.category === activeFilter)
        )
      }
    }
    setIsLoading(false)
  }, [activeFilter])

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
      y: 30,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.3,
      },
    },
  };

  const filterVariants = {
    active: {
      scale: 1.05,
      backgroundColor: "#22c55e",
      color: "#ffffff",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    inactive: {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "#e5e7eb",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isProjectModalOpen && selectedProject && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-slate-800/95 backdrop-blur-md rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-slate-800/95 backdrop-blur-md border-b border-slate-700/50 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {selectedProject.title}
                  </h2>
                  <p className="text-green-400 text-sm">
                    {selectedProject.client ? (
                      <>
                        {selectedProject.client} • {selectedProject.year}
                      </>
                    ) : (
                      <>
                        {selectedProject.year}
                      </>
                    )}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeProjectModal}
                  className="p-2 bg-slate-700/50 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-full transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Project Image */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🚀</div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full font-medium">
                      {selectedProject.year}
                    </span>
                    <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full font-medium">
                      {selectedProject.status === "completed" ? `${translations.content_completed}` : `${translations.content_progress}`}
                    </span>
                  </div>
                </div>

                {/* Project Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                        <span className="mr-2">📋</span>
                        {translations.content_detail_overview_label}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                        <span className="mr-2">⚙️</span>
                        {translations.content_detail_technology_label}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-lg border border-slate-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                        <span className="mr-2">🎯</span>
                        {translations.content_detail_challenge_label}
                      </h3>
                      <div className="space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm">{challenge}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                        <span className="mr-2">📈</span>
                        {translations.content_detail_result_label}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedProject.results.map((result, index) => (
                          <div key={index} className="flex items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                            <p className="text-green-300 text-sm font-medium">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Details Sidebar */}
                  <div className="space-y-6">
                    {/* Project Info */}
                    <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
                      <h3 className="text-lg font-bold text-white mb-4">{translations.content_detail_label}</h3>
                      <div className="space-y-4">
                        {selectedProject.client && (
                          <div>
                            <p className="text-sm text-gray-400 mb-1">{translations.content_client_label}</p>
                            <p className="text-white font-medium">{selectedProject.client}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-gray-400 mb-1">{translations.content_detail_timeline_label}</p>
                          <p className="text-white font-medium">{selectedProject.timeline}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">{translations.content_detail_team_label}</p>
                          <p className="text-white font-medium">{selectedProject.teamSize}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">{translations.content_detail_category_label}</p>
                          <p className="text-white font-medium capitalize">
                            {selectedProject.category.replace('-', ' ')}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
                      <h3 className="text-lg font-bold text-white mb-4">{translations.content_feature_label}</h3>
                      <div className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      {selectedProject.link !== "#" && (
                        <motion.a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {translations.content_detail_main_cta}
                        </motion.a>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.001 8.001 0 01-7.75-6M3 12c0-4.418 3.582-8 8-8s8 3.582 8 8" />
                        </svg>
                        {translations.content_detail_secondary_cta}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <motion.section
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
              {translations.hero_information}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {translations.hero_title?.[0]} <span className="text-green-400">{translations.hero_title?.[1]}</span> {translations.hero_title?.[2]}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {translations.hero_description}
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { number: "5", label: `${translations.hero_attributes?.[0]}` },
              { number: "1", label: `${translations.hero_attributes?.[1]}` },
              { number: "4+", label: `${translations.hero_attributes?.[2]}` }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-xl"></div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8 pb-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filterCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variants={filterVariants}
                animate={activeFilter === category.id ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full font-medium transition-all duration-200 backdrop-blur-sm border border-white/10 hover:border-green-400/50"
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 rounded-2xl p-6 animate-pulse"
                  >
                    <div className="w-full h-48 bg-slate-700/50 rounded-xl mb-4"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-700/50 rounded w-full"></div>
                      <div className="h-3 bg-slate-700/50 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="projects"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence>
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      layout
                      className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-green-400/50 transition-all duration-300"
                      whileHover={{
                        y: -10,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {/* Project Image */}
                      <div className="relative overflow-hidden h-48">
                        <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center">
                          <div className="text-4xl opacity-50">🚀</div>
                        </div>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full font-medium">
                            {project.year}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <span className="px-2 py-1 bg-black/50 text-white text-xs rounded backdrop-blur-sm">
                            {project.status === "completed"
                              ? `${translations.content_completed}`
                              : `${translations.content_progress}`}
                          </span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <motion.button
                            whileHover={{ scale: 1.1, rotate: 45 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-green-500/20 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </motion.button>
                        </div>

                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {project.client && (
                          <div className="mb-4">
                            <p className="text-xs font-medium text-green-400 mb-2">
                              {translations.content_client_label}{":"}
                            </p>
                            <p className="text-sm text-white">{project.client}</p>
                          </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-md">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Features */}
                        <div className="mb-4">
                          <p className="text-xs font-medium text-gray-400 mb-2">
                            {translations.content_feature_label}{":"}
                          </p>
                          <div className="space-y-1">
                            {project.features
                              .slice(0, 2)
                              .map((feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex items-center text-xs text-gray-300"
                                >
                                  <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                                  {feature}
                                </div>
                              ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <motion.button
                            onClick={() => openProjectModal(project)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                          >
                            {translations.content_main_cta}
                          </motion.button>
                          {project.link !== "#" && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 bg-slate-700 hover:bg-slate-600 text-gray-300 rounded-lg transition-colors duration-200"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* No Results */}
          {!isLoading && filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {translations.content_empty_title}
              </h3>
              <p className="text-gray-400">
                {translations.content_empty_description}
              </p>
              <motion.button
                onClick={() => setActiveFilter("all")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors duration-200"
              >
                {translations.content_empty_cta}
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-green-400/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {translations.card_title?.[0]}{" "}
            <span className="text-green-400">{translations.card_title?.[1]}</span>{translations.card_title?.[2]}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {translations.card_description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all duration-200 shadow-lg shadow-green-500/25"
              onClick={() => {window.open("https://wa.me/+6281226577201")}}
            >
              {translations.card_main_cta}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded-full font-semibold transition-all duration-200"
              onClick={() => {window.location.href = "/services"}}
            >
              {translations.card_secondary_cta}
            </motion.button>
          </div>
        </motion.div>
      </motion.section>


      <Footer />

    </div>
  );
};

export default Portfolio;