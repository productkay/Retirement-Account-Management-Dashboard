import React, { useState } from 'react';
import { InfoIcon, ArrowRightIcon, CheckCircleIcon, XCircleIcon, AlertCircleIcon } from 'lucide-react';
import { InfoModal } from '../UI/InfoModal';
interface WithdrawalStrategiesProps {
  planningHorizon: string;
  monthlyExpenses: number;
  riskTolerance: string;
  viewMode: 'individual' | 'household';
}
export const WithdrawalStrategies: React.FC<WithdrawalStrategiesProps> = ({
  planningHorizon,
  monthlyExpenses,
  riskTolerance,
  viewMode
}) => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState('rrif');
  // Calculate strategy details based on inputs
  const getStrategyDetails = () => {
    // Convert planning horizon to a number
    const horizonAge = planningHorizon === 'Custom' ? 98 : parseInt(planningHorizon);
    // Base values
    const baseAnnualIncome = monthlyExpenses * 12;
    const baseSuccessRate = {
      rrif: 82,
      fixed: 78,
      dynamic: 89
    };
    // Adjust based on risk tolerance
    const riskAdjustment = {
      conservative: {
        income: 0.95,
        success: -3
      },
      balanced: {
        income: 1.0,
        success: 0
      },
      growth: {
        income: 1.05,
        success: 2
      }
    };
    // Adjust based on planning horizon
    const horizonAdjustment = (horizonAge - 95) * -1.5;
    return {
      rrif: {
        name: 'RRIF Minimum Only',
        annualIncome: Math.round(baseAnnualIncome * 0.9 * riskAdjustment[riskTolerance].income),
        successRate: Math.min(99, Math.max(50, baseSuccessRate.rrif + riskAdjustment[riskTolerance].success + horizonAdjustment)),
        pros: ['Simplest approach', 'Meets government requirements', 'Tax-efficient'],
        cons: ['Lower income in early years', 'Less flexibility', 'May not optimize tax situation']
      },
      fixed: {
        name: '4% Rule (Fixed)',
        annualIncome: Math.round(baseAnnualIncome * riskAdjustment[riskTolerance].income),
        successRate: Math.min(99, Math.max(50, baseSuccessRate.fixed + riskAdjustment[riskTolerance].success + horizonAdjustment)),
        pros: ['Consistent income', 'Simple to implement', 'Well-researched approach'],
        cons: ['Less adaptive to market changes', 'May not meet RRIF minimums', 'Can be inefficient in down markets']
      },
      dynamic: {
        name: 'Dynamic Strategy',
        annualIncome: Math.round(baseAnnualIncome * 1.05 * riskAdjustment[riskTolerance].income),
        successRate: Math.min(99, Math.max(50, baseSuccessRate.dynamic + riskAdjustment[riskTolerance].success + horizonAdjustment)),
        pros: ['Adapts to market conditions', 'Highest success probability', 'Optimizes withdrawals'],
        cons: ['More complex to implement', 'Variable income year to year', 'Requires more active management']
      }
    };
  };
  const strategies = getStrategyDetails();
  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  // Get status indicator
  const getStatusIndicator = (successRate: number) => {
    if (successRate >= 80) {
      return {
        icon: <CheckCircleIcon size={16} className="text-green-600" />,
        text: 'Recommended',
        textClass: 'text-green-700'
      };
    } else if (successRate >= 65) {
      return {
        icon: <AlertCircleIcon size={16} className="text-amber-600" />,
        text: 'Consider',
        textClass: 'text-amber-700'
      };
    } else {
      return {
        icon: <XCircleIcon size={16} className="text-red-600" />,
        text: 'Caution',
        textClass: 'text-red-700'
      };
    }
  };
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-lg font-medium text-gray-900">
            Withdrawal Strategies
          </h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600" onClick={() => setShowInfoModal(true)} aria-label="More information about withdrawal strategies">
          <InfoIcon size={16} />
        </button>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6">
          Compare different withdrawal approaches to find a strategy that aligns
          with your goals. Each strategy has different benefits and
          considerations.
        </p>
        {/* Strategy Selection Tabs */}
        <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
          {Object.entries(strategies).map(([key, strategy]) => {
          const status = getStatusIndicator(strategy.successRate);
          return <button key={key} onClick={() => setSelectedStrategy(key)} className={`flex items-center whitespace-nowrap px-4 py-3 font-medium border-b-2 ${selectedStrategy === key ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'}`}>
                {strategy.name}
                <span className={`ml-2 flex items-center text-xs ${status.textClass}`}>
                  {status.icon}
                  <span className="ml-1">{status.text}</span>
                </span>
              </button>;
        })}
        </div>
        {/* Selected Strategy Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Annual Income */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-gray-700 font-medium mb-2">Annual Income</h3>
            <p className="text-2xl font-bold text-gray-900">
              {formatCurrency(strategies[selectedStrategy].annualIncome)}
            </p>
            <p className="text-gray-600 text-sm mt-1">
              {formatCurrency(strategies[selectedStrategy].annualIncome / 12)}{' '}
              monthly
            </p>
          </div>
          {/* Success Rate */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-gray-700 font-medium mb-2">
              Success Probability
            </h3>
            <div className="flex items-center">
              <p className="text-2xl font-bold text-gray-900">
                {strategies[selectedStrategy].successRate}%
              </p>
              <div className="ml-3">
                {getStatusIndicator(strategies[selectedStrategy].successRate).icon}
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-1">
              Based on{' '}
              {planningHorizon === 'Custom' ? 'age 98' : `age ${planningHorizon}`}{' '}
              horizon
            </p>
          </div>
          {/* Complexity */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-gray-700 font-medium mb-2">Implementation</h3>
            <div className="flex items-center">
              {selectedStrategy === 'rrif' && <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Simple
                </div>}
              {selectedStrategy === 'fixed' && <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Moderate
                </div>}
              {selectedStrategy === 'dynamic' && <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  Advanced
                </div>}
            </div>
            <p className="text-gray-600 text-sm mt-2">
              {selectedStrategy === 'rrif' && 'Can be self-managed'}
              {selectedStrategy === 'fixed' && 'May need occasional guidance'}
              {selectedStrategy === 'dynamic' && 'Advisor recommended'}
            </p>
          </div>
        </div>
        {/* Pros and Cons */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pros */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-gray-800 font-medium mb-3">Benefits</h3>
            <ul className="space-y-2">
              {strategies[selectedStrategy].pros.map((pro, index) => <li key={index} className="flex items-start">
                  <CheckCircleIcon size={16} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{pro}</span>
                </li>)}
            </ul>
          </div>
          {/* Cons */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-gray-800 font-medium mb-3">Considerations</h3>
            <ul className="space-y-2">
              {strategies[selectedStrategy].cons.map((con, index) => <li key={index} className="flex items-start">
                  <AlertCircleIcon size={16} className="text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{con}</span>
                </li>)}
            </ul>
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-6 flex justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium flex items-center">
            Explore This Strategy in Detail
            <ArrowRightIcon size={18} className="ml-2" />
          </button>
        </div>
      </div>
      {/* Info Modal */}
      {showInfoModal && <InfoModal title="Withdrawal Strategies" content={<div className="space-y-4">
              <p>
                Choosing the right withdrawal strategy is a key part of
                retirement income planning. Each approach has different
                advantages and considerations.
              </p>
              <h3 className="font-medium text-gray-900">RRIF Minimum Only</h3>
              <p>
                This strategy involves withdrawing only the government-mandated
                minimum amount from your RRIF each year. The minimum percentage
                increases with age, starting at 5.28% at age 71 and increasing
                to 20% by age 95+.
              </p>
              <h3 className="font-medium text-gray-900">
                4% Rule (Fixed Withdrawal)
              </h3>
              <p>
                The 4% rule suggests withdrawing 4% of your initial portfolio
                value in the first year of retirement, then adjusting that
                amount for inflation in subsequent years. This approach aims to
                provide consistent income while preserving capital.
              </p>
              <h3 className="font-medium text-gray-900">Dynamic Strategy</h3>
              <p>
                A dynamic strategy adjusts your withdrawal amount based on
                market performance and portfolio value. You might withdraw more
                in years with strong returns and less during market downturns.
                This approach can be more complex but may improve long-term
                sustainability.
              </p>
              <p className="text-sm text-gray-600 italic">
                Note: These are simplified explanations. Your optimal strategy
                may involve a combination of approaches or additional
                considerations specific to your situation. We recommend
                discussing these options with your financial advisor.
              </p>
            </div>} isOpen={showInfoModal} onClose={() => setShowInfoModal(false)} />}
    </div>;
};