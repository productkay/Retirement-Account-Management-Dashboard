import React, { useState } from 'react';
import { InfoIcon, ThumbsUpIcon, ThumbsDownIcon, AlertTriangleIcon } from 'lucide-react';
import { InfoModal } from '../UI/InfoModal';
interface SimulationChartProps {
  successRate: number;
  planningHorizon: string;
  monthlyExpenses: number;
  viewMode: 'individual' | 'household';
}
export const SimulationChart: React.FC<SimulationChartProps> = ({
  successRate,
  planningHorizon,
  monthlyExpenses,
  viewMode
}) => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  // Determine the status color and icon based on success rate
  const getStatusInfo = () => {
    if (successRate >= 80) {
      return {
        statusClass: 'text-green-600',
        bgClass: 'bg-green-50',
        icon: <ThumbsUpIcon size={18} className="mr-2 text-green-600" />,
        message: 'Your plan has a high probability of success'
      };
    } else if (successRate >= 60) {
      return {
        statusClass: 'text-amber-600',
        bgClass: 'bg-amber-50',
        icon: <AlertTriangleIcon size={18} className="mr-2 text-amber-600" />,
        message: 'Your plan has a moderate probability of success'
      };
    } else {
      return {
        statusClass: 'text-red-600',
        bgClass: 'bg-red-50',
        icon: <ThumbsDownIcon size={18} className="mr-2 text-red-600" />,
        message: 'Your plan has a low probability of success'
      };
    }
  };
  const {
    statusClass,
    bgClass,
    icon,
    message
  } = getStatusInfo();
  // Get age for X-axis labels based on planning horizon
  const getCurrentAge = () => 65; // Assuming current age is 65
  const getEndAge = () => {
    if (planningHorizon === 'Custom') return 98;
    return parseInt(planningHorizon);
  };
  // Generate sample data points for the chart
  const generateChartData = () => {
    const currentAge = getCurrentAge();
    const endAge = getEndAge();
    const years = endAge - currentAge;
    // Generate median line data
    const medianLine = Array.from({
      length: years + 1
    }, (_, i) => {
      const age = currentAge + i;
      // Simple linear decrease with some randomness
      const baseValue = 730000 - i * (730000 / (years + 5)) + (Math.random() * 10000 - 5000);
      return {
        age,
        value: Math.max(0, baseValue)
      };
    });
    // Generate upper bound (90th percentile)
    const upperBound = medianLine.map(point => ({
      age: point.age,
      value: point.value * (1 + (0.2 + Math.random() * 0.1))
    }));
    // Generate lower bound (10th percentile)
    const lowerBound = medianLine.map(point => ({
      age: point.age,
      value: point.value * (1 - (0.2 + Math.random() * 0.3))
    }));
    return {
      medianLine,
      upperBound,
      lowerBound
    };
  };
  const chartData = generateChartData();
  // Calculate the estimated depletion age (when median line hits zero)
  const getDepletionAge = () => {
    const zeroPoint = chartData.medianLine.findIndex(point => point.value <= 0);
    if (zeroPoint === -1) return 'beyond ' + getEndAge();
    return getCurrentAge() + zeroPoint;
  };
  // Calculate recommended adjustment if success rate is low
  const getRecommendedAdjustment = () => {
    if (successRate >= 80) return null;
    // Simple calculation for demonstration
    const reductionAmount = Math.round((80 - successRate) * 10);
    const newExpenses = Math.max(monthlyExpenses - reductionAmount, 2000);
    return {
      reduction: reductionAmount,
      newExpenses: newExpenses,
      newSuccessRate: Math.min(successRate + reductionAmount / 10 * 2, 95)
    };
  };
  const adjustment = getRecommendedAdjustment();
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-lg font-medium text-gray-900">
            Monte Carlo Simulation
          </h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600" onClick={() => setShowInfoModal(true)} aria-label="More information about Monte Carlo simulation">
          <InfoIcon size={16} />
        </button>
      </div>
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center mb-6">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <div className={`text-4xl font-bold ${statusClass}`}>
                {successRate}%
              </div>
              <div className="ml-3 text-gray-600">probability of success</div>
            </div>
            <div className={`flex items-center ${bgClass} px-3 py-2 rounded-lg`}>
              {icon}
              <span className="font-medium">{message}</span>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Key Insights:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-2">•</span>
                  <span>
                    Estimated funds depletion age:{' '}
                    <strong>{getDepletionAge()}</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-2">•</span>
                  <span>
                    Monthly income needed:{' '}
                    <strong>${monthlyExpenses.toLocaleString()}</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-bold mr-2">•</span>
                  <span>
                    Planning horizon: <strong>Age {getEndAge()}</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Chart Area */}
        <div className="h-64 relative mb-6" aria-hidden="true">
          {/* Chart background grid */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
            {Array.from({
            length: 24
          }).map((_, i) => <div key={i} className="border-t border-l border-gray-100"></div>)}
          </div>
          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
            <span>Age {getCurrentAge()}</span>
            <span>
              Age{' '}
              {getCurrentAge() + Math.floor((getEndAge() - getCurrentAge()) / 4)}
            </span>
            <span>
              Age{' '}
              {getCurrentAge() + Math.floor((getEndAge() - getCurrentAge()) / 2)}
            </span>
            <span>
              Age{' '}
              {getCurrentAge() + Math.floor(3 * (getEndAge() - getCurrentAge()) / 4)}
            </span>
            <span>Age {getEndAge()}</span>
          </div>
          {/* Y-axis labels */}
          <div className="absolute top-0 left-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-4">
            <span>$800k</span>
            <span>$600k</span>
            <span>$400k</span>
            <span>$200k</span>
            <span>$0</span>
          </div>
          {/* Confidence cone (shaded area) */}
          <div className="absolute inset-0 mt-4 mb-6 ml-10 mr-4">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* 90% confidence interval area */}
              <path d="M0,20 C20,15 40,30 60,45 L60,80 C40,75 20,85 0,70 Z" fill="rgba(79, 70, 229, 0.1)" stroke="none" />
              {/* 50% confidence interval area */}
              <path d="M0,30 C20,25 40,40 60,55 L60,70 C40,65 20,75 0,60 Z" fill="rgba(79, 70, 229, 0.2)" stroke="none" />
              {/* Median line */}
              <path d="M0,40 C20,35 40,50 60,65" fill="none" stroke="#4F46E5" strokeWidth="2" />
              {/* Zero line (if applicable) */}
              {successRate < 70 && <line x1="50" y1="100" x2="100" y2="100" stroke="#EF4444" strokeWidth="2" strokeDasharray="4" />}
            </svg>
          </div>
        </div>
        {/* Chart Legend */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <div className="flex items-center">
            <div className="w-4 h-2 bg-indigo-600 mr-2"></div>
            <span className="text-sm text-gray-600">Median Outcome</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-2 bg-indigo-200 mr-2"></div>
            <span className="text-sm text-gray-600">
              Possible Outcomes (90% Confidence)
            </span>
          </div>
          {successRate < 70 && <div className="flex items-center">
              <div className="w-4 h-0 border-t-2 border-red-500 border-dashed mr-2"></div>
              <span className="text-sm text-gray-600">Fund Depletion</span>
            </div>}
        </div>
        {/* Recommendation if success rate is low */}
        {adjustment && <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-medium text-amber-800 mb-2 flex items-center">
              <AlertTriangleIcon size={18} className="mr-2" />
              Recommended Adjustment
            </h3>
            <p className="text-amber-700 mb-3">
              Reducing your monthly expenses by ${adjustment.reduction} to $
              {adjustment.newExpenses}
              could increase your success probability to{' '}
              {adjustment.newSuccessRate}%.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Apply This Adjustment
            </button>
          </div>}
      </div>
      {/* Info Modal */}
      {showInfoModal && <InfoModal title="Monte Carlo Simulation" content={<div className="space-y-4">
              <p>
                A Monte Carlo simulation runs thousands of potential scenarios
                for your retirement, taking into account variables like market
                performance, inflation, and longevity.
              </p>
              <p>The chart shows a range of possible outcomes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Success Rate:</strong> The percentage of simulated
                  scenarios where you don't run out of money before your
                  planning horizon.
                </li>
                <li>
                  <strong>Median Outcome:</strong> The middle result from all
                  simulations - half of outcomes are better, half are worse.
                </li>
                <li>
                  <strong>Confidence Interval:</strong> The shaded area shows
                  the range of likely outcomes based on the simulations.
                </li>
              </ul>
              <p>
                A success rate of 80% or higher is generally considered good,
                while below 60% suggests your plan may need adjustment.
              </p>
              <p className="text-sm text-gray-600 italic">
                Note: These simulations are based on historical data and
                assumptions about the future. Actual results will vary, and the
                simulation should be reviewed regularly.
              </p>
            </div>} isOpen={showInfoModal} onClose={() => setShowInfoModal(false)} />}
    </div>;
};