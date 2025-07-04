import React from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { FaShareAlt, FaDownload, FaLinkedin, FaMagic } from 'react-icons/fa';
import SuggestionCard from './SuggestionCard'; // Import the new component

function ResultsDisplay({ suggestions, currentJobTitle, onGetMoreSuggestions, loading }) {

  const downloadPdf = async () => {
    const input = document.getElementById('suggestions-container-to-pdf'); 
    if (!input) {
      alert("No suggestions to download!");
      return;
    }

    const isDarkModeActive = document.documentElement.classList.contains('dark');
    if (isDarkModeActive) {
      input.classList.remove('dark:bg-gray-800');
      input.classList.add('bg-white');
    }

    try {
      const canvas = await html2canvas(input, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4',
      });

      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);

      let heightLeft = imgHeight;
      while (heightLeft > pdf.internal.pageSize.getHeight()) {
        position -= pdf.internal.pageSize.getHeight();
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }

      pdf.save(`Career_Suggestions_${currentJobTitle.replace(/\s/g, '_')}.pdf`);
    } catch (err) {
      console.error("Error generating PDF:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      if (isDarkModeActive) {
        input.classList.remove('bg-white');
        input.classList.add('dark:bg-gray-800');
      }
    }
  };

  const shareOnTwitter = () => {
    const text = `Discovering my next wild career adventure from being a ${currentJobTitle}! Check out these ideas: ${suggestions.join(', ')} #CareerChange #WildCareers`;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const title = "My Next Wild Career Adventure!";
    const summary = `Just got some radically different career suggestions for my current job as a ${currentJobTitle}. This tool is amazing!`;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`, '_blank');
  };

  return (
    <motion.section
      id="suggestions-container-to-pdf" 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl mt-8 mb-4 md:mb-8"
    >
      <h3 className="text-3xl font-bold text-center mb-6 text-purple-600 dark:text-purple-300">Your Wild Career Options:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {suggestions.map((suggestion, index) => (
          <SuggestionCard key={index} suggestion={suggestion} index={index} />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
        <motion.button
          onClick={onGetMoreSuggestions}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 flex items-center"
          disabled={loading}
        >
          <FaMagic className={`mr-2 ${loading ? 'animate-spin' : ''}`} /> Get More Suggestions
        </motion.button>
        <motion.button
          onClick={downloadPdf}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-3 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200 flex items-center"
        >
          <FaDownload className="mr-2" /> Download PDF
        </motion.button>
        <div className="flex space-x-3">
          <motion.button
            onClick={shareOnTwitter}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-blue-400 text-white shadow-md hover:bg-blue-500 transition-colors duration-200"
            aria-label="Share on Twitter"
          >
            <FaShareAlt />
          </motion.button>
          <motion.button
            onClick={shareOnLinkedIn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-blue-700 text-white shadow-md hover:bg-blue-800 transition-colors duration-200"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedin />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

export default ResultsDisplay;