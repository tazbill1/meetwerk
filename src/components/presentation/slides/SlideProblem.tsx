import { motion } from 'framer-motion';
import { AnimatedStat } from '../AnimatedStat';
import { AlertTriangle, UserX, TrendingDown } from 'lucide-react';
import { useDealership, formatCurrency } from '@/contexts/DealershipContext';

export const SlideProblem = () => {
  const { data, annualTurnoverCost, employeesLost, replacementCostPerEmployee } = useDealership();

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-destructive mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">The Twin Crises</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Apathy & Turnover Are Draining Your Dealership
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem 1: Apathy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-2xl p-6 border border-destructive/20"
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
            
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
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
            className="bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-2xl p-6 border border-orange-500/20"
          >
            <div className="flex items-center gap-2 text-orange-500 mb-4">
              <UserX className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Turnover</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-3xl font-bold text-foreground">80%</div>
                <div className="text-xs text-muted-foreground">Sales staff turnover</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">46%</div>
                <div className="text-xs text-muted-foreground">Technician turnover</div>
              </div>
            </div>
            
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <UserX className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Lost institutional knowledge</span>
              </div>
              <div className="flex items-center gap-2">
                <UserX className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Damaged customer relationships</span>
              </div>
              <div className="flex items-center gap-2">
                <UserX className="w-4 h-4 text-orange-500 shrink-0" />
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
          className="mt-6 bg-destructive/10 border border-destructive/20 rounded-2xl p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="text-sm text-muted-foreground mb-1">
                {data.hasCustomData ? 'Your Annual Impact' : 'Your Estimated Annual Impact'}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-destructive">
                {formatCurrency(annualTurnoverCost)}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {employeesLost} employees × {formatCurrency(replacementCostPerEmployee)} replacement cost
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">And that's just turnover</div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Add lost productivity from disengaged employees still on payroll, and the true cost climbs even higher.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
