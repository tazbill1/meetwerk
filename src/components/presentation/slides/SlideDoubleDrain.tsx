import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { AnimatedStat } from '../AnimatedStat';
import { AlertTriangle, UserX, TrendingDown } from 'lucide-react';
import { useDealership, formatCurrency } from '@/contexts/DealershipContext';

export const SlideDoubleDrain = () => {
  const { data, annualTurnoverCost, employeesLost, replacementCostPerEmployee } = useDealership();

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-destructive blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-orange-500 blur-3xl" />
      </div>
      
      <SlideHeader light />
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-destructive mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">The Hidden Profit Killer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            The Double Drain on{' '}
            <span className="text-gradient-werk">Your Profitability</span>
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Every day, disengaged employees and high turnover are silently draining your bottom line.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Problem 1: Apathy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-2 text-destructive mb-4">
              <TrendingDown className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Disengagement</span>
            </div>
            
            <AnimatedStat
              value={51}
              suffix="%"
              label="Actively Disengaged"
              sublabel="Over half mentally checked out"
              variant="default"
              delay={300}
            />
            
            <div className="mt-4 space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-destructive shrink-0" />
                <span>Lower customer satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-destructive shrink-0" />
                <span>Missed upselling opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-destructive shrink-0" />
                <span>Poor reviews & service quality</span>
              </div>
            </div>
          </motion.div>
          
          {/* Problem 2: Turnover */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-2 text-orange-400 mb-4">
              <UserX className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Turnover</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-3xl font-bold text-white">80%</div>
                <div className="text-xs text-white/60">Sales staff turnover</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">46%</div>
                <div className="text-xs text-white/60">Technician turnover</div>
              </div>
            </div>
            
            <div className="mt-4 space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <UserX className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Lost institutional knowledge</span>
              </div>
              <div className="flex items-center gap-2">
                <UserX className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Damaged customer relationships</span>
              </div>
              <div className="flex items-center gap-2">
                <UserX className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Constant rehiring costs</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Combined Cost Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="bg-destructive/20 border border-destructive/30 backdrop-blur-sm rounded-2xl p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="text-sm text-white/60 mb-1">
                {data.hasCustomData ? 'Your Annual Impact' : 'Your Estimated Annual Impact'}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-destructive">
                {formatCurrency(annualTurnoverCost)}
              </div>
              <div className="text-sm text-white/60 mt-1">
                {employeesLost} employees × {formatCurrency(replacementCostPerEmployee)} replacement cost
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-xs text-white/40 uppercase tracking-wider mb-2">And that's just turnover</div>
              <p className="text-sm text-white/60 max-w-xs">
                Add lost productivity from disengaged employees still on payroll, and the true cost climbs even higher.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Navigation hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/40 text-sm flex items-center gap-2"
      >
        <span>Press arrow keys or swipe to navigate</span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          →
        </motion.span>
      </motion.div>
    </div>
  );
};
