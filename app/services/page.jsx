"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useScroll,
} from "framer-motion";
import {
  Code,
  Smartphone,
  Globe,
  Palette,
  Database,
  Cloud,
  CheckCircle,
  Star,
  Users,
  Trophy,
  ArrowRight,
  X,
  ChevronDown,
  Play,
  Monitor,
  Zap,
  Shield,
  HeartHandshake,
  Target,
  Lightbulb,
  Rocket,
  BarChart3,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { MobileMenu, SocialMedia } from "@/components/Hero";
import { useLocale } from "../ClientRootLayout";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [activeTab, setActiveTab] = useState("web");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: "web",
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      subtitle: "Modern & Responsive Websites",
      description:
        "Membangun website modern dengan teknologi terdepan seperti React, Next.js, dan Node.js. Fokus pada performa dan user experience yang optimal.",
      features: [
        "Responsive Design untuk semua device",
        "Fast Loading dengan Core Web Vitals",
        "Progressive Web App (PWA)",
        "E-commerce Solutions",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Laravel",
        "SQL",
        "Tailwind CSS",
      ],
      price: "Mulai dari Rp 500.000",
      duration: "2-4 minggu",
      image:
        "https://i.pinimg.com/736x/38/f9/13/38f913f969b14a6ca5af964cc5b3528a.jpg",
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      subtitle: "iOS & Android Applications",
      description:
        "Mengembangkan aplikasi mobile native dan cross-platform yang user-friendly dengan performa tinggi dan fitur-fitur canggih.",
      features: [
        "Android Development",
        "UI/UX Design yang Intuitive",
        "Push Notifications",
        "Offline Functionality",
        "App Store Optimization",
      ],
      technologies: [
        // "React Native",
        // "Swift",
        "Kotlin",
        "Java",
        "Firebase",
        "Flutter",
      ],
      price: "Mulai dari Rp 500.000",
      duration: "6-12 minggu",
      image:
        "https://i.pinimg.com/736x/d5/b8/56/d5b85646e59db988d3eb47b1947092c7.jpg",
    },
    {
      id: "design",
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      subtitle: "Beautiful & Functional Designs",
      description:
        "Menciptakan desain yang tidak hanya indah secara visual tetapi juga fungsional dan memberikan pengalaman pengguna yang luar biasa.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing",
        "Design System Creation",
        "Responsive Design Guidelines",
      ],
      technologies: ["Figma"],
      price: "Mulai dari Rp 500.000",
      duration: "1-3 minggu",
      image:
        "https://i.pinimg.com/736x/3c/53/99/3c5399ef4a7b2f6575361c0935c61170.jpg",
    },
    {
      id: "backend",
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      subtitle: "Scalable Server Solutions",
      description:
        "Membangun backend yang robust, scalable, dan secure untuk mendukung aplikasi web dan mobile dengan performa tinggi.",
      features: [
        "RESTful API Development",
        "GraphQL Implementation",
        "Database Design & Optimization",
        "Authentication & Authorization",
        "Microservices Architecture",
        "Real-time Features",
      ],
      technologies: [
        "Node.js",
        // "Express",
        "Python",
        // "Django",
        "PostgreSQL",
        "Laravel",
      ],
      price: "Mulai dari Rp 1.000.000",
      duration: "3-6 minggu",
      image:
        "https://i.pinimg.com/736x/e5/b6/f4/e5b6f4fd63603104df57eec77f22e8f1.jpg",
    },
    // {
    //   id: "cloud",
    //   icon: <Cloud className="w-8 h-8" />,
    //   title: "Cloud Solutions",
    //   subtitle: "AWS, Azure & GCP Services",
    //   description:
    //     "Implementasi solusi cloud yang scalable, cost-effective, dan secure untuk bisnis modern dengan infrastruktur yang reliable.",
    //   features: [
    //     "Cloud Migration Services",
    //     "DevOps & CI/CD Pipeline",
    //     "Container Orchestration",
    //     "Monitoring & Analytics",
    //     "Backup & Disaster Recovery",
    //     "Cost Optimization",
    //   ],
    //   technologies: [
    //     "AWS",
    //     "Azure",
    //     "GCP",
    //     "Docker",
    //     "Kubernetes",
    //     "Terraform",
    //   ],
    //   price: "Mulai dari Rp 10.000.000",
    //   duration: "4-8 minggu",
    //   image: "/api/placeholder/600/400",
    // },
    // {
    //   id: "consulting",
    //   icon: <Target className="w-8 h-8" />,
    //   title: "Tech Consulting",
    //   subtitle: "Strategic Technology Guidance",
    //   description:
    //     "Konsultasi teknologi strategis untuk membantu bisnis Anda membuat keputusan teknologi yang tepat dan mengoptimalkan proses digital.",
    //   features: [
    //     "Technology Assessment",
    //     "Digital Transformation Strategy",
    //     "Architecture Planning",
    //     "Performance Optimization",
    //     "Security Audit",
    //     "Team Training & Mentoring",
    //   ],
    //   technologies: [
    //     "Various",
    //     "Analysis Tools",
    //     "Documentation",
    //     "Best Practices",
    //   ],
    //   price: "Mulai dari Rp 2.000.000",
    //   duration: "1-2 minggu",
    //   image: "/api/placeholder/600/400",
    // },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      position: "CEO, Tech Startup",
      content:
        "Website yang dibuat sangat profesional dan loading speednya luar biasa cepat. Tim sangat responsif dan memahami kebutuhan bisnis kami.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Sari Indrawati",
      position: "Marketing Director",
      content:
        "Aplikasi mobile yang dikembangkan sangat user-friendly dan meningkatkan engagement customer kami hingga 300%. Highly recommended!",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Ahmad Rahman",
      position: "Founder, E-commerce",
      content:
        "Desain UI/UX yang modern dan fungsional. Conversion rate toko online kami meningkat signifikan setelah redesign.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Linda Kusuma",
      position: "CTO, Fintech",
      content:
        "Backend system yang robust dan scalable. Mampu handle traffic tinggi tanpa masalah. Excellent work!",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "100+",
      label: "Happy Clients",
    },
    {
      icon: <Code className="w-8 h-8" />,
      number: "200+",
      label: "Projects Completed",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      number: "5+",
      label: "Years Experience",
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "4.9",
      label: "Average Rating",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description:
        "Memahami kebutuhan bisnis Anda dan merencanakan solusi terbaik",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Design & Prototype",
      description: "Membuat design mockup dan prototype untuk validasi konsep",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Development",
      description: "Implementasi dengan teknologi terdepan dan best practices",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Testing & Launch",
      description: "Quality assurance menyeluruh dan deployment ke production",
      icon: <Rocket className="w-6 h-6" />,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert(
      "Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda."
    );
    setIsContactOpen(false);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const openContactModal = (serviceTitle = "") => {
    setSelectedService(serviceTitle);
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    setIsContactOpen(true);
  };

  // Animation variants
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
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

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
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-xl"></div>
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Explore Our <span className="text-green-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Digital transformation starts here. We provide leading technology
              solutions to grow your business through powerful websites, mobile
              applications, and systems.
            </p>
          </motion.div>

        
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-xl"></div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-lime-400" />
        </motion.div>
      </motion.section>

      

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 px-4 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          {/* <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Our <span className="text-lime-400">Services</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Solusi teknologi komprehensif untuk transformasi digital bisnis
              Anda
            </motion.p>
          </motion.div> */}

          {/* Service Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.button
                id={service.id}
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === service.id
                    ? "bg-lime-400 text-slate-900"
                    : "bg-slate-700 text-white hover:bg-slate-600"
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.icon}
                <span className="font-medium">{service.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Active Service Detail */}
          <AnimatePresence mode="wait">
            {services.map(
              (service) =>
                activeTab === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-800 rounded-3xl p-8 md:p-12"
                  >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="text-lime-400">{service.icon}</div>
                          <div>
                            <h3 className="text-3xl font-bold text-white">
                              {service.title}
                            </h3>
                            <p className="text-lime-400 text-lg">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-white mb-4">
                            Key Features:
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {service.features.map((feature, index) => (
                              <motion.div
                                key={index}
                                className="flex items-start space-x-3"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: index * 0.1,
                                }}
                              >
                                <CheckCircle className="w-5 h-5 text-lime-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-white mb-4">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, index) => (
                              <motion.span
                                key={index}
                                className="bg-slate-700 text-lime-400 px-3 py-1 rounded-full text-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay: index * 0.05,
                                }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                          <div className="bg-slate-700 p-4 rounded-xl">
                            <div className="text-lime-400 font-semibold mb-1">
                              Starting Price
                            </div>
                            <div className="text-white text-lg">
                              {service.price}
                            </div>
                          </div>
                          <div className="bg-slate-700 p-4 rounded-xl">
                            <div className="text-lime-400 font-semibold mb-1">
                              Timeline
                            </div>
                            <div className="text-white text-lg">
                              {service.duration}
                            </div>
                          </div>
                        </div>

                        <motion.button
                          onClick={() => openContactModal(service.title)}
                          className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-lime-300 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Order This Service</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </div>

                      <div className="relative">
                        <motion.div
                          className="relative z-10 bg-slate-700 rounded-2xl p-4"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-64 object-cover rounded-xl"
                          />
                        </motion.div>
                        <motion.div
                          className="absolute inset-0 bg-lime-400 rounded-2xl"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 0.1, scale: 0.95 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Our <span className="text-lime-400">Process</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Proses kerja yang terstruktur dan transparan untuk hasil yang
              optimal
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-800 p-6 rounded-2xl h-full relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-lime-400 text-slate-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="text-lime-400">{step.icon}</div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-lime-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              What Our <span className="text-lime-400">Clients Say</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Kepuasan client adalah prioritas utama kami
            </motion.p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800 p-8 rounded-3xl max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-yellow-400 fill-current"
                        />
                      )
                    )}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="text-white font-semibold text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-lime-400">
                        {testimonials[currentTestimonial].position}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-lime-400"
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Why Choose <span className="text-lime-400">Us?</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Keunggulan yang membedakan kami dari yang lain
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast & Efficient",
                description:
                  "Pengerjaan cepat tanpa mengurangi kualitas dengan metodologi agile development",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure & Reliable",
                description:
                  "Keamanan tingkat enterprise dengan backup dan monitoring 24/7",
              },
              {
                icon: <HeartHandshake className="w-8 h-8" />,
                title: "Dedicated Support",
                description:
                  "Tim support yang responsif dan maintenance berkala untuk performa optimal",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Data-Driven",
                description:
                  "Solusi berbasis data dan analytics untuk optimasi performa bisnis",
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Scalable Solutions",
                description:
                  "Arsitektur yang dapat berkembang seiring pertumbuhan bisnis Anda",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Goal Oriented",
                description:
                  "Fokus pada pencapaian target bisnis dengan ROI yang terukur",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 p-6 rounded-2xl"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-lime-400 mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-lime-400 to-green-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>

          <motion.p
            className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mari wujudkan ide digital Anda bersama tim expert kami. Konsultasi
            gratis untuk diskusi kebutuhan project Anda.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => openContactModal()}
              className="bg-slate-900 text-lime-400 px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-slate-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Start Your Project</span>
            </motion.button>

            <motion.a
              href="https://wa.me/+6281226577201"
              className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-900 hover:text-lime-400 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsContactOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-800 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated Background Stars */}
              {/* <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-lime-400 rounded-full opacity-30"
                    animate={{
                      x: [0, 30, 0],
                      y: [0, -30, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div> */}

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Let's work together
                    </h2>
                    <p className="text-gray-400">
                      Please fill out the form below to contact me.
                    </p>
                  </div>
                  <motion.button
                    onClick={() => setIsContactOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <input
                        type="text"
                        name="firstname"
                        placeholder="Firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors duration-300"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors duration-300"
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors duration-300"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors duration-300"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:border-lime-400 transition-colors duration-300"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <textarea
                      name="message"
                      placeholder="Type your message here"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-lime-400 transition-colors duration-300 resize-none"
                      required
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-lime-400 to-green-400 text-slate-900 py-4 rounded-xl font-semibold text-lg hover:from-lime-300 hover:to-green-300 transition-all duration-300 flex items-center justify-center space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
