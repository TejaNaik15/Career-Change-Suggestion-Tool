import React from 'react';
import { motion } from 'framer-motion';
import { FaDiceD6, FaMagic, FaRocket, FaPalette, FaCloud, FaTree, FaBook, FaGlobe, FaLightbulb, FaMoon } from 'react-icons/fa';


const careerIcons = {
  'default': <FaLightbulb />,
  'animal whisperer': <FaTree />,
  'professional napper': <FaMoon />,
  'cloud sculptor': <FaCloud />,
  'dream interpreter': <FaMagic />,
  'cosmic cartographer': <FaGlobe />,
  'chief confetti officer': <FaPalette />,
  'galactic gardener': <FaTree />,
  'sentient furniture designer': <FaRocket />,
  'historical ghost whisperer': <FaBook />,
  'underwater basket weaver': <FaCloud />, 
  'professional puzzle piece finder': <FaDiceD6 />,
  'curator of lost socks': <FaLightbulb />, 
};

const getCareerIcon = (careerName) => {
  const lowerCaseName = careerName.toLowerCase();
  for (const key in careerIcons) {
    if (lowerCaseName.includes(key)) {
      return careerIcons[key];
    }
  }
  return careerIcons['default'];
};

function SuggestionCard({ suggestion, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
      className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg shadow-md flex flex-col items-center text-center border-2 border-purple-200 dark:border-purple-700"
    >
      <div className="text-5xl text-purple-500 dark:text-purple-400 mb-3">
        {getCareerIcon(suggestion)}
      </div>
      <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
        {suggestion}
      </p>
    </motion.div>
  );
}

export default SuggestionCard;