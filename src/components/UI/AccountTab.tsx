import React from 'react';
import { formatCurrency } from '../../utils/formatters';
interface AccountTabProps {
  id: string;
  name: string;
  balance: number;
  balanceCAD?: number;
  currency: string;
  isSelected: boolean;
  onClick: () => void;
  isBalanceHidden: boolean;
  showOriginalCurrency?: boolean;
  fxRate?: number;
  owner?: string;
  displayCurrency?: string;
}
export const AccountTab: React.FC<AccountTabProps> = ({
  id,
  name,
  balance,
  balanceCAD,
  currency,
  isSelected,
  onClick,
  isBalanceHidden,
  showOriginalCurrency = false,
  fxRate = 1.32,
  owner,
  displayCurrency = 'CAD'
}) => {
  // Determine which balance to display based on currency preferences
  const getDisplayBalance = () => {
    // If the account is in USD
    if (currency === 'USD') {
      // Show USD value if requested
      if (displayCurrency === 'USD') {
        return balance;
      }
      // Otherwise show CAD equivalent
      return balanceCAD || balance * fxRate;
    }
    // If the account is in CAD
    if (currency === 'CAD') {
      // Show CAD value if requested
      if (displayCurrency === 'CAD') {
        return balance;
      }
      // Otherwise convert to USD
      return balance / fxRate;
    }
    // Default fallback
    return balance;
  };
  return <button onClick={onClick} className={`flex flex-col items-start px-5 py-3 rounded-lg min-w-[140px] ${isSelected ? 'bg-indigo-100 border-b-2 border-indigo-600' : 'bg-white hover:bg-gray-50 border-b-2 border-transparent'}`} aria-selected={isSelected}>
      {owner && <div className="h-4 w-4 rounded-full flex items-center justify-center text-xs mb-1" style={{
      backgroundColor: owner === 'Margaret' ? '#e0e7ff' : '#dbeafe',
      color: owner === 'Margaret' ? '#4f46e5' : '#2563eb'
    }}>
          {owner.charAt(0)}
        </div>}
      <span className={`font-medium ${isSelected ? 'text-indigo-700' : 'text-gray-700'}`}>
        {name}
      </span>
      {isBalanceHidden ? <span className={`text-sm mt-1 ${isSelected ? 'text-indigo-600' : 'text-gray-600'}`}>
          ••••••••
        </span> : <span className={`text-sm mt-1 ${isSelected ? 'text-indigo-600' : 'text-gray-600'}`}>
          {formatCurrency(getDisplayBalance(), displayCurrency)}
        </span>}
    </button>;
};