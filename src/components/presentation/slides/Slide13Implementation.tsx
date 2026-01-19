import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Calendar, Users, Settings, Rocket } from 'lucide-react';

export const Slide13Implementation = () => {
  const weeks = [
    {
      week: 1,
      icon: Settings,
      title: 'Setup & Configuration',
      tasks: ['Platform customization', 'Brand integration', 'Admin training'],
      color: 'from-werk-lime to-werk-cyan',
    },
    {
      week: 2,
      icon: Users,
      title: 'Team Onboarding',
      tasks: ['Employee app rollout', 'Manager dashboard training', 'First check-ins'],
      color: 'from-werk-cyan to-werk-blue',
    },
    {
      week: 3,
      icon: Calendar,
      title: 'Activation',
      tasks: ['Launch gamification', 'Recognition program', 'First challenges'],
      color: 'from-werk-blue to-werk-navy',
    },
    {
      week: 4,
      icon: Rocket,
      title: 'Optimization',
      tasks: ['Review initial data', 'Refine approach', 'Full operation'],
      color: 'from-werk-navy to-werk-dark',
    },
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      <SlideHeader />
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-werk-blue mb-4">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Implementation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Live in <span className="text-gradient-werk">4 Weeks</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Fast, seamless rollout with dedicated support every step of the way.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-werk-lime via-werk-cyan via-werk-blue to-werk-navy rounded-full" />
          
          <div className="grid md:grid-cols-4 gap-6">
            {weeks.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                {/* Week number */}
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${week.color} flex items-center justify-center shadow-lg mb-6`}>
                  <div className="text-center text-white">
                    <div className="text-xs uppercase tracking-wider opacity-80">Week</div>
                    <div className="text-2xl font-bold">{week.week}</div>
                  </div>
                </div>
                
                <div className="bg-card rounded-2xl p-5 border shadow-sm text-center">
                  <week.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold text-foreground mb-3">{week.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {week.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 text-center text-muted-foreground"
        >
          Includes Dealership Culture Coach & 24/7 support
        </motion.div>
      </div>
    </div>
  );
};
