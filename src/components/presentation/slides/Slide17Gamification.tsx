import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Trophy, Target, Flame, Star } from 'lucide-react';

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
            className="relative"
          >
            {/* Leaderboard mockup */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <Flame className="w-5 h-5 text-werk-lime" />
                <h3 className="font-semibold text-white">This Week's Leaderboard</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { rank: 1, name: 'Sarah M.', points: 2450, avatar: '👩' },
                  { rank: 2, name: 'Mike R.', points: 2180, avatar: '👨' },
                  { rank: 3, name: 'David K.', points: 1920, avatar: '👨‍🦱' },
                  { rank: 4, name: 'Lisa T.', points: 1750, avatar: '👩‍🦰' },
                  { rank: 5, name: 'James W.', points: 1620, avatar: '🧑' },
                ].map((player, index) => (
                  <motion.div
                    key={player.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.08 }}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3 ${
                      index === 0 
                        ? 'bg-gradient-to-r from-werk-lime/20 to-werk-cyan/20 border border-werk-lime/30' 
                        : 'bg-white/5'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? 'bg-werk-lime text-werk-dark' : 
                      index === 1 ? 'bg-werk-cyan text-white' :
                      index === 2 ? 'bg-werk-blue text-white' : 'bg-white/10 text-white'
                    }`}>
                      {player.rank}
                    </div>
                    <span className="text-2xl">{player.avatar}</span>
                    <span className="text-white font-medium flex-1">{player.name}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-werk-lime" />
                      <span className="text-white font-bold">{player.points}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
