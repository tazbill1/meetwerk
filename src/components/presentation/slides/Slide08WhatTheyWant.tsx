import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { AnimatedStat } from '../AnimatedStat';
import { Heart, Star, Briefcase, Smile } from 'lucide-react';

export const Slide08WhatTheyWant = () => {
  const desires = [
    { icon: Heart, label: 'Purpose & meaning', pct: 76 },
    { icon: Star, label: 'Recognition', pct: 69 },
    { icon: Briefcase, label: 'Growth opportunities', pct: 87 },
    { icon: Smile, label: 'Work-life balance', pct: 72 },
  ];

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-werk-lime blur-3xl" />
      </div>
      
      <SlideHeader light />
      <div className="relative z-10 w-full max-w-6xl px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              What They Want Beyond <span className="text-gradient-werk">a Paycheck</span>
            </h2>
            <p className="mt-6 text-xl text-white/70">
              Money matters, but it's not the main driver. Today's employees 
              seek fulfillment, growth, and genuine appreciation.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <AnimatedStat
                value={89}
                suffix="%"
                label="Want meaningful work"
                sublabel="Not just a paycheck"
                delay={600}
                variant="large"
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {desires.map((desire, index) => (
              <motion.div
                key={desire.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <desire.icon className="w-5 h-5 text-werk-lime" />
                    <span className="text-white font-medium">{desire.label}</span>
                  </div>
                  <span className="text-werk-cyan font-bold">{desire.pct}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${desire.pct}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className="h-full gradient-werk-horizontal rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
