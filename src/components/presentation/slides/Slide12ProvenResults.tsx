import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { AnimatedStat } from '../AnimatedStat';
import { ArrowRight, ArrowUp, CheckCircle } from 'lucide-react';
import { useDealership, formatCurrency } from '@/contexts/DealershipContext';

export const Slide12ProvenResults = () => {
  const { potentialSavings, annualTurnoverCost, data } = useDealership();
  
  const results = [
    { label: 'Employee Engagement', before: 32, after: 68, suffix: '%' },
    { label: 'Monthly Turnover', before: 8, after: 3, suffix: '%', inverse: true },
    { label: 'Customer Satisfaction', before: 78, after: 92, suffix: '%' },
    { label: 'Units Per Employee', before: 45, after: 67, suffix: 'units', prefix: '', change: '↑ 26%', simpleDisplay: true },
  ];

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-werk-lime blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-werk-blue blur-3xl" />
      </div>
      
      <SlideHeader light />
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-werk-lime mb-4">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Proven Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Real Numbers from Real Dealerships
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              {result.simpleDisplay ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-white/60 text-sm font-medium mb-4">{result.label}</div>
                  <div className="flex items-center gap-2 text-werk-lime">
                    <ArrowUp className="w-8 h-8" />
                    <span className="text-5xl md:text-6xl font-bold">26%</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white/60 text-sm font-medium">{result.label}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className={`text-3xl font-bold ${result.inverse ? 'text-destructive/80' : 'text-white/40'}`}>
                        {result.before}{result.suffix}
                      </div>
                      <div className="text-white/40 text-xs mt-1">Before</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-werk-lime" />
                    <div className="text-center">
                      <AnimatedStat
                        value={result.after}
                        suffix={result.suffix}
                        label=""
                        delay={400 + index * 100}
                        variant="highlight"
                      />
                      <div className="text-white/40 text-xs mt-1">After</div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-werk-lime/20 border border-werk-lime/30 rounded-2xl px-8 py-4">
            <div className="text-3xl font-bold text-werk-lime">{formatCurrency(potentialSavings)}</div>
            <div className="text-white/70 mt-1">
              {data.hasCustomData ? 'Your potential annual savings' : 'Your estimated annual savings'}
            </div>
            <div className="text-white/50 text-xs mt-2">
              {data.improvementRate}% reduction of {formatCurrency(annualTurnoverCost)} turnover cost
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
