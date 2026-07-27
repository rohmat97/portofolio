import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl shadow-xl transition-all duration-300 border no-print cursor-pointer ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      } bg-cyan-600 hover:bg-cyan-500 border-cyan-400/40 text-white shadow-cyan-500/20`}
    >
      <FaArrowUp size={16} />
    </button>
  );
};

export default BackToTop;
