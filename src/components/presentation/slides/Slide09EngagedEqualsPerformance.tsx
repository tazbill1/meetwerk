import { motion } from 'framer-motion';
import { AnimatedStat } from '../AnimatedStat';
import { TrendingUp, DollarSign, ThumbsUp, BarChart } from 'lucide-react';

export const Slide09EngagedEqualsPerformance = () => {
  const metrics = [
    { icon: TrendingUp, value: 23, suffix: '%', label: 'Higher Profitability', color: 'bg-werk-lime' },
    { icon: DollarSign, value: 18, suffix: '%', label: 'Higher Sales', color: 'bg-werk-cyan' },
    { icon: ThumbsUp, value: 10, suffix: '%', label: 'Higher Customer Ratings', color: 'bg-werk-blue' },
    { icon: BarChart, value: 14, suffix: '%', label: 'Higher Productivity', color: 'bg-werk-navy' },
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Engaged Employees = <span className="text-gradient-werk">Higher Performance</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            The data is clear: businesses with highly engaged teams outperform 
            their competitors across every meaningful metric.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-3xl p-6 border shadow-sm text-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${metric.color} mx-auto mb-4 flex items-center justify-center`}>
                <metric.icon className="w-7 h-7 text-white" />
              </div>
              <AnimatedStat
                value={metric.value}
                prefix="+"
                suffix={metric.suffix}
                label={metric.label}
                delay={400 + index * 100}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-werk-navy to-werk-dark rounded-3xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">The ROI is Undeniable</h3>
              <p className="text-white/70">
                For every dollar invested in employee engagement, 
                top-performing dealerships see a 4-5x return through 
                reduced turnover, higher sales, and better customer retention.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-werk-lime">4-5x</div>
              <div className="text-white/60 mt-2">Return on Investment</div>
              <div className="text-sm text-white/40 mt-1">Source: Gallup Q12 Meta-Analysis</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
