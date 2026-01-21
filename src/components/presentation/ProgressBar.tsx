import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  currentSlide: number;
  totalSlides: number;
}

export const ProgressBar = ({ progress, currentSlide, totalSlides }: ProgressBarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 print:hidden">
      <div className="h-1 bg-muted/30">
        <motion.div
          className="h-full gradient-werk-horizontal"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
      <div className="absolute top-3 right-4 text-xs font-medium text-muted-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
};
