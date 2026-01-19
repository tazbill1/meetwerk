import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Gift, ShoppingBag, Coffee, Ticket, CreditCard, Sparkles } from 'lucide-react';

export const Slide19Rewards = () => {
  const rewards = [
    { icon: CreditCard, title: 'Gift Cards', desc: 'Amazon, Target, Visa & more', points: '500-2000' },
    { icon: Coffee, title: 'Local Perks', desc: 'Coffee, lunch, experiences', points: '200-500' },
    { icon: Ticket, title: 'Experiences', desc: 'Concerts, sports, shows', points: '1000-5000' },
    { icon: ShoppingBag, title: 'Merch', desc: 'Branded dealership gear', points: '300-800' },
  ];

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-werk-cyan blur-3xl" />
      </div>
      
      <SlideHeader light />
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 text-werk-lime mb-4">
              <Gift className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Rewards</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Meaningful <span className="text-gradient-werk">Incentives</span>
            </h2>
            <p className="mt-6 text-xl text-white/70">
              Points that employees actually want to earn and rewards they're 
              excited to redeem.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl gradient-werk-accent flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-werk-dark" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Your Points</div>
                  <div className="text-4xl font-bold text-werk-lime">2,450</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-white/60">
                You're 550 points away from that Amazon gift card!
              </div>
              <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '82%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-full gradient-werk-horizontal rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {rewards.map((reward, index) => (
              <motion.div
                key={reward.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <reward.icon className="w-6 h-6 text-werk-lime" />
                </div>
                <h3 className="font-semibold text-white mb-1">{reward.title}</h3>
                <p className="text-sm text-white/60 mb-3">{reward.desc}</p>
                <div className="text-werk-cyan text-sm font-medium">{reward.points} pts</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
