import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { AnimatedStat } from '../AnimatedStat';
import { UserX, DollarSign } from 'lucide-react';

export const Slide03TurnoverProblem = () => {
  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      <SlideHeader />
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-destructive mb-4">
            <UserX className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Problem #2</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Turnover Tornado
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            You're not just losing people — you're losing institutional knowledge, 
            customer relationships, and profits.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-werk-navy to-werk-dark rounded-3xl p-8 text-white"
          >
            <AnimatedStat
              value={80}
              suffix="%"
              label="Sales Staff Turnover"
              sublabel="Annual average in auto retail"
              delay={300}
              variant="highlight"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-gradient-to-br from-werk-blue to-werk-navy rounded-3xl p-8 text-white"
          >
            <AnimatedStat
              value={46}
              suffix="%"
              label="Technician Turnover"
              sublabel="Creating service bottlenecks"
              delay={450}
              variant="highlight"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-werk-cyan to-werk-blue rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8" />
              <span className="text-lg font-medium">Cost Per Hire</span>
            </div>
            <AnimatedStat
              value={10000}
              prefix="$"
              label="Replacement Cost"
              sublabel="Per sales employee"
              delay={600}
              variant="default"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 bg-destructive/10 border border-destructive/20 rounded-2xl p-6 text-center"
        >
          <div className="text-4xl md:text-5xl font-bold text-destructive">$480K+</div>
          <div className="text-lg text-foreground mt-2">
            Annual Turnover Cost for a Mid-Size Dealership
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Including recruiting, training, lost productivity, and customer churn
          </div>
        </motion.div>
      </div>
    </div>
  );
};
