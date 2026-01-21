import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import werkLogo from '@/assets/werkandme-logo.png';
import { useDealership, formatCurrency } from '@/contexts/DealershipContext';
import { TrendingUp, Star, Heart, Award, Sparkles } from 'lucide-react';

export const Slide22CTA = () => {
  const { potentialSavings, annualTurnoverCost, data } = useDealership();
  const improvementRate = data.improvementRate ?? 30;

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-werk-lime blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-werk-cyan blur-3xl" />
      </div>
      
      <SlideHeader light />
      
      <div className="relative z-10 w-full max-w-5xl px-8">
        <div className="text-center mb-8">
          <motion.img
            src={werkLogo}
            alt="WerkandMe"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-16 mx-auto mb-6 brightness-0 invert"
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Thank You
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Savings Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-werk-lime/20 backdrop-blur-sm rounded-2xl p-6 border border-werk-lime/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-werk-lime/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-werk-lime" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  {data.hasCustomData ? 'Your Potential Savings' : 'Estimated Savings'}
                </h3>
                <p className="text-white/50 text-sm">With {improvementRate}% improvement</p>
              </div>
            </div>

            <div className="text-center py-4">
              <p className="text-werk-lime font-black text-5xl md:text-6xl">
                {formatCurrency(potentialSavings)}
              </p>
              <p className="text-white/60 mt-2">per year</p>
            </div>

            <div className="bg-black/20 rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">Current turnover cost</span>
                <span className="text-red-400 font-semibold">{formatCurrency(annualTurnoverCost)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Expected improvement</span>
                <span className="text-werk-lime font-semibold">{improvementRate}%</span>
              </div>
              <div className="border-t border-white/10 pt-2 flex justify-between">
                <span className="text-white/70 font-medium">Annual savings</span>
                <span className="text-werk-lime font-bold">{formatCurrency(potentialSavings)}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Intangible Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-werk-cyan/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-werk-cyan" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Beyond the Numbers</h3>
                <p className="text-white/50 text-sm">Benefits we can't measure</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3">
                <Star className="w-5 h-5 text-werk-lime shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm">Higher CSI Scores</p>
                  <p className="text-white/50 text-xs">Engaged employees deliver better customer experiences</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3">
                <Heart className="w-5 h-5 text-werk-cyan shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm">Stronger Culture</p>
                  <p className="text-white/50 text-xs">Better teamwork, reduced toxicity, happier workplace</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3">
                <Award className="w-5 h-5 text-werk-blue shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm">Employer Brand</p>
                  <p className="text-white/50 text-xs">Attract top talent instead of fighting for leftovers</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3">
                <TrendingUp className="w-5 h-5 text-werk-lime shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm">Institutional Knowledge</p>
                  <p className="text-white/50 text-xs">Preserved customer relationships & process expertise</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-xl text-white/70"
        >
          Questions?
        </motion.p>
      </div>
    </div>
  );
};
