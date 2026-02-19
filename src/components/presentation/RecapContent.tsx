import werkLogo from '@/assets/werkandme-logo.png';
import { useDealership, formatCurrency } from '@/contexts/DealershipContext';
import { 
  TrendingUp, TrendingDown, Star, Heart, Award, Sparkles, 
  Trophy, BarChart3, MessageSquare, Gift, Clock, AlertTriangle,
  Users, CheckCircle2
} from 'lucide-react';

export const RecapContent = () => {
  const { 
    data, potentialSavings, annualTurnoverCost, employeesLost, 
    replacementCostPerEmployee, effectiveTurnoverRate 
  } = useDealership();
  const improvementRate = data.improvementRate ?? 30;

  const features = [
    { icon: Heart, title: 'Emotional Check-Ins', desc: 'Daily pulse on team wellbeing' },
    { icon: BarChart3, title: 'Manager Dashboard', desc: 'Real-time actionable insights' },
    { icon: Trophy, title: 'Smart Gamification', desc: 'Challenges that drive results' },
    { icon: MessageSquare, title: 'Recognition', desc: 'Personalized peer appreciation' },
    { icon: Gift, title: 'Rewards', desc: 'Incentives that actually matter' },
    { icon: Clock, title: 'Analytics', desc: 'Visibility into team health' },
  ];

  const benefits = [
    { icon: Star, text: 'Higher CSI Scores' },
    { icon: Heart, text: 'Stronger Culture' },
    { icon: Award, text: 'Better Employer Brand' },
    { icon: TrendingUp, text: 'Retained Knowledge' },
  ];

  return (
    <div className="w-full h-full gradient-werk-dark flex flex-col overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Header Bar */}
      <div className="gradient-werk-horizontal py-1" />
      
      <div className="flex-1 px-10 py-6 flex flex-col">
        {/* Top: Logo + Title Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img src={werkLogo} alt="WerkandMe" className="h-10 brightness-0 invert" />
            <div>
              <h1 className="text-2xl font-bold text-white">Presentation Recap</h1>
              <p className="text-white/50 text-sm">The Ultimate Employee Experience Platform</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white/40 text-xs">Prepared for</p>
            <p className="text-white font-semibold">{data.employees}-Person Team</p>
          </div>
        </div>

        {/* Main Grid: 3 columns */}
        <div className="grid grid-cols-3 gap-5 flex-1">
          
          {/* Column 1: The Problem */}
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-5 border border-red-500/30 flex-1">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <h2 className="text-white font-bold text-lg">The Cost of Apathy</h2>
              </div>
              
              <div className="text-center py-3 mb-4">
                <p className="text-red-400 font-black text-4xl">{formatCurrency(annualTurnoverCost)}</p>
                <p className="text-white/50 text-sm mt-1">lost annually to turnover</p>
              </div>

              <div className="bg-black/20 rounded-lg p-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Team size</span>
                  <span className="text-white font-medium">{data.employees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Turnover rate</span>
                  <span className="text-white font-medium">{effectiveTurnoverRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Employees lost/yr</span>
                  <span className="text-white font-medium">{employeesLost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Cost per replacement</span>
                  <span className="text-white font-medium">${replacementCostPerEmployee.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: The Solution */}
          <div className="flex flex-col gap-4">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10 flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-werk-cyan" />
                <h2 className="text-white font-bold text-lg">The Solution</h2>
              </div>

              <div className="space-y-2.5">
                {features.map((f) => (
                  <div key={f.title} className="flex items-center gap-3 bg-white/5 rounded-lg p-2.5">
                    <div className="w-8 h-8 rounded-lg gradient-werk-accent flex items-center justify-center shrink-0">
                      <f.icon className="w-4 h-4 text-werk-dark" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm leading-tight">{f.title}</p>
                      <p className="text-white/50 text-xs">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: ROI + Benefits */}
          <div className="flex flex-col gap-4">
            {/* ROI Card */}
            <div className="bg-werk-lime/15 rounded-xl p-5 border border-werk-lime/30">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-werk-lime" />
                <h2 className="text-white font-bold text-lg">Your ROI</h2>
              </div>
              
              <div className="text-center py-2 mb-3">
                <p className="text-werk-lime font-black text-4xl">{formatCurrency(potentialSavings)}</p>
                <p className="text-white/50 text-sm mt-1">potential annual savings</p>
              </div>

              <div className="bg-black/20 rounded-lg p-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Turnover cost</span>
                  <span className="text-red-400 font-medium">{formatCurrency(annualTurnoverCost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Improvement</span>
                  <span className="text-werk-lime font-medium">{improvementRate}%</span>
                </div>
                <div className="border-t border-white/10 pt-2 flex justify-between">
                  <span className="text-white/70 font-medium">Savings</span>
                  <span className="text-werk-lime font-bold">{formatCurrency(potentialSavings)}</span>
                </div>
              </div>
            </div>

            {/* Intangible Benefits */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10 flex-1">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-werk-cyan" />
                <h2 className="text-white font-bold text-sm">Beyond the Numbers</h2>
              </div>
              <div className="space-y-2">
                {benefits.map((b) => (
                  <div key={b.text} className="flex items-center gap-2">
                    <b.icon className="w-4 h-4 text-werk-lime shrink-0" />
                    <span className="text-white/80 text-sm">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={werkLogo} alt="WerkandMe" className="h-6 brightness-0 invert opacity-50" />
            <span className="text-white/40 text-xs">werkandme.com</span>
          </div>
          <p className="text-white/30 text-xs">
            *Savings based on {improvementRate}% turnover reduction. Industry studies cite 50-200% of salary as replacement cost; we use 25% conservatively.
          </p>
        </div>
      </div>
    </div>
  );
};
