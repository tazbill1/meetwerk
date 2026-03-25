import werkLogo from '@/assets/werkandme-logo.png';
import { 
  Heart, Trophy, BarChart3, MessageSquare, Gift, Clock,
  TrendingDown, UserX, ArrowRight, ArrowUp, CheckCircle2, Sparkles,
  Star, Award, TrendingUp
} from 'lucide-react';

const questions = [
  {
    num: 1,
    pill: 'The case',
    color: 'hsl(var(--werk-lime))',
    question: "Does employee enthusiasm actually impact your dealership's bottom line?",
    answer: "Absolutely. Gallup data shows engaged teams deliver 23% higher profitability, 18% more productivity, and 10% better customer ratings.",
  },
  {
    num: 2,
    pill: 'The barrier',
    color: 'hsl(var(--werk-blue))',
    question: "What's really standing in the way of a happier, more engaged team?",
    answer: "It's not compensation — it's connection. 70% of engagement variance traces back to the manager relationship, not the paycheck.",
  },
  {
    num: 3,
    pill: 'The solution',
    color: 'hsl(270, 60%, 55%)',
    question: 'How does WerkandMe actually move the needle for a dealership like yours?',
    answer: "One platform purpose-built for dealerships — combining check-ins, recognition, gamification, and analytics into daily habits.",
  },
];

const features = [
  { icon: Heart, title: 'Emotional Check-Ins', desc: 'Daily pulse on how your team is really feeling — catch disengagement before it becomes resignation.' },
  { icon: BarChart3, title: 'Manager Dashboard', desc: 'Real-time visibility into team health, trends, and actionable insights at a glance.' },
  { icon: Trophy, title: 'Smart Gamification', desc: 'Challenges and leaderboards that drive the behaviors that matter most to your bottom line.' },
  { icon: MessageSquare, title: 'Personalized Recognition', desc: 'Tailored to individual motivators — because not everyone wants a pizza party.' },
  { icon: Gift, title: 'Meaningful Rewards', desc: 'Incentives that actually matter to your people, redeemable in ways they choose.' },
  { icon: Clock, title: 'Real-Time Analytics', desc: 'Know exactly where your team stands — no more guessing or annual surveys.' },
];

const results = [
  { label: 'Employee Engagement', before: '32%', after: '68%' },
  { label: 'Monthly Turnover', before: '8%', after: '3%', inverse: true },
  { label: 'Customer Satisfaction', before: '78%', after: '92%' },
];

