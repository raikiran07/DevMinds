// LoadingPage.js
import React, { useState, useEffect } from 'react';


const LoadingPage = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsPageLoaded(true);
    };

    window.addEventListener('load', handlePageLoad);

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  return (
    <div className={`loading-container ${isPageLoaded ? 'hidden' : ''}`}>
      <div className="loading-dots">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default LoadingPage;
