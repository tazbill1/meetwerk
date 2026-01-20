import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, TrendingDown, TrendingUp, Info } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const SlideCalculator = () => {
  const [employees, setEmployees] = useState(50);
  const [turnoverRate, setTurnoverRate] = useState(40);
  const [avgSalary, setAvgSalary] = useState(45000);

  // Calculate turnover cost (using 25% of salary as conservative estimate)
  const replacementCostMultiplier = 0.25;
  const employeesLost = Math.round(employees * (turnoverRate / 100));
  const annualTurnoverCost = employeesLost * avgSalary * replacementCostMultiplier;
  
  // Potential savings with 30% reduction in turnover (conservative WerkandMe improvement)
  const improvementRate = 0.30;
  const potentialSavings = annualTurnoverCost * improvementRate;

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${(value / 1000).toFixed(0)}K`;
  };

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-werk-lime blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-werk-cyan blur-3xl" />
      </div>
      
      
      
      <div className="relative z-10 w-full max-w-5xl px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-werk-lime mb-3">
            <Calculator className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Interactive Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What's Turnover <span className="text-werk-lime">Costing You?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Your Dealership</h3>
            
            <div className="space-y-6">
              {/* Employees */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-white/80 text-sm">Total Employees</label>
                  <span className="text-werk-lime font-bold">{employees}</span>
                </div>
                <Slider
                  value={[employees]}
                  onValueChange={(val) => setEmployees(val[0])}
                  min={0}
                  max={500}
                  step={5}
                  className="w-full"
                />
              </div>
              
              {/* Turnover Rate */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-white/80 text-sm">Annual Turnover Rate</label>
                  <span className="text-werk-lime font-bold">{turnoverRate}%</span>
                </div>
                <Slider
                  value={[turnoverRate]}
                  onValueChange={(val) => setTurnoverRate(val[0])}
                  min={10}
                  max={80}
                  step={5}
                  className="w-full"
                />
              </div>
              
              {/* Average Salary */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-white/80 text-sm">Average Salary</label>
                  <span className="text-werk-lime font-bold">${avgSalary.toLocaleString()}</span>
                </div>
                <Slider
                  value={[avgSalary]}
                  onValueChange={(val) => setAvgSalary(val[0])}
                  min={30000}
                  max={80000}
                  step={5000}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/20 text-center">
              <div className="text-white/60 text-sm">
                You lose <span className="text-white font-semibold">{employeesLost} employees</span> per year
              </div>
            </div>
          </motion.div>

          {/* Right: Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Current Cost */}
            <TooltipProvider>
              <div className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-red-500/30 flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="text-white/80 text-sm">Annual Turnover Cost</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-white/40 hover:text-white/70 cursor-help transition-colors" />
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs bg-background text-foreground border">
                      <p className="font-semibold mb-1">Calculation:</p>
                      <p className="text-sm">Employees Lost × Avg Salary × 25%</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        25% is a conservative estimate. Industry studies show replacement costs range from 50-200% of salary.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-red-400">
                  {formatCurrency(annualTurnoverCost)}
                </div>
                <div className="text-white/50 text-xs mt-1">
                  Based on 25% of salary replacement cost
                </div>
              </div>
            </TooltipProvider>
            
            {/* Potential Savings */}
            <TooltipProvider>
              <div className="bg-werk-lime/20 backdrop-blur-sm rounded-2xl p-6 border border-werk-lime/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-werk-lime/30 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-werk-lime" />
                  </div>
                  <span className="text-white/80 text-sm">Potential Savings with WerkandMe</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-white/40 hover:text-white/70 cursor-help transition-colors" />
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs bg-background text-foreground border">
                      <p className="font-semibold mb-1">Calculation:</p>
                      <p className="text-sm">Annual Turnover Cost × 30%</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        30% reduction is based on average improvements seen with engaged employees. Some clients see 40-50% reductions.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-werk-lime">
                  {formatCurrency(potentialSavings)}
                </div>
                <div className="text-white/50 text-xs mt-1">
                  With 30% reduction in turnover
                </div>
              </div>
            </TooltipProvider>
            
            {/* ROI Callout */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
              <div className="flex items-center justify-center gap-2 text-werk-cyan">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm font-medium">Typical ROI: 5-10x investment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
