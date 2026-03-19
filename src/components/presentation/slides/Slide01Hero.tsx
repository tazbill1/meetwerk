import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';

export const Slide01Hero = () => {
  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-werk-cyan blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-werk-lime blur-3xl" />
      </div>
      
      <SlideHeader light />
      <div className="relative z-10 text-center px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium backdrop-blur-sm border border-white/10">
            The Hidden Profit Killer in Your Dealership
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          The Double Drain on{' '}
          <span className="text-gradient-werk">Your Profitability</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 text-xl md:text-2xl text-white/70 max-w-3xl mx-auto"
        >
          Every day, disengaged employees and high turnover are silently 
          draining hundreds of thousands from your bottom line.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 flex items-center justify-center gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-werk-lime">$720K+</div>
            <div className="text-white/60 text-sm mt-1">Lost Annually</div>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-werk-cyan">51%</div>
            <div className="text-white/60 text-sm mt-1">Disengaged Staff</div>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-werk-blue">80%</div>
            <div className="text-white/60 text-sm mt-1">Sales Turnover</div>
          </div>
        </motion.div>
      </div>
      
      {/* Navigation hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/40 text-sm flex items-center gap-2"
      >
        <span>Press arrow keys or swipe to navigate</span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          →
        </motion.span>
      </motion.div>
    </div>
  );
};
