import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Users, Smartphone, Heart, Trophy } from 'lucide-react';

export const Slide06WorkforceChanged = () => {
  const stats = [
    { icon: Smartphone, value: '97%', label: 'Own smartphones', desc: 'Digital-first generation' },
    { icon: Heart, value: '76%', label: 'Value purpose', desc: 'Over salary alone' },
    { icon: Trophy, value: '60%', label: 'Want recognition', desc: 'Weekly or daily' },
    { icon: Users, value: '89%', label: 'Prefer feedback', desc: 'Continuous over annual' },
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      <SlideHeader />
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-werk-cyan mb-4">
            <Users className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Gen Z & Millennials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Your Workforce Has Changed
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            By 2025, Gen Z and Millennials will make up 75% of your workforce. 
            They expect a different experience.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-3xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-2xl gradient-werk-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-werk-dark" />
                </div>
                <div className="text-4xl font-bold text-gradient-werk mb-1">{stat.value}</div>
                <div className="font-semibold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 text-center"
        >
          <div className="inline-block bg-werk-navy/10 rounded-2xl px-8 py-4">
            <p className="text-lg text-foreground">
              <span className="font-semibold">The dealership that adapts</span> to these expectations 
              <span className="font-semibold text-werk-blue"> wins the talent war.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
