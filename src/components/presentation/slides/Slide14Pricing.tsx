import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Check, Star } from 'lucide-react';

export const Slide14Pricing = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'For single rooftops getting started',
      employees: 'Up to 50 employees',
      features: [
        'Check-Ins',
        'Basic recognition',
        'Manager dashboard',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      price: '$899',
      period: '/month',
      description: 'For dealerships ready to scale',
      employees: 'Up to 150 employees',
      features: [
        'Everything in Starter',
        'Full gamification',
        'Rewards program',
        'Advanced analytics',
        'Priority support',
        'Custom challenges',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For dealer groups & large operations',
      employees: 'Unlimited employees',
      features: [
        'Everything in Growth',
        'Multi-location dashboard',
        'API integrations',
        'Dedicated success manager',
        'Custom development',
        'SLA guarantee',
      ],
      popular: false,
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Simple, Transparent <span className="text-gradient-werk">Pricing</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Invest a fraction of what turnover costs you.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`relative rounded-3xl p-6 ${
                tier.popular
                  ? 'bg-gradient-to-br from-werk-navy to-werk-dark text-white border-2 border-werk-cyan shadow-xl scale-105'
                  : 'bg-card border shadow-sm'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-werk-lime text-werk-dark text-xs font-bold px-3 py-1 rounded-full">
                  <Star className="w-3 h-3" />
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold ${tier.popular ? '' : 'text-foreground'}`}>
                  {tier.name}
                </h3>
                <div className="mt-3">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className={tier.popular ? 'text-white/60' : 'text-muted-foreground'}>
                    {tier.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${tier.popular ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {tier.description}
                </p>
                <div className={`mt-2 text-sm font-medium ${tier.popular ? 'text-werk-lime' : 'text-werk-blue'}`}>
                  {tier.employees}
                </div>
              </div>
              
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${tier.popular ? 'text-werk-lime' : 'text-werk-cyan'}`} />
                    <span className={`text-sm ${tier.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-muted-foreground text-sm"
        >
          All plans include free setup • 30-day money-back guarantee • No long-term contracts
        </motion.div>
      </div>
    </div>
  );
};
