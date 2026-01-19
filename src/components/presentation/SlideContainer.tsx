import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideContainerProps {
  children: ReactNode;
  slideKey: number;
  direction: 'next' | 'prev';
  className?: string;
}

const slideVariants = {
  enter: (direction: 'next' | 'prev') => ({
    x: direction === 'next' ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: 'next' | 'prev') => ({
    x: direction === 'next' ? -100 : 100,
    opacity: 0,
  }),
};

export const SlideContainer = ({ children, slideKey, direction, className = '' }: SlideContainerProps) => {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={slideKey}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.3 },
        }}
        className={`absolute inset-0 ${className}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
