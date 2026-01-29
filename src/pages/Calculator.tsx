import { motion } from 'framer-motion';
import { Users, TrendingDown, DollarSign, AlertTriangle, Pencil, Calculator, ExternalLink, UserPlus, Percent } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { DealershipProvider, useDealership, formatCurrency } from '@/contexts/DealershipContext';
import werkLogo from '@/assets/werkandme-logo.png';

const CalculatorContent = () => {
  const { data, setData, employeesLost, effectiveTurnoverRate, replacementCostPerEmployee, annualTurnoverCost } = useDealership();

  return (
    <div className="min-h-screen gradient-werk-dark flex flex-col">
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <img src={werkLogo} alt="WerkandMe" className="h-8 brightness-0 invert" />
        <Button 
          variant="outline" 
          size="sm"
          className="text-white border-white/20 hover:bg-white/10"
          onClick={() => window.open('https://meetwerk.lovable.app', '_blank')}
        >
          See Full Presentation
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 text-red-400 mb-3">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">The Hidden Cost</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              The Cost of <span className="text-red-400">Apathy</span>
            </h1>
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
                
                {/* Turnover Input - Toggle between Monthly Hires and Rate */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-werk-cyan/20 flex items-center justify-center">
                        {data.useMonthlyHires ? (
                          <UserPlus className="w-4 h-4 text-werk-cyan" />
                        ) : (
                          <Percent className="w-4 h-4 text-werk-cyan" />
                        )}
                      </div>
                      <div className="flex-1">
                        <label className="text-white/80 text-sm">
                          {data.useMonthlyHires ? 'Hires per month' : 'Annual turnover'}
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-werk-cyan font-bold text-lg">
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
                      <div className="flex justify-between text-white/40 text-xs mt-1">
                        <span>1/mo</span>
                        <span>20/mo</span>
                      </div>
                      <p className="text-white/40 text-xs mt-1">
                        = {effectiveTurnoverRate}% annual turnover
                      </p>
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
                  
                  <p className="text-white/30 text-xs mt-1">
                    Toggle for {data.useMonthlyHires ? 'annual rate %' : 'monthly hires'}
                  </p>
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

      {/* Footer */}
      <footer className="p-6 text-center text-white/40 text-sm">
        Ready to stop the drain? <a href="https://meetwerk.lovable.app" className="text-werk-lime hover:underline">See how WerkandMe can help →</a>
      </footer>
    </div>
  );
};

const CalculatorPage = () => {
  return (
    <DealershipProvider>
      <CalculatorContent />
    </DealershipProvider>
  );
};

export default CalculatorPage;
