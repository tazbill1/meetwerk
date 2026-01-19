import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { MessageSquare, Heart, ThumbsUp, Award } from 'lucide-react';

export const Slide18Recognition = () => {
  const recognitions = [
    {
      from: 'Mike R.',
      to: 'Sarah M.',
      message: 'Crushed it with that difficult customer today! Real pro.',
      badge: '🌟 Customer Hero',
      time: '2h ago',
    },
    {
      from: 'Lisa T.',
      to: 'David K.',
      message: 'Thanks for staying late to help me finish the paperwork!',
      badge: '🤝 Team Player',
      time: '4h ago',
    },
    {
      from: 'Manager',
      to: 'James W.',
      message: 'Hit 120% of quota this month. Incredible work!',
      badge: '🏆 Top Performer',
      time: '1d ago',
    },
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      <SlideHeader />
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 text-werk-cyan mb-4">
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Recognition</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Peer-to-Peer <span className="text-gradient-werk">Appreciation</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Recognition shouldn't just come from the top. Empower your team 
              to celebrate each other's wins.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-4 border shadow-sm text-center">
                <div className="text-4xl font-bold text-gradient-werk">89%</div>
                <div className="text-sm text-muted-foreground mt-1">Feel more valued</div>
              </div>
              <div className="bg-card rounded-xl p-4 border shadow-sm text-center">
                <div className="text-4xl font-bold text-gradient-werk">3.2x</div>
                <div className="text-sm text-muted-foreground mt-1">More likely to stay</div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-werk-lime/10 text-werk-lime rounded-full text-sm font-medium">🌟 Customer Hero</span>
              <span className="px-3 py-1.5 bg-werk-cyan/10 text-werk-cyan rounded-full text-sm font-medium">🤝 Team Player</span>
              <span className="px-3 py-1.5 bg-werk-blue/10 text-werk-blue rounded-full text-sm font-medium">🏆 Top Performer</span>
              <span className="px-3 py-1.5 bg-werk-navy/10 text-werk-navy rounded-full text-sm font-medium">💡 Innovator</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {recognitions.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-2xl p-5 border shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{rec.from}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="font-semibold text-werk-blue">{rec.to}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{rec.time}</span>
                </div>
                <p className="text-muted-foreground mb-3">{rec.message}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium text-accent-foreground">
                    {rec.badge}
                  </span>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-werk-lime transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">12</span>
                    </button>
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-werk-cyan transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-xs">8</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
