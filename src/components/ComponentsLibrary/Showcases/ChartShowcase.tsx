import React, { Component } from 'react';
import { ComponentShowcase, ComponentExample, PropsTable } from '../Layout';
import { PerformanceChart } from '../../UI/PerformanceChart';
import { DonutChart } from '../../UI/DonutChart';
export const ChartShowcase = () => {
  // Sample performance data for the charts
  const performanceData = {
    timePeriods: ['15D', '1M', '3M', '6M', '1Y', 'Since inception'],
    selectedPeriod: '6M',
    data: {
      '6M': {
        values: [{
          date: 'Mar 15',
          value: 760000
        }, {
          date: 'Apr 15',
          value: 775000
        }, {
          date: 'May 15',
          value: 790000
        }, {
          date: 'Jun 15',
          value: 805000
        }, {
          date: 'Jul 15',
          value: 820000
        }, {
          date: 'Aug 15',
          value: 835000
        }, {
          date: 'Sep 15',
          value: 847500
        }],
        change: 87500,
        percentChange: 11.51
      }
    }
  };
  // Sample asset allocation data
  const assetAllocation = [{
    category: 'Equities',
    percentage: 53,
    color: '#4F46E5'
  }, {
    category: 'Bonds',
    percentage: 28,
    color: '#10B981'
  }, {
    category: 'GICs',
    percentage: 14,
    color: '#F59E0B'
  }, {
    category: 'Cash',
    percentage: 5,
    color: '#6B7280'
  }];
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Charts & Visualizations
      </h1>
      <p className="text-gray-600 mb-8">
        Data visualization components used to display financial information,
        performance metrics, and portfolio analysis.
      </p>
      <ComponentShowcase title="Performance Charts" description="Charts that visualize portfolio performance over time.">
        <ComponentExample title="Line Chart" description="Shows portfolio value changes over time.">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <PerformanceChart portfolioBalance={847500} performanceData={performanceData} onSelectTimePeriod={() => {}} showOriginalCurrency={false} />
          </div>
        </ComponentExample>
        <ComponentExample title="Plan vs. Actual Chart" description="Compares planned performance against actual results.">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-6">
                <button className="px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700">
                  Total Return (%)
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Income
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Withdrawals
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Planned</div>
                  <div className="text-xl font-bold text-gray-900">5.5%</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Actual</div>
                  <div className="text-xl font-bold text-gray-900">5.2%</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Variance</div>
                  <div className="text-xl font-bold text-red-600">-0.3%</div>
                </div>
              </div>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">
                  Plan vs. Actual Chart Visualization
                </p>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Allocation Charts" description="Charts that show how assets are distributed across different categories.">
        <ComponentExample title="Donut Chart" description="Shows asset allocation as a percentage of the total portfolio.">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col md:flex-row">
              <div className="flex justify-center mb-4 md:mb-0 md:w-1/3">
                <div className="w-36 h-36">
                  <DonutChart data={assetAllocation} />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-6">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                  {assetAllocation.map((item, index) => <div key={index} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{
                    backgroundColor: item.color
                  }} aria-hidden="true"></div>
                      <span className="text-base text-gray-700">
                        {item.category} ({item.percentage}%)
                      </span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Progress Indicators" description="Visual indicators of progress towards goals.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                RRIF Withdrawals
              </h3>
              <div className="mb-2">
                <div className="text-4xl font-bold text-gray-900">$29,400</div>
                <div className="text-gray-600 mt-1">
                  You've withdrawn 92% of your required minimum
                </div>
              </div>
              <div className="my-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                  width: '92%'
                }}></div>
                </div>
                <div className="flex justify-between mt-2 text-base">
                  <span className="font-medium text-green-700">
                    You're making good progress
                  </span>
                  <span>$2,600 remaining</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Goal Progress
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Monthly Income</span>
                    <span className="font-medium text-gray-900">98.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{
                    width: '98.8%'
                  }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Emergency Fund</span>
                    <span className="font-medium text-gray-900">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{
                    width: '100%'
                  }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Healthcare Savings</span>
                    <span className="font-medium text-gray-900">68.6%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-amber-500 h-2.5 rounded-full" style={{
                    width: '68.6%'
                  }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Market Visualizations" description="Charts that show market data and volatility.">
        <ComponentExample title="Volatility Chart" description="Shows market volatility impact on portfolio.">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">Net Change</div>
                <div className="text-lg font-bold text-green-600">+1.4%</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">Avg Volatility</div>
                <div className="text-lg font-bold text-gray-900">18.0%</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">Max Drawdown</div>
                <div className="text-lg font-bold text-red-600">-3.5%</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">
                  Recovery Periods
                </div>
                <div className="text-lg font-bold text-gray-900">3</div>
              </div>
            </div>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center mb-6">
              <p className="text-gray-500">Volatility Chart Visualization</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-medium text-purple-800 mb-2">
                Your Risk Profile: Moderate
              </h3>
              <p className="text-purple-700 mb-3">
                Your portfolio is designed to balance growth with stability,
                targeting moderate volatility.
              </p>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <PropsTable props={[{
      name: 'data',
      type: 'Array<{ [key: string]: any }>',
      description: 'The data to be visualized in the chart',
      required: true
    }, {
      name: 'width',
      type: 'number | string',
      default: '100%',
      description: 'Width of the chart'
    }, {
      name: 'height',
      type: 'number | string',
      default: '300',
      description: 'Height of the chart'
    }, {
      name: 'colors',
      type: 'string[]',
      description: 'Array of colors to use for the chart elements'
    }, {
      name: 'margin',
      type: '{ top: number, right: number, bottom: number, left: number }',
      default: '{ top: 20, right: 30, bottom: 30, left: 40 }',
      description: 'Margins around the chart'
    }, {
      name: 'xAxis',
      type: 'boolean',
      default: 'true',
      description: 'Whether to show the X axis'
    }, {
      name: 'yAxis',
      type: 'boolean',
      default: 'true',
      description: 'Whether to show the Y axis'
    }, {
      name: 'legend',
      type: 'boolean',
      default: 'false',
      description: 'Whether to show the legend'
    }, {
      name: 'tooltip',
      type: 'boolean',
      default: 'true',
      description: 'Whether to show tooltips on hover'
    }, {
      name: 'grid',
      type: 'boolean',
      default: 'true',
      description: 'Whether to show grid lines'
    }]} />
    </div>;
};