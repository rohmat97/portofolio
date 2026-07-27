import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-6 left-6 z-40 p-3 rounded-2xl bg-slate-900/90 text-cyan-400 border border-cyan-500/30 shadow-lg backdrop-blur hover:bg-cyan-950 hover:border-cyan-400 transition-all cursor-pointer no-print group"
    >
      <FaChevronUp className="group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};

export default BackToTop;
