"use client";
import { useLocale } from "@/app/ClientRootLayout";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaAndroid, FaChartLine, FaCode } from "react-icons/fa";

const Service = () => {
  const { translations } = useLocale()
  const [activeCard, setActiveCard] = useState(null);
  // const [isInView, setIsInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Check for mobile screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Auto-scroll carousel for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
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
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const services = [
    {
      id: 1,
      title: `${translations.service_services?.[0].title || "MODERN WEB"}`,
      description: `${translations.service_services?.[0].description}`,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <FaCode />,
      color: "from-gray-900 to-gray-800",
      accentColor: "lime-400",
    },
    {
      id: 2,
      title: `${translations.service_services?.[1].title || "MOBILE APPS"}`,
      description:`${translations.service_services?.[1].description}`,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <FaAndroid />,
      // color: "from-blue-600 to-blue-800",
      color: "from-gray-900 to-gray-800",
      accentColor: "lime-400",
    },
    {
      id: 3,
      title: `${translations.service_services?.[2].title || "MARKETING"}`,
      description:`${translations.service_services?.[2].description}`,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <FaChartLine />,
      color: "from-gray-900 to-gray-800",
      accentColor: "lime-400",
    },
  ];

  // const floatingElements = [...Array(15)].map((_, i) => ({
  //   id: i,
  //   x: Math.random() * 100,
  //   y: Math.random() * 100,
  //   size: Math.random() * 20 + 10,
  //   duration: Math.random() * 10 + 5,
  // }));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return { x: "0%", scale: 1, opacity: 1, zIndex: 10 }; // center
    if (diff === 1 || diff === -(services.length - 1))
      return { x: "100%", scale: 0.8, opacity: 0.6, zIndex: 5 }; // right
    if (diff === -1 || diff === services.length - 1)
      return { x: "-100%", scale: 0.8, opacity: 0.6, zIndex: 5 }; // left
    return { x: "200%", scale: 0.6, opacity: 0, zIndex: 1 }; // hidden
  };

  return (
    <section
      ref={sectionRef}
      className="relative  min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden py-16 lg:py-24"
      id="service"
    >
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "linear-gradient(45deg, #a3e635 25%, transparent 25%), linear-gradient(-45deg, #a3e635 25%, transparent 25%)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Background Elements */}
      {/* {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute bg-lime-400 rounded-full opacity-20 blur-sm"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))} */}

      {/* Header Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 text-center mb-16 px-4 md:px-8 lg:px-16"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block text-lime-400 text-sm font-bold tracking-wider uppercase mb-4">
            {translations.service_question}
          </span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            animate={{
              textShadow: [
                "0 0 20px rgba(163, 230, 53, 0.5)",
                "0 0 40px rgba(163, 230, 53, 0.8)",
                "0 0 20px rgba(163, 230, 53, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {translations.service_first_title}
            <br />
            <span className="text-lime-400">{translations.service_second_title}</span>
          </motion.h2>
        </motion.div>

        <motion.button
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(163, 230, 53, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent border-2 border-lime-400 text-lime-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-400 hover:text-gray-900 transition-all duration-300 flex items-center space-x-3 mx-auto group"
        >
          <span>{translations.service_main_cta}</span>
          <motion.span className="text-xl">⚡</motion.span>
        </motion.button>
      </motion.div>

      {/* Services Grid/Carousel */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 px-4 md:px-8 lg:px-16"
      >
        {/* Desktop Grid */}
        <div
          className={`${
            isMobile ? "hidden" : "grid"
          } grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto`}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setActiveCard(service.id)}
              onHoverEnd={() => setActiveCard(null)}
              className={`relative bg-gradient-to-br ${service.color} rounded-3xl overflow-hidden cursor-pointer group shadow-2xl`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r from-${service.accentColor} to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                animate={
                  activeCard === service.id ? { scale: [1, 1.1, 1] } : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Card Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Service Icon */}
                <motion.div
                  className="mb-6"
                  animate={
                    activeCard === service.id ? { rotate: [0, 10, -10, 0] } : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`w-16 h-16 text-gray-900 bg-${service.accentColor} rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <motion.div
                    className={`w-8 h-8 bg-${service.accentColor} rounded-full`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Service Title */}
                <motion.h3
                  className="text-white text-xl md:text-2xl font-bold mb-4 leading-tight"
                  animate={activeCard === service.id ? { x: [0, 5, 0] } : {}}
                >
                  {service.title}
                </motion.h3>

                {/* Service Description */}
                <motion.p
                  className="text-gray-300 text-base leading-relaxed mb-6 flex-grow"
                  animate={
                    activeCard === service.id ? { opacity: [0.7, 1, 0.7] } : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {service.description}
                </motion.p>

                {/* Service Image */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden mb-6 group/image"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover/image:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    animate={
                      activeCard === service.id
                        ? { opacity: [0.5, 0.8, 0.5] }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Image Overlay Elements */}
                  <motion.div
                    className={`absolute top-4 right-4 w-6 h-6 bg-${service.accentColor} rounded-full`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`self-start bg-${service.accentColor} text-gray-900 px-6 py-3 rounded-full font-bold text-sm flex items-center space-x-2 shadow-lg group/btn`}
                >
                  <span>{translations.service_secondary_cta}</span>
                  <motion.span
                    animate={activeCard === service.id ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>

              {/* Card Border Animation */}
              <motion.div
                className={`absolute inset-0 border-2 border-${service.accentColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                animate={
                  activeCard === service.id
                    ? {
                        borderRadius: ["24px", "32px", "24px"],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Floating Elements Inside Card */}
              {/* {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 bg-${service.accentColor} rounded-full opacity-40`}
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${20 + i * 20}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))} */}
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div
          className={`${
            isMobile ? "block" : "hidden"
          } relative max-w-sm mx-auto`}
        >
          <div className="relative h-[600px] overflow-hidden">
            {services.map((service, index) => {
              const position = getCardPosition(index);
              return (
                <motion.div
                  key={service.id}
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl overflow-hidden cursor-pointer shadow-2xl`}
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex: position.zIndex,
                  }}
                  animate={{
                    x: position.x,
                    scale: position.scale,
                    opacity: position.opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 30,
                  }}
                  onTap={() => {
                    if (index !== currentIndex) {
                      setCurrentIndex(index);
                    }
                  }}
                >
                  {/* Card Content - Same as desktop */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Service Icon */}
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 bg-${service.accentColor} rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <motion.div
                        className={`w-8 h-8 bg-${service.accentColor} rounded-full`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-white text-xl font-bold mb-4 leading-tight">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Service Image */}
                    <div className="relative rounded-2xl overflow-hidden mb-6">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      <motion.div
                        className={`absolute top-4 right-4 w-6 h-6 bg-${service.accentColor} rounded-full`}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>

                    {/* Action Button */}
                    <button
                      className={`self-start bg-${service.accentColor} text-gray-900 px-6 py-3 rounded-full font-bold text-sm flex items-center space-x-2 shadow-lg`}
                    >
                      <span>LEARN MORE</span>
                      <span>→</span>
                    </button>
                  </div>

                  {/* Floating Elements Inside Card */}
                  {/* {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 bg-${service.accentColor} rounded-full opacity-40`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    />
                  ))} */}
                </motion.div>
              );
            })}
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center text-gray-900 font-bold shadow-lg"
            >
              ←
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-lime-400" : "bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center text-gray-900 font-bold shadow-lg"
            >
              →
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Bottom Section with Services Banner */}
      {/* <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 mt-16 px-4 md:px-8 lg:px-16"
      >
        <div className="bg-gradient-to-r from-lime-400 via-yellow-400 to-lime-400 rounded-3xl p-2 shadow-2xl">
          <motion.div
            className="bg-gray-900 rounded-2xl p-8 flex flex-wrap items-center justify-center gap-8 text-center"
            animate={{
              boxShadow: [
                "0 0 30px rgba(163, 230, 53, 0.3)",
                "0 0 60px rgba(163, 230, 53, 0.5)",
                "0 0 30px rgba(163, 230, 53, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {["BRANDING", "GRAPHIC DESIGN", "WEB DESIGN", "DIGITAL"].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center"
                >
                  <span className="text-gray-900 font-bold">+</span>
                </motion.div>
                <span className="text-white font-bold text-lg md:text-xl tracking-wider group-hover:text-lime-400 transition-colors">
                  {service}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div> */}

      {/* Additional Floating Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`extra-${i}`}
          className="absolute w-1 h-1 bg-lime-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
            scale: [1, 2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default Service;
