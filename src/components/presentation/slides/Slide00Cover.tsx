import { motion } from 'framer-motion';
import werkandmeLogo from '@/assets/werkandme-logo.png';

export const Slide00Cover = () => {
  return (
    <div className="relative w-full h-full bg-white flex items-center justify-center overflow-hidden">
      {/* Gradient background orbs - matching website aesthetic */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-werk-lime/40 to-werk-cyan/30 blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-werk-cyan/40 to-werk-blue/30 blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-werk-lime/20 to-werk-cyan/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-8 max-w-4xl">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <img 
            src={werkandmeLogo} 
            alt="WerkandMe" 
            className="h-16 md:h-20 mx-auto"
          />
        </motion.div>

        {/* Main headline with branded styling */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-werk-navy leading-tight"
        >
          We change{' '}
          <span className="text-gradient-werk italic">werk</span>{' '}
          <br className="hidden md:block" />
          for the better
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl text-werk-navy/70 max-w-2xl mx-auto"
        >
          We spell work like <strong className="text-werk-navy">"werk"</strong> because we believe that you should always make{' '}
          <strong className="text-werk-navy">employees</strong> the center of your success.
        </motion.p>

        {/* Subtitle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12"
        >
          <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-werk-lime/20 to-werk-cyan/20 text-werk-navy font-medium backdrop-blur-sm border border-werk-cyan/20">
            The Ultimate Employee Experience Platform
          </span>
        </motion.div>

        {/* Three pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-16 flex items-center justify-center gap-4 text-lg font-semibold"
        >
          <span className="text-werk-lime">Werk</span>
          <span className="text-werk-navy/30">•</span>
          <span className="text-werk-cyan">Life</span>
          <span className="text-werk-navy/30">•</span>
          <span className="text-werk-blue">Community</span>
        </motion.div>
      </div>

      {/* Navigation hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-werk-navy/40 text-sm flex items-center gap-2"
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
