"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const WeAre = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const [textRevealIndex, setTextRevealIndex] = useState(0);
  const sectionRef = useRef(null);

  const mainText = "WE ARE CREATORS, INNOVATORS, AND STORYTELLERS COMMITTED TO UNDERSTANDING EACH BRAND'S UNIQUE IDENTITY. WE IMMERSE OURSELVES IN YOUR VISION, BLENDING STRATEGY WITH CREATIVITY TO BUILD BRANDS THAT DON'T JUST EXIST BUT THRIVE IN THE HEARTS OF THEIR AUDIENCES.";
  
  const highlightedWords = ["CREATORS", "INNOVATORS", "STORYTELLERS", "CREATIVITY", "BUILD BRANDS", "AUDIENCES"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setTextRevealIndex((prev) => (prev + 1) % mainText.split(' ').length);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isInView, mainText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const icons = [
    { id: 1, icon: "🌿", color: "from-green-400 to-emerald-500", name: "Nature" },
    { id: 2, icon: "💎", color: "from-blue-400 to-cyan-500", name: "Premium" },
    { id: 3, icon: "🔥", color: "from-orange-400 to-red-500", name: "Energy" },
    { id: 4, icon: "⚡", color: "from-yellow-400 to-orange-500", name: "Power" },
    { id: 5, icon: "🎨", color: "from-purple-400 to-pink-500", name: "Creative" },
    { id: 6, icon: "🚀", color: "from-indigo-400 to-purple-500", name: "Innovation" },
    { id: 7, icon: "🌟", color: "from-lime-400 to-green-500", name: "Excellence" },
    { id: 8, icon: "🎯", color: "from-teal-400 to-blue-500", name: "Focus" },
  ];

  const floatingElements = [...Array(20)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 12 + 4,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 3,
  }));

  const renderAnimatedText = () => {
    const words = mainText.split(' ');
    return words.map((word, index) => {
      const isHighlighted = highlightedWords.some(hw => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, '');
        const cleanHighlight = hw.replace(/[^a-zA-Z]/g, '');
        return cleanWord === cleanHighlight || hw.includes(cleanWord);
      });
      const isRevealed = index <= textRevealIndex;
      
      return (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className={`inline-block mr-2 ${
            isHighlighted 
              ? 'text-lime-400 font-bold bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent' 
              : 'text-white'
          }`}
        >
          {word}
        </motion.span>
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden py-16 lg:py-24"
    >
      {/* Animated Background Grid */}
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
          backgroundImage: "linear-gradient(90deg, #a3e635 1px, transparent 1px), linear-gradient(0deg, #a3e635 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Floating Background Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute bg-gradient-to-br from-lime-400 to-green-500 rounded-full opacity-20 blur-md"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-15, 15, -15],
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8"
            variants={itemVariants}
          >
            {renderAnimatedText()}
          </motion.h1>
        </motion.div>

        {/* Interactive Icons Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-8 mb-16 max-w-4xl mx-auto"
        >
          {icons.map((iconItem, index) => (
            <motion.div
              key={iconItem.id}
              variants={iconVariants}
              whileHover="hover"
              onHoverStart={() => setActiveIcon(iconItem.id)}
              onHoverEnd={() => setActiveIcon(null)}
              className={`relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${iconItem.color} cursor-pointer shadow-lg`}
            >
              <motion.span
                className="text-2xl md:text-3xl"
                animate={{
                  rotate: activeIcon === iconItem.id ? [0, -10, 10, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                {iconItem.icon}
              </motion.span>
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{
                  opacity: activeIcon === iconItem.id ? 1 : 0,
                  y: activeIcon === iconItem.id ? -5 : 10,
                  scale: activeIcon === iconItem.id ? 1 : 0.8,
                }}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded-lg backdrop-blur-sm"
              >
                {iconItem.name}
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${iconItem.color} opacity-0 blur-xl`}
                animate={{
                  opacity: activeIcon === iconItem.id ? 0.6 : 0,
                  scale: activeIcon === iconItem.id ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-lime-400/10 backdrop-blur-sm rounded-full px-6 py-3 border border-lime-400/20"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(163, 230, 53, 0.2)" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.div
              className="w-3 h-3 bg-lime-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-lime-400 font-bold text-sm uppercase tracking-wider">
               ESPERCODE
            </span>
            <motion.div
              className="w-3 h-3 bg-lime-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Particle Effect on Hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: activeIcon ? 1 : 0 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-lime-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default WeAre;