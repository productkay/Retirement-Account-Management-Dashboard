import React, { useState } from 'react';
import { InfoIcon, ArrowRightIcon, TrendingDownIcon, ShieldIcon, CalendarIcon } from 'lucide-react';
import { InfoModal } from '../UI/InfoModal';
interface TaxOptimizationProps {
  viewMode: 'individual' | 'household';
}
export const TaxOptimization: React.FC<TaxOptimizationProps> = ({
  viewMode
}) => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  // Define tax scenarios
  const taxScenarios = [{
    id: 'tfsa-first',
    title: 'TFSA-First Withdrawals',
    description: 'Prioritize tax-free withdrawals from your TFSA before taxable accounts.',
    potentialSavings: '$4,800',
    icon: <TrendingDownIcon size={18} className="text-green-600" />
  }, {
    id: 'income-splitting',
    title: viewMode === 'individual' ? 'Pension Income Splitting' : 'Enhanced Income Splitting',
    description: viewMode === 'individual' ? 'Split eligible pension income with your spouse to reduce overall tax burden.' : 'Optimize income splitting between spouses to minimize household tax burden.',
    potentialSavings: viewMode === 'individual' ? '$3,200' : '$5,600',
    icon: <ShieldIcon size={18} className="text-indigo-600" />
  }, {
    id: 'oas-optimization',
    title: 'OAS Clawback Avoidance',
    description: 'Structure withdrawals to keep income below OAS clawback thresholds.',
    potentialSavings: '$2,100',
    icon: <CalendarIcon size={18} className="text-amber-600" />
  }];
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-lg font-medium text-gray-900">
            Tax Optimization
          </h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600" onClick={() => setShowInfoModal(true)} aria-label="More information about tax optimization">
          <InfoIcon size={16} />
        </button>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6">
          Potential tax-saving scenarios to discuss with your advisor. These
          strategies may help optimize your retirement income.
        </p>
        <div className="space-y-4 mb-6">
          {taxScenarios.map(scenario => <div key={scenario.id} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 hover:bg-indigo-50 transition-colors cursor-pointer">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-white mr-3 mt-0.5">
                  {scenario.icon}
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium">
                    {scenario.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {scenario.description}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Potential annual savings:
                      <span className="text-green-600 font-medium ml-1">
                        {scenario.potentialSavings}
                      </span>
                    </span>
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                      Details
                      <ArrowRightIcon size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center">
          Explore a Tax-Efficient Scenario
          <ArrowRightIcon size={18} className="ml-2" />
        </button>
        <div className="mt-4 text-xs text-gray-500 text-center">
          For educational purposes only. Not tax advice. Please consult with a
          tax professional.
        </div>
      </div>
      {/* Info Modal */}
      {showInfoModal && <InfoModal title="Tax Optimization Strategies" content={<div className="space-y-4">
              <p>
                Tax optimization is a critical part of retirement income
                planning. Effective tax strategies can help you keep more of
                your money and potentially extend your retirement savings.
              </p>
              <p>
                The scenarios shown here are common tax optimization approaches
                for Canadian retirees:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>TFSA-First Withdrawals:</strong> Since TFSA
                  withdrawals are tax-free, using these funds before taxable
                  sources can reduce your overall tax burden.
                </li>
                <li>
                  <strong>Pension Income Splitting:</strong> Canadian tax rules
                  allow splitting up to 50% of eligible pension income with your
                  spouse, which can be beneficial if you're in different tax
                  brackets.
                </li>
                <li>
                  <strong>OAS Clawback Avoidance:</strong> Old Age Security
                  benefits begin to be "clawed back" when your income exceeds
                  certain thresholds. Structuring withdrawals to stay below
                  these thresholds can preserve your benefits.
                </li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                These strategies should be discussed with a qualified tax
                professional or financial advisor who can provide personalized
                advice based on your specific situation. Tax rules and
                thresholds change periodically, so regular review is
                recommended.
              </p>
            </div>} isOpen={showInfoModal} onClose={() => setShowInfoModal(false)} />}
    </div>;
};