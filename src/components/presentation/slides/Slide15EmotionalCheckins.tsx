import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import checkmeScreenshot from '@/assets/checkme-app-screenshot.jpg';

export const Slide15EmotionalCheckins = () => {

  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtNHY2aDR2MnptMCAwaC0ydjRoMnYtNHptLTQtNGgtMnY0aDJ2LTR6bS0yLTRoLTJ2NGgydi00eiIvPjwvZz48L2c+PC9zdmc+')]" />
      </div>
      
      <SlideHeader light />
      
      <div className="relative z-10 w-full max-w-6xl px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 text-werk-lime mb-4">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Feature Spotlight</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              <span className="text-gradient-werk">Check-Ins</span>
            </h2>
            <p className="mt-6 text-xl text-white/70">
              Quick daily pulse checks that take 10 seconds but reveal 
              everything about your team's state of mind.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 bg-white/5 rounded-xl px-5 py-4 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-werk-lime/20 flex items-center justify-center">
                  <span className="text-lg">📊</span>
                </div>
                <div>
                  <div className="font-medium text-white">Pattern Detection</div>
                  <div className="text-white/60 text-sm">AI spots trends before they become problems</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/5 rounded-xl px-5 py-4 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-werk-cyan/20 flex items-center justify-center">
                  <span className="text-lg">🔔</span>
                </div>
                <div>
                  <div className="font-medium text-white">Manager Alerts</div>
                  <div className="text-white/60 text-sm">Get notified when someone needs support</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/5 rounded-xl px-5 py-4 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-werk-blue/20 flex items-center justify-center">
                  <span className="text-lg">🔒</span>
                </div>
                <div>
                  <div className="font-medium text-white">Anonymous Option</div>
                  <div className="text-white/60 text-sm">Employees can share honestly without fear</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            {/* Phone mockup with screenshot */}
            <div className="relative mx-auto w-64 md:w-72">
              <div className="bg-black rounded-[3rem] p-2 shadow-2xl">
                <img 
                  src={checkmeScreenshot} 
                  alt="CheckMe app check-in interface" 
                  className="rounded-[2.5rem] w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
