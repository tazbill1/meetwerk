import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { AnimatedStat } from '../AnimatedStat';
import { TrendingUp, DollarSign, ThumbsUp, Shield, Users, Award } from 'lucide-react';

export const SlideWhyEngage = () => {
  const metrics = [
    { icon: TrendingUp, value: 23, label: 'Higher Profitability', color: 'bg-werk-lime' },
    { icon: DollarSign, value: 18, label: 'Higher Sales', color: 'bg-werk-cyan' },
    { icon: ThumbsUp, value: 10, label: 'Better Customer Ratings', color: 'bg-werk-blue' },
  ];

  const benefits = [
    { icon: Shield, title: 'Reduce Risk', desc: 'Protect institutional knowledge' },
    { icon: Users, title: 'Attract Talent', desc: 'Modern culture wins recruiting' },
    { icon: Award, title: 'Build Culture', desc: 'A place people want to work' },
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      <SlideHeader />
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Invest in <span className="text-gradient-werk">Engagement?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            It's not a soft metric — it's a business strategy with proven ROI.
          </p>
        </motion.div>
        
        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-2xl p-5 border shadow-sm text-center"
            >
              <div className={`w-12 h-12 rounded-xl ${metric.color} mx-auto mb-3 flex items-center justify-center`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <AnimatedStat
                value={metric.value}
                prefix="+"
                suffix="%"
                label={metric.label}
                delay={400 + index * 100}
              />
            </motion.div>
          ))}
        </div>
        
        {/* ROI + Benefits */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-werk-navy to-werk-dark rounded-2xl p-6 text-white"
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-werk-lime">4-5x</div>
              <div className="text-white/70 mt-2">Return on Investment</div>
              <p className="text-sm text-white/50 mt-3">
                Every dollar invested in engagement returns 4-5x through reduced turnover, 
                higher sales, and better retention.
              </p>
              <div className="text-xs text-white/30 mt-2">Source: Gallup Q12 Meta-Analysis</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="flex items-center gap-4 bg-card rounded-xl p-4 border"
              >
                <div className="w-10 h-10 rounded-lg gradient-werk-accent flex items-center justify-center shrink-0">
                  <benefit.icon className="w-5 h-5 text-werk-dark" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{benefit.title}</div>
                  <div className="text-sm text-muted-foreground">{benefit.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
