import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { Heart, Users, MapPin, Calendar } from 'lucide-react';

export const Slide19Serving = () => {
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
                <Heart className="w-5 h-5 text-werk-dark" />
              </div>
              <span className="text-werk-navy">serve</span><span className="text-werk-lime">you</span>
            </div>
            
            <div className="flex justify-center gap-4">
              {/* Events List Phone */}
              <div className="relative w-40 md:w-48">
                <div className="bg-gradient-to-br from-werk-navy to-werk-dark rounded-[2.5rem] p-1.5 shadow-2xl">
                  <div className="bg-white rounded-[2rem] p-3 aspect-[9/16] flex flex-col">
                    <div className="bg-werk-navy text-white text-xs py-2 px-3 rounded-t-lg text-center font-medium">
                      serveyou
                    </div>
                    
                    {/* Event Card 1 */}
                    <div className="mt-3 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="h-16 bg-gradient-to-r from-werk-cyan/30 to-werk-blue/30 flex items-center justify-center">
                        <Users className="w-6 h-6 text-werk-navy" />
                      </div>
                      <div className="p-2">
                        <div className="text-[8px] font-semibold text-werk-navy">Feed the community together!</div>
                        <div className="text-[6px] text-gray-500">Feb 28 2021, 07:00pm</div>
                        <div className="flex gap-1 mt-1">
                          <span className="text-[6px] bg-werk-lime text-werk-dark px-1.5 py-0.5 rounded">I'm in</span>
                          <span className="text-[6px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">+1</span>
                          <span className="text-[6px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">I'm out</span>
                          <span className="text-[6px] text-werk-cyan font-bold ml-auto">45/50</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Event Card 2 */}
                    <div className="mt-2 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="h-12 bg-gradient-to-r from-werk-lime/30 to-werk-cyan/30 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-werk-navy" />
                      </div>
                      <div className="p-2">
                        <div className="text-[8px] font-semibold text-werk-navy">5K - Virtual Event</div>
                        <div className="text-[6px] text-gray-500">Virtual | Sep 18, 06:30pm</div>
                        <div className="flex gap-1 mt-1">
                          <span className="text-[6px] bg-werk-lime text-werk-dark px-1.5 py-0.5 rounded">I'm in</span>
                          <span className="text-[6px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">+1</span>
                          <span className="text-[6px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">I'm out</span>
                          <span className="text-[6px] text-werk-cyan font-bold ml-auto">123/156</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Event Detail Phone */}
              <div className="relative w-40 md:w-48 mt-8">
                <div className="bg-gradient-to-br from-werk-cyan to-werk-blue rounded-[2.5rem] p-1.5 shadow-2xl">
                  <div className="bg-white rounded-[2rem] p-3 aspect-[9/16] flex flex-col">
                    <div className="bg-werk-cyan text-white text-xs py-2 px-3 rounded-t-lg text-center font-medium">
                      Event Details
                    </div>
                    <div className="mt-2 text-[9px] font-semibold text-werk-navy">Feed the community together!</div>
                    <div className="flex gap-1 mt-2">
                      <span className="text-[6px] bg-werk-lime text-werk-dark px-1.5 py-0.5 rounded">I'm in</span>
                      <span className="text-[6px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">+1</span>
                      <span className="text-[6px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">I'm out</span>
                      <span className="text-[6px] text-werk-cyan font-bold ml-auto">45/50</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-werk-navy" />
                      <div>
                        <div className="text-[7px] font-medium text-werk-navy">Date & Time</div>
                        <div className="text-[6px] text-gray-500">Feb 28, 2021 • 7:00pm</div>
                      </div>
                    </div>
                    <div className="mt-2 text-[7px] font-medium text-werk-navy">Description</div>
                    <div className="text-[6px] text-gray-500 leading-tight">Our community is in need of food now more than ever, we're serving together and making a difference.</div>
                    <div className="mt-2 text-[7px] font-medium text-werk-navy">Address</div>
                    <div className="mt-1 bg-gray-100 rounded h-12 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-werk-cyan" />
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
                Businesses can make giving back a part of their business model with the <span className="font-semibold text-foreground">ServeYou</span> feature. Employees will be able to network and build lasting work relationships outside the office by serving the community together.
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
