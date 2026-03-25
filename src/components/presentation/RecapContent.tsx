import werkLogo from '@/assets/werkandme-logo.png';
import { useDealership, formatCurrency } from '@/contexts/DealershipContext';
import { 
  TrendingUp, TrendingDown, Star, Heart, Award, Sparkles, 
  Trophy, BarChart3, MessageSquare, Gift, Clock, AlertTriangle,
  UserX, CheckCircle2, ArrowUp, ArrowRight
} from 'lucide-react';

const questions = [
  {
    num: 1,
    pill: 'The case',
    color: 'hsl(var(--werk-lime))',
    question: "Does employee enthusiasm actually impact your dealership's bottom line?",
  },
  {
    num: 2,
    pill: 'The barrier',
    color: 'hsl(var(--werk-blue))',
    question: "What's really standing in the way of a happier, more engaged team?",
  },
  {
    num: 3,
    pill: 'The solution',
    color: 'hsl(270, 60%, 55%)',
    question: 'How does WerkandMe actually move the needle for a dealership like yours?',
  },
];

const features = [
  { icon: Heart, title: 'Emotional Check-Ins', desc: 'Catch disengagement before resignation' },
  { icon: BarChart3, title: 'Manager Dashboard', desc: 'Real-time actionable insights' },
  { icon: Trophy, title: 'Smart Gamification', desc: 'Challenges that drive results' },
  { icon: MessageSquare, title: 'Personalized Recognition', desc: 'Tailored to individual motivators' },
  { icon: Gift, title: 'Meaningful Rewards', desc: 'Incentives that actually matter' },
  { icon: Clock, title: 'Real-Time Analytics', desc: 'Visibility into team health' },
];

const results = [
  { label: 'Employee Engagement', before: '32%', after: '68%' },
  { label: 'Monthly Turnover', before: '8%', after: '3%', inverse: true },
  { label: 'Customer Satisfaction', before: '78%', after: '92%' },
];

