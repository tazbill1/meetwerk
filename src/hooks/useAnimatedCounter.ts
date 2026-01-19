import { useState, useEffect, useRef } from 'react';

interface UseAnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  isVisible?: boolean;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export const useAnimatedCounter = ({
  end,
  duration = 1500,
  delay = 0,
  isVisible = true,
  prefix = '',
  suffix = '',
  decimals = 0,
}: UseAnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const frameRef = useRef<number>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    
    timeoutRef.current = setTimeout(() => {
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out cubic)
        const eased = 1 - Math.pow(1 - progress, 3);
        
        const currentCount = Math.round(eased * end * Math.pow(10, decimals)) / Math.pow(10, decimals);
        setCount(currentCount);
        
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };
      
      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, delay, isVisible, decimals]);

  const formattedValue = `${prefix}${count.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${suffix}`;

  return { count, formattedValue };
};
