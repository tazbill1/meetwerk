import { useEffect } from 'react';
import { PrintView } from '@/components/presentation/PrintView';

const Print = () => {
  useEffect(() => {
    // Auto-trigger print dialog after a short delay for rendering
    const timer = setTimeout(() => {
      window.print();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
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
      <PrintView />
    </div>
  );
};

export default Print;