export const RecapContent = () => {
  const { 
    data, potentialSavings, annualTurnoverCost, employeesLost, 
    replacementCostPerEmployee, effectiveTurnoverRate 
  } = useDealership();
  const improvementRate = data.improvementRate ?? 30;

  return (
    <div className="w-full">
      {/* ===== PAGE 1: The Problem ===== */}
      <div className="print-slide">
        <div className="w-full h-full gradient-werk-dark flex flex-col overflow-hidden">
          {/* Header Bar */}
          <div className="gradient-werk-horizontal py-1" />
          
          <div className="flex-1 px-10 py-5 flex flex-col">
            {/* Top: Logo + Title */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-4">
                <img src={werkLogo} alt="WerkandMe" className="h-9 brightness-0 invert" />
                <div>
                  <h1 className="text-xl font-bold text-white">Your Engagement Report</h1>
                  <p className="text-white/50 text-xs">Personalized for your {data.employees}-person team</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white/40 text-xs">3 Questions We Answered</p>
              </div>
            </div>

            {/* 3 Questions - Compact */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {questions.map((q) => (
                <div
                  key={q.num}
                  className="rounded-lg px-3 py-2.5 border-l-3 flex items-start gap-2.5"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderLeftColor: q.color,
                    borderLeftWidth: '3px',
                  }}
                >
                  <div
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                    style={{ backgroundColor: q.color, color: '#001a3a' }}
                  >
                    {q.num}
                  </div>
                  <div>
                    <span
                      className="inline-block text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1"
                      style={{ backgroundColor: `${q.color}20`, color: q.color }}
                    >
                      {q.pill}
                    </span>
                    <p className="text-white font-medium text-xs leading-snug">{q.question}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The Double Drain */}
            <div className="grid grid-cols-2 gap-4 mb-4 flex-1">
              {/* Disengagement */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-4 h-4 text-destructive" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-destructive">Disengagement</span>
                </div>
                <div className="text-center mb-3">
                  <div className="text-4xl font-bold text-destructive">51%</div>
                  <div className="text-white/50 text-xs mt-1">Actively Disengaged</div>
                </div>
                <div className="space-y-1.5 text-xs text-white/60">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-3 h-3 text-destructive shrink-0" />
                    <span>Lower customer satisfaction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-3 h-3 text-destructive shrink-0" />
                    <span>Missed upselling opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-3 h-3 text-destructive shrink-0" />
                    <span>Poor reviews & service quality</span>
                  </div>
                </div>
              </div>

              {/* Turnover */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <UserX className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">Turnover</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">80%</div>
                    <div className="text-white/50 text-[10px]">Sales staff</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">46%</div>
                    <div className="text-white/50 text-[10px]">Technicians</div>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs text-white/60">
                  <div className="flex items-center gap-2">
                    <UserX className="w-3 h-3 text-orange-400 shrink-0" />
                    <span>Lost institutional knowledge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserX className="w-3 h-3 text-orange-400 shrink-0" />
                    <span>Damaged customer relationships</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserX className="w-3 h-3 text-orange-400 shrink-0" />
                    <span>Constant rehiring costs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Cost Impact */}
            <div className="bg-destructive/20 border border-destructive/30 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/60 mb-1">
                    {data.hasCustomData ? 'Your Annual Impact' : 'Your Estimated Annual Impact'}
                  </div>
                  <div className="text-3xl font-bold text-destructive">{formatCurrency(annualTurnoverCost)}</div>
                  <div className="text-xs text-white/60 mt-1">
                    {employeesLost} employees × {formatCurrency(replacementCostPerEmployee)} replacement cost
                  </div>
                </div>
                <div className="text-right max-w-xs">
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">And that's just turnover</div>
                  <p className="text-xs text-white/50">
                    Add lost productivity from disengaged employees still on payroll, and the true cost climbs even higher.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-white/40 text-[10px]">werkandme.com</span>
              <span className="text-white/30 text-[10px]">Page 1 of 2</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PAGE 2: The Solution & Results ===== */}
      <div className="print-slide">
        <div className="w-full h-full gradient-werk-dark flex flex-col overflow-hidden">
          {/* Header Bar */}
          <div className="gradient-werk-horizontal py-1" />
          
          <div className="flex-1 px-10 py-5 flex flex-col">
            {/* Top: Logo + Title */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-4">
                <img src={werkLogo} alt="WerkandMe" className="h-9 brightness-0 invert" />
                <div>
                  <h1 className="text-xl font-bold text-white">The Solution & Results</h1>
                  <p className="text-white/50 text-xs">One Platform. Complete Solution.</p>
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-werk-cyan" />
                <h2 className="text-white font-bold text-sm">Built for Dealerships</h2>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {features.map((f) => (
                  <div key={f.title} className="flex items-center gap-2.5 bg-white/5 rounded-lg p-2.5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg gradient-werk-accent flex items-center justify-center shrink-0">
                      <f.icon className="w-4 h-4 text-werk-dark" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs leading-tight">{f.title}</p>
                      <p className="text-white/40 text-[10px]">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Proven Results */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-werk-lime" />
                <h2 className="text-white font-bold text-sm">Proven Results from Real Dealerships</h2>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {results.map((r) => (
                  <div key={r.label} className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
                    <div className="text-white/60 text-[10px] font-medium mb-2">{r.label}</div>
                    <div className="flex items-center justify-center gap-2">
                      <span className={`text-lg font-bold ${r.inverse ? 'text-destructive/70' : 'text-white/40'}`}>{r.before}</span>
                      <ArrowRight className="w-3 h-3 text-werk-lime" />
                      <span className="text-lg font-bold text-werk-lime">{r.after}</span>
                    </div>
                    <div className="flex justify-between text-[9px] text-white/40 mt-1">
                      <span>Before</span>
                      <span>After</span>
                    </div>
                  </div>
                ))}
                {/* Unit Sales special card */}
                <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex flex-col items-center justify-center">
                  <div className="text-white/60 text-[10px] font-medium mb-2">Unit Sales</div>
                  <div className="flex items-center gap-1 text-werk-lime">
                    <ArrowUp className="w-5 h-5" />
                    <span className="text-2xl font-bold">26%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI + Benefits side by side */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {/* Your Savings */}
              <div className="bg-werk-lime/15 rounded-xl p-4 border border-werk-lime/30">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-werk-lime" />
                  <h2 className="text-white font-bold text-sm">Your Potential Savings</h2>
                </div>
                <div className="text-center py-2 mb-3">
                  <p className="text-werk-lime font-black text-4xl">{formatCurrency(potentialSavings)}</p>
                  <p className="text-white/50 text-xs mt-1">per year with {improvementRate}% improvement</p>
                </div>
                <div className="bg-black/20 rounded-lg p-3 space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-white/60">Current turnover cost</span>
                    <span className="text-red-400">{formatCurrency(annualTurnoverCost)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Improvement target</span>
                    <span className="text-werk-lime">{improvementRate}%</span>
                  </div>
                  <div className="border-t border-white/10 pt-1.5 flex justify-between">
                    <span className="text-white/70 font-medium">Annual savings</span>
                    <span className="text-werk-lime font-bold">{formatCurrency(potentialSavings)}</span>
                  </div>
                </div>
              </div>

              {/* Beyond the Numbers */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-werk-cyan" />
                  <h2 className="text-white font-bold text-sm">Beyond the Numbers</h2>
                </div>
                <div className="space-y-2.5 flex-1">
                  {[
                    { icon: Star, text: 'Higher CSI Scores', desc: 'Engaged teams deliver better service' },
                    { icon: Heart, text: 'Stronger Culture', desc: 'A workplace people talk about' },
                    { icon: Award, text: 'Better Employer Brand', desc: 'Attract top talent effortlessly' },
                    { icon: TrendingUp, text: 'Retained Knowledge', desc: 'Keep expertise in-house' },
                  ].map((b) => (
                    <div key={b.text} className="flex items-start gap-2.5">
                      <b.icon className="w-4 h-4 text-werk-lime shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/80 text-xs font-medium">{b.text}</span>
                        <p className="text-white/40 text-[10px]">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-3 pt-3 border-t border-white/10 text-center">
                  <p className="text-white/60 text-sm font-medium">Questions? Let's talk.</p>
                  <p className="text-werk-cyan text-xs mt-0.5">werkandme.com</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={werkLogo} alt="WerkandMe" className="h-5 brightness-0 invert opacity-50" />
                <span className="text-white/40 text-[10px]">werkandme.com</span>
              </div>
              <p className="text-white/30 text-[10px]">
                *Savings based on {improvementRate}% turnover reduction. Industry studies cite 50-200% of salary as replacement cost; we use 25% conservatively.
              </p>
              <span className="text-white/30 text-[10px]">Page 2 of 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
