import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import werkLogo from '@/assets/werkandme-logo.png';

export const Slide20CTA = () => {
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
          className="h-20 mx-auto mb-8 brightness-0 invert"
        />
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Stop Losing <span className="text-werk-lime">$720K</span> to Turnover
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl text-white/70 max-w-2xl mx-auto"
        >
          Let's show you how WerkandMe can transform your dealership's 
          engagement and retention in just 4 weeks.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group flex items-center gap-3 bg-werk-lime text-werk-dark font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
            <Calendar className="w-5 h-5" />
            Schedule Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="flex items-center gap-3 bg-white/10 text-white font-medium px-8 py-4 rounded-full hover:bg-white/20 transition-colors border border-white/20">
            <Phone className="w-5 h-5" />
            Call (555) 123-4567
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-white/50 text-sm"
        >
          30-day money-back guarantee • No long-term contracts • Live in 4 weeks
        </motion.div>
      </div>
    </div>
  );
};
