import React, { useEffect, useState } from 'react';
import '../App.css'; // Make sure this path is correct

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button 
      onClick={handleToggle} 
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="dark-mode-toggle-button"
    >
      <img
        src={isDarkMode ? "sun.png" : "moon.png"}
        alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        style={{ width: '30px' }}
      />
    </button>
  );
};

export default DarkModeToggle;