export const RecapContent = () => {
  return (
    <div className="w-full">
      {/* ===== PAGE 1: The Story ===== */}
      <div className="print-slide">
        <div className="w-full h-full gradient-werk-dark flex flex-col overflow-hidden">
          <div className="gradient-werk-horizontal py-1" />
          
          <div className="flex-1 px-10 py-5 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <img src={werkLogo} alt="WerkandMe" className="h-9 brightness-0 invert" />
                <div>
                  <h1 className="text-xl font-bold text-white">Employee Engagement, Reimagined</h1>
                  <p className="text-white/50 text-xs">Purpose-built for automotive dealerships</p>
                </div>
              </div>
              <a href="https://www.werkandme.com" className="text-werk-cyan text-xs font-medium">werkandme.com</a>
            </div>

            {/* 3 Questions with Answers */}
            <div className="space-y-3 mb-5">
              <h2 className="text-white/60 text-xs font-semibold uppercase tracking-wider">3 Questions Every Dealer Should Ask</h2>
              {questions.map((q) => (
                <div
                  key={q.num}
                  className="rounded-xl px-5 py-4 border-l-4 flex items-start gap-4"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderLeftColor: q.color,
                  }}
                >
                  <div
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ backgroundColor: q.color, color: '#001a3a' }}
                  >
                    {q.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="inline-block text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${q.color}20`, color: q.color }}
                      >
                        {q.pill}
                      </span>
                    </div>
                    <p className="text-white font-bold text-sm leading-snug">{q.question}</p>
                    <p className="text-white/60 text-xs mt-1.5 leading-relaxed">{q.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The Problem at a Glance */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-4 h-4 text-destructive" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-destructive">The Disengagement Crisis</span>
                </div>
                <div className="text-center mb-3">
                  <div className="text-4xl font-bold text-destructive">51%</div>
                  <div className="text-white/50 text-xs mt-1">of dealership employees are actively disengaged</div>
                </div>
                <p className="text-white/50 text-xs leading-relaxed">
                  That means half your team is showing up but checked out — delivering less, caring less, and dragging down the people around them.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <UserX className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">The Turnover Tax</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">80%</div>
                    <div className="text-white/50 text-[10px]">Sales staff turnover</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">46%</div>
                    <div className="text-white/50 text-[10px]">Technician turnover</div>
                  </div>
                </div>
                <p className="text-white/50 text-xs leading-relaxed">
                  Every departure costs 25-200% of that employee's salary in recruiting, training, and lost productivity.
                </p>
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

      {/* ===== PAGE 2: The Product & Proof ===== */}
      <div className="print-slide">
        <div className="w-full h-full gradient-werk-dark flex flex-col overflow-hidden">
          <div className="gradient-werk-horizontal py-1" />
          
          <div className="flex-1 px-10 py-5 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-4">
                <img src={werkLogo} alt="WerkandMe" className="h-9 brightness-0 invert" />
                <div>
                  <h1 className="text-xl font-bold text-white">One Platform. Built for Dealerships.</h1>
                  <p className="text-white/50 text-xs">Everything your team needs to stay engaged, recognized, and growing.</p>
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-werk-cyan" />
                <h2 className="text-white font-bold text-sm">What's Inside</h2>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                    <div className="w-8 h-8 rounded-lg gradient-werk-accent flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon className="w-4 h-4 text-werk-dark" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs leading-tight">{f.title}</p>
                      <p className="text-white/50 text-[10px] leading-snug mt-0.5">{f.desc}</p>
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
                <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex flex-col items-center justify-center">
                  <div className="text-white/60 text-[10px] font-medium mb-2">Unit Sales</div>
                  <div className="flex items-center gap-1 text-werk-lime">
                    <ArrowUp className="w-5 h-5" />
                    <span className="text-2xl font-bold">26%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Beyond the Numbers + CTA */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-werk-cyan" />
                  <h2 className="text-white font-bold text-sm">Beyond the Numbers</h2>
                </div>
                <div className="space-y-2.5">
                  {[
                    { icon: Star, text: 'Higher CSI Scores', desc: 'Engaged teams deliver better customer experiences' },
                    { icon: Heart, text: 'Stronger Culture', desc: 'A workplace people genuinely want to be part of' },
                    { icon: Award, text: 'Better Employer Brand', desc: 'Attract top talent without competing solely on pay' },
                    { icon: TrendingUp, text: 'Retained Knowledge', desc: 'Keep institutional expertise in-house longer' },
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
              </div>

              {/* CTA */}
              <div className="bg-werk-lime/10 rounded-xl p-5 border border-werk-lime/30 flex flex-col items-center justify-center text-center">
                <img src={werkLogo} alt="WerkandMe" className="h-8 brightness-0 invert mb-4" />
                <h2 className="text-white font-bold text-lg mb-2">Ready to see it in action?</h2>
                <p className="text-white/60 text-xs mb-4 max-w-[220px] leading-relaxed">
                  We'll show you exactly how WerkandMe works for a dealership like yours — in under 30 minutes.
                </p>
                <div className="bg-werk-lime/20 rounded-lg px-5 py-2.5 mb-3">
                  <span className="text-werk-lime font-bold text-sm">werkandme.com</span>
                </div>
                <p className="text-white/40 text-[10px]">White-glove onboarding included</p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={werkLogo} alt="WerkandMe" className="h-5 brightness-0 invert opacity-50" />
                <span className="text-white/40 text-[10px]">werkandme.com</span>
              </div>
              <span className="text-white/30 text-[10px]">Page 2 of 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
