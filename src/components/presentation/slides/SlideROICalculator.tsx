import { motion } from 'framer-motion';
import { Users, TrendingDown, DollarSign, AlertTriangle, Pencil, Calculator } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useDealership, formatCurrency } from '@/contexts/DealershipContext';
import { SlideHeader } from '../SlideHeader';

export const SlideROICalculator = () => {
  const { data, setData, employeesLost, replacementCostPerEmployee, annualTurnoverCost } = useDealership();

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-red-500/50 blur-3xl" />
      </div>
      
      <SlideHeader light />
      
      <div className="relative z-10 w-full max-w-5xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-red-400 mb-3">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">The Hidden Cost</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            The Cost of <span className="text-red-400">Apathy</span>
          </h2>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">
            See exactly what disengagement and turnover cost your dealership every year.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-werk-lime" />
              Your Numbers
            </h3>
            
            <div className="space-y-5">
              {/* Employees */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-werk-lime/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-werk-lime" />
                  </div>
                  <div className="flex-1">
                    <label className="text-white/80 text-sm">Team members</label>
                  </div>
                  <span className="text-werk-lime font-bold text-lg">{data.employees}</span>
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
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-werk-cyan/20 flex items-center justify-center">
                    <TrendingDown className="w-4 h-4 text-werk-cyan" />
                  </div>
                  <div className="flex-1">
                    <label className="text-white/80 text-sm">Annual turnover</label>
                  </div>
                  <span className="text-werk-cyan font-bold text-lg">{data.turnoverRate}%</span>
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
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-werk-blue/20 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-werk-blue" />
                  </div>
                  <div className="flex-1">
                    <label className="text-white/80 text-sm">Average salary</label>
                  </div>
                  <span className="text-werk-blue font-bold text-lg">${data.avgSalary.toLocaleString()}</span>
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
          </motion.div>

          {/* Right: Cost Output */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30"
          >
            {/* The Big Number */}
            <motion.div
              key={annualTurnoverCost}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Your Annual Loss</p>
              <p className="text-red-400 font-black text-5xl md:text-7xl">
                {formatCurrency(annualTurnoverCost)}
              </p>
              <p className="text-white/50 mt-2 text-sm">lost to turnover each year</p>
            </motion.div>

            {/* Breakdown */}
            <div className="bg-black/20 rounded-xl p-4 space-y-3">
              <p className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-3">The Math</p>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70">Employees lost per year</span>
                <span className="text-white font-semibold">{employeesLost} people</span>
              </div>
              
              {/* Custom vs Estimated Toggle */}
              <div className="border-t border-white/10 pt-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {data.useCustomReplacementCost ? (
                      <Pencil className="w-3 h-3 text-werk-lime" />
                    ) : (
                      <Calculator className="w-3 h-3 text-white/50" />
                    )}
                    <span className="text-white/70 text-sm">
                      {data.useCustomReplacementCost ? 'Your cost to replace' : 'Est. replacement cost (25%)'}
                    </span>
                  </div>
                  <Switch
                    checked={data.useCustomReplacementCost}
                    onCheckedChange={(checked) => setData({ useCustomReplacementCost: checked })}
                    className="scale-75"
                  />
                </div>
                
                {data.useCustomReplacementCost ? (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/50 text-xs">Cost to hire + train + ramp</span>
                      <span className="text-werk-lime font-bold">${data.customReplacementCost.toLocaleString()}</span>
                    </div>
                    <Slider
                      value={[data.customReplacementCost]}
                      onValueChange={(val) => setData({ customReplacementCost: val[0] })}
                      min={5000}
                      max={100000}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-white/30 text-xs">
                      <span>$5K</span>
                      <span>$100K</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/50 text-xs">25% of ${data.avgSalary.toLocaleString()}</span>
                    <span className="text-white font-semibold">${replacementCostPerEmployee.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-white/40 text-xs mt-4 text-center">
              {data.useCustomReplacementCost 
                ? "*Using your actual cost to hire and onboard."
                : "*Industry cites 50-200%. We use 25% to be conservative."}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
