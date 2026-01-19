import { motion } from 'framer-motion';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

interface AnimatedStatProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  delay?: number;
  isVisible?: boolean;
  variant?: 'default' | 'large' | 'highlight';
  decimals?: number;
}

export const AnimatedStat = ({
  value,
  prefix = '',
  suffix = '',
  label,
  sublabel,
  delay = 0,
  isVisible = true,
  variant = 'default',
  decimals = 0,
}: AnimatedStatProps) => {
  const { formattedValue } = useAnimatedCounter({
    end: value,
    delay,
    isVisible,
    prefix,
    suffix,
    decimals,
  });

  const sizeClasses = {
    default: 'text-4xl md:text-5xl',
    large: 'text-5xl md:text-7xl',
    highlight: 'text-5xl md:text-6xl',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <div 
        className={`font-bold ${sizeClasses[variant]} ${
          variant === 'highlight' ? 'text-gradient-werk' : ''
        }`}
      >
        {formattedValue}
      </div>
      <div className="mt-2 text-lg md:text-xl font-medium text-muted-foreground">
        {label}
      </div>
      {sublabel && (
        <div className="mt-1 text-sm text-muted-foreground/70">
          {sublabel}
        </div>
      )}
    </motion.div>
  );
};
