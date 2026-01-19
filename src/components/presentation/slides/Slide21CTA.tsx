import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import werkLogo from '@/assets/werkandme-logo.png';

export const Slide21CTA = () => {
  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-werk-lime blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-werk-cyan blur-3xl" />
      </div>
      
      <SlideHeader light />
      
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <motion.img
          src={werkLogo}
          alt="WerkandMe"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="h-24 mx-auto mb-10 brightness-0 invert"
        />
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          Thank You
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-xl text-white/70"
        >
          Questions?
        </motion.p>
      </div>
    </div>
  );
};
