import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { SlideContainer } from './SlideContainer';
import { ProgressBar } from './ProgressBar';
import { NavigationControls } from './NavigationControls';
import { DealershipProvider } from '@/contexts/DealershipContext';
import * as Slides from './slides';

const slideComponents = [
  // Opening
  Slides.Slide00Cover,
  Slides.SlideDataInput,
  
  // Problem & Why
  Slides.SlideDoubleDrain,
  Slides.Slide05NotTrustFalls,
  Slides.SlideWorkforceWants,
  Slides.SlideWhyEngage,
  
  // Solution Overview
  Slides.SlideSolution,
  
  // Features Deep-Dive
  Slides.Slide15EmotionalCheckins,
  Slides.Slide16Dashboard,
  Slides.Slide17Gamification,
  Slides.Slide18Recognition,
  Slides.Slide19Serving,
  Slides.Slide20Training,
  Slides.Slide14Onboarding,
  Slides.Slide14AskMe,
  Slides.Slide21Rewards,
  Slides.Slide12ProvenResults,
  
  // Close Sequence
  Slides.Slide13Implementation,
  Slides.Slide22CTA,
];

export const Presentation = () => {
  const {
    currentSlide,
    direction,
    nextSlide,
    prevSlide,
    isFirstSlide,
    isLastSlide,
    progress,
  } = useSlideNavigation({ totalSlides: slideComponents.length });

  const CurrentSlideComponent = slideComponents[currentSlide];

  return (
    <DealershipProvider>
      <div className="relative w-full h-screen overflow-hidden bg-background">
        <ProgressBar 
          progress={progress} 
          currentSlide={currentSlide} 
          totalSlides={slideComponents.length} 
        />
        
        <div className="relative w-full h-full">
          <SlideContainer slideKey={currentSlide} direction={direction}>
            <CurrentSlideComponent />
          </SlideContainer>
        </div>
        
        <NavigationControls
          onPrev={prevSlide}
          onNext={nextSlide}
          isFirstSlide={isFirstSlide}
          isLastSlide={isLastSlide}
        />
      </div>
    </DealershipProvider>
  );
};
