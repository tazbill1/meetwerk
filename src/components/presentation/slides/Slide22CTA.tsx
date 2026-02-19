import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import werkLogo from '@/assets/werkandme-logo.png';
import { useDealership, formatCurrency } from '@/contexts/DealershipContext';
import { TrendingUp, Star, Heart, Award, Sparkles, Printer, AlertTriangle, CheckCircle2, Trophy, BarChart3, MessageSquare, Gift, Clock } from 'lucide-react';

export const Slide22CTA = () => {
  const { potentialSavings, annualTurnoverCost, data, employeesLost, effectiveTurnoverRate, replacementCostPerEmployee } = useDealership();
  const improvementRate = data.improvementRate ?? 30;

  const features = [
    { icon: Heart, title: 'Emotional Check-Ins', desc: 'Catch disengagement early' },
    { icon: BarChart3, title: 'Manager Dashboard', desc: 'Real-time insights' },
    { icon: Trophy, title: 'Gamification', desc: 'Drive results' },
    { icon: MessageSquare, title: 'Recognition', desc: 'Peer appreciation' },
    { icon: Gift, title: 'Rewards', desc: 'Meaningful incentives' },
    { icon: Clock, title: 'Analytics', desc: 'Team health visibility' },
  ];

  const handlePrintRecap = () => {
    window.open('/print-recap', '_blank');
  };

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-werk-lime blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-werk-cyan blur-3xl" />
      </div>
      
      <SlideHeader light />
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <img src={werkLogo} alt="WerkandMe" className="h-12 brightness-0 invert" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Recap & Next Steps</h2>
              <p className="text-white/50 text-sm">Your personalized engagement ROI</p>
            </div>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handlePrintRecap}
            className="flex items-center gap-2 bg-werk-lime/20 hover:bg-werk-lime/30 border border-werk-lime/40 text-werk-lime px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
          >
            <Printer className="w-4 h-4" />
            Print Recap
          </motion.button>
        </div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* Col 1: The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-5 border border-red-500/30"
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <h3 className="text-white font-bold">The Problem</h3>
            </div>
            <div className="text-center py-2 mb-3">
              <p className="text-red-400 font-black text-3xl">{formatCurrency(annualTurnoverCost)}</p>
              <p className="text-white/50 text-xs mt-1">lost annually to turnover</p>
            </div>
            <div className="bg-black/20 rounded-lg p-3 space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-white/50">Team</span>
                <span className="text-white">{data.employees} people</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Turnover</span>
                <span className="text-white">{effectiveTurnoverRate}% ({employeesLost}/yr)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Replacement</span>
                <span className="text-white">${replacementCostPerEmployee.toLocaleString()}/ea</span>
              </div>
            </div>
          </motion.div>

          {/* Col 2: The Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-white/5 rounded-2xl p-5 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-werk-cyan" />
              <h3 className="text-white font-bold">The Solution</h3>
            </div>
            <div className="space-y-2">
              {features.map((f) => (
                <div key={f.title} className="flex items-center gap-2.5 bg-white/5 rounded-lg p-2">
                  <div className="w-7 h-7 rounded-md gradient-werk-accent flex items-center justify-center shrink-0">
                    <f.icon className="w-3.5 h-3.5 text-werk-dark" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-xs leading-tight">{f.title}</p>
                    <p className="text-white/40 text-[10px]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Col 3: The ROI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-werk-lime/15 rounded-2xl p-5 border border-werk-lime/30">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-werk-lime" />
                <h3 className="text-white font-bold">Your Savings</h3>
              </div>
              <div className="text-center py-2 mb-3">
                <p className="text-werk-lime font-black text-3xl">{formatCurrency(potentialSavings)}</p>
                <p className="text-white/50 text-xs mt-1">per year with {improvementRate}% improvement</p>
              </div>
              <div className="bg-black/20 rounded-lg p-3 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-white/50">Current cost</span>
                  <span className="text-red-400">{formatCurrency(annualTurnoverCost)}</span>
                </div>
                <div className="border-t border-white/10 pt-1.5 flex justify-between">
                  <span className="text-white/70 font-medium">Annual savings</span>
                  <span className="text-werk-lime font-bold">{formatCurrency(potentialSavings)}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-werk-cyan" />
                <h3 className="text-white font-bold text-sm">Beyond Numbers</h3>
              </div>
              <div className="space-y-1.5">
                {[
                  { icon: Star, text: 'Higher CSI Scores' },
                  { icon: Heart, text: 'Stronger Culture' },
                  { icon: Award, text: 'Better Employer Brand' },
                  { icon: TrendingUp, text: 'Retained Knowledge' },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-2">
                    <b.icon className="w-3.5 h-3.5 text-werk-lime shrink-0" />
                    <span className="text-white/70 text-xs">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center text-lg text-white/60"
        >
          Questions? Let's talk.
        </motion.p>
      </div>
    </div>
  );
};
