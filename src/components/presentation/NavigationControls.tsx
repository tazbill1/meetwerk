import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface NavigationControlsProps {
  onPrev: () => void;
  onNext: () => void;
  isFirstSlide: boolean;
  isLastSlide: boolean;
}

export const NavigationControls = ({ 
  onPrev, 
  onNext, 
  isFirstSlide, 
  isLastSlide 
}: NavigationControlsProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
      <div className="flex items-center gap-1 bg-background/90 backdrop-blur-md border border-border/50 rounded-full px-2 py-1.5 shadow-lg">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrev}
          disabled={isFirstSlide}
          className="h-8 w-8 rounded-full hover:bg-primary/10 disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="w-px h-4 bg-border mx-1" />
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={isLastSlide}
          className="h-8 w-8 rounded-full hover:bg-primary/10 disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div className="w-px h-4 bg-border mx-1" />

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFullscreen}
          className="h-8 w-8 rounded-full hover:bg-primary/10"
        >
          {isFullscreen ? (
            <Minimize className="h-4 w-4" />
          ) : (
            <Maximize className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};
