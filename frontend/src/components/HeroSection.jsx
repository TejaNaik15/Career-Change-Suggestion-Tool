import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaPalette, FaMagic, FaCloud } from 'react-icons/fa';

function HeroSection() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center my-8 md:my-16"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold text-purple-700 dark:text-purple-400 mb-4 animate-pulse-slow relative">
        Discover your next wild career adventure!
      </h1>
      <div className="flex justify-center space-x-4 mt-8">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}><FaRocket className="text-6xl text-blue-500 animate-float" /></motion.div>
        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}><FaPalette className="text-6xl text-pink-500 animate-wiggle" /></motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}><FaMagic className="text-6xl text-green-500 animate-float" /></motion.div>
        <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 4.5, delay: 0.2 }}><FaCloud className="text-6xl text-yellow-500 animate-wiggle" /></motion.div>
      </div>
    </motion.header>
  );
}

export default HeroSection;