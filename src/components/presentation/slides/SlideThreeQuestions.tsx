import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';

const questions = [
  {
    num: 1,
    pill: 'The case',
    color: 'hsl(var(--werk-lime))',
    border: 'border-l-[hsl(var(--werk-lime))]',
    question: "Does employee enthusiasm actually impact your dealership's bottom line?",
    sub: "Or is keeping people happy just a nice thing to do?",
  },
  {
    num: 2,
    pill: 'The barrier',
    color: 'hsl(var(--werk-blue))',
    border: 'border-l-[hsl(var(--werk-blue))]',
    question: "What's really standing in the way of a happier, more engaged team?",
    sub: "Hint: it's probably not the paycheck.",
  },
  {
    num: 3,
    pill: 'The solution',
    color: 'hsl(var(--werk-purple, 270 60% 55%))',
    border: 'border-l-[hsl(270,60%,55%)]',
    question: 'How does WerkandMe actually move the needle for a dealership like yours?',
    sub: "We'll show you the data — but first, let's set the stage.",
  },
];

export const SlideThreeQuestions = () => {
  return (
    <div className="relative w-full h-full gradient-werk-dark flex flex-col overflow-hidden">
      <SlideHeader light />

      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 pt-20 max-w-5xl mx-auto w-full">
        {/* Headline */}

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3"
        >
          3 Questions
        </motion.h2>

        {/* Subline */}
        {/* Question Cards */}
        <div className="space-y-4">
          {questions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="rounded-xl px-6 py-5 flex items-start gap-5 border-l-4"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderLeftColor: q.color,
              }}
            >
              {/* Number circle */}
              <div
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: q.color, color: '#001a3a' }}
              >
                {q.num}
              </div>

              <div>
                {/* Pill */}
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full mb-2"
                  style={{
                    backgroundColor: `${q.color}20`,
                    color: q.color,
                  }}
                >
                  {q.pill}
                </span>

                <p className="text-white font-bold text-lg leading-snug">{q.question}</p>
                <p className="text-white/50 text-sm mt-1">{q.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="px-8 md:px-16 pb-6"
      >
        <div className="border-t border-white/10 pt-4 flex items-center justify-between text-sm">
          <span className="text-white/40">Built for dealerships. Proven in the showroom.</span>
          <span style={{ color: 'hsl(186, 100%, 40%)' }} className="font-medium">
            Werk • Life • Community
          </span>
        </div>
      </motion.div>
    </div>
  );
};
