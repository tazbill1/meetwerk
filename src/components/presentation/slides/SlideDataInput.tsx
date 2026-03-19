import { motion } from 'framer-motion';
import { Users, TrendingDown, DollarSign, SkipForward, AlertTriangle, Pencil, Calculator, UserPlus, Percent } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useDealership, formatCurrency } from '@/contexts/DealershipContext';

export const SlideDataInput = () => {
  const { data, setData, employeesLost, effectiveTurnoverRate, replacementCostPerEmployee, annualTurnoverCost } = useDealership();

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-werk-lime blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-werk-cyan blur-3xl" />
      </div>
      
      
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
              
              {/* Turnover Input - Toggle between Monthly Hires and Rate */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-werk-cyan/20 flex items-center justify-center">
                      {data.useMonthlyHires ? (
                        <UserPlus className="w-4 h-4 text-werk-cyan" />
                      ) : (
                        <Percent className="w-4 h-4 text-werk-cyan" />
                      )}
                    </div>
                    <div className="flex-1">
                      <label className="text-white font-medium text-sm">
                        {data.useMonthlyHires ? 'Hires per month' : 'Annual turnover rate'}
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-werk-cyan font-bold text-xl">
                      {data.useMonthlyHires ? data.monthlyHires : `${data.turnoverRate}%`}
                    </span>
                    <Switch
                      checked={!data.useMonthlyHires}
                      onCheckedChange={(checked) => setData({ useMonthlyHires: !checked })}
                      className="scale-75"
                    />
                  </div>
                </div>
                
                {data.useMonthlyHires ? (
                  <>
                    <Slider
                      value={[data.monthlyHires]}
                      onValueChange={(val) => setData({ monthlyHires: val[0] })}
                      min={1}
                      max={20}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-white/40 text-xs">
                        <span>1/mo</span>
                        <span className="mx-2">—</span>
                        <span>20/mo</span>
                      </div>
                      <div className="bg-werk-cyan/20 border border-werk-cyan/40 rounded-lg px-3 py-1">
                        <span className="text-werk-cyan font-bold text-sm">= {effectiveTurnoverRate}%</span>
                        <span className="text-white/60 text-xs ml-1">annual</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
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
                  </>
                )}
                
                <p className="text-white/30 text-xs mt-2 flex items-center gap-1">
                  <span>Toggle for</span>
                  <span className="text-werk-cyan/70">
                    {data.useMonthlyHires ? 'annual rate %' : 'monthly hires'}
                  </span>
                </p>
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
                  <span className="bg-werk-lime/20 border border-werk-lime/40 rounded-lg px-3 py-1.5 text-werk-lime font-black text-xl tracking-tight">${data.avgSalary.toLocaleString()}</span>
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
              
              <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                <span className="text-white/70 text-sm">Annual impact</span>
                <span className="text-red-400 font-bold">{formatCurrency(annualTurnoverCost)}</span>
              </div>
            </div>

            <p className="text-white/40 text-xs mt-4 text-center">
              {data.useCustomReplacementCost 
                ? "*Using your actual cost to hire and onboard new employees."
                : "*Industry studies cite 50-200% of salary. We use 25% to be conservative."}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
