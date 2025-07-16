"use client";
import { useState, useEffect, useCallback, useMemo } from 'react';

export const useAnimatedText = (texts, interval = 3000, animationDuration = 500) => {
  const textArray = useMemo(() => texts, [texts]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeText = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % textArray.length);
      setIsAnimating(false);
    }, animationDuration / 2);
  }, [textArray.length, animationDuration]);

  useEffect(() => {
    const timer = setInterval(changeText, interval);
    return () => clearInterval(timer);
  }, [changeText, interval]);

  return {
    currentText: textArray[currentIndex],
    isAnimating,
    currentIndex
  };
};




const AnimatedText = (({ 
  texts = ["Teks Default"], 
  interval = 3000,
  className = "",
  gradientFrom = "from-green-300",
  gradientVia = "via-green-400", 
  gradientTo = "to-green-500",
  shadowColor = "rgba(34, 197, 94, 0.5)"
}) => {
  const { currentText, isAnimating } = useAnimatedText(texts, interval);

  return (
    <div className="relative h-24 lg:h-32 overflow-hidden">
      <h1
        className={`absolute text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r ${gradientFrom} ${gradientVia} ${gradientTo} leading-tight transition-all duration-500 ease-out ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        } ${className}`}
        style={{
          filter: `drop-shadow(0 0 10px ${shadowColor})`,
          willChange: 'transform, opacity',
        }}
      >
        {currentText}
      </h1>
    </div>
  );
});

AnimatedText.displayName = 'AnimatedText';

export default AnimatedText;

