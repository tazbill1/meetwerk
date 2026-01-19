import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { GraduationCap, Calendar, BookOpen, Users, Lightbulb } from 'lucide-react';

export const Slide19Training = () => {
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
          {/* Left side - Phone mockups */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center"
          >
            <div className="mb-6 text-xl font-semibold flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-werk-lime flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-werk-dark" />
              </div>
              <span className="text-werk-lime">grow</span><span className="text-werk-cyan">me</span>
            </div>
            
            <div className="flex justify-center gap-4">
              {/* Training Calendar Phone */}
              <div className="relative w-40 md:w-48">
                <div className="bg-gradient-to-br from-werk-navy to-werk-dark rounded-[2.5rem] p-1.5 shadow-2xl">
                  <div className="bg-white rounded-[2rem] p-3 aspect-[9/16] flex flex-col">
                    <div className="bg-werk-navy text-white text-xs py-2 px-3 rounded-t-lg text-center font-medium">
                      growme
                    </div>
                    <div className="flex gap-1 mt-2 text-[8px]">
                      <div className="flex-1 bg-werk-navy text-white px-2 py-1 rounded text-center">Scheduled</div>
                      <div className="flex-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-center">On-Demand</div>
                    </div>
                    <div className="mt-2 text-center text-[8px] font-medium text-gray-700">September 2024</div>
                    <div className="grid grid-cols-7 gap-0.5 mt-1 text-[6px] text-gray-500">
                      {['M','T','W','T','F','S','S'].map((d, i) => (
                        <div key={i} className="text-center">{d}</div>
                      ))}
                      {Array.from({length: 30}, (_, i) => (
                        <div key={i} className={`text-center py-0.5 ${i === 17 ? 'bg-werk-lime text-werk-dark rounded-full font-bold' : ''} ${i === 21 ? 'bg-werk-cyan text-white rounded-full' : ''}`}>
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto space-y-1">
                      <div className="bg-werk-blue/10 rounded p-1.5">
                        <div className="text-[7px] font-medium text-werk-navy">Customer Skills</div>
                        <div className="text-[6px] text-gray-500">10:00 AM</div>
                      </div>
                      <div className="bg-werk-cyan/10 rounded p-1.5">
                        <div className="text-[7px] font-medium text-werk-navy">Phone Training</div>
                        <div className="text-[6px] text-gray-500">2:30 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Training Categories Phone */}
              <div className="relative w-40 md:w-48 mt-8">
                <div className="bg-gradient-to-br from-werk-cyan to-werk-blue rounded-[2.5rem] p-1.5 shadow-2xl">
                  <div className="bg-white rounded-[2rem] p-3 aspect-[9/16] flex flex-col">
                    <div className="bg-werk-navy text-white text-xs py-2 px-3 rounded-t-lg text-center font-medium">
                      growme
                    </div>
                    <div className="flex gap-1 mt-2 text-[8px]">
                      <div className="flex-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-center">Scheduled</div>
                      <div className="flex-1 bg-werk-lime text-werk-dark px-2 py-1 rounded text-center font-medium">On-Demand</div>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="text-[8px] font-semibold text-gray-700">On-Demand Training</div>
                      <div className="bg-gray-50 rounded p-2 flex justify-between items-center">
                        <span className="text-[7px] text-gray-700">View Categories</span>
                        <span className="text-gray-400">›</span>
                      </div>
                      <div className="text-[8px] font-semibold text-gray-700 mt-2">Specialized</div>
                      <div className="bg-gray-50 rounded p-2 flex justify-between items-center">
                        <span className="text-[7px] text-gray-700">Development Plan</span>
                        <span className="text-gray-400">›</span>
                      </div>
                      <div className="bg-gray-50 rounded p-2 flex justify-between items-center">
                        <span className="text-[7px] text-gray-700">Mentorship Program</span>
                        <span className="text-gray-400">›</span>
                      </div>
                      <div className="bg-gray-50 rounded p-2 flex justify-between items-center">
                        <span className="text-[7px] text-gray-700">Suggestion Box</span>
                        <span className="text-gray-400">›</span>
                      </div>
                    </div>
                  </div>
                </div>
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
