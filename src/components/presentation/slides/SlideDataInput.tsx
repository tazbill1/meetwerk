import { motion } from 'framer-motion';
import { Users, TrendingDown, DollarSign, ArrowRight, SkipForward } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { useDealership } from '@/contexts/DealershipContext';
import { SlideHeader } from '../SlideHeader';

export const SlideDataInput = () => {
  const { data, setData } = useDealership();

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-werk-lime blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-werk-cyan blur-3xl" />
      </div>
      
      <SlideHeader light />
      
      <div className="relative z-10 w-full max-w-3xl px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-werk-lime mb-3">
            <Users className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Personalize Your Presentation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Tell Us About <span className="text-werk-lime">Your Dealership</span>
          </h2>
          <p className="mt-3 text-white/60 text-lg">
            We'll use these numbers to show you exactly what's at stake
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="space-y-8">
            {/* Employees */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-werk-lime/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-werk-lime" />
                </div>
                <div className="flex-1">
                  <label className="text-white font-medium">How many team members do you have?</label>
                </div>
                <span className="text-werk-lime font-bold text-2xl">{data.employees}</span>
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-werk-cyan/20 flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-werk-cyan" />
                </div>
                <div className="flex-1">
                  <label className="text-white font-medium">What's your annual turnover rate?</label>
                </div>
                <span className="text-werk-cyan font-bold text-2xl">{data.turnoverRate}%</span>
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-werk-blue/20 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-werk-blue" />
                </div>
                <div className="flex-1">
                  <label className="text-white font-medium">What's the average salary?</label>
                </div>
                <span className="text-werk-blue font-bold text-2xl">${data.avgSalary.toLocaleString()}</span>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
          <p className="text-white/50 text-sm flex items-center justify-center gap-2">
            <SkipForward className="w-4 h-4" />
            Don't know? That's okay — we're using industry averages as defaults
          </p>
        </motion.div>
      </div>
    </div>
  );
};
