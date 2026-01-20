import { createContext, useContext, useState, ReactNode } from 'react';

interface DealershipData {
  employees: number;
  turnoverRate: number;
  avgSalary: number;
  useCustomReplacementCost: boolean;
  customReplacementCost: number;
  hasCustomData: boolean;
}

interface DealershipContextType {
  data: DealershipData;
  setData: (data: Partial<DealershipData>) => void;
  resetToDefaults: () => void;
  // Calculated values
  employeesLost: number;
  replacementCostPerEmployee: number;
  annualTurnoverCost: number;
  potentialSavings: number;
}

const DEFAULT_DATA: DealershipData = {
  employees: 50,
  turnoverRate: 40,
  avgSalary: 45000,
  useCustomReplacementCost: false,
  customReplacementCost: 15000,
  hasCustomData: false,
};

const DEFAULT_REPLACEMENT_COST_MULTIPLIER = 0.25;
const IMPROVEMENT_RATE = 0.30;

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
  const employeesLost = Math.round(data.employees * (data.turnoverRate / 100));
  const replacementCostPerEmployee = data.useCustomReplacementCost 
    ? data.customReplacementCost 
    : data.avgSalary * DEFAULT_REPLACEMENT_COST_MULTIPLIER;
  const annualTurnoverCost = employeesLost * replacementCostPerEmployee;
  const potentialSavings = annualTurnoverCost * IMPROVEMENT_RATE;

  return (
    <DealershipContext.Provider value={{
      data,
      setData,
      resetToDefaults,
      employeesLost,
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
