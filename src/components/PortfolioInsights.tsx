import React from 'react';
import { Card } from './UI/Card';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PieChartIcon, TrendingUpIcon, BarChart2Icon, DollarSignIcon, CalendarIcon, ClockIcon, CalculatorIcon } from 'lucide-react';
interface PortfolioInsightsProps {
  viewMode: 'individual' | 'household';
}
export const PortfolioInsights: React.FC<PortfolioInsightsProps> = ({
  viewMode
}) => {
  return <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Portfolio Insights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <div className="p-5">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-indigo-50 mr-3">
                <PieChartIcon size={20} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Asset Allocation
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Review your current asset allocation and see if it aligns with
              your retirement goals and risk tolerance.
            </p>
            <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              View Asset Allocation
              <ArrowRightIcon size={16} className="ml-1" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="p-5">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-green-50 mr-3">
                <TrendingUpIcon size={20} className="text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Performance Analysis
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Dive deeper into your portfolio's performance across different
              time periods and market conditions.
            </p>
            <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              Analyze Performance
              <ArrowRightIcon size={16} className="ml-1" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="p-5">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-amber-50 mr-3">
                <BarChart2Icon size={20} className="text-amber-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Fee Analysis
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Understand the impact of fees on your long-term returns and
              identify potential cost savings opportunities.
            </p>
            <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              Review Fees
              <ArrowRightIcon size={16} className="ml-1" />
            </button>
          </div>
        </Card>
      </div>
      {/* Advanced Planning Tools Section */}
      <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
        Tier 2: Advanced Planning Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Retirement Income Builder Card */}
        <Card>
          <div className="p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              NEW
            </div>
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-blue-50 mr-3">
                <CalculatorIcon size={20} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Retirement Income Builder
              </h3>
            </div>
            <div className="mb-4">
              <div className="text-red-600 text-sm font-medium mb-2">
                42% of retirees lack a formal withdrawal strategy
              </div>
              <p className="text-gray-600">
                Create a personalized withdrawal strategy with our advanced
                planning tool. Optimize your retirement income and minimize tax
                impact.
              </p>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <DollarSignIcon size={14} className="text-gray-400 mr-2" />
                Monthly expense planning
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CalendarIcon size={14} className="text-gray-400 mr-2" />
                Life expectancy modeling
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <ClockIcon size={14} className="text-gray-400 mr-2" />
                Monte Carlo simulations
              </div>
            </div>
            <Link to="/income-builder" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center">
              Build Your Income Plan
              <ArrowRightIcon size={16} className="ml-2" />
            </Link>
          </div>
        </Card>
        {/* Placeholder for future advanced tools */}
        <Card>
          <div className="p-5 bg-gray-50">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-gray-200 mr-3">
                <PieChartIcon size={20} className="text-gray-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-700">
                Estate Planning Tool
              </h3>
            </div>
            <p className="text-gray-500 mb-4">
              Coming soon - Comprehensive estate planning and wealth transfer
              strategies.
            </p>
            <button className="text-gray-400 cursor-not-allowed font-medium flex items-center">
              Coming Soon
            </button>
          </div>
        </Card>
        <Card>
          <div className="p-5 bg-gray-50">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-gray-200 mr-3">
                <BarChart2Icon size={20} className="text-gray-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-700">
                Tax Optimization Suite
              </h3>
            </div>
            <p className="text-gray-500 mb-4">
              Coming soon - Advanced tax planning strategies to minimize your
              tax burden in retirement.
            </p>
            <button className="text-gray-400 cursor-not-allowed font-medium flex items-center">
              Coming Soon
            </button>
          </div>
        </Card>
      </div>
    </div>;
};