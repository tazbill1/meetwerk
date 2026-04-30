import { DealershipProvider } from '@/contexts/DealershipContext';
import * as Slides from './slides';

const slideComponents = [
  Slides.Slide00Cover,
  Slides.SlideDataInput,
  Slides.SlideDoubleDrain,
  Slides.Slide05NotTrustFalls,
  Slides.SlideWorkforceWants,
  Slides.SlideWhyEngage,
  Slides.SlideSolution,
  Slides.Slide15EmotionalCheckins,
  Slides.Slide16Dashboard,
  Slides.Slide17Gamification,
  Slides.SlideCultureCoach,
  Slides.Slide18Recognition,
  Slides.Slide19Serving,
  Slides.Slide20Training,
  Slides.Slide21Rewards,
  Slides.Slide12ProvenResults,
  Slides.Slide13Implementation,
  Slides.Slide22CTA,
];

export const PrintView = () => {
  return (
    <DealershipProvider>
      <div className="print-container">
        {slideComponents.map((SlideComponent, index) => (
          <div key={index} className="print-slide">
            <SlideComponent />
          </div>
        ))}
      </div>
    </DealershipProvider>
  );
};
