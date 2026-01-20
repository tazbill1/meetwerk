import { motion } from 'framer-motion';
import { Users, TrendingDown, DollarSign, SkipForward, AlertTriangle } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useDealership, formatCurrency } from '@/contexts/DealershipContext';
import { SlideHeader } from '../SlideHeader';

export const SlideDataInput = () => {
  const { data, setData, employeesLost, annualTurnoverCost } = useDealership();

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-werk-lime blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-werk-cyan blur-3xl" />
      </div>
      
      <SlideHeader light />
      
      <div className="relative z-10 w-full max-w-5xl px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-werk-lime mb-3">
            <Users className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Personalize Your Presentation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Tell Us About <span className="text-werk-lime">Your Dealership</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="space-y-6">
              {/* Employees */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-werk-lime/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-werk-lime" />
                  </div>
                  <div className="flex-1">
                    <label className="text-white font-medium text-sm">Team members</label>
                  </div>
                  <span className="text-werk-lime font-bold text-xl">{data.employees}</span>
                </div>
                <Slider
                  value={[data.employees]}
                  onValueChange={(val) => setData({ employees: val[0] })}
                  min={10}
                  max={500}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-white/40 text-xs mt-1">
                  <span>10</span>
                  <span>500</span>
                </div>
              </div>
              
              {/* Turnover Rate */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-werk-cyan/20 flex items-center justify-center">
                    <TrendingDown className="w-4 h-4 text-werk-cyan" />
                  </div>
                  <div className="flex-1">
                    <label className="text-white font-medium text-sm">Annual turnover rate</label>
                  </div>
                  <span className="text-werk-cyan font-bold text-xl">{data.turnoverRate}%</span>
                </div>
                <Slider
                  value={[data.turnoverRate]}
                  onValueChange={(val) => setData({ turnoverRate: val[0] })}
                  min={10}
                  max={80}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-white/40 text-xs mt-1">
                  <span>10%</span>
                  <span>80%</span>
                </div>
              </div>
              
              {/* Average Salary */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-werk-blue/20 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-werk-blue" />
                  </div>
                  <div className="flex-1">
                    <label className="text-white font-medium text-sm">Average salary</label>
                  </div>
                  <span className="text-werk-blue font-bold text-xl">${data.avgSalary.toLocaleString()}</span>
                </div>
                <Slider
                  value={[data.avgSalary]}
                  onValueChange={(val) => setData({ avgSalary: val[0] })}
                  min={30000}
                  max={200000}
                  step={5000}
                  className="w-full"
                />
                <div className="flex justify-between text-white/40 text-xs mt-1">
                  <span>$30K</span>
                  <span>$200K</span>
                </div>
              </div>
            </div>

            <p className="text-white/40 text-xs flex items-center gap-2 mt-4">
              <SkipForward className="w-3 h-3" />
              Using industry averages as defaults
            </p>
          </motion.div>

          {/* Right: Cost of Apathy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">The Cost of Apathy</h3>
                <p className="text-white/50 text-sm">Conservative estimate</p>
              </div>
            </div>

            {/* The Big Number */}
            <motion.div
              key={annualTurnoverCost}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-6"
            >
              <p className="text-red-400 font-black text-5xl md:text-6xl">
                {formatCurrency(annualTurnoverCost)}
              </p>
              <p className="text-white/60 mt-2">lost annually to turnover</p>
            </motion.div>

            {/* Breakdown */}
            <div className="bg-black/20 rounded-xl p-4 space-y-3">
              <p className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-3">The Math</p>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70">Employees lost per year</span>
                <span className="text-white font-semibold">{employeesLost} people</span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70">× Replacement cost (25%)</span>
                <span className="text-white font-semibold">${(data.avgSalary * 0.25).toLocaleString()}</span>
              </div>
              
              <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                <span className="text-white/70 text-sm">Annual impact</span>
                <span className="text-red-400 font-bold">{formatCurrency(annualTurnoverCost)}</span>
              </div>
            </div>

            <p className="text-white/40 text-xs mt-4 text-center">
              *Industry studies cite 50-200% of salary for replacement costs. We use 25% to be conservative.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
