import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { AnimatedStat } from '../AnimatedStat';
import { AlertTriangle, TrendingDown } from 'lucide-react';

export const Slide02ApathyProblem = () => {
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
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Problem #1</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Apathy Epidemic
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Over half of your workforce is mentally checked out — and it's costing you.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-3xl p-8 border border-destructive/20">
              <AnimatedStat
                value={51}
                suffix="%"
                label="of Dealership Employees"
                sublabel="are actively disengaged at work"
                variant="large"
                delay={300}
              />
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <TrendingDown className="w-5 h-5 text-destructive" />
                  <span>Lower customer satisfaction scores</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <TrendingDown className="w-5 h-5 text-destructive" />
                  <span>Reduced upselling and cross-selling</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <TrendingDown className="w-5 h-5 text-destructive" />
                  <span>Poor service quality and reviews</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-card rounded-3xl p-8 border shadow-lg">
              <div className="text-5xl md:text-6xl font-bold text-destructive mb-2">
                $240K
              </div>
              <div className="text-xl font-medium text-foreground mb-4">
                Lost Productivity Per Year
              </div>
              <p className="text-muted-foreground">
                Disengaged employees cost the average dealership nearly a quarter million 
                dollars annually in lost productivity, missed opportunities, and reduced 
                customer lifetime value.
              </p>
              
              <div className="mt-6 pt-6 border-t">
                <div className="text-sm text-muted-foreground">Source</div>
                <div className="text-sm font-medium">Gallup State of the Workplace 2024</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
