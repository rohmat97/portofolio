import React, { useEffect, useState, useCallback } from 'react';

const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const ScrambleText = ({ text, className = '', speed = 40, scrambleOnHover = true }) => {
  const [displayText, setDisplayText] = useState(text);

  const triggerScramble = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    triggerScramble();
  }, [triggerScramble]);

  return (
    <span
      className={className}
      onMouseEnter={() => scrambleOnHover && triggerScramble()}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
