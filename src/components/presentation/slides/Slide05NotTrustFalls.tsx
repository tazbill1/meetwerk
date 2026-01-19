import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { X, BarChart3, Target } from 'lucide-react';

export const Slide05NotTrustFalls = () => {
  const wrongApproaches = [
    'Team-building retreats',
    'Generic training programs',
    'One-size-fits-all benefits',
    'Annual performance reviews',
    'Pizza parties & swag',
  ];

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-werk-cyan blur-3xl" />
      </div>
      
      <SlideHeader light />
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-werk-lime mb-4">
            <Target className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">The Shift</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            This Isn't About Trust Falls
          </h2>
          <p className="mt-4 text-xl text-white/70 max-w-2xl mx-auto">
            Traditional "engagement" tactics don't work. You need data-driven management.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white/60 mb-6 uppercase tracking-wider">
              What Doesn't Work
            </h3>
            <div className="space-y-4">
              {wrongApproaches.map((approach, index) => (
                <motion.div
                  key={approach}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 bg-white/5 rounded-xl px-5 py-4 border border-white/10"
                >
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-white/80">{approach}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl gradient-werk-accent flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-werk-dark" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">What Does Work</h3>
                <p className="text-white/60">Data-driven engagement</p>
              </div>
            </div>
            
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-werk-lime mt-2" />
                <span>Real-time emotional check-ins that catch problems early</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-werk-cyan mt-2" />
                <span>Personalized recognition based on individual motivators</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-werk-blue mt-2" />
                <span>Gamification that taps into competitive drive</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-white mt-2" />
                <span>Actionable manager dashboards with clear next steps</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
