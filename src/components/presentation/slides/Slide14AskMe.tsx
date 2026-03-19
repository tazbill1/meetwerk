import { motion } from 'framer-motion';
import { MessageCircleQuestion, Zap, ShieldCheck } from 'lucide-react';
import askmeScreenshot from '@/assets/askme-survey-screenshot.png';

export const Slide14AskMe = () => {
  const corePositioning = [
    'Annual surveys are too slow for a 30-day business.',
    'Engagement should be continuous, not occasional.',
    'Pulse feedback protects retention and performance.',
    'Listening frequently builds trust faster.',
    'Data is only valuable if leadership acts on it.',
  ];

  const whyWorks = [
    'Short, focused pulse surveys (3–5 questions)',
    'Department and role-specific',
    'Higher participation rates',
    'Real-time insight',
    'Built for dealership operations',
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <MessageCircleQuestion className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">AskMe</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Continuous <span className="text-gradient-werk">Pulse Feedback</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time insights that drive action — not annual reports that collect dust.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Core Positioning */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-5 border shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-secondary" />
              <h3 className="font-bold text-foreground">Why Pulse Beats Annual</h3>
            </div>
            <ul className="space-y-3">
              {corePositioning.map((point, i) => (
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
                src={askmeScreenshot}
                alt="AskMe pulse survey interface"
                className="relative rounded-2xl shadow-2xl border border-white/10 max-h-[400px] object-contain"
              />
            </div>
          </motion.div>

          {/* Why It Works + Leadership Rule */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-5"
          >
            <div className="bg-card rounded-2xl p-5 border shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircleQuestion className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Why AskMe Works</h3>
              </div>
              <ul className="space-y-3">
                {whyWorks.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-card rounded-2xl p-4 border-2 border-accent shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground text-sm">The Leadership Rule</h3>
              </div>
              <p className="text-sm font-medium text-foreground italic">
                "Never ask what you won't act on."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
