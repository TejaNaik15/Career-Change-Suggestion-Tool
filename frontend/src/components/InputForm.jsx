import React from 'react';
import { motion } from 'framer-motion';
import { FaDiceD6 } from 'react-icons/fa';

function InputForm({ currentJobTitle, onJobTitleChange, onSubmit, loading, error }) {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto my-8"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-600 dark:text-purple-300">What's your current job title, aspiring Hokage / Demon Slayer / Hero in Training?</h2>
      <input
        type="text"
        value={currentJobTitle}
        onChange={onJobTitleChange}
        placeholder="e.g., Software Engineer, Teacher, Accountant"
        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-100 mb-6"
      />
      <motion.button
        onClick={onSubmit}
        whileHover={{ scale: 1.05, backgroundColor: 'var(--color-purple-600)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="w-full py-4 bg-purple-500 text-white font-bold rounded-lg text-xl shadow-md hover:bg-purple-600 transition-colors duration-200"
        style={{ '--color-purple-600': '#7c3aed' }}
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <FaDiceD6 className="animate-spin mr-2" /> Conjuring Ideas...
          </span>
        ) : (
          'Unleash the Weirdness!'
        )}
      </motion.button>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-center mt-4 text-sm"
        >
          {error}
        </motion.p>
      )}
    </motion.main>
  );
}

export default InputForm;