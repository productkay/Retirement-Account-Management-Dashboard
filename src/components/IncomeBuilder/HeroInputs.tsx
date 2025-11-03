import React, { useState } from 'react';
import { InfoIcon, DollarSignIcon, HeartIcon, CalendarIcon, TrendingUpIcon } from 'lucide-react';
import { InfoModal } from '../UI/InfoModal';
interface HeroInputsProps {
  planningHorizon: string;
  setPlanningHorizon: (value: string) => void;
  healthFactor: string;
  setHealthFactor: (value: string) => void;
  monthlyExpenses: number;
  setMonthlyExpenses: (value: number) => void;
  riskTolerance: string;
  setRiskTolerance: (value: string) => void;
  viewMode: 'individual' | 'household';
}
export const HeroInputs: React.FC<HeroInputsProps> = ({
  planningHorizon,
  setPlanningHorizon,
  healthFactor,
  setHealthFactor,
  monthlyExpenses,
  setMonthlyExpenses,
  riskTolerance,
  setRiskTolerance,
  viewMode
}) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  // Modal content
  const modalContent = {
    horizon: {
      title: 'Planning Horizon',
      content: <div className="space-y-4">
          <p>
            Your planning horizon determines how long we'll project your
            retirement income to last.
          </p>
          <p>
            While the average Canadian life expectancy is around 82-85 years,
            many people live well into their 90s or beyond. It's generally
            better to plan for a longer horizon to avoid running out of money in
            later years.
          </p>
          <p>Factors that might influence your planning horizon:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Family history of longevity</li>
            <li>Current health status</li>
            <li>Lifestyle factors</li>
            <li>Desire to leave an inheritance</li>
          </ul>
        </div>
    },
    health: {
      title: 'Health Factors',
      content: <div className="space-y-4">
          <p>
            Your health status can impact both your life expectancy and your
            expected healthcare costs in retirement.
          </p>
          <p>This setting adjusts our projections in two ways:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Projected life expectancy (planning horizon)</li>
            <li>Estimated healthcare expenses in later years</li>
          </ul>
          <p>
            <strong>Good:</strong> Lower expected healthcare costs, potentially
            longer life expectancy
          </p>
          <p>
            <strong>Average:</strong> Standard healthcare cost projections
          </p>
          <p>
            <strong>Poor:</strong> Higher expected healthcare costs, potentially
            shorter planning horizon
          </p>
        </div>
    },
    expenses: {
      title: 'Monthly Expenses',
      content: <div className="space-y-4">
          <p>This represents your expected monthly spending in retirement.</p>
          <p>Your expenses typically include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Housing (mortgage/rent, property taxes, utilities, maintenance)
            </li>
            <li>Food and groceries</li>
            <li>Transportation</li>
            <li>Healthcare not covered by provincial plans</li>
            <li>Insurance premiums</li>
            <li>Entertainment and travel</li>
            <li>Gifts and charitable giving</li>
          </ul>
          <p>
            Many financial planners suggest budgeting for 70-80% of your
            pre-retirement income in retirement, but your actual needs may vary
            based on your lifestyle and goals.
          </p>
        </div>
    },
    risk: {
      title: 'Risk Tolerance',
      content: <div className="space-y-4">
          <p>
            Risk tolerance reflects how comfortable you are with investment
            volatility in exchange for potentially higher returns.
          </p>
          <p>
            This setting affects the projected investment mix and expected
            returns in our simulations:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Conservative:</strong> Lower expected returns (4-5%
              annually) with less volatility
              <br />
              <span className="text-sm text-gray-600">
                Typically higher allocation to bonds and GICs
              </span>
            </li>
            <li>
              <strong>Balanced:</strong> Moderate expected returns (5-6%
              annually) with moderate volatility
              <br />
              <span className="text-sm text-gray-600">
                More even mix between stocks, bonds, and other assets
              </span>
            </li>
            <li>
              <strong>Growth:</strong> Higher expected returns (6-7% annually)
              with more volatility
              <br />
              <span className="text-sm text-gray-600">
                Higher allocation to stocks and growth assets
              </span>
            </li>
          </ul>
          <p className="text-sm text-gray-600 italic">
            Note: These are simplified projections for educational purposes.
            Actual investment performance will vary.
          </p>
        </div>
    }
  };
  return <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-5">
        Retirement Income Scenario
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Planning Horizon - Modified to be less crowded */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-indigo-50 mr-2">
                <CalendarIcon size={18} className="text-indigo-600" />
              </div>
              <label htmlFor="planning-horizon" className="font-medium text-gray-800">
                Planning Horizon
              </label>
            </div>
            <button onClick={() => setActiveModal('horizon')} className="text-gray-400 hover:text-gray-600" aria-label="More information about planning horizon">
              <InfoIcon size={16} />
            </button>
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => setPlanningHorizon('90')} className={`py-2 px-3 rounded-lg text-sm font-medium ${planningHorizon === '90' ? 'bg-indigo-100 text-indigo-700' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}>
                Age 90
              </button>
              <button onClick={() => setPlanningHorizon('95')} className={`py-2 px-3 rounded-lg text-sm font-medium ${planningHorizon === '95' ? 'bg-indigo-100 text-indigo-700' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}>
                Age 95
              </button>
              <button onClick={() => setPlanningHorizon('100')} className={`py-2 px-3 rounded-lg text-sm font-medium ${planningHorizon === '100' ? 'bg-indigo-100 text-indigo-700' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}>
                Age 100
              </button>
              <button onClick={() => setPlanningHorizon('Custom')} className={`py-2 px-3 rounded-lg text-sm font-medium ${planningHorizon === 'Custom' ? 'bg-indigo-100 text-indigo-700' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}>
                Custom
              </button>
            </div>
            {planningHorizon === 'Custom' && <div className="pt-2">
                <label htmlFor="custom-age" className="text-sm text-gray-600 block mb-1">
                  Custom age:
                </label>
                <input type="number" id="custom-age" min="70" max="120" className="w-full border border-gray-300 rounded-lg px-3 py-2" defaultValue="98" />
              </div>}
          </div>
        </div>
        {/* Health Factors */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-red-50 mr-2">
                <HeartIcon size={18} className="text-red-600" />
              </div>
              <label htmlFor="health-factor" className="font-medium text-gray-800">
                Health Factors
              </label>
            </div>
            <button onClick={() => setActiveModal('health')} className="text-gray-400 hover:text-gray-600" aria-label="More information about health factors">
              <InfoIcon size={16} />
            </button>
          </div>
          <div className="flex space-x-2">
            {['good', 'average', 'poor'].map(option => <button key={option} onClick={() => setHealthFactor(option)} className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${healthFactor === option ? 'bg-indigo-100 text-indigo-700' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>)}
          </div>
        </div>
        {/* Monthly Expenses */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-green-50 mr-2">
                <DollarSignIcon size={18} className="text-green-600" />
              </div>
              <label htmlFor="monthly-expenses" className="font-medium text-gray-800">
                Monthly Expenses
              </label>
            </div>
            <button onClick={() => setActiveModal('expenses')} className="text-gray-400 hover:text-gray-600" aria-label="More information about monthly expenses">
              <InfoIcon size={16} />
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">$2,000</span>
              <span className="text-gray-600 text-sm">$6,000</span>
            </div>
            <input type="range" id="monthly-expenses" min="2000" max="6000" step="100" value={monthlyExpenses} onChange={e => setMonthlyExpenses(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
            <div className="text-center">
              <span className="text-xl font-bold text-gray-900">
                ${monthlyExpenses.toLocaleString()}
              </span>
              <span className="text-gray-600 text-sm ml-1">/ month</span>
            </div>
          </div>
        </div>
        {/* Risk Tolerance */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-amber-50 mr-2">
                <TrendingUpIcon size={18} className="text-amber-600" />
              </div>
              <label htmlFor="risk-tolerance" className="font-medium text-gray-800">
                Risk Tolerance
              </label>
            </div>
            <button onClick={() => setActiveModal('risk')} className="text-gray-400 hover:text-gray-600" aria-label="More information about risk tolerance">
              <InfoIcon size={16} />
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>Conservative</span>
              <span>Balanced</span>
              <span>Growth</span>
            </div>
            <input type="range" id="risk-tolerance" min="1" max="3" step="1" value={riskTolerance === 'conservative' ? 1 : riskTolerance === 'balanced' ? 2 : 3} onChange={e => {
            const val = parseInt(e.target.value);
            setRiskTolerance(val === 1 ? 'conservative' : val === 2 ? 'balanced' : 'growth');
          }} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
            <div className="text-center">
              <span className="text-lg font-medium text-gray-900">
                {riskTolerance.charAt(0).toUpperCase() + riskTolerance.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Info Modals */}
      {activeModal && <InfoModal title={modalContent[activeModal].title} content={modalContent[activeModal].content} isOpen={!!activeModal} onClose={() => setActiveModal(null)} />}
    </div>;
};