import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import gomeRewardsScreenshot from '@/assets/gome-rewards-screenshot.png';

export const Slide21Rewards = () => {

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-werk-cyan blur-3xl" />
      </div>
      
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
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 bg-white/5 rounded-xl px-5 py-4 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-werk-lime/20 flex items-center justify-center">
                  <span className="text-lg">🎁</span>
                </div>
                <div>
                  <div className="font-medium text-white">Brand Name Gift Cards</div>
                  <div className="text-white/60 text-sm">Nike, Amazon, Starbucks & more</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/5 rounded-xl px-5 py-4 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-werk-cyan/20 flex items-center justify-center">
                  <span className="text-lg">⚡</span>
                </div>
                <div>
                  <div className="font-medium text-white">Instant Redemption</div>
                  <div className="text-white/60 text-sm">Digital delivery in seconds</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/5 rounded-xl px-5 py-4 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-werk-blue/20 flex items-center justify-center">
                  <span className="text-lg">💰</span>
                </div>
                <div>
                  <div className="font-medium text-white">Flexible Denominations</div>
                  <div className="text-white/60 text-sm">Choose your reward amount</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="mb-4 text-xl font-semibold">
              <span className="text-white">go</span><span className="text-werk-lime">me</span>
            </div>
            {/* Screenshot display */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-werk-lime/20 via-werk-cyan/20 to-werk-blue/20 rounded-3xl blur-xl" />
              <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-3 border border-white/10 shadow-2xl">
                <img 
                  src={gomeRewardsScreenshot} 
                  alt="GoMe rewards marketplace with gift cards" 
                  className="rounded-xl w-full max-w-md h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
