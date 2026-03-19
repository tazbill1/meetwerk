import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Shield, TrendingUp, Users, Award } from 'lucide-react';

export const Slide07WhyInvest = () => {
  const quadrants = [
    {
      icon: Shield,
      title: 'Reduce Risk',
      description: 'Lower turnover protects institutional knowledge and customer relationships',
      color: 'from-werk-lime to-werk-cyan',
    },
    {
      icon: TrendingUp,
      title: 'Increase Revenue',
      description: 'Engaged employees sell 20% more and deliver better service',
      color: 'from-werk-cyan to-werk-blue',
    },
    {
      icon: Users,
      title: 'Attract Talent',
      description: 'Modern culture becomes a competitive advantage in recruiting',
      color: 'from-werk-blue to-werk-navy',
    },
    {
      icon: Award,
      title: 'Build Culture',
      description: 'Transform your dealership into a place people want to work',
      color: 'from-werk-navy to-werk-dark',
    },
  ];

  return (
    <div className="relative w-full h-full bg-background flex items-center justify-center overflow-hidden">
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Good Dealerships <span className="text-gradient-werk">Invest in People</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Employee engagement isn't a soft metric — it's a business strategy.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {quadrants.map((quadrant, index) => (
            <motion.div
              key={quadrant.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${quadrant.color} rounded-3xl p-8 text-white h-full shadow-lg hover:shadow-xl transition-shadow`}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <quadrant.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{quadrant.title}</h3>
                    <p className="text-white/80 text-lg">{quadrant.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
