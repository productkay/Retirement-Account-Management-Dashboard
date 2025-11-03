import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from 'recharts';
import { InfoIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
interface PlanVsActualChartProps {
  timeframe: string;
  performanceData: {
    planned: {
      totalReturn: number;
      income: number;
      withdrawals: number;
      taxBurden: number;
    };
    actual: {
      totalReturn: number;
      income: number;
      withdrawals: number;
      taxBurden: number;
    };
    variance: {
      totalReturn: number;
      income: number;
      withdrawals: number;
      taxBurden: number;
    };
  };
}
export const PlanVsActualChart: React.FC<PlanVsActualChartProps> = ({
  timeframe,
  performanceData
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeMetric, setActiveMetric] = useState('totalReturn'); // totalReturn, income, withdrawals, taxBurden
  // Sample monthly data for the chart
  const monthlyData = [{
    name: 'Jan',
    planned: 4.2,
    actual: 4.5
  }, {
    name: 'Feb',
    planned: 4.3,
    actual: 4.1
  }, {
    name: 'Mar',
    planned: 4.5,
    actual: 4.6
  }, {
    name: 'Apr',
    planned: 4.7,
    actual: 4.4
  }, {
    name: 'May',
    planned: 4.8,
    actual: 5.0
  }, {
    name: 'Jun',
    planned: 5.0,
    actual: 4.8
  }, {
    name: 'Jul',
    planned: 5.2,
    actual: 5.3
  }, {
    name: 'Aug',
    planned: 5.3,
    actual: 5.1
  }, {
    name: 'Sep',
    planned: 5.5,
    actual: 5.2
  }];
  // Sample quarterly data
  const quarterlyData = [{
    name: 'Q1',
    planned: 4.3,
    actual: 4.4
  }, {
    name: 'Q2',
    planned: 4.8,
    actual: 4.7
  }, {
    name: 'Q3',
    planned: 5.3,
    actual: 5.2
  }];
  // Sample yearly data
  const yearlyData = [{
    name: '2021',
    planned: 4.0,
    actual: 4.2
  }, {
    name: '2022',
    planned: 4.5,
    actual: 4.3
  }, {
    name: '2023',
    planned: 5.5,
    actual: 5.2
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
  // Metrics options
  const metrics = [{
    id: 'totalReturn',
    label: 'Total Return (%)',
    format: (value: number) => `${value}%`
  }, {
    id: 'income',
    label: 'Income',
    format: (value: number) => formatCurrency(value)
  }, {
    id: 'withdrawals',
    label: 'Withdrawals',
    format: (value: number) => formatCurrency(value)
  }, {
    id: 'taxBurden',
    label: 'Tax Burden',
    format: (value: number) => formatCurrency(value)
  }];
  // Get current metric
  const currentMetric = metrics.find(m => m.id === activeMetric) || metrics[0];
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-indigo-50 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
              <path d="M3 3v18h18"></path>
              <path d="m19 9-5 5-4-4-3 3"></path>
            </svg>
          </div>
          <h2 className="text-lg font-medium text-gray-900">
            Plan vs. Actual Performance
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
          {/* Metric selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {metrics.map(metric => <button key={metric.id} onClick={() => setActiveMetric(metric.id)} className={`px-4 py-2 rounded-full text-sm font-medium ${activeMetric === metric.id ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {metric.label}
              </button>)}
          </div>
          {/* Summary metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Planned</div>
              <div className="text-xl font-bold text-gray-900">
                {currentMetric.format(performanceData.planned[activeMetric as keyof typeof performanceData.planned])}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Actual</div>
              <div className="text-xl font-bold text-gray-900">
                {currentMetric.format(performanceData.actual[activeMetric as keyof typeof performanceData.actual])}
              </div>
            </div>
            <div className={`p-4 rounded-lg ${performanceData.variance[activeMetric as keyof typeof performanceData.variance] >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="text-sm text-gray-500 mb-1">Variance</div>
              <div className={`text-xl font-bold ${performanceData.variance[activeMetric as keyof typeof performanceData.variance] >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {performanceData.variance[activeMetric as keyof typeof performanceData.variance] >= 0 ? '+' : ''}
                {currentMetric.format(performanceData.variance[activeMetric as keyof typeof performanceData.variance])}
              </div>
            </div>
          </div>
          {/* Chart */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData} margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis domain={['dataMin - 0.5', 'dataMax + 0.5']} tickFormatter={value => activeMetric === 'totalReturn' ? `${value}%` : `$${value}k`} />
                <Tooltip formatter={value => activeMetric === 'totalReturn' ? [`${value}%`, 'Value'] : [`$${value}k`, 'Value']} />
                <Legend />
                <Bar dataKey="planned" name="Planned" fill="#4F46E5" barSize={20} />
                <Bar dataKey="actual" name="Actual" fill="#10B981" barSize={20} />
                <Line type="monotone" dataKey="planned" name="Planned Trend" stroke="#4F46E5" strokeWidth={2} dot={false} activeDot={false} />
                <Line type="monotone" dataKey="actual" name="Actual Trend" stroke="#10B981" strokeWidth={2} dot={false} activeDot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          {/* Insights */}
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">
              Performance Insights
            </h3>
            <p className="text-blue-700">
              {activeMetric === 'totalReturn' ? "Your portfolio's actual return is slightly below the planned target by 0.3%. This variance is within normal market fluctuation and doesn't require immediate action." : activeMetric === 'income' ? "Your income is slightly below target by $50 due to minor dividend fluctuations from your equity holdings. Overall, you're 98.8% of the way to your income goal." : activeMetric === 'withdrawals' ? 'Your withdrawals are exactly on target, maintaining your planned spending rate with no variance. This disciplined approach supports your long-term retirement plan.' : 'Your tax burden is $30 less than projected, representing a 4.3% savings. This positive variance comes from tax-efficient withdrawal sequencing.'}
            </p>
          </div>
        </div>}
    </div>;
};