import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import InputForm from './components/InputForm';
import ResultsDisplay from './components/ResultsDisplay';
import Footer from './components/Footer';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  const [currentJobTitle, setCurrentJobTitle] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleJobTitleChange = (e) => {
    setCurrentJobTitle(e.target.value);
  };

  const fetchSuggestions = async () => {
    setLoading(true);
    setError('');
    setSuggestions([]);
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/suggest-careers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentJobTitle }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong on the server.');
      }

      const data = await response.json();
      setSuggestions(data.suggestions);
    } catch (err) {
      console.error('Error fetching suggestions:', err);
      setError(err.message || 'Failed to get suggestions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 dark:from-gray-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-between p-4 transition-colors duration-300">

      
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform duration-300 z-50"
        aria-label="Toggle dark mode"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={darkMode ? "moon" : "sun"}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {darkMode ? <FaMoon className="w-6 h-6" /> : <FaSun className="w-6 h-6" />}
          </motion.div>
        </AnimatePresence>
      </button>

      <HeroSection />

      <InputForm
        currentJobTitle={currentJobTitle}
        onJobTitleChange={handleJobTitleChange}
        onSubmit={fetchSuggestions}
        loading={loading}
        error={error}
      />

      <AnimatePresence>
        {suggestions.length > 0 && (
          <ResultsDisplay
            suggestions={suggestions}
            currentJobTitle={currentJobTitle}
            onGetMoreSuggestions={fetchSuggestions}
            loading={loading}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;