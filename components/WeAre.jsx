"use client";
import { useLocale } from "@/app/ClientRootLayout";
import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";

const WeAre = () => {
  const { translations } = useLocale()
  const [isInView, setIsInView] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const [textRevealIndex, setTextRevealIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [touchedIcon, setTouchedIcon] = useState(null);
  const [animationStarted, setAnimationStarted] = useState(false); // Track if animation has started
  
  const sectionRef = useRef(null);
  const textIntervalRef = useRef(null);
  const animationFrameRef = useRef(null);
  const touchTimeoutRef = useRef(null);

  const mainText = translations.weare_main_text || "WE ARE CREATORS, INNOVATORS, AND STORYTELLERS COMMITTED TO UNDERSTANDING EACH BRAND'S UNIQUE IDENTITY. WE IMMERSE OURSELVES IN YOUR VISION, BLENDING STRATEGY WITH CREATIVITY TO BUILD BRANDS THAT DON'T JUST EXIST BUT THRIVE IN THE HEARTS OF THEIR AUDIENCES.";
  
  const highlightedWords = translations.weare_highlighted_words || ["CREATORS", "INNOVATORS", "STORYTELLERS", "CREATIVITY", "BUILD BRANDS", "AUDIENCES"];

  // Enhanced intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyVisible = entry.isIntersecting && entry.intersectionRatio > 0.1;
        setIsInView(isCurrentlyVisible);
        setIsVisible(isCurrentlyVisible);
        
        // Reset animation when coming into view for the first time or after leaving
        if (isCurrentlyVisible && !animationStarted) {
          setTextRevealIndex(0);
          setAnimationStarted(true);
        } else if (!isCurrentlyVisible) {
          setAnimationStarted(false);
        }
      },
      { 
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (textIntervalRef.current) {
        clearInterval(textIntervalRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
    };
  }, []); // Remove dependencies to prevent re-running

  // Fixed text reveal animation - simplified logic
  useEffect(() => {
    // Clear any existing interval first
    if (textIntervalRef.current) {
      clearInterval(textIntervalRef.current);
      textIntervalRef.current = null;
    }

    // Only start animation if component is visible and in view
    if (isVisible && isInView && animationStarted) {
      const totalWords = mainText.split(' ').length;
      
      // Don't start if animation is already complete
      if (textRevealIndex >= totalWords - 1) {
        return;
      }

      console.log('Starting text animation...', { textRevealIndex, totalWords }); // Debug log

      textIntervalRef.current = setInterval(() => {
        setTextRevealIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          console.log('Revealing word:', nextIndex, 'of', totalWords); // Debug log
          
          if (nextIndex >= totalWords - 1) {
            // Animation complete
            if (textIntervalRef.current) {
              clearInterval(textIntervalRef.current);
              textIntervalRef.current = null;
            }
            return totalWords - 1;
          }
          return nextIndex;
        });
      }, 120); // Slightly slower for better visibility
    }

    // Cleanup function
    return () => {
      if (textIntervalRef.current) {
        clearInterval(textIntervalRef.current);
        textIntervalRef.current = null;
      }
    };
  }, [isVisible, isInView, animationStarted]); // Removed textRevealIndex and mainText from dependencies

  // Simplified page visibility handling
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause animation when tab is hidden
        if (textIntervalRef.current) {
          clearInterval(textIntervalRef.current);
          textIntervalRef.current = null;
        }
      } else if (isVisible && isInView && animationStarted) {
        // Resume animation when tab becomes visible again
        const totalWords = mainText.split(' ').length;
        if (textRevealIndex < totalWords - 1) {
          textIntervalRef.current = setInterval(() => {
            setTextRevealIndex((prevIndex) => {
              const nextIndex = prevIndex + 1;
              if (nextIndex >= totalWords - 1) {
                if (textIntervalRef.current) {
                  clearInterval(textIntervalRef.current);
                  textIntervalRef.current = null;
                }
                return totalWords - 1;
              }
              return nextIndex;
            });
          }, 120);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
    };
  }, [isVisible, isInView, animationStarted, textRevealIndex, mainText]);

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
    { id: 1, icon: "🌿", color: "from-green-400 to-emerald-500", name: `${translations.weare_icon_label?.[0]}` },
    { id: 2, icon: "💎", color: "from-blue-400 to-cyan-500", name: `${translations.weare_icon_label?.[1]}` },
    { id: 3, icon: "🔥", color: "from-orange-400 to-red-500", name: `${translations.weare_icon_label?.[2]}` },
    { id: 4, icon: "⚡", color: "from-yellow-400 to-orange-500", name: `${translations.weare_icon_label?.[3]}` },
    { id: 5, icon: "🎨", color: "from-purple-400 to-pink-500", name: `${translations.weare_icon_label?.[4]}` },
    { id: 6, icon: "🚀", color: "from-indigo-400 to-purple-500", name: `${translations.weare_icon_label?.[5]}` },
    { id: 7, icon: "🌟", color: "from-lime-400 to-green-500", name: `${translations.weare_icon_label?.[6]}` },
    { id: 8, icon: "🎯", color: "from-teal-400 to-blue-500", name: `${translations.weare_icon_label?.[7]}` },
  ];

  // Memoize floating elements to prevent recalculation
  const floatingElements = useCallback(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 4,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 3,
    }));
  }, []);

  const memoizedFloatingElements = useRef(floatingElements()).current;

  // Handle touch interactions for mobile
  const handleIconTouch = useCallback((iconId) => {
    setTouchedIcon(iconId);
    setActiveIcon(iconId);
    
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
    }
    
    touchTimeoutRef.current = setTimeout(() => {
      setTouchedIcon(null);
      setActiveIcon(null);
    }, 2000);
  }, []);

  // Handle hover for desktop
  const handleHoverStart = useCallback((iconId) => {
    if (!touchedIcon) {
      setActiveIcon(iconId);
    }
  }, [touchedIcon]);

  const handleHoverEnd = useCallback(() => {
    if (!touchedIcon) {
      setActiveIcon(null);
    }
  }, [touchedIcon]);

  // Detect if device supports touch
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

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
          key={`${word}-${index}`} // More unique key
          initial={{ opacity: 0, y: 20 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: index * 0.02 }} // Reduced delay for smoother animation
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
        animate={isVisible ? {
          backgroundPosition: ["0% 0%", "100% 100%"],
        } : {}}
        transition={isVisible ? {
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        } : {}}
        style={{
          backgroundImage: "linear-gradient(90deg, #a3e635 1px, transparent 1px), linear-gradient(0deg, #a3e635 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Floating Background Elements */}
      {isVisible && memoizedFloatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute bg-gradient-to-br from-lime-400 to-green-500 rounded-full opacity-20 blur-md"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          animate={isVisible ? {
            y: [-20, 20, -20],
            x: [-15, 15, -15],
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
          } : {}}
          transition={isVisible ? {
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          } : {}}
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
            
            {/* Debug Info - Remove in production */}
            {/* <div className="text-sm text-gray-500 mt-4">
              Debug: Index {textRevealIndex} / {mainText.split(' ').length} | 
              Visible: {isVisible.toString()} | 
              InView: {isInView.toString()} | 
              Started: {animationStarted.toString()}
            </div> */}
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
              onHoverStart={() => handleHoverStart(iconItem.id)}
              onHoverEnd={handleHoverEnd}
              onTouchStart={() => handleIconTouch(iconItem.id)}
              onClick={() => isTouchDevice ? handleIconTouch(iconItem.id) : null}
              className={`relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${iconItem.color} cursor-pointer shadow-lg touch-manipulation select-none`}
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
                className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg backdrop-blur-sm whitespace-nowrap z-10 pointer-events-none ${
                  isTouchDevice ? 'text-sm px-4 py-2' : ''
                }`}
              >
                {iconItem.name}
                {isTouchDevice && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                )}
              </motion.div>

              {/* Touch indicator for mobile */}
              {isTouchDevice && (
                <motion.div
                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-lime-400 rounded-full flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: touchedIcon === iconItem.id ? [1, 1.3, 1] : 0,
                    opacity: touchedIcon === iconItem.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    animate={touchedIcon === iconItem.id ? {
                      scale: [1, 0.8, 1],
                    } : {}}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              )}

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
              animate={isVisible ? {
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              } : {}}
              transition={isVisible ? {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              } : {}}
            />
            <span className="text-lime-400 font-bold text-sm uppercase tracking-wider">
               ESPERCODE
            </span>
            <motion.div
              className="w-3 h-3 bg-lime-400 rounded-full"
              animate={isVisible ? {
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              } : {}}
              transition={isVisible ? {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              } : {}}
            />
          </motion.div>
        </motion.div>

        {/* Particle Effect on Hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: activeIcon && isVisible ? 1 : 0 }}
        >
          {isVisible && [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-lime-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={activeIcon && isVisible ? {
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              } : {}}
              transition={activeIcon && isVisible ? {
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut",
              } : {}}
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