import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Trophy } from 'lucide-react';
import contestScreenshot from '@/assets/contest-leaderboard-screenshot.jpg';

export const Slide17Gamification = () => {
  const challenges = [
    { title: 'Sales Sprint', desc: 'Most units this week', reward: '500 pts', progress: 75 },
    { title: 'Service Star', desc: '5-star reviews', reward: '300 pts', progress: 60 },
    { title: 'Team Player', desc: 'Help 3 coworkers', reward: '200 pts', progress: 90 },
  ];

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-werk-lime blur-3xl" />
      </div>
      
      <SlideHeader light />
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 text-werk-lime mb-4">
              <Trophy className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Gamification</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Challenges That <span className="text-gradient-werk">Drive Results</span>
            </h2>
            <p className="mt-6 text-xl text-white/70">
              Turn everyday work into engaging competitions that boost performance 
              and team morale.
            </p>
            
            <div className="mt-8 space-y-4">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-semibold text-white">{challenge.title}</div>
                      <div className="text-sm text-white/60">{challenge.desc}</div>
                    </div>
                    <div className="text-werk-lime font-bold">{challenge.reward}</div>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${challenge.progress}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className="h-full gradient-werk-accent rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            {/* Phone mockup with screenshot */}
            <div className="relative mx-auto w-64 md:w-72">
              <div className="bg-black rounded-[3rem] p-2 shadow-2xl">
                <img 
                  src={contestScreenshot} 
                  alt="Customer Car Photo Contest leaderboard" 
                  className="rounded-[2.5rem] w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
