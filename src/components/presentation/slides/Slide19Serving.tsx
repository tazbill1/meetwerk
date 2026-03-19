import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import serveyouScreenshot from '@/assets/serveyou-screenshot.png';

export const Slide19Serving = () => {
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
                <Heart className="w-5 h-5 text-werk-dark" />
              </div>
              <span className="text-werk-navy">serve</span><span className="text-werk-lime">me</span>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-werk-lime/20 via-werk-cyan/20 to-werk-blue/20 rounded-3xl blur-xl" />
              <div className="relative bg-black/5 backdrop-blur-sm rounded-2xl p-3 border border-black/10 shadow-2xl">
                <img 
                  src={serveyouScreenshot} 
                  alt="ServeMe community events app" 
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
              <Heart className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Serving<span className="text-gradient-werk">...</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Users can sign up for opportunities to give back with their company.
            </p>
            
            <div className="mt-8 bg-werk-lime/5 border border-werk-lime/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-werk-lime mb-2">Why?</h3>
              <p className="text-muted-foreground">
                Businesses can make giving back a part of their business model with the <span className="font-semibold text-foreground">ServeMe</span> feature. Employees will be able to network and build lasting work relationships outside the office by serving the community together.
              </p>
            </div>
            
            <div className="mt-6 bg-card rounded-xl p-5 border shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-werk-cyan flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg text-foreground font-medium">
                  How do you promote doing things in the community?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
