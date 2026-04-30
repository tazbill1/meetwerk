import { motion } from 'framer-motion';
import { Users, Lightbulb, Rocket, Calendar } from 'lucide-react';

export const SlideCultureCoach = () => {
  const pillars = [
    {
      icon: Rocket,
      title: 'Implementation & Execution',
      desc: 'Hands-on partner who rolls out the playbook and keeps momentum after launch.',
    },
    {
      icon: Lightbulb,
      title: 'Fresh Ideas, Always',
      desc: 'Brings new challenges, recognition moments, and engagement plays each month.',
    },
    {
      icon: Calendar,
      title: 'Regular Sessions',
      desc: 'Recurring check-ins with leadership to review wins, surface issues, and plan next steps.',
    },
    {
      icon: Users,
      title: 'Fractional Culture Team',
      desc: 'An extension of your team — culture expertise without another full-time hire.',
    },
  ];

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-werk-cyan blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-werk-lime blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-werk-cyan mb-4">
            <Users className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              The Human Side of WerkandMe
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Meet Your <span className="text-gradient-werk">Culture Coach</span>
          </h2>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
            A fractional member of your dealership's culture team — helping you execute,
            stay consistent, and keep ideas fresh so engagement keeps moving forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl gradient-werk-accent flex items-center justify-center shrink-0">
                  <pillar.icon className="w-5 h-5 text-werk-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{pillar.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 max-w-3xl mx-auto"
        >
          <div
            className="flex items-center gap-4 rounded-2xl px-6 py-4"
            style={{
              background: 'rgba(29,158,117,0.08)',
              border: '1px solid rgba(29,158,117,0.25)',
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #1D9E75, #4FC3F7)' }}
            >
              CC
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-werk-cyan">
                Software + Human Support
              </div>
              <div className="text-sm text-white/70 mt-1">
                The platform does the heavy lifting. Your Culture Coach makes sure it
                actually changes how your dealership feels to work at.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
