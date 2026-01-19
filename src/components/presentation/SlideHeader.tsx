import werkLogo from '@/assets/werkandme-logo.png';

interface SlideHeaderProps {
  showLogo?: boolean;
  light?: boolean;
}

export const SlideHeader = ({ showLogo = true, light = false }: SlideHeaderProps) => {
  if (!showLogo) return null;
  
  return (
    <div className="absolute top-6 left-8 z-10">
      <img 
        src={werkLogo} 
        alt="WerkandMe" 
        className={`h-8 w-auto ${light ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};
