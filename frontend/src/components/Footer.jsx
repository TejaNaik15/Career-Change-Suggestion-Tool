import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaExternalLinkAlt, FaEnvelope, FaHeart } from 'react-icons/fa'; 

function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="text-center mt-16 mb-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl text-gray-600 dark:text-gray-400 text-sm border-t-2 border-purple-200 dark:border-purple-700">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-left md:text-left">
          <p className="font-semibold text-gray-800 dark:text-gray-200 text-base">Developed by Teja Naik</p>
          <p className="text-xs">&copy; {currentYear} Teja Naik. All Rights Reserved.</p>
          <p className="mt-2 flex items-center text-xs">
            Built with <FaHeart className="mx-1 text-red-500 animate-pulse" /> to inspire your next big move.
          </p>
        </div>

        
        <div className="flex flex-col items-center md:items-end">
          <p className="font-semibold text-gray-800 dark:text-gray-200 text-base mb-2">Connect & Learn More</p>
          <div className="flex justify-center space-x-4 text-2xl">
            <motion.a
              href="https://github.com/TejaNaik15" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="My GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/teja-naik-0b3021282/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="My LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://tejanaik15.github.io/personal-portfolio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="My Portfolio"
            >
              <FaExternalLinkAlt />
            </motion.a>
            <motion.a
              href="mailto:tinkuteja740@g,ail.com" 
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Contact me by email"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </div>

      
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-xs flex flex-wrap justify-center gap-x-4 gap-y-2">
        <a href="#privacy-policy" className="hover:underline text-gray-500 dark:text-gray-300">Privacy Policy</a>
        <a href="#terms-of-service" className="hover:underline text-gray-500 dark:text-gray-300">Terms of Service</a>
        <a href="#disclaimer" className="hover:underline text-gray-500 dark:text-gray-300">Disclaimer</a>
      </div>
    </footer>
  );
}

export default Footer;