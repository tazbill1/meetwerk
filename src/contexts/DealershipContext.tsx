import { createContext, useContext, useState, ReactNode } from 'react';

interface DealershipData {
  employees: number;
  turnoverRate: number;
  monthlyHires: number;
  useMonthlyHires: boolean; // true = monthly hires input, false = turnover rate input
  avgSalary: number;
  useCustomReplacementCost: boolean;
  customReplacementCost: number;
  improvementRate: number;
  hasCustomData: boolean;
}

interface DealershipContextType {
  data: DealershipData;
  setData: (data: Partial<DealershipData>) => void;
  resetToDefaults: () => void;
  // Calculated values
  employeesLost: number;
  effectiveTurnoverRate: number;
  replacementCostPerEmployee: number;
  annualTurnoverCost: number;
  potentialSavings: number;
}

const DEFAULT_DATA: DealershipData = {
  employees: 100,
  turnoverRate: 40,
  monthlyHires: 2,
  useMonthlyHires: true, // Default to monthly hires (more intuitive)
  avgSalary: 45000,
  useCustomReplacementCost: false,
  customReplacementCost: 15000,
  improvementRate: 30,
  hasCustomData: false,
};

const DEFAULT_REPLACEMENT_COST_MULTIPLIER = 0.25;

const DealershipContext = createContext<DealershipContextType | undefined>(undefined);

export const DealershipProvider = ({ children }: { children: ReactNode }) => {
  const [data, setDataState] = useState<DealershipData>(DEFAULT_DATA);

  const setData = (newData: Partial<DealershipData>) => {
    setDataState(prev => ({ 
      ...prev, 
      ...newData,
      hasCustomData: true,
    }));
  };

  const resetToDefaults = () => {
    setDataState(DEFAULT_DATA);
  };

  // Calculated values
  // If using monthly hires, calculate employees lost from that; otherwise use turnover rate
  const employeesLost = data.useMonthlyHires 
    ? data.monthlyHires * 12 
    : Math.round(data.employees * (data.turnoverRate / 100));
  
  // Calculate effective turnover rate for display purposes
  const effectiveTurnoverRate = data.useMonthlyHires
    ? Math.round((data.monthlyHires * 12 / data.employees) * 100)
    : data.turnoverRate;
  
  const replacementCostPerEmployee = data.useCustomReplacementCost 
    ? data.customReplacementCost 
    : data.avgSalary * DEFAULT_REPLACEMENT_COST_MULTIPLIER;
  const annualTurnoverCost = employeesLost * replacementCostPerEmployee;
  const improvementRate = data.improvementRate ?? 30;
  const potentialSavings = annualTurnoverCost * (improvementRate / 100);

  return (
    <DealershipContext.Provider value={{
      data,
      setData,
      resetToDefaults,
      employeesLost,
      effectiveTurnoverRate,
      replacementCostPerEmployee,
      annualTurnoverCost,
      potentialSavings,
    }}>
      {children}
    </DealershipContext.Provider>
  );
};

export const useDealership = () => {
  const context = useContext(DealershipContext);
  if (context === undefined) {
    throw new Error('useDealership must be used within a DealershipProvider');
  }
  return context;
};

export const formatCurrency = (value: number) => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  return `$${(value / 1000).toFixed(0)}K`;
};
