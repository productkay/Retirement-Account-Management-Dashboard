import React, { useState } from 'react';
import { Header } from '../components/Header';
import { PlanVsActualChart } from '../components/PerformanceMonitoring/PlanVsActualChart';
import { DistributionHistory } from '../components/PerformanceMonitoring/DistributionHistory';
import { VolatilityChart } from '../components/PerformanceMonitoring/VolatilityChart';
import { RebalancingRecommendations } from '../components/PerformanceMonitoring/RebalancingRecommendations';
import { GoalProgressionIndicators } from '../components/PerformanceMonitoring/GoalProgressionIndicators';
import { TalkToHumanButton } from '../components/UI/TalkToHumanButton';
import { AccessibilityMenu } from '../components/UI/AccessibilityMenu';
import { LastSyncIndicator } from '../components/UI/LastSyncIndicator';
import { CalendarIcon, DownloadIcon, PrinterIcon, FilterIcon, ChevronDownIcon, RefreshCwIcon } from 'lucide-react';
export function PerformanceMonitoring() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M');
  const [viewMode, setViewMode] = useState<'individual' | 'household'>('individual');
  const [showOriginalCurrency, setShowOriginalCurrency] = useState(false);
  // Get current date and time for last sync
  const now = new Date();
  const lastSyncTime = `${now.toLocaleDateString()} ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')} PM`;
  // Sample performance data
  const performanceData = {
    planned: {
      totalReturn: 5.5,
      income: 4200,
      withdrawals: 3600,
      taxBurden: 720
    },
    actual: {
      totalReturn: 5.2,
      income: 4150,
      withdrawals: 3600,
      taxBurden: 690
    },
    variance: {
      totalReturn: -0.3,
      income: -50,
      withdrawals: 0,
      taxBurden: -30
    }
  };
  // Goal progress data
  const goalProgressData = [{
    name: 'Monthly Income',
    target: 4200,
    current: 4150,
    percentComplete: 98.8,
    status: 'On Track'
  }, {
    name: 'Emergency Fund',
    target: 25000,
    current: 25000,
    percentComplete: 100,
    status: 'Achieved'
  }, {
    name: 'Travel Budget',
    target: 12000,
    current: 8500,
    percentComplete: 70.8,
    status: 'On Track'
  }, {
    name: 'Healthcare Savings',
    target: 35000,
    current: 24000,
    percentComplete: 68.6,
    status: 'Needs Attention'
  }];
  // Time period options
  const timePeriods = [{
    id: '1M',
    label: '1 Month'
  }, {
    id: '3M',
    label: '3 Months'
  }, {
    id: '6M',
    label: '6 Months'
  }, {
    id: 'YTD',
    label: 'Year to Date'
  }, {
    id: '1Y',
    label: '1 Year'
  }, {
    id: '3Y',
    label: '3 Years'
  }];
  return <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header portfolioBalance={847500} portfolioBalanceUSD={66000} fxRate={1.32} isBalanceHidden={false} showOriginalCurrency={showOriginalCurrency} onToggleBalanceVisibility={() => {}} onToggleCurrencyDisplay={() => setShowOriginalCurrency(!showOriginalCurrency)} accounts={[]} selectedAccount={'all'} onSelectAccount={() => {}} selectedTimeframe={selectedTimeframe} onSelectTimeframe={setSelectedTimeframe} viewMode={viewMode} setViewMode={setViewMode} margaretPortfolioBalance={730000} johnPortfolioBalance={117500} activeTab="performance-monitoring" />
      <main className="container mx-auto px-4 py-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Performance Monitoring Dashboard
            </h1>
            <p className="text-gray-600">
              Track your portfolio performance against your retirement goals
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <div className="relative">
              <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50">
                <CalendarIcon size={16} className="mr-2" />
                <span>Sep 2023</span>
                <ChevronDownIcon size={16} className="ml-2" />
              </button>
            </div>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50">
              <FilterIcon size={16} className="mr-2" />
              <span>Filters</span>
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50">
              <DownloadIcon size={16} className="mr-2" />
              <span>Export</span>
            </button>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50">
              <PrinterIcon size={16} className="mr-2" />
              <span>Print</span>
            </button>
            <button className="flex items-center px-4 py-2 bg-indigo-600 rounded-lg text-white text-sm font-medium hover:bg-indigo-700">
              <RefreshCwIcon size={16} className="mr-2" />
              <span>Refresh Data</span>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <LastSyncIndicator lastSyncTime={lastSyncTime} />
        </div>
        {/* Goal Progression Indicators */}
        <div className="mb-6">
          <GoalProgressionIndicators goalProgressData={goalProgressData} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Plan vs Actual Performance Chart - Larger area */}
          <div className="lg:col-span-2">
            {/* Time period selector moved here, above the chart */}
            <div className="flex justify-end mb-4">
              <div className="flex space-x-2">
                {timePeriods.map(period => <button key={period.id} onClick={() => setSelectedTimeframe(period.id)} className={`px-4 py-2 rounded-full text-sm font-medium ${selectedTimeframe === period.id ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {period.label}
                  </button>)}
              </div>
            </div>
            <PlanVsActualChart timeframe={selectedTimeframe} performanceData={performanceData} />
          </div>
          {/* Rebalancing Recommendations */}
          <div className="lg:col-span-1">
            <RebalancingRecommendations viewMode={viewMode} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Distribution History */}
          <DistributionHistory viewMode={viewMode} />
          {/* Volatility Chart */}
          <VolatilityChart timeframe={selectedTimeframe} />
        </div>
      </main>
      <TalkToHumanButton />
      <AccessibilityMenu />
    </div>;
}