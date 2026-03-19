import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Users, Smartphone, Heart, Trophy, Star, Briefcase, Smile } from 'lucide-react';

export const SlideWorkforceWants = () => {
  const stats = [
    { icon: Smartphone, value: '97%', label: 'Own smartphones' },
    { icon: Heart, value: '76%', label: 'Value purpose over salary' },
    { icon: Trophy, value: '60%', label: 'Want weekly recognition' },
    { icon: Users, value: '89%', label: 'Prefer continuous feedback' },
  ];

  const desires = [
    { icon: Heart, label: 'Purpose & meaning', pct: 76 },
    { icon: Star, label: 'Recognition', pct: 69 },
    { icon: Briefcase, label: 'Growth opportunities', pct: 87 },
    { icon: Smile, label: 'Work-life balance', pct: 72 },
  ];

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-werk-cyan blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-werk-lime blur-3xl" />
      </div>
      
      <SlideHeader light />
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-werk-cyan mb-4">
            <Users className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Gen Z & Millennials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Your Workforce Has Changed
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            By 2025, Gen Z and Millennials make up 75% of your workforce. They expect more than a paycheck.
          </p>
        </motion.div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center"
            >
              <stat.icon className="w-6 h-6 text-werk-lime mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* What They Want */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
        >
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            What They Want Beyond a Paycheck
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {desires.map((desire, index) => (
              <motion.div
                key={desire.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <desire.icon className="w-5 h-5 text-werk-cyan shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white text-sm font-medium">{desire.label}</span>
                    <span className="text-werk-lime font-bold text-sm">{desire.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${desire.pct}%` }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                      className="h-full gradient-werk-horizontal rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center"
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
            <p className="text-white">
              <span className="font-semibold">The dealership that adapts</span> to these expectations 
              <span className="font-semibold text-werk-lime"> wins the talent war.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
