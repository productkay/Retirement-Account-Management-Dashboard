import React, { useState } from 'react';
import { InfoIcon, ChevronDownIcon, ChevronUpIcon, AlertTriangleIcon, ArrowRightIcon, RefreshCwIcon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
interface RebalancingRecommendationsProps {
  viewMode: 'individual' | 'household';
}
export const RebalancingRecommendations: React.FC<RebalancingRecommendationsProps> = ({
  viewMode
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  // Sample asset allocation data
  const currentAllocation = [{
    category: 'Equities',
    target: 53,
    current: 57,
    variance: 4,
    action: 'Reduce'
  }, {
    category: 'Bonds',
    target: 28,
    current: 25,
    variance: -3,
    action: 'Increase'
  }, {
    category: 'GICs',
    target: 14,
    current: 14,
    variance: 0,
    action: 'Maintain'
  }, {
    category: 'Cash',
    target: 5,
    current: 4,
    variance: -1,
    action: 'Increase'
  }];
  // Sample specific recommendations
  const recommendations = [{
    type: 'Reduce',
    asset: 'VCN (Vanguard FTSE Canada All Cap)',
    amount: 15000,
    reason: 'Canadian equities are overweight by 3.2%'
  }, {
    type: 'Increase',
    asset: 'ZAG (BMO Aggregate Bond Index)',
    amount: 12000,
    reason: 'Fixed income is underweight by 3%'
  }, {
    type: 'Increase',
    asset: 'Cash',
    amount: 3000,
    reason: 'Cash reserve below target'
  }];
  // Calculate rebalancing status
  const needsRebalancing = currentAllocation.some(item => Math.abs(item.variance) > 2);
  const lastRebalanced = 'June 15, 2023';
  const daysUntilReview = 35;
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
      <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-green-50 mr-3">
            <RefreshCwIcon size={18} className="text-green-600" />
          </div>
          <h2 className="text-lg font-medium text-gray-900">
            Rebalancing Recommendations
          </h2>
        </div>
        <div className="flex items-center">
          <button className="text-gray-400 hover:text-gray-600 mr-2" aria-label="More information">
            <InfoIcon size={16} />
          </button>
          {isExpanded ? <ChevronUpIcon size={20} className="text-gray-500" /> : <ChevronDownIcon size={20} className="text-gray-500" />}
        </div>
      </div>
      {isExpanded && <div className="p-6">
          {/* Rebalancing Status */}
          <div className={`mb-6 p-4 rounded-lg flex items-start ${needsRebalancing ? 'bg-amber-50 border border-amber-200' : 'bg-green-50 border border-green-200'}`}>
            {needsRebalancing ? <>
                <AlertTriangleIcon size={20} className="text-amber-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-amber-800 mb-1">
                    Rebalancing Recommended
                  </h3>
                  <p className="text-amber-700">
                    Your portfolio has drifted from its target allocation.
                    Consider rebalancing to maintain your risk profile.
                  </p>
                </div>
              </> : <>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-3 mt-0.5">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <div>
                  <h3 className="font-medium text-green-800 mb-1">
                    Portfolio In Balance
                  </h3>
                  <p className="text-green-700">
                    Your portfolio is currently aligned with your target
                    allocation. No rebalancing needed at this time.
                  </p>
                </div>
              </>}
          </div>
          {/* Allocation Table */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Current vs. Target Allocation
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Asset Class
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Target %
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current %
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Variance
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentAllocation.map((asset, index) => <tr key={index} className={Math.abs(asset.variance) > 2 ? 'bg-amber-50' : ''}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        {asset.category}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {asset.target}%
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {asset.current}%
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          {asset.variance > 0 ? <TrendingUpIcon size={14} className="text-red-500 mr-1" /> : asset.variance < 0 ? <TrendingDownIcon size={14} className="text-blue-500 mr-1" /> : <span className="w-3.5"></span>}
                          <span className={`text-sm font-medium ${asset.variance > 0 ? 'text-red-600' : asset.variance < 0 ? 'text-blue-600' : 'text-gray-500'}`}>
                            {asset.variance > 0 ? '+' : ''}
                            {asset.variance}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${asset.action === 'Reduce' ? 'bg-red-100 text-red-800' : asset.action === 'Increase' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                          {asset.action}
                        </span>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
          {/* Specific Recommendations */}
          {needsRebalancing && <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Recommended Actions
              </h3>
              <div className="space-y-3">
                {recommendations.map((rec, index) => <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-start">
                    <div className={`p-1.5 rounded-full mr-3 ${rec.type === 'Reduce' ? 'bg-red-100' : 'bg-blue-100'}`}>
                      {rec.type === 'Reduce' ? <TrendingDownIcon size={16} className="text-red-600" /> : <TrendingUpIcon size={16} className="text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {rec.type} {rec.asset}
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          ${(rec.amount / 1000).toFixed(1)}k
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">{rec.reason}</p>
                    </div>
                  </div>)}
              </div>
            </div>}
          {/* Rebalancing Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between mb-3">
              <div className="text-sm">
                <span className="text-gray-500">Last rebalanced:</span>
                <span className="ml-2 font-medium text-gray-900">
                  {lastRebalanced}
                </span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Next review:</span>
                <span className="ml-2 font-medium text-gray-900">
                  {daysUntilReview} days
                </span>
              </div>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-lg font-medium flex items-center justify-center mt-2">
              <ArrowRightIcon size={16} className="mr-2" />
              Review Rebalancing Plan
            </button>
          </div>
        </div>}
    </div>;
};