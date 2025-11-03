import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Area, AreaChart } from 'recharts';
import { InfoIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface VolatilityChartProps {
  timeframe: string;
}
export const VolatilityChart: React.FC<VolatilityChartProps> = ({
  timeframe
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  // Sample volatility data with monthly price changes and market events
  const monthlyData = [{
    name: 'Jan',
    value: 0.5,
    volatility: 12,
    event: null
  }, {
    name: 'Feb',
    value: -1.2,
    volatility: 15,
    event: null
  }, {
    name: 'Mar',
    value: -3.5,
    volatility: 28,
    event: 'Fed Rate Hike'
  }, {
    name: 'Apr',
    value: 2.1,
    volatility: 20,
    event: null
  }, {
    name: 'May',
    value: 1.8,
    volatility: 14,
    event: null
  }, {
    name: 'Jun',
    value: -0.7,
    volatility: 16,
    event: null
  }, {
    name: 'Jul',
    value: 3.2,
    volatility: 13,
    event: 'Strong Earnings'
  }, {
    name: 'Aug',
    value: -1.5,
    volatility: 18,
    event: null
  }, {
    name: 'Sep',
    value: -0.3,
    volatility: 22,
    event: 'Inflation Report'
  }];
  // Sample quarterly data
  const quarterlyData = [{
    name: 'Q1',
    value: -4.2,
    volatility: 22,
    event: 'Market Correction'
  }, {
    name: 'Q2',
    value: 3.2,
    volatility: 16,
    event: null
  }, {
    name: 'Q3',
    value: 1.4,
    volatility: 18,
    event: null
  }];
  // Sample yearly data
  const yearlyData = [{
    name: '2021',
    value: 12.5,
    volatility: 14,
    event: null
  }, {
    name: '2022',
    value: -8.3,
    volatility: 22,
    event: 'Bear Market'
  }, {
    name: '2023',
    value: 6.2,
    volatility: 17,
    event: null
  }];
  // Choose data based on timeframe
  const getChartData = () => {
    switch (timeframe) {
      case '3M':
        return quarterlyData;
      case '1Y':
      case '3Y':
        return yearlyData;
      default:
        return monthlyData;
    }
  };
  const chartData = getChartData();
  // Calculate impact metrics
  const calculateImpact = () => {
    const totalChange = chartData.reduce((sum, item) => sum + item.value, 0);
    const avgVolatility = chartData.reduce((sum, item) => sum + item.volatility, 0) / chartData.length;
    const maxDrawdown = Math.min(...chartData.map(item => item.value));
    const recoveryPeriods = chartData.filter(item => item.value < 0).length;
    return {
      totalChange: totalChange.toFixed(1),
      avgVolatility: avgVolatility.toFixed(1),
      maxDrawdown: maxDrawdown.toFixed(1),
      recoveryPeriods
    };
  };
  const impact = calculateImpact();
  // Portfolio risk profile
  const riskProfile = {
    category: 'Moderate',
    description: 'Your portfolio is designed to balance growth with stability, targeting moderate volatility.',
    recommendation: 'Your current allocation is appropriate for market conditions. No changes needed.'
  };
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-purple-50 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
              <path d="m2 12 6-6v12l6-6v12l6-6"></path>
            </svg>
          </div>
          <h2 className="text-lg font-medium text-gray-900">
            Market Volatility Impact
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
          {/* Impact metrics */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-xs text-gray-500 mb-1">Net Change</div>
              <div className={`text-lg font-bold ${Number(impact.totalChange) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {Number(impact.totalChange) >= 0 ? '+' : ''}
                {impact.totalChange}%
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-xs text-gray-500 mb-1">Avg Volatility</div>
              <div className="text-lg font-bold text-gray-900">
                {impact.avgVolatility}%
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-xs text-gray-500 mb-1">Max Drawdown</div>
              <div className="text-lg font-bold text-red-600">
                {impact.maxDrawdown}%
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-xs text-gray-500 mb-1">Recovery Periods</div>
              <div className="text-lg font-bold text-gray-900">
                {impact.recoveryPeriods}
              </div>
            </div>
          </div>
          {/* Volatility Chart */}
          <div className="h-72 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value, name) => {
              if (name === 'value') return [`${value}%`, 'Return'];
              if (name === 'volatility') return [`${value}%`, 'Volatility'];
              return [value, name];
            }} labelFormatter={label => {
              const item = chartData.find(d => d.name === label);
              return `${label}${item?.event ? ` - ${item.event}` : ''}`;
            }} />
                <Legend />
                <ReferenceLine y={0} stroke="#666" />
                <Area type="monotone" dataKey="value" name="Portfolio Return" stroke="#8884d8" fill="url(#colorValue)" activeDot={{
              r: 8
            }} />
                <Line type="monotone" dataKey="volatility" name="Market Volatility" stroke="#ff7300" strokeWidth={2} />
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* Risk Profile */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-medium text-purple-800 mb-2">
              Your Risk Profile: {riskProfile.category}
            </h3>
            <p className="text-purple-700 mb-3">{riskProfile.description}</p>
            <div className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 mr-2">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-purple-800 font-medium">
                {riskProfile.recommendation}
              </span>
            </div>
          </div>
          {/* Market Events */}
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Significant Market Events
            </h3>
            <div className="space-y-2">
              {chartData.filter(item => item.event).map((item, index) => <div key={index} className="flex items-center bg-gray-50 p-2 rounded">
                    <div className="w-16 text-xs font-medium text-gray-500">
                      {item.name}
                    </div>
                    <div className="flex-1 px-2">{item.event}</div>
                    <div className={`text-sm font-medium ${item.value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.value >= 0 ? '+' : ''}
                      {item.value}%
                    </div>
                  </div>)}
            </div>
          </div>
        </div>}
    </div>;
};