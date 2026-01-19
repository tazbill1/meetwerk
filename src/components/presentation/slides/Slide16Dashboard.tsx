import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { BarChart3, TrendingUp, Users, AlertTriangle } from 'lucide-react';

export const Slide16Dashboard = () => {
  const dashboardItems = [
    { label: 'Team Mood', value: '72%', change: '+5%', status: 'positive' },
    { label: 'At-Risk', value: '3', change: '-2', status: 'positive' },
    { label: 'Recognition', value: '147', change: '+23', status: 'positive' },
    { label: 'Challenges', value: '12', change: 'Active', status: 'neutral' },
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      <SlideHeader />
      
      <div className="relative z-10 w-full max-w-6xl px-8 pt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 text-werk-blue mb-4">
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">For Managers</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Dashboard & <span className="text-gradient-werk">Reporting</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Everything you need to know about your team — at a glance. 
              No digging through spreadsheets.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              {dashboardItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-xl p-4 border shadow-sm"
                >
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="flex items-end gap-2 mt-1">
                    <span className="text-2xl font-bold text-foreground">{item.value}</span>
                    <span className={`text-sm ${item.status === 'positive' ? 'text-werk-lime' : 'text-muted-foreground'}`}>
                      {item.change}
                    </span>
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
            {/* Mock dashboard UI */}
            <div className="bg-card rounded-3xl p-6 border shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Team Overview</h3>
                <span className="text-xs text-muted-foreground">Last 7 days</span>
              </div>
              
              {/* Mock chart */}
              <div className="h-40 flex items-end gap-2 mb-6">
                {[65, 72, 68, 75, 80, 78, 82].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                    className="flex-1 gradient-werk rounded-t-lg"
                  />
                ))}
              </div>
              
              {/* Alerts section */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-destructive/10 rounded-lg px-4 py-3 border border-destructive/20">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  <span className="text-sm text-foreground">3 employees need attention</span>
                  <span className="ml-auto text-xs text-destructive font-medium">View</span>
                </div>
                
                <div className="flex items-center gap-3 bg-werk-lime/10 rounded-lg px-4 py-3 border border-werk-lime/20">
                  <TrendingUp className="w-4 h-4 text-werk-lime" />
                  <span className="text-sm text-foreground">Engagement up 12% this month</span>
                </div>
                
                <div className="flex items-center gap-3 bg-muted rounded-lg px-4 py-3">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">Team challenge ends in 3 days</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
