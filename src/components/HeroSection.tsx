import React, { useState } from 'react';
import { Card } from './UI/Card';
import { ProgressBar } from './UI/ProgressBar';
import { DonutChart } from './UI/DonutChart';
import { InfoModal } from './UI/InfoModal';
import { ArrowRightIcon, InfoIcon, CheckCircleIcon, ThumbsUpIcon, CalendarIcon, TrendingUpIcon, ClockIcon, DollarSignIcon, PieChartIcon, HelpCircleIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { ReassuranceMessage } from './UI/ReassuranceMessage';
import { PerformanceChart } from './UI/PerformanceChart';
interface HeroSectionProps {
  monthlyIncome: {
    total: number;
    sources: Array<{
      name: string;
      amount: number;
      currency: string;
      owner?: string;
    }>;
    individuals?: Array<{
      name: string;
      total: number;
      percentage: number;
    }>;
  };
  rrifData: {
    withdrawalsYTD: number;
    minimumRequired: number;
    percentComplete: number;
    owner?: string;
    individuals?: Array<{
      withdrawalsYTD: number;
      minimumRequired: number;
      percentComplete: number;
      owner: string;
    }>;
  };
  longevityProjection: {
    projectedAge: number;
    monthlySpending: number;
    assumedReturn: number;
    owner?: string;
    individuals?: Array<{
      projectedAge: number;
      monthlySpending: number;
      assumedReturn: number;
      owner: string;
    }>;
  };
  assetAllocation: Array<{
    category: string;
    percentage: number;
    color: string;
  }>;
  portfolioBalance: number;
  performanceData: {
    timePeriods: string[];
    selectedPeriod: string;
    data: {
      [key: string]: {
        values: Array<{
          date: string;
          value: number;
        }>;
        change: number;
        percentChange: number;
      };
    };
  };
  onSelectTimePeriod: (period: string) => void;
  showOriginalCurrency: boolean;
  viewMode: 'individual' | 'household';
}
export const HeroSection: React.FC<HeroSectionProps> = ({
  monthlyIncome,
  rrifData,
  longevityProjection,
  assetAllocation,
  portfolioBalance,
  performanceData,
  onSelectTimePeriod,
  showOriginalCurrency,
  viewMode
}) => {
  // State for modals
  const [activeModal, setActiveModal] = useState<string | null>(null);
  // State for expandable sections
  const [expandedSections, setExpandedSections] = useState({
    performance: true,
    income: true,
    rrif: true,
    longevity: true,
    allocation: false
  });
  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };
  // Modal content
  const modalContent = {
    income: {
      title: 'Income This Month',
      content: <div className="space-y-4">
          <p>
            This card shows your total monthly income from all sources for the
            current month.
          </p>
          <p>Your income comes from multiple sources:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-medium">CPP (Canada Pension Plan)</span>:
              Government pension based on your contributions during working
              years.
            </li>
            <li>
              <span className="font-medium">OAS (Old Age Security)</span>:
              Government pension available to most Canadians aged 65+.
            </li>
            <li>
              <span className="font-medium">
                RRIF (Registered Retirement Income Fund)
              </span>
              : Withdrawals from your registered retirement savings.
            </li>
            <li>
              <span className="font-medium">Pension</span>: Income from your
              employer's pension plan.
            </li>
          </ul>
          <p>
            All income sources are currently on track with no payment
            disruptions expected.
          </p>
        </div>
    },
    rrif: {
      title: 'RRIF Withdrawals',
      content: <div className="space-y-4">
          <p>
            This card tracks your RRIF (Registered Retirement Income Fund)
            withdrawals for the current year.
          </p>
          <p>Key information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              You've withdrawn {formatCurrency(rrifData.withdrawalsYTD)} so far
              this year.
            </li>
            <li>
              Your minimum required withdrawal is{' '}
              {formatCurrency(rrifData.minimumRequired)}.
            </li>
            <li>
              You're {rrifData.percentComplete}% of the way to meeting your
              annual requirement.
            </li>
            <li>
              You have{' '}
              {formatCurrency(rrifData.minimumRequired - rrifData.withdrawalsYTD)}{' '}
              remaining to withdraw this year.
            </li>
          </ul>
          <p>
            The government requires minimum withdrawals from your RRIF each year
            based on your age and RRIF value. Failing to withdraw the minimum
            amount can result in tax penalties.
          </p>
        </div>
    },
    longevity: {
      title: 'Life Expectancy',
      content: <div className="space-y-4">
          <p>
            This card shows how long your retirement savings are projected to
            last based on current spending, savings, and investment returns.
          </p>
          <p>
            Your retirement funds are projected to last until age{' '}
            {longevityProjection.projectedAge}, which is 6 years beyond the
            average Canadian life expectancy of 85.
          </p>
          <p>This projection is based on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Monthly spending of{' '}
              {formatCurrency(longevityProjection.monthlySpending)}
            </li>
            <li>
              Assumed annual investment return of{' '}
              {longevityProjection.assumedReturn}%
            </li>
          </ul>
          <p className="text-sm text-gray-600 italic">
            This projection is an estimate and should be reviewed regularly. It
            doesn't account for inflation, healthcare costs, or major life
            changes.
          </p>
        </div>
    },
    allocation: {
      title: 'Asset Allocation',
      content: <div className="space-y-4">
          <p>
            This card shows how your investment portfolio is divided among
            different asset classes.
          </p>
          <p>Your current allocation:</p>
          <ul className="list-disc pl-5 space-y-1">
            {assetAllocation.map(item => <li key={item.category}>
                <span className="font-medium">{item.category}</span>:{' '}
                {item.percentage}%
              </li>)}
          </ul>
          <p>
            Your portfolio is well-diversified across different asset classes,
            which helps manage risk while pursuing growth.
          </p>
          <p>
            The current allocation is appropriate for your retirement stage,
            balancing growth potential with income generation and stability.
          </p>
        </div>
    },
    performance: {
      title: 'Portfolio Performance',
      content: <div className="space-y-4">
          <p>
            This chart shows how your portfolio has performed over different
            time periods.
          </p>
          <p>You can view performance over:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-medium">15D</span>: Short-term performance
            </li>
            <li>
              <span className="font-medium">1M</span>: Monthly performance
            </li>
            <li>
              <span className="font-medium">3M</span>: Quarterly performance
            </li>
            <li>
              <span className="font-medium">6M</span>: Semi-annual performance
            </li>
            <li>
              <span className="font-medium">1Y</span>: Annual performance
            </li>
            <li>
              <span className="font-medium">Since inception</span>: Total
              performance since account opening
            </li>
          </ul>
          <p>
            Your portfolio has shown steady growth over time, which aligns with
            your retirement goals. The longer time periods demonstrate the
            benefit of staying invested through market cycles.
          </p>
        </div>
    }
  };
  // Calculate remaining amount for RRIF withdrawals
  const remainingAmount = rrifData.minimumRequired - rrifData.withdrawalsYTD;
  return <>
      {/* Portfolio Performance - Now First */}
      <div className="mb-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('performance')}>
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-indigo-50 mr-3">
                <TrendingUpIcon size={18} className="text-indigo-600" />
              </div>
              <h2 className="text-lg font-medium text-gray-900">
                Portfolio Performance
              </h2>
            </div>
            <div className="flex items-center">
              <button className="text-gray-400 hover:text-gray-600 mr-2" onClick={e => {
              e.stopPropagation();
              setActiveModal('performance');
            }} aria-label="More information about portfolio performance">
                <HelpCircleIcon size={16} />
              </button>
              {expandedSections.performance ? <ChevronUpIcon size={20} className="text-gray-500" /> : <ChevronDownIcon size={20} className="text-gray-500" />}
            </div>
          </div>
          {expandedSections.performance && <div className="p-6">
              <PerformanceChart portfolioBalance={portfolioBalance} performanceData={performanceData} onSelectTimePeriod={onSelectTimePeriod} showOriginalCurrency={showOriginalCurrency} />
            </div>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Income This Month */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('income')}>
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-indigo-50 mr-3">
                <DollarSignIcon size={18} className="text-indigo-600" />
              </div>
              <h2 className="text-lg font-medium text-gray-900">
                Income This Month
              </h2>
            </div>
            <div className="flex items-center">
              <button className="text-gray-400 hover:text-gray-600 mr-2" onClick={e => {
              e.stopPropagation();
              setActiveModal('income');
            }} aria-label="More information about monthly income">
                <HelpCircleIcon size={16} />
              </button>
              {expandedSections.income ? <ChevronUpIcon size={20} className="text-gray-500" /> : <ChevronDownIcon size={20} className="text-gray-500" />}
            </div>
          </div>
          {expandedSections.income && <div className="p-6">
              {viewMode === 'individual' ?
          // Individual View
          <>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">
                      {formatCurrency(monthlyIncome.total)}
                    </span>
                    <p className="text-green-700 mt-1">
                      Your monthly income covers all your expenses with room to
                      spare.
                    </p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {monthlyIncome.sources.map((source, index) => <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{source.name}</span>
                        <span className="font-medium">
                          {formatCurrency(source.amount, source.currency)}
                        </span>
                      </div>)}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center mb-3">
                      <CalendarIcon size={14} className="text-indigo-600 mr-2" />
                      <p className="text-sm text-gray-600">
                        Next: {formatCurrency(monthlyIncome.sources[0].amount)}{' '}
                        (CPP) on Jan 20
                      </p>
                    </div>
                    <div className="flex items-center text-green-800 text-base bg-green-50 p-3 rounded-lg">
                      <CheckCircleIcon size={16} className="mr-2 text-green-700" />
                      <span>All your income is arriving as scheduled</span>
                    </div>
                  </div>
                </> :
          // Household View
          <>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">
                      {formatCurrency(monthlyIncome.total)}
                    </span>
                    <p className="text-green-700 mt-1">
                      Your household income covers all expenses with room to
                      spare.
                    </p>
                  </div>
                  {/* Household income breakdown */}
                  {monthlyIncome.individuals && <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-base font-medium text-gray-700 mb-3">
                        Household Breakdown
                      </h3>
                      <div className="space-y-3">
                        {monthlyIncome.individuals.map((person, index) => <div key={index} className="flex items-center">
                            <div className="h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2" style={{
                    backgroundColor: person.name === 'Margaret' ? '#e0e7ff' : '#dbeafe',
                    color: person.name === 'Margaret' ? '#4f46e5' : '#2563eb'
                  }}>
                              {person.name.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-700">
                                  {person.name}
                                </span>
                                <span className="font-medium">
                                  {formatCurrency(person.total)}
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="h-2 rounded-full" style={{
                        width: `${person.percentage}%`,
                        backgroundColor: person.name === 'Margaret' ? '#4f46e5' : '#2563eb'
                      }}></div>
                              </div>
                              <div className="text-xs text-gray-500 text-right mt-1">
                                {person.percentage}% of household income
                              </div>
                            </div>
                          </div>)}
                      </div>
                    </div>}
                  {/* Income sources with owner indicators */}
                  <div className="space-y-3 mb-6">
                    {monthlyIncome.sources.map((source, index) => <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center">
                          {source.owner && <div className="h-4 w-4 rounded-full flex items-center justify-center text-xs mr-2" style={{
                    backgroundColor: source.owner === 'Margaret' ? '#e0e7ff' : '#dbeafe',
                    color: source.owner === 'Margaret' ? '#4f46e5' : '#2563eb'
                  }}>
                              {source.owner.charAt(0)}
                            </div>}
                          <span className="text-gray-600">{source.name}</span>
                        </div>
                        <span className="font-medium">
                          {formatCurrency(source.amount, source.currency)}
                        </span>
                      </div>)}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-green-800 text-base bg-green-50 p-3 rounded-lg">
                      <CheckCircleIcon size={16} className="mr-2 text-green-700" />
                      <span>All household income is arriving as scheduled</span>
                    </div>
                  </div>
                </>}
            </div>}
        </div>

        {/* RRIF Withdrawals */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('rrif')}>
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-blue-50 mr-3">
                <ArrowRightIcon size={18} className="text-blue-600" />
              </div>
              <h2 className="text-lg font-medium text-gray-900">
                {viewMode === 'individual' ? 'RRIF Withdrawals' : 'Required Withdrawals'}
              </h2>
            </div>
            <div className="flex items-center">
              <button className="text-gray-400 hover:text-gray-600 mr-2" onClick={e => {
              e.stopPropagation();
              setActiveModal('rrif');
            }} aria-label="More information about RRIF withdrawals">
                <HelpCircleIcon size={16} />
              </button>
              {expandedSections.rrif ? <ChevronUpIcon size={20} className="text-gray-500" /> : <ChevronDownIcon size={20} className="text-gray-500" />}
            </div>
          </div>
          {expandedSections.rrif && <div className="p-6">
              {viewMode === 'individual' ?
          // Individual View
          <>
                  {/* Main amount - large and prominent */}
                  <div className="mb-2">
                    <div className="text-4xl font-bold text-gray-900">
                      {formatCurrency(rrifData.withdrawalsYTD)}
                    </div>
                    <div className="text-gray-600 mt-1">
                      You've withdrawn {rrifData.percentComplete}% of your
                      required minimum
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="my-6">
                    <ProgressBar percentage={rrifData.percentComplete} label="" />
                    <div className="flex justify-between mt-2 text-base">
                      <span className="font-medium text-green-700">
                        You're making good progress
                      </span>
                      <span>{formatCurrency(remainingAmount)} remaining</span>
                    </div>
                  </div>
                  {/* Plan a Withdrawal button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center mt-6 text-base">
                    <ArrowRightIcon size={18} className="mr-2" />
                    Plan a Withdrawal
                  </button>
                </> :
          // Household View
          <>
                  {/* Household total */}
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900">
                      {formatCurrency(rrifData.withdrawalsYTD)}
                    </div>
                    <div className="text-gray-600 mt-1">
                      Your household has withdrawn {rrifData.percentComplete}%
                      of the required minimum
                    </div>
                  </div>
                  {/* Combined progress bar */}
                  <div className="mb-6">
                    <ProgressBar percentage={rrifData.percentComplete} label="" />
                    <div className="flex justify-between mt-2 text-base">
                      <span className="font-medium text-green-700">
                        You're both making good progress
                      </span>
                      <span>{formatCurrency(remainingAmount)} remaining</span>
                    </div>
                  </div>
                  {/* Individual breakdowns */}
                  {rrifData.individuals && <div className="space-y-4 mb-6">
                      {rrifData.individuals.map((person, index) => <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center mb-2">
                            <div className="h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2" style={{
                    backgroundColor: person.owner === 'Margaret' ? '#e0e7ff' : '#dbeafe',
                    color: person.owner === 'Margaret' ? '#4f46e5' : '#2563eb'
                  }}>
                              {person.owner.charAt(0)}
                            </div>
                            <span className="font-medium text-gray-700">
                              {person.owner}'s{' '}
                              {person.owner === 'Margaret' ? 'RRIF' : 'LIF'}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">
                              Withdrawn: {formatCurrency(person.withdrawalsYTD)}
                            </span>
                            <span className="text-gray-600">
                              Required: {formatCurrency(person.minimumRequired)}
                            </span>
                          </div>
                          <ProgressBar percentage={person.percentComplete} label="" color={person.owner === 'Margaret' ? 'bg-indigo-600' : 'bg-blue-600'} />
                          <div className="text-xs text-right mt-1 text-gray-500">
                            {formatCurrency(person.minimumRequired - person.withdrawalsYTD)}{' '}
                            remaining
                          </div>
                        </div>)}
                    </div>}
                  {/* Plan a Withdrawal button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center mt-4 text-base">
                    <ArrowRightIcon size={18} className="mr-2" />
                    Plan Withdrawals
                  </button>
                </>}
            </div>}
        </div>

        {/* Longevity Projection - Updated with new content */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('longevity')}>
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-green-50 mr-3">
                <ClockIcon size={18} className="text-green-600" />
              </div>
              <h2 className="text-lg font-medium text-gray-900">
                Life Expectancy
              </h2>
            </div>
            <div className="flex items-center">
              <button className="text-gray-400 hover:text-gray-600 mr-2" onClick={e => {
              e.stopPropagation();
              setActiveModal('longevity');
            }} aria-label="More information about life expectancy">
                <HelpCircleIcon size={16} />
              </button>
              {expandedSections.longevity ? <ChevronUpIcon size={20} className="text-gray-500" /> : <ChevronDownIcon size={20} className="text-gray-500" />}
            </div>
          </div>
          {expandedSections.longevity && <div className="p-6">
              {viewMode === 'individual' ?
          // Individual View
          <>
                  <div className="flex items-center justify-center mb-5">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600">
                        {longevityProjection.projectedAge}
                      </div>
                      <div className="text-base text-gray-600 mt-1">
                        Projected Age
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 mb-5">
                    <div className="flex items-center mb-2">
                      <ThumbsUpIcon size={16} className="text-blue-600 mr-2" />
                      <h3 className="text-base font-medium text-blue-800">
                        Good News About Your Future
                      </h3>
                    </div>
                    <p className="text-base text-blue-700">
                      Your savings are projected to last 6 years beyond the
                      average Canadian life expectancy. You're in excellent
                      financial shape.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Monthly spending
                        </div>
                        <div className="text-base font-medium">
                          {formatCurrency(longevityProjection.monthlySpending)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Annual return
                        </div>
                        <div className="text-base font-medium">
                          {longevityProjection.assumedReturn}%
                        </div>
                      </div>
                    </div>
                  </div>
                </> :
          // Household View
          <>
                  <div className="flex items-center justify-center mb-5">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600">
                        {longevityProjection.projectedAge}
                      </div>
                      <div className="text-base text-gray-600 mt-1">
                        Household Projected Age
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 mb-5">
                    <div className="flex items-center mb-2">
                      <ThumbsUpIcon size={16} className="text-blue-600 mr-2" />
                      <h3 className="text-base font-medium text-blue-800">
                        Good News About Your Future Together
                      </h3>
                    </div>
                    <p className="text-base text-blue-700">
                      Your household savings are projected to last well beyond
                      the average Canadian life expectancy. You're both in
                      excellent financial shape.
                    </p>
                  </div>
                  {/* Household summary */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Household spending
                        </div>
                        <div className="text-base font-medium">
                          {formatCurrency(longevityProjection.monthlySpending)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Annual return
                        </div>
                        <div className="text-base font-medium">
                          {longevityProjection.assumedReturn}%
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Individual projections */}
                  {longevityProjection.individuals && <div className="space-y-3">
                      {longevityProjection.individuals.map((person, index) => <div key={index} className="flex items-center">
                          <div className="h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2" style={{
                  backgroundColor: person.owner === 'Margaret' ? '#e0e7ff' : '#dbeafe',
                  color: person.owner === 'Margaret' ? '#4f46e5' : '#2563eb'
                }}>
                            {person.owner.charAt(0)}
                          </div>
                          <div className="flex-1 flex justify-between items-center">
                            <span className="text-gray-700">
                              {person.owner}
                            </span>
                            <div className="flex items-center">
                              <span className="text-base font-medium text-gray-900 mr-1">
                                Age {person.projectedAge}
                              </span>
                              <span className="text-xs text-gray-500">
                                (${formatCurrency(person.monthlySpending)}/mo)
                              </span>
                            </div>
                          </div>
                        </div>)}
                    </div>}
                </>}
            </div>}
        </div>
      </div>

      {/* Asset Allocation */}
      <div className="mt-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between cursor-pointer" onClick={() => toggleSection('allocation')}>
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-amber-50 mr-3">
                <PieChartIcon size={18} className="text-amber-600" />
              </div>
              <h2 className="text-lg font-medium text-gray-900">
                Asset Allocation
              </h2>
            </div>
            <div className="flex items-center">
              <button className="text-gray-400 hover:text-gray-600 mr-2" onClick={e => {
              e.stopPropagation();
              setActiveModal('allocation');
            }} aria-label="More information about asset allocation">
                <HelpCircleIcon size={16} />
              </button>
              {expandedSections.allocation ? <ChevronUpIcon size={20} className="text-gray-500" /> : <ChevronDownIcon size={20} className="text-gray-500" />}
            </div>
          </div>
          {expandedSections.allocation && <div className="p-6">
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
                  <div className="flex items-center text-green-800 text-base bg-green-50 p-3 rounded-lg">
                    <CheckCircleIcon size={16} className="mr-2 text-green-700" />
                    <span>
                      {viewMode === 'individual' ? 'Your investments are well balanced for your retirement needs' : 'Your household investments are well balanced for your retirement needs'}
                    </span>
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </div>

      {/* Info Modals */}
      {activeModal && <InfoModal title={modalContent[activeModal].title} content={modalContent[activeModal].content} isOpen={!!activeModal} onClose={() => setActiveModal(null)} />}
    </>;
};