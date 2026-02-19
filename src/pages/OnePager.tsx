import werkLogo from '@/assets/werkandme-logo.png';
import { Heart, Trophy, BarChart3, MessageSquare, Gift, Clock, AlertTriangle, UserX, TrendingDown, TrendingUp, Star, Award, Sparkles, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Heart, title: 'Emotional Check-Ins', desc: 'Catch disengagement before resignation', color: 'text-werk-cyan' },
  { icon: BarChart3, title: 'Manager Dashboard', desc: 'Real-time actionable insights', color: 'text-werk-blue' },
  { icon: Trophy, title: 'Smart Gamification', desc: 'Challenges that drive results', color: 'text-werk-lime' },
  { icon: MessageSquare, title: 'Recognition', desc: 'Tailored to individual motivators', color: 'text-werk-cyan' },
  { icon: Gift, title: 'Meaningful Rewards', desc: 'Incentives that actually matter', color: 'text-werk-blue' },
  { icon: Clock, title: 'Real-Time Analytics', desc: 'Visibility into team health', color: 'text-werk-lime' },
];

const benefits = [
  { icon: Star, label: 'Higher CSI Scores', color: 'text-werk-lime' },
  { icon: Award, label: 'Stronger Culture', color: 'text-werk-cyan' },
  { icon: TrendingUp, label: 'Better Retention', color: 'text-werk-blue' },
  { icon: Sparkles, label: 'Employer Brand', color: 'text-werk-lime' },
];

const OnePager = () => {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Print button - hidden when printing */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <Button onClick={handlePrint} variant="outline" size="sm" className="gap-2">
          <Printer className="w-4 h-4" />
          Print / Save PDF
        </Button>
      </div>

      {/* One-pager content — designed for a single printed page */}
      <div className="one-pager-page w-full max-w-[1100px] mx-auto px-8 py-6 print:max-w-none print:px-10 print:py-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-werk-navy/10 pb-4 mb-5">
          <div className="flex items-center gap-4">
            <img src={werkLogo} alt="WerkandMe" className="h-10" />
            <div>
              <h1 className="text-2xl font-bold text-werk-navy leading-tight">
                We change <span className="text-gradient-werk italic">werk</span> for the better
              </h1>
              <p className="text-sm text-werk-navy/60">The Ultimate Employee Experience Platform for Auto Dealerships</p>
            </div>
          </div>
          <div className="text-right text-xs text-werk-navy/50 hidden sm:block">
            <div className="font-semibold text-werk-navy/70">werkandme.com</div>
          </div>
        </div>

        {/* Problem Section */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-destructive">The Problem</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-destructive/5 rounded-xl p-4 border border-destructive/10">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="w-4 h-4 text-destructive" />
                <span className="text-xs font-semibold uppercase text-destructive/80">Disengagement</span>
              </div>
              <div className="text-3xl font-black text-destructive">51%</div>
              <p className="text-xs text-werk-navy/60 mt-1">of dealership employees are actively disengaged</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-200/50">
              <div className="flex items-center gap-2 mb-2">
                <UserX className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-semibold uppercase text-orange-500/80">Sales Turnover</span>
              </div>
              <div className="text-3xl font-black text-orange-500">80%</div>
              <p className="text-xs text-werk-navy/60 mt-1">annual turnover rate for sales staff</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-200/50">
              <div className="flex items-center gap-2 mb-2">
                <UserX className="w-4 h-4 text-orange-500" />
                <span className="text-xs font-semibold uppercase text-orange-500/80">Tech Turnover</span>
              </div>
              <div className="text-3xl font-black text-orange-500">46%</div>
              <p className="text-xs text-werk-navy/60 mt-1">annual turnover rate for technicians</p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-werk-cyan" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-werk-navy">One Platform. Complete Solution.</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-2.5 bg-werk-navy/[0.03] rounded-lg p-3 border border-werk-navy/5">
                <div className="w-7 h-7 rounded-lg gradient-werk-accent flex items-center justify-center shrink-0 mt-0.5">
                  <f.icon className="w-3.5 h-3.5 text-werk-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-werk-navy text-sm leading-tight">{f.title}</h3>
                  <p className="text-xs text-werk-navy/50 mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results + Benefits Row */}
        <div className="grid grid-cols-2 gap-5 mb-5">
          {/* Proven Results */}
          <div className="bg-gradient-to-br from-werk-navy to-werk-dark rounded-xl p-5 text-white">
            <h2 className="text-sm font-bold uppercase tracking-wider text-werk-lime mb-3">Proven Results</h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-2xl font-black text-werk-lime">30%</div>
                <p className="text-xs text-white/60">reduction in turnover</p>
              </div>
              <div>
                <div className="text-2xl font-black text-werk-cyan">4.2x</div>
                <p className="text-xs text-white/60">ROI in first year</p>
              </div>
              <div>
                <div className="text-2xl font-black text-white">85%</div>
                <p className="text-xs text-white/60">employee adoption</p>
              </div>
              <div>
                <div className="text-2xl font-black text-werk-lime">+23</div>
                <p className="text-xs text-white/60">NPS improvement</p>
              </div>
            </div>
          </div>

          {/* Beyond the Numbers */}
          <div className="bg-werk-navy/[0.03] rounded-xl p-5 border border-werk-navy/5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-werk-navy mb-3">Beyond the Numbers</h2>
            <div className="space-y-2.5">
              {benefits.map((b) => (
                <div key={b.label} className="flex items-center gap-2.5">
                  <b.icon className={`w-4 h-4 ${b.color} shrink-0`} />
                  <span className="text-sm text-werk-navy/80 font-medium">{b.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-werk-navy/50 mt-3 italic">
              Built by dealership people, for dealership people.
            </p>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="gradient-werk rounded-xl p-4 flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">Ready to stop the drain?</h3>
            <p className="text-white/80 text-sm">Let's talk about what WerkandMe can do for your dealership.</p>
          </div>
          <div className="text-right text-white">
            <div className="text-sm font-semibold">werkandme.com</div>
            <div className="text-xs text-white/70">Werk • Life • Community</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePager;
