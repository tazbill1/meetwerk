import { motion } from 'framer-motion';
import { UserCheck, AlertTriangle } from 'lucide-react';
import guidemeScreenshot from '@/assets/guideme-onboarding-screenshot.png';

export const Slide14Onboarding = () => {
  const whyMatters = [
    'First 90 days determine long-term retention',
    'Early turnover is the most expensive turnover',
    'Culture is absorbed immediately',
    'Poor onboarding looks like "bad hiring" but is often a process failure',
    'Strong onboarding accelerates productivity',
  ];

  const costOfWeak = [
    'Increased 90-day turnover',
    'Slower ramp to performance',
    'Lower early engagement',
    'Reduced confidence in leadership',
    'Margin loss in fixed ops and sales',
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      <SlideHeader />

      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <UserCheck className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">GuideMe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why <span className="text-gradient-werk">Onboarding</span> Matters
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            In a dealership, the first 90 days make or break every hire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Why It Matters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-5 border shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <UserCheck className="w-5 h-5 text-secondary" />
              <h3 className="font-bold text-foreground">Why It Matters</h3>
            </div>
            <ul className="space-y-3">
              {whyMatters.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 gradient-werk rounded-3xl opacity-20 blur-xl" />
              <img
                src={guidemeScreenshot}
                alt="GuideMe onboarding checklist"
                className="relative z-10 rounded-2xl shadow-2xl border border-white/10 max-h-[400px] object-contain"
              />
            </div>
          </motion.div>

          {/* Cost of Weak Onboarding */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl p-5 border shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <h3 className="font-bold text-foreground">Cost of Weak Onboarding</h3>
            </div>
            <ul className="space-y-3">
              {costOfWeak.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
