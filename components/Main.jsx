"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Loading Component
const LoadingScreen = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-lime-400 border-t-transparent rounded-full mx-auto mb-4"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white"
            >
              <div className="text-3xl font-bold mb-2">AURELIA</div>
              <div className="text-lime-400 text-sm">CREATIVE AGENCY</div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Hero Component
const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden"
    >
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex justify-between items-center p-4 lg:p-8"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
            <span className="text-blue-800 font-bold text-lg">★</span>
          </div>
          <span className="text-white font-bold text-xl">AURELIA</span>
          <span className="text-lime-400 text-xs">CREATIVE</span>
        </motion.div>
        
        <div className="hidden lg:flex space-x-8 text-white">
          {['HOME', 'ABOUT US', 'OUR SERVICES', 'PORTFOLIOS', 'PAGES', 'CONTACT US'].map((item, index) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.1, color: '#a3e635' }}
              href="#"
              className="hover:text-lime-400 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center space-x-2 bg-lime-400 px-4 py-2 rounded-full"
        >
          <span className="text-blue-800 font-bold">📞 PHONE NUMBER</span>
          <span className="text-blue-800 font-bold">+1 917 234 5678</span>
        </motion.div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 px-4 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Stats and Content */}
          <div className="space-y-8">
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="text-white">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="text-5xl lg:text-6xl font-bold"
                >
                  500+
                </motion.div>
                <div className="text-sm">HAPPY CLIENT</div>
              </div>
              <div className="text-white">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="text-5xl lg:text-6xl font-bold"
                >
                  125+
                </motion.div>
                <div className="text-sm">PROJECT DONE</div>
              </div>
              <div className="text-white">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="text-5xl lg:text-6xl font-bold"
                >
                  450+
                </motion.div>
                <div className="text-sm">MEDIA PARTNERS</div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <h1 className="text-6xl lg:text-8xl font-black text-lime-400 leading-none">
                CREATIVE
                <br />
                AGENCY
              </h1>
            </motion.div>
          </div>

          {/* Right Side - Image and CTA */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt="Creative professional"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              />
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute top-4 right-4 bg-white p-4 rounded-full"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white">✈</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="mt-6 bg-white p-6 rounded-lg"
            >
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                GET STARTED ➜
              </motion.button>
            </motion.div>

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-4 right-4 w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center"
            >
              <span className="text-blue-800 font-bold">▶</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-lime-400 transform -skew-y-1 h-16 flex items-center"
      >
        <div className="flex items-center space-x-8 px-8 transform skew-y-1">
          <span className="text-blue-800 font-bold text-xl">BRANDING</span>
          <span className="text-blue-800">★</span>
          <span className="text-blue-800 font-bold text-xl">GRAPHIC DESIGN</span>
          <span className="text-blue-800">★</span>
          <span className="text-blue-800 font-bold text-xl">WEB DESIGN</span>
          <span className="text-blue-800">★</span>
          <span className="text-blue-800 font-bold text-xl">DIGITAL</span>
        </div>
      </motion.div>
    </motion.section>
  );
};

// Service Component
const Service = () => {
  const services = [
    {
      title: "BRAND BUILDING & STRATEGY.",
      description: "Lorem ipsum dolor adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      icon: "🎯"
    },
    {
      title: "CREATIVE DIGITAL SOLUTION.",
      description: "Lorem ipsum dolor adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      icon: "💡",
      highlight: true
    },
    {
      title: "MARKETING & CAMPAIGN.",
      description: "Lorem ipsum dolor adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      icon: "📈"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-16 lg:py-24 bg-gray-900"
    >
      <div className="px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-lime-400 text-sm font-semibold">★ WHAT WE DO</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
            DESIGNING FOR SEAMLESS AND
            <br />
            ENJOYABLE INTERACTIONS.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg"
          >
            ALL SERVICES ➜
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              className={`relative group ${service.highlight ? 'bg-blue-600' : 'bg-gray-800'} rounded-lg overflow-hidden`}
            >
              <div className="p-6">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 ${service.highlight ? 'bg-lime-400' : 'bg-lime-400'} rounded-full flex items-center justify-center mb-4`}
                >
                  <span className="text-2xl">{service.icon}</span>
                </motion.div>
                <h3 className="text-white font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-6">{service.description}</p>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Creativity Component
const Creativity = () => {
  const stats = [
    { label: "SUCCESSFUL CAMPAIGN LAUNCHES", value: "98%" },
    { label: "WEBSITE TRAFFIC", value: "78%" },
    { label: "NEW CLIENT GROWTH", value: "83%" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-16 lg:py-24 bg-gray-100"
    >
      <div className="px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center mb-4">
                <span className="text-lime-400 text-sm font-semibold">★ WHO WE ARE</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
                CREATIVITY
                <br />
                MEETS STRATEGY.
              </h2>
            </div>

            <p className="text-gray-600 text-lg">
              With a team of passionate designers, marketers, and strategists, we specialize in delivering impactful solutions that elevate brands to new heights. Our goal is to create brands technical results.
            </p>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 bg-lime-400 p-4 rounded-lg"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-lime-400 font-bold">10</span>
                </div>
                <span className="font-bold text-gray-900">OVER 10 YEARS OF EXPERIENCE</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 bg-blue-600 text-white p-4 rounded-lg"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">★</span>
                </div>
                <span className="font-bold">TRUSTED BY GLOBAL BRANDS</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Image and Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=600&fit=crop&crop=face"
                alt="Creative woman"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              />
              
              {/* Stats Overlay */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-80"
              >
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.value }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{stat.label}</span>
                        <span className="font-bold text-gray-900">{stat.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: stat.value }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                          viewport={{ once: true }}
                          className="bg-lime-400 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg w-full font-semibold"
                >
                  ABOUT US ➜
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// WeAre Component
const WeAre = () => {
  const services = [
    { icon: "🎯", color: "bg-lime-400" },
    { icon: "💡", color: "bg-blue-500" },
    { icon: "💎", color: "bg-purple-500" },
    { icon: "👁", color: "bg-green-500" },
    { icon: "🌿", color: "bg-emerald-500" },
    { icon: "📊", color: "bg-yellow-500" },
    { icon: "⛰", color: "bg-gray-500" },
    { icon: "🌱", color: "bg-green-400" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-16 lg:py-24 bg-gray-900"
    >
      <div className="px-4 lg:px-8">
        {/* Services Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="flex space-x-4 bg-gray-800 p-4 rounded-full">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center cursor-pointer`}
              >
                <span className="text-white text-lg">{service.icon}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Quote */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-8">
            <span className="text-blue-400">"WE ARE CREATORS,</span>{" "}
            <span className="text-white">INNOVATORS, AND STORYTELLERS</span>
            <br />
            <span className="text-white">COMMITTED TO UNDERSTANDING</span>{" "}
            <span className="bg-blue-600 px-4 py-2 rounded-lg inline-block">EACH BRAND'S</span>
            <br />
            <span className="text-white">UNIQUE</span>{" "}
            <span className="bg-blue-600 px-4 py-2 rounded-lg inline-block text-white">IDENTITY.</span>{" "}
            <span className="text-white">WE IMMERSE OURSELVES IN</span>
            <br />
            <span className="text-white">YOUR VISION,</span>{" "}
            <span className="text-white">BLENDING STRATEGY WITH</span>{" "}
            <span className="bg-lime-400 text-gray-900 px-4 py-2 rounded-lg inline-block font-black">CREATIVITY</span>{" "}
            <span className="text-white">TO</span>
            <br />
            <span className="bg-lime-400 text-gray-900 px-4 py-2 rounded-lg inline-block font-black">BUILD BRANDS</span>{" "}
            <span className="text-white">THAT DON'T JUST EXIST BUT THRIVE IN THE</span>
            <br />
            <span className="text-white">HEARTS OF THEIR</span>{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-lg inline-block font-black">AUDIENCES.</span>
            <span className="text-blue-400">"</span>
          </h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mt-12"
          >
            <div className="flex items-center space-x-2 text-lime-400">
              <span className="text-2xl">★</span>
              <span className="font-bold">AURELIA CREATIVE AGENCY</span>
              <span className="text-2xl">★</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Main App Component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen">
      <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Hero />
        <Service />
        <Creativity />
        <WeAre />
      </motion.div>
    </div>
  );
};

export default App;