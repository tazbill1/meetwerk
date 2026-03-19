import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import werkLogo from '@/assets/werkandme-logo.png';
import { Heart, Trophy, BarChart3, MessageSquare, Gift, Users } from 'lucide-react';

export const Slide10OnePlatform = () => {
  const features = [
    { icon: Heart, title: 'Check-Ins', desc: 'Daily pulse on team sentiment' },
    { icon: BarChart3, title: 'Manager Dashboard', desc: 'Actionable insights at a glance' },
    { icon: Trophy, title: 'Gamification', desc: 'Challenges that drive results' },
    { icon: MessageSquare, title: 'Recognition', desc: 'Peer-to-peer appreciation' },
    { icon: Gift, title: 'Rewards', desc: 'Meaningful incentives that matter' },
    { icon: Users, title: 'Community', desc: 'Events and connection' },
  ];

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-werk-cyan blur-3xl" />
      </div>
      
      <SlideHeader light />
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.img
            src={werkLogo}
            alt="WerkandMe"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="h-16 mx-auto mb-6 brightness-0 invert"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            One Platform. <span className="text-gradient-werk">Complete Solution.</span>
          </h2>
          <p className="mt-4 text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to transform engagement and crush turnover — 
            in one mobile-first platform built for dealerships.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.08 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 rounded-xl gradient-werk-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-werk-dark" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 text-white/50 text-sm">
            <span className="w-2 h-2 rounded-full bg-werk-lime animate-pulse" />
            Built specifically for auto dealerships
          </div>
        </motion.div>
      </div>
    </div>
  );
};
