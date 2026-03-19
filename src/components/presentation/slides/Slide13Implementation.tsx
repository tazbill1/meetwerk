import { motion } from 'framer-motion';

export const Slide13Implementation = () => {
  const weeks = [
    {
      week: 1,
      color: '#1D9E75',
      phase: 'Setup',
      label: 'Configure',
      tasks: ['Platform setup', 'Brand integration', 'Admin training'],
      cardBg: '',
    },
    {
      week: 2,
      color: '#378ADD',
      phase: 'Rollout',
      label: 'Onboard Team',
      tasks: ['Employee app launch', 'Manager dashboard', 'First check-ins live'],
      cardBg: '',
    },
    {
      week: 3,
      color: '#7F77DD',
      phase: 'Activate',
      label: 'Go Live',
      tasks: ['Gamification on', 'Recognition program', 'First challenges'],
      cardBg: '',
    },
    {
      week: 4,
      color: '#B5E550',
      phase: 'Complete',
      label: 'Fully Live',
      tasks: ['Full team engaged', 'Data flowing', 'Culture coach review'],
      cardBg: 'rgba(181,229,80,0.05)',
    },
  ];

  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2145 50%, #0a1a38 100%)' }}
    >
      {/* Logo */}
      <div className="absolute top-6 left-8 z-10 text-lg font-bold tracking-tight">
        <span style={{ color: '#4FC3F7' }}>werk</span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>and</span>
        <span style={{ color: '#B5E550' }}>me</span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pt-14 pb-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5 max-w-4xl"
        >
          <div className="uppercase text-xs font-semibold tracking-[0.2em] mb-2" style={{ color: '#4FC3F7' }}>
            White-glove implementation
          </div>
          <h2 className="text-[26px] font-bold text-white leading-tight">
            We don't just hand you software.{' '}
            <span style={{ color: '#4FC3F7', fontStyle: 'italic' }}>We do the heavy lifting with you.</span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Your dedicated Culture Coach brings the ideas, runs the playbook, and helps execute inside the platform — so your managers can focus on selling cars.
          </p>
        </motion.div>

        {/* Culture Coach pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="flex items-center gap-3 px-5 py-2.5 rounded-[40px] mb-6"
          style={{ background: 'rgba(29,158,117,0.1)', border: '1px solid rgba(29,158,117,0.3)' }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, #1D9E75, #4FC3F7)' }}
          >
            CC
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] font-semibold" style={{ color: '#4FC3F7' }}>
              Your dedicated
            </div>
            <div className="text-white font-bold text-sm -mt-0.5">Culture Coach</div>
          </div>
        </motion.div>

        {/* 4-week timeline */}
        <div className="relative w-full max-w-4xl mb-5">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[14px] left-[12.5%] right-[12.5%] h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />

          <div className="grid grid-cols-4 gap-3">
            {weeks.map((w, i) => (
              <motion.div
                key={w.week}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Dot */}
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white mb-1.5 relative z-10"
                  style={{ background: w.color }}
                >
                  {w.week}
                </div>
                {/* Phase label */}
                <div className="text-[10px] uppercase tracking-wider font-semibold mb-1.5" style={{ color: w.color }}>
                  {w.phase}
                </div>
                {/* Card */}
                <div
                  className="w-full rounded-lg p-3"
                  style={{
                    background: w.cardBg || 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderTop: `2px solid ${w.color}`,
                  }}
                >
                  <div className="text-xs font-semibold text-white mb-1.5">{w.label}</div>
                  <ul className="space-y-1">
                    {w.tasks.map((t) => (
                      <li key={t} className="text-[11px] flex items-start gap-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        <span style={{ color: w.color }} className="mt-0.5 text-[8px]">●</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider with pill */}
        <div className="relative w-full max-w-4xl flex items-center mb-4">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(127,119,221,0.3), transparent)' }} />
          <div
            className="mx-3 px-4 py-1 rounded-[20px] text-[10px] font-semibold tracking-wider whitespace-nowrap"
            style={{ color: '#AFA9EC', background: 'rgba(127,119,221,0.15)', border: '1px solid rgba(127,119,221,0.3)' }}
          >
            Then — ongoing partnership
          </div>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(127,119,221,0.3), transparent)' }} />
        </div>

        {/* Two bottom cards */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-4xl">
          {[
            {
              title: 'Coaching & Strategy',
              desc: 'Monthly sessions with your Culture Coach — reviewing data, identifying opportunities, and planning the next engagement push.',
            },
            {
              title: 'Execution Support',
              desc: "We don't just tell you what to do. We bring the ideas and help build them inside the platform — challenges, campaigns, recognition programs.",
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-lg p-4"
              style={{ background: 'rgba(127,119,221,0.08)', border: '1px solid rgba(127,119,221,0.2)' }}
            >
              <div className="text-sm font-bold text-white mb-1">{card.title}</div>
              <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 py-3 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Built for dealerships. Proven in the showroom.
        </span>
        <span className="text-[11px] font-semibold" style={{ color: '#1D9E75' }}>
          Werk • Life • Community
        </span>
      </div>
    </div>
  );
};
