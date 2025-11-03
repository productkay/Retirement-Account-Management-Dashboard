import React, { useState } from 'react';
import { InfoIcon, ChevronDownIcon, ChevronUpIcon, AlertTriangleIcon, CheckCircleIcon, ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
interface DistributionHistoryProps {
  viewMode: 'individual' | 'household';
}
export const DistributionHistory: React.FC<DistributionHistoryProps> = ({
  viewMode
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  // Sample distribution data
  const distributions = [{
    date: 'Sep 15, 2023',
    account: 'RRIF',
    amount: 2450,
    taxWithheld: 490,
    taxRate: 20,
    owner: 'Margaret',
    status: 'Completed',
    source: 'Regular Withdrawal'
  }, {
    date: 'Aug 15, 2023',
    account: 'RRIF',
    amount: 2450,
    taxWithheld: 490,
    taxRate: 20,
    owner: 'Margaret',
    status: 'Completed',
    source: 'Regular Withdrawal'
  }, {
    date: 'Aug 28, 2023',
    account: 'LIF',
    amount: 650,
    taxWithheld: 130,
    taxRate: 20,
    owner: 'John',
    status: 'Completed',
    source: 'Regular Withdrawal'
  }, {
    date: 'Jul 15, 2023',
    account: 'RRIF',
    amount: 2450,
    taxWithheld: 490,
    taxRate: 20,
    owner: 'Margaret',
    status: 'Completed',
    source: 'Regular Withdrawal'
  }, {
    date: 'Jul 28, 2023',
    account: 'LIF',
    amount: 650,
    taxWithheld: 130,
    taxRate: 20,
    owner: 'John',
    status: 'Completed',
    source: 'Regular Withdrawal'
  }, {
    date: 'Jun 15, 2023',
    account: 'RRIF',
    amount: 3500,
    taxWithheld: 875,
    taxRate: 25,
    owner: 'Margaret',
    status: 'Completed',
    source: 'Extra Withdrawal'
  }];
  // Filter distributions based on viewMode
  const filteredDistributions = viewMode === 'individual' ? distributions.filter(dist => dist.owner === 'Margaret') : distributions;
  // Calculate tax summary
  const calculateTaxSummary = (distributions: typeof filteredDistributions) => {
    const total = distributions.reduce((sum, dist) => sum + dist.amount, 0);
    const totalTax = distributions.reduce((sum, dist) => sum + dist.taxWithheld, 0);
    const averageTaxRate = Math.round(totalTax / total * 100);
    return {
      total,
      totalTax,
      averageTaxRate
    };
  };
  const taxSummary = calculateTaxSummary(filteredDistributions);
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-amber-50 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <h2 className="text-lg font-medium text-gray-900">
            Distribution History & Tax Impact
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
          {/* Tax Summary */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">
                Total Distributions
              </div>
              <div className="text-xl font-bold text-gray-900">
                {formatCurrency(taxSummary.total)}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">
                Total Tax Withheld
              </div>
              <div className="text-xl font-bold text-gray-900">
                {formatCurrency(taxSummary.totalTax)}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Average Tax Rate</div>
              <div className="text-xl font-bold text-gray-900">
                {taxSummary.averageTaxRate}%
              </div>
            </div>
          </div>
          {/* Tax Alert */}
          <div className="mb-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="flex items-start">
              <AlertTriangleIcon size={20} className="text-amber-600 mr-2 mt-0.5" />
              <div>
                <h3 className="font-medium text-amber-800 mb-1">
                  Tax Planning Opportunity
                </h3>
                <p className="text-amber-700">
                  Your June extra withdrawal of {formatCurrency(3500)} was taxed
                  at a higher rate (25%). Consider spreading larger withdrawals
                  across multiple months to potentially stay in a lower tax
                  bracket.
                </p>
              </div>
            </div>
          </div>
          {/* Distribution Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  {viewMode === 'household' && <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Owner
                    </th>}
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Account
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Source
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tax Withheld
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tax Rate
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDistributions.map((distribution, index) => <tr key={index} className={distribution.source === 'Extra Withdrawal' ? 'bg-amber-50' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {distribution.date}
                    </td>
                    {viewMode === 'household' && <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2 ${distribution.owner === 'Margaret' ? 'bg-indigo-100 text-indigo-600' : 'bg-blue-100 text-blue-600'}`}>
                            {distribution.owner.charAt(0)}
                          </div>
                          <span className="text-sm text-gray-900">
                            {distribution.owner}
                          </span>
                        </div>
                      </td>}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {distribution.account}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${distribution.source === 'Regular Withdrawal' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                        {distribution.source}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatCurrency(distribution.amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(distribution.taxWithheld)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${distribution.taxRate > 20 ? 'text-red-600' : 'text-gray-900'}`}>
                          {distribution.taxRate}%
                        </span>
                        {distribution.taxRate > 20 && <ArrowUpIcon size={14} className="ml-1 text-red-600" />}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="flex items-center text-sm text-green-600">
                        <CheckCircleIcon size={14} className="mr-1" />
                        {distribution.status}
                      </span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          {/* Tax Efficiency Tips */}
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">
              Tax Efficiency Tips
            </h3>
            <ul className="text-blue-700 space-y-2">
              <li className="flex items-start">
                <CheckCircleIcon size={16} className="text-blue-600 mr-2 mt-1" />
                <span>
                  Consider tax-free TFSA withdrawals before taxable RRIF
                  withdrawals when possible.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon size={16} className="text-blue-600 mr-2 mt-1" />
                <span>
                  Spread large withdrawals across tax years to potentially
                  reduce your marginal tax rate.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon size={16} className="text-blue-600 mr-2 mt-1" />
                <span>
                  Coordinate withdrawals with your spouse to optimize household
                  tax efficiency.
                </span>
              </li>
            </ul>
          </div>
        </div>}
    </div>;
};