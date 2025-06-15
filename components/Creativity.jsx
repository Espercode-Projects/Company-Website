"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import TeamCard from "./TeamCard";

const WhoWeAre = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Zphere Social ",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced AI recommendations",
      image: "/img/zphere.png",
      tech: ["React", "Node.js", "AI/ML"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Flowise",
      category: "Mobile Development",
      description: "Secure and intuitive banking experience for millions of users",
      image: "/img/flowise.png",
      tech: ["React Native", "Blockchain", "Security"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Voice Chat Translator",
      category: "Web Development & AI/ML",
      description: "Revolutionary healthcare diagnostics powered by machine learning",
      image: "/img/call.png",
      tech: ["Python", "TensorFlow", "Healthcare"],
      status: "In Progress"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardHoverVariants = {
    rest: { 
      scale: 1,
      rotateY: 0,
      z: 0
    },
    hover: { 
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Enhanced Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              #10b981 20px,
              #10b981 22px
            )`,
          }}
        ></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              #10b981 40px,
              #10b981 42px
            )`,
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 relative z-10 py-8">
        <TeamCard />

        {/* Project Preview Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-32"
        >
          {/* Section Header */}
          <motion.div
            variants={projectVariants}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-2 mb-6"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.15)" }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium text-sm uppercase tracking-wider">
                Our Latest Work
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              // initial={{ opacity: 0, y: 30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-white">FEATURED </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                PROJECTS
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover the innovative solutions we've crafted for our clients, 
              showcasing cutting-edge technology and exceptional design.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay with Tech Stack */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              className="px-2 py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-xs rounded-full"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileHover={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/20 border-green-500/30 text-green-400' 
                            : 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {project.status}
                      </motion.span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.div
                      className="mb-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-green-400 text-sm font-medium">
                        {project.category}
                      </span>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-400 text-sm leading-relaxed"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  {/* Hover Effect Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ boxShadow: "0 0 0 0 rgba(16, 185, 129, 0)" }}
                    whileHover={{ 
                      boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.3)" 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Show More Button */}
          <motion.div
            className="text-center"
            variants={projectVariants}
          >
            <motion.button
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Navigate to projects page
                console.log("Navigate to projects page");
              }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative z-10">View All Projects</span>
              
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </motion.div>

              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.1 }}
                transition={{ duration: 0.6 }}
                style={{ backgroundColor: "white" }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Animated Background Elements */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-20 right-20 w-3 h-3 bg-green-400 rounded-full opacity-60"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 45, 90, 135, 180],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-20 w-4 h-4 bg-green-400 transform rotate-45 opacity-30"
        ></motion.div>

        {/* Additional Floating Elements for Projects Section */}
        {/* <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-10 w-2 h-2 bg-blue-400 rounded-full"
        ></motion.div> */}

        <motion.div
          animate={{
            x: [0, 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 right-16 w-3 h-3 border-2 border-green-400 rotate-45 opacity-40"
        ></motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;