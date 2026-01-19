import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { GraduationCap, Calendar, BookOpen, Users, Lightbulb } from 'lucide-react';
import growmeScreenshot from '@/assets/growme-training-screenshot.png';

export const Slide20Training = () => {
  const features = [
    { icon: Calendar, label: 'Scheduled Training', desc: 'Calendar-based event tracking' },
    { icon: BookOpen, label: 'On-Demand Courses', desc: 'Self-paced learning library' },
    { icon: Users, label: 'Mentorship Program', desc: 'Connect with experienced peers' },
    { icon: Lightbulb, label: 'Development Plans', desc: 'Personalized growth paths' },
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      <SlideHeader />
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center"
          >
            <div className="mb-6 text-xl font-semibold flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-werk-lime flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-werk-dark" />
              </div>
              <span className="text-werk-navy">grow</span><span className="text-werk-lime">me</span>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-werk-lime/20 via-werk-cyan/20 to-werk-blue/20 rounded-3xl blur-xl" />
              <div className="relative bg-black/5 backdrop-blur-sm rounded-2xl p-3 border border-black/10 shadow-2xl">
                <img 
                  src={growmeScreenshot} 
                  alt="GrowMe training app with scheduled and on-demand training" 
                  className="rounded-xl w-full max-w-md h-auto"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 text-werk-lime mb-4">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Training</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Career <span className="text-gradient-werk">Growth</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Users have access to upcoming training events within the company 
              and on-demand learning resources.
            </p>
            
            <div className="mt-8 bg-werk-lime/5 border border-werk-lime/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-werk-lime mb-2">Why?</h3>
              <p className="text-muted-foreground">
                Transparent opportunities to grow employees is a great way to give 
                employees control over their career path.
              </p>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 bg-card rounded-lg p-3 border shadow-sm"
                >
                  <feature.icon className="w-5 h-5 text-werk-cyan" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{feature.label}</div>
                    <div className="text-xs text-muted-foreground">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
