import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { RefreshCw, ArrowRight } from 'lucide-react';

export const Slide04ViciousCycle = () => {
  const cycleItems = [
    { label: 'Low Engagement', color: 'bg-werk-lime' },
    { label: 'Poor Performance', color: 'bg-werk-cyan' },
    { label: 'Manager Frustration', color: 'bg-werk-blue' },
    { label: 'Impact on Culture', color: 'bg-werk-navy' },
    { label: 'High Turnover', color: 'bg-destructive' },
    { label: 'Constant Rehiring', color: 'bg-werk-dark' },
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      <SlideHeader />
      
      <div className="relative z-10 w-full max-w-5xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-werk-blue mb-4">
            <RefreshCw className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">The Connection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Vicious Cycle
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Apathy and turnover feed each other in a destructive loop that accelerates losses.
          </p>
        </motion.div>
        
        {/* Cycle visualization */}
        <div className="relative max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {cycleItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                <div className={`${item.color} rounded-2xl p-4 md:p-6 text-white text-center shadow-lg`}>
                  <div className="font-semibold text-sm md:text-base">{item.label}</div>
                </div>
                {index < cycleItems.length - 1 && index !== 2 && (
                  <ArrowRight className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 text-muted-foreground z-10" />
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Return arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2"
          >
            <RefreshCw className="w-8 h-8 text-destructive animate-spin" style={{ animationDuration: '3s' }} />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 bg-gradient-to-r from-werk-navy to-werk-dark rounded-2xl p-8 text-center text-white"
        >
          <div className="text-2xl md:text-3xl font-bold mb-2">
            Combined Annual Loss: <span className="text-werk-lime">$720K+</span>
          </div>
          <p className="text-white/70">
            And it compounds year over year as institutional knowledge walks out the door
          </p>
        </motion.div>
      </div>
    </div>
  );
};
