import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Sparkles, Heart, Trophy, Clock } from 'lucide-react';

export const Slide11WhatMakesDifferent = () => {
  const differentiators = [
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      desc: 'Daily check-ins that catch disengagement before it becomes resignation. Know how your team really feels.',
      highlight: 'Early warning system',
    },
    {
      icon: Sparkles,
      title: 'Personalized Recognition',
      desc: 'Not everyone wants a trophy. Our system learns what motivates each individual and tailors recognition.',
      highlight: 'Individual motivators',
    },
    {
      icon: Trophy,
      title: 'Smart Gamification',
      desc: 'Dealership-specific challenges that boost performance metrics while making work fun.',
      highlight: 'Drive real results',
    },
    {
      icon: Clock,
      title: 'Real-Time Analytics',
      desc: 'Managers get instant visibility into team health with actionable recommendations — not just data dumps.',
      highlight: 'Actionable insights',
    },
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Makes WerkandMe <span className="text-gradient-werk">Different</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Built by dealership people, for dealership people.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-3xl p-6 border shadow-sm hover:shadow-lg transition-all h-full">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl gradient-werk flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.desc}</p>
                    <div className="mt-3 inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                      {item.highlight}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
