import { motion } from 'framer-motion';
import { SlideHeader } from '../SlideHeader';
import { MessageSquare } from 'lucide-react';
import noticemeFeed from '@/assets/noticeme-feed-screenshot.jpg';
import noticemeDetail from '@/assets/noticeme-detail-screenshot.jpg';

export const Slide18Recognition = () => {

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
            className="flex justify-center gap-4"
          >
            {/* Phone mockups with screenshots */}
            <div className="relative w-44 md:w-52">
              <div className="bg-black rounded-[2.5rem] p-1.5 shadow-2xl">
                <img 
                  src={noticemeFeed} 
                  alt="NoticeMe recognition feed" 
                  className="rounded-[2rem] w-full h-auto"
                />
              </div>
            </div>
            <div className="relative w-44 md:w-52 mt-8">
              <div className="bg-black rounded-[2.5rem] p-1.5 shadow-2xl">
                <img 
                  src={noticemeDetail} 
                  alt="NoticeMe recognition detail" 
                  className="rounded-[2rem] w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
