import React from 'react';
import { CheckCircleIcon, AlertTriangleIcon, PieChartIcon, CalendarIcon, DollarSignIcon, TrendingUpIcon, XCircleIcon } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
interface PlanSummaryProps {
  successRate: number;
  planningHorizon: string;
  monthlyExpenses: number;
  riskTolerance: string;
  viewMode: 'individual' | 'household';
}
export const PlanSummary: React.FC<PlanSummaryProps> = ({
  successRate,
  planningHorizon,
  monthlyExpenses,
  riskTolerance,
  viewMode
}) => {
  // Format the horizon age
  const horizonAge = planningHorizon === 'Custom' ? 98 : planningHorizon;
  // Get status message based on success rate
  const getStatusMessage = () => {
    if (successRate >= 80) {
      return {
        icon: <CheckCircleIcon size={20} className="text-green-600" />,
        title: 'On Track',
        message: 'Your retirement income plan has a high probability of success.',
        color: 'text-green-700',
        bg: 'bg-green-50',
        border: 'border-green-200'
      };
    } else if (successRate >= 60) {
      return {
        icon: <AlertTriangleIcon size={20} className="text-amber-600" />,
        title: 'Needs Attention',
        message: 'Your plan may need some adjustments to improve its probability of success.',
        color: 'text-amber-700',
        bg: 'bg-amber-50',
        border: 'border-amber-200'
      };
    } else {
      return {
        icon: <XCircleIcon size={20} className="text-red-600" />,
        title: 'At Risk',
        message: 'Your current plan has a high risk of not meeting your retirement needs.',
        color: 'text-red-700',
        bg: 'bg-red-50',
        border: 'border-red-200'
      };
    }
  };
  const status = getStatusMessage();
  // Calculate annual income
  const annualIncome = monthlyExpenses * 12;
  // Calculate estimated total withdrawals
  const getEstimatedTotalWithdrawals = () => {
    const currentAge = 65;
    const endAge = parseInt(horizonAge.toString());
    const years = endAge - currentAge;
    // Simple calculation for demonstration
    return annualIncome * years;
  };
  // Calculate risk-adjusted return
  const getRiskAdjustedReturn = () => {
    switch (riskTolerance) {
      case 'conservative':
        return '4.5%';
      case 'balanced':
        return '5.5%';
      case 'growth':
        return '6.5%';
      default:
        return '5.5%';
    }
  };
  // Calculate asset allocation based on risk tolerance
  const getAssetAllocation = () => {
    switch (riskTolerance) {
      case 'conservative':
        return {
          equity: 40,
          fixedIncome: 50,
          cash: 10
        };
      case 'balanced':
        return {
          equity: 60,
          fixedIncome: 35,
          cash: 5
        };
      case 'growth':
        return {
          equity: 80,
          fixedIncome: 15,
          cash: 5
        };
      default:
        return {
          equity: 60,
          fixedIncome: 35,
          cash: 5
        };
    }
  };
  const allocation = getAssetAllocation();
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Plan Summary</h2>
      </div>
      <div className="p-6">
        {/* Status Banner */}
        <div className={`${status.bg} ${status.border} border rounded-lg p-4 mb-6`}>
          <div className="flex items-center mb-2">
            {status.icon}
            <h3 className={`font-medium ${status.color} ml-2`}>
              {status.title}
            </h3>
          </div>
          <p className={`${status.color}`}>{status.message}</p>
        </div>
        {/* Key Plan Details */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <div className="p-2 rounded-full bg-indigo-50 mr-3 mt-0.5">
              <CalendarIcon size={16} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="text-gray-800 font-medium">Planning Horizon</h3>
              <p className="text-gray-600">To age {horizonAge}</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="p-2 rounded-full bg-green-50 mr-3 mt-0.5">
              <DollarSignIcon size={16} className="text-green-600" />
            </div>
            <div>
              <h3 className="text-gray-800 font-medium">Monthly Expenses</h3>
              <p className="text-gray-600">{formatCurrency(monthlyExpenses)}</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="p-2 rounded-full bg-amber-50 mr-3 mt-0.5">
              <TrendingUpIcon size={16} className="text-amber-600" />
            </div>
            <div>
              <h3 className="text-gray-800 font-medium">Risk Profile</h3>
              <p className="text-gray-600">
                {riskTolerance.charAt(0).toUpperCase() + riskTolerance.slice(1)}
                <span className="text-gray-500 text-sm ml-2">
                  ({getRiskAdjustedReturn()} expected return)
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="p-2 rounded-full bg-blue-50 mr-3 mt-0.5">
              <PieChartIcon size={16} className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-gray-800 font-medium">Asset Allocation</h3>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-2.5">
                <div className="flex h-2.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-600" style={{
                  width: `${allocation.equity}%`
                }}></div>
                  <div className="bg-blue-400" style={{
                  width: `${allocation.fixedIncome}%`
                }}></div>
                  <div className="bg-gray-400" style={{
                  width: `${allocation.cash}%`
                }}></div>
                </div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>Equity {allocation.equity}%</span>
                <span>Fixed Income {allocation.fixedIncome}%</span>
                <span>Cash {allocation.cash}%</span>
              </div>
            </div>
          </div>
        </div>
        {/* Additional Statistics */}
        <div className="border-t border-gray-200 pt-4 mb-6">
          <h3 className="text-gray-800 font-medium mb-3">Plan Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Annual Income</p>
              <p className="text-gray-900 font-medium">
                {formatCurrency(annualIncome)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Success Probability</p>
              <p className="text-gray-900 font-medium">{successRate}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Retirement Duration</p>
              <p className="text-gray-900 font-medium">
                {parseInt(horizonAge.toString()) - 65} years
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Est. Total Withdrawals</p>
              <p className="text-gray-900 font-medium">
                {formatCurrency(getEstimatedTotalWithdrawals())}
              </p>
            </div>
          </div>
        </div>
        {/* Next Steps */}
        <div className="bg-indigo-50 rounded-lg p-4">
          <h3 className="text-indigo-800 font-medium mb-2">Next Steps</h3>
          <ul className="space-y-2 text-indigo-700 text-sm">
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">•</span>
              <span>
                Explore the withdrawal strategies to find your preferred
                approach
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">•</span>
              <span>Review tax optimization opportunities in the sidebar</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">•</span>
              <span>
                Save your plan to reference during your next advisor meeting
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>;
};