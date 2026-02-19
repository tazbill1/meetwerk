import { useEffect } from 'react';
import { DealershipProvider } from '@/contexts/DealershipContext';
import { RecapContent } from '@/components/presentation/RecapContent';

const PrintRecap = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DealershipProvider>
      <div className="print-page">
        <div className="print:hidden fixed top-4 left-4 z-50 bg-background border rounded-lg p-4 shadow-lg">
          <p className="text-sm text-muted-foreground mb-2">
            Print dialog should open automatically.
          </p>
          <button 
            onClick={() => window.print()}
            className="text-sm font-medium text-primary hover:underline"
          >
            Click here to print manually
          </button>
        </div>
        <div className="print-slide">
          <RecapContent />
        </div>
      </div>
    </DealershipProvider>
  );
};

export default PrintRecap;
