import React, { useState, Fragment } from 'react';
import { ChevronDownIcon, ChevronUpIcon, CheckCircleIcon, PlusCircleIcon, InfoIcon, AlertTriangleIcon, XCircleIcon, TrendingUpIcon, DollarSignIcon, HelpCircleIcon, ArrowUpRightIcon, ShieldCheckIcon, TrendingDownIcon, AwardIcon, BarChart3Icon, XIcon } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { TransferOrchestrationSystem } from './UI/TransferOrchestrationSystem';
// Create a tooltip component for account type explanations
const AccountTooltip = ({
  accountType,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;
  const tooltipContent = {
    RRSP: 'Registered Retirement Savings Plan: Tax-deferred savings during working years. Contributions tax-deductible, withdrawals taxed.',
    TFSA: 'Tax-Free Savings Account: After-tax contributions, but investment growth and withdrawals are tax-free. Great for flexibility.',
    RRIF: 'Registered Retirement Income Fund: Mandatory withdrawals starting at age 71, converts RRSP into income stream. Compliance critical (minimum withdrawal rules).',
    'Non-Registered': 'Regular taxable account, no contribution limits, but subject to capital gains, dividends, and interest taxes.',
    LIF: 'Life Income Fund: Similar to RRIF but funded with locked-in pension funds. Has both minimum and maximum annual withdrawal limits.',
    SRSP: "Spousal RRSP: RRSP in a spouse's name, used for income-splitting to reduce tax in retirement.",
    SRIF: "Spousal RRIF: Same as RRIF but in spouse's name, continues the tax-splitting advantage."
  };
  return <div className="absolute right-0 top-full mt-2 z-10 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-80">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium text-gray-900">{accountType}</h4>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <XIcon size={16} />
        </button>
      </div>
      <p className="text-gray-700 text-base">
        {tooltipContent[accountType] || 'Account information'}
      </p>
    </div>;
};
interface AccountsOverviewProps {
  accounts: Array<{
    id: string;
    name: string;
    institution: string;
    balance: number;
    balanceCAD?: number;
    currency: string;
    status: string;
    owner?: string;
    holdings: Array<{
      ticker: string;
      name: string;
      units: number;
      value: number;
      valueCAD?: number;
      currency: string;
      allocation: number;
      mer?: number;
      rate?: number;
    }>;
  }>;
  expandedAccount: string;
  setExpandedAccount: (accountId: string) => void;
  showOriginalCurrency?: boolean;
  fxRate?: number;
  viewMode: 'individual' | 'household';
  margaretPortfolioBalance?: number;
  johnPortfolioBalance?: number;
}
export const AccountsOverview: React.FC<AccountsOverviewProps> = ({
  accounts,
  expandedAccount,
  setExpandedAccount,
  showOriginalCurrency = false,
  fxRate = 1.32,
  viewMode,
  margaretPortfolioBalance,
  johnPortfolioBalance
}) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [showCurrencyToggle, setShowCurrencyToggle] = useState(false);
  const [accountCurrencyPreferences, setAccountCurrencyPreferences] = useState<Record<string, 'CAD' | 'USD'>>({});
  const [activeCurrencyDropdown, setActiveCurrencyDropdown] = useState<string | null>(null);
  // Mock transfer data for accounts in transfer
  const transferData = {
    rrif: {
      sourceInstitution: 'Questrade',
      destinationInstitution: 'TD',
      accountNumber: '8765432109',
      estimatedCompletionDays: 28,
      currentStep: 2,
      totalSteps: 4,
      documents: [{
        name: 'Transfer Authorization Form',
        status: 'verified'
      }, {
        name: 'Government ID',
        status: 'verified'
      }, {
        name: 'Account Statement',
        status: 'uploaded'
      }, {
        name: 'Beneficiary Designation',
        status: 'pending'
      }],
      kycStatus: 'in_review'
    }
  };
  // Group accounts by owner for household view
  const margaretAccounts = accounts.filter(account => account.owner === 'Margaret' || !account.owner);
  const johnAccounts = accounts.filter(account => account.owner === 'John');
  const toggleAccountExpansion = (accountId: string) => {
    if (expandedAccount === accountId) {
      setExpandedAccount('');
    } else {
      setExpandedAccount(accountId);
    }
  };
  const toggleAccountCurrency = (accountId: string, currency: 'CAD' | 'USD', e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent expanding/collapsing when clicking the dropdown
    setAccountCurrencyPreferences(prev => ({
      ...prev,
      [accountId]: currency
    }));
    setActiveCurrencyDropdown(null);
  };
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'In Transfer':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'Closed':
        return 'bg-gray-100 text-gray-800 border border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
        return <CheckCircleIcon size={14} className="text-green-600 mr-1" />;
      case 'In Transfer':
        return <AlertTriangleIcon size={14} className="text-yellow-600 mr-1" />;
      case 'Closed':
        return <XCircleIcon size={14} className="text-gray-600 mr-1" />;
      default:
        return null;
    }
  };
  // Mock performance data (would come from props in a real app)
  const getPerformanceData = (accountId: string) => {
    const mockData = {
      rrsp: {
        ytd: 3.2,
        fiveYear: 18.5
      },
      tfsa: {
        ytd: 5.7,
        fiveYear: 22.1
      },
      rrif: {
        ytd: 2.8,
        fiveYear: 16.9
      },
      'non-registered': {
        ytd: 7.1,
        fiveYear: 24.3
      },
      lif: {
        ytd: 2.5,
        fiveYear: 15.8
      },
      srsp: {
        ytd: 3.0,
        fiveYear: 17.2
      },
      srif: {
        ytd: 2.7,
        fiveYear: 16.5
      }
    };
    return mockData[accountId] || {
      ytd: 0,
      fiveYear: 0
    };
  };
  // Mock income/yield data (would come from props in a real app)
  const getIncomeData = (accountId: string) => {
    const mockData = {
      rrsp: {
        yield: 2.1,
        annualIncome: 5250
      },
      tfsa: {
        yield: 3.2,
        annualIncome: 5760
      },
      rrif: {
        yield: 3.8,
        annualIncome: 11400
      },
      'non-registered': {
        yield: 2.5,
        annualIncome: 1250
      },
      lif: {
        yield: 3.5,
        annualIncome: 4375
      },
      srsp: {
        yield: 2.2,
        annualIncome: 2156
      },
      srif: {
        yield: 3.6,
        annualIncome: 4032
      }
    };
    return mockData[accountId] || {
      yield: 0,
      annualIncome: 0
    };
  };
  // Get account-specific insights
  const getAccountInsight = (accountId: string) => {
    const insights = {
      rrsp: {
        text: 'Your RRSP is well-diversified with a good balance of growth and income investments.',
        icon: <ShieldCheckIcon size={20} className="text-green-600 mr-2 mt-0.5" />,
        title: 'Strong RRSP Portfolio'
      },
      tfsa: {
        text: 'Your TFSA strategy is maximizing tax-free growth potential. Great job utilizing this account!',
        icon: <AwardIcon size={20} className="text-green-600 mr-2 mt-0.5" />,
        title: 'Excellent TFSA Strategy'
      },
      rrif: {
        text: 'Your RRIF account is well-managed with a good mix of growth and income investments to support your retirement needs. Your minimum withdrawal requirement for this year is on track.',
        icon: <CheckCircleIcon size={20} className="text-green-600 mr-2 mt-0.5" />,
        title: 'Well-Managed RRIF'
      },
      'non-registered': {
        text: 'Consider tax-loss harvesting before year-end to offset capital gains. Talk to your advisor about potential strategies.',
        icon: <InfoIcon size={20} className="text-blue-600 mr-2 mt-0.5" />,
        title: 'Tax Optimization Opportunity',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-800',
        textBodyColor: 'text-blue-700'
      },
      lif: {
        text: 'Your LIF is optimally structured to provide steady income while meeting withdrawal requirements.',
        icon: <BarChart3Icon size={20} className="text-green-600 mr-2 mt-0.5" />,
        title: 'Optimal LIF Structure'
      },
      srsp: {
        text: 'Your spousal RRSP is effectively set up for future income splitting. This is a smart tax planning move.',
        icon: <ArrowUpRightIcon size={20} className="text-green-600 mr-2 mt-0.5" />,
        title: 'Effective Tax Planning'
      },
      srif: {
        text: 'Your spousal RRIF is providing good income diversification for your household.',
        icon: <CheckCircleIcon size={20} className="text-green-600 mr-2 mt-0.5" />,
        title: 'Good Income Diversification'
      }
    };
    return insights[accountId] || null;
  };
  return <div className="bg-white rounded-lg shadow-sm">
      <div className="p-5 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">
            {viewMode === 'individual' ? 'Accounts Overview' : 'Household Accounts Overview'}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-base text-green-700">
              <CheckCircleIcon size={18} className="mr-2 text-green-600" />
              <span>Last sync: 2 minutes ago</span>
            </div>
            <button className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-base font-medium transition-colors">
              <PlusCircleIcon size={18} className="mr-2" />
              Link Account
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'individual' ? <div className="divide-y divide-gray-200">
          {accounts.map(account => {
        const performance = getPerformanceData(account.id);
        const income = getIncomeData(account.id);
        const showUSD = accountCurrencyPreferences[account.id] === 'USD' || account.currency === 'USD' && !accountCurrencyPreferences[account.id];
        const insight = getAccountInsight(account.id);
        const isInTransfer = account.status === 'In Transfer';
        const transferInfo = isInTransfer ? transferData[account.id] : null;
        return <Fragment key={account.id}>
                <div className="p-0">
                  <div className="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => toggleAccountExpansion(account.id)} aria-expanded={expandedAccount === account.id} aria-controls={`${account.id}-holdings`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white rounded-lg p-2 w-14 h-14 flex items-center justify-center border border-gray-200 shadow-sm">
                        <img src={`https://placehold.co/60x60/e6e6e6/666666?text=${account.institution}`} alt={`${account.institution} logo`} className="max-h-10 max-w-10" />
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${getStatusClass(account.status)}`}>
                            {getStatusIcon(account.status)}
                            {account.status}
                          </span>
                          <div className="relative ml-2">
                            <button onClick={e => {
                        e.stopPropagation();
                        setActiveTooltip(activeTooltip === account.name ? null : account.name);
                      }} className="text-gray-400 hover:text-gray-600" aria-label={`About ${account.name}`}>
                              <HelpCircleIcon size={16} />
                            </button>
                            {activeTooltip === account.name && <AccountTooltip accountType={account.name} isOpen={activeTooltip === account.name} onClose={e => {
                        e.stopPropagation();
                        setActiveTooltip(null);
                      }} />}
                          </div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {account.name}
                        </h3>
                        <p className="text-base text-gray-600">
                          {account.institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        {account.currency === 'USD' && showUSD ? <div>
                            <p className="text-xl font-medium text-gray-900">
                              {formatCurrency(account.balance, account.currency)}
                            </p>
                            <p className="text-sm text-gray-500">
                              ≈{' '}
                              {formatCurrency(account.balanceCAD || account.balance * fxRate)}
                            </p>
                          </div> : <p className="text-xl font-medium text-gray-900">
                            {formatCurrency(account.currency === 'CAD' ? account.balance : account.balanceCAD || account.balance * fxRate)}
                          </p>}
                        <div className="flex items-center justify-end mt-1">
                          <TrendingUpIcon size={14} className="text-green-600 mr-1" />
                          <span className="text-sm text-green-600">
                            {performance.ytd}% YTD
                          </span>
                        </div>
                      </div>
                      <div>
                        {expandedAccount === account.id ? <ChevronUpIcon size={24} className="text-gray-500" /> : <ChevronDownIcon size={24} className="text-gray-500" />}
                      </div>
                    </div>
                  </div>
                  {expandedAccount === account.id && <div id={`${account.id}-holdings`} className="px-5 pb-5">
                      {/* Transfer Orchestration System for accounts in transfer */}
                      {isInTransfer && transferInfo && <div className="mb-6">
                          <TransferOrchestrationSystem accountName={account.name} sourceInstitution={transferInfo.sourceInstitution} destinationInstitution={transferInfo.destinationInstitution} accountNumber={transferInfo.accountNumber} estimatedCompletionDays={transferInfo.estimatedCompletionDays} currentStep={transferInfo.currentStep} totalSteps={transferInfo.totalSteps} documents={transferInfo.documents} kycStatus={transferInfo.kycStatus} />
                        </div>}
                      {account.holdings.length > 0 && <>
                          {/* Account summary info */}
                          <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="text-sm text-gray-600 mb-1">
                                Performance
                              </div>
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-base font-medium text-gray-900">
                                    {performance.ytd}%
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    Year to date
                                  </div>
                                </div>
                                <div>
                                  <div className="text-base font-medium text-gray-900">
                                    {performance.fiveYear}%
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    5-year return
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="text-sm text-gray-600 mb-1">
                                Income
                              </div>
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-base font-medium text-gray-900">
                                    {income.yield}%
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    Current yield
                                  </div>
                                </div>
                                <div>
                                  <div className="text-base font-medium text-gray-900">
                                    {formatCurrency(income.annualIncome)}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    Annual income
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="text-sm text-gray-600 mb-1">
                                Currency
                              </div>
                              <div className="flex flex-col">
                                <div className="text-base font-medium text-gray-900">
                                  {account.currency}
                                </div>
                                <div className="relative mt-2">
                                  <button onClick={e => {
                          e.stopPropagation();
                          setActiveCurrencyDropdown(activeCurrencyDropdown === account.id ? null : account.id);
                        }} className="flex items-center text-sm text-indigo-600 font-medium hover:text-indigo-800">
                                    <span>
                                      Show in {showUSD ? 'CAD' : 'USD'}
                                    </span>
                                    <ChevronDownIcon size={16} className="ml-1" />
                                  </button>
                                  {activeCurrencyDropdown === account.id && <div className="absolute left-0 mt-1 bg-white rounded-md shadow-lg z-10 border border-gray-200 w-32">
                                      <div className="py-1">
                                        <button className={`block w-full text-left px-3 py-2 text-sm ${!showUSD ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`} onClick={e => toggleAccountCurrency(account.id, 'CAD', e)}>
                                          {!showUSD && <CheckCircleIcon size={14} className="inline mr-2" />}
                                          CAD
                                        </button>
                                        <button className={`block w-full text-left px-3 py-2 text-sm ${showUSD ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`} onClick={e => toggleAccountCurrency(account.id, 'USD', e)}>
                                          {showUSD && <CheckCircleIcon size={14} className="inline mr-2" />}
                                          USD
                                        </button>
                                      </div>
                                    </div>}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Holdings table */}
                          <div className="border rounded-lg overflow-hidden">
                            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                              <table className="min-w-full divide-y divide-gray-200" style={{
                      minWidth: '650px'
                    }}>
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th scope="col" className="px-4 py-3 text-left text-base font-medium text-gray-600 tracking-wider sticky left-0 bg-gray-50">
                                      Ticker / Name
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-right text-base font-medium text-gray-600 tracking-wider">
                                      Units
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-right text-base font-medium text-gray-600 tracking-wider">
                                      Value
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-right text-base font-medium text-gray-600 tracking-wider">
                                      Allocation
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-right text-base font-medium text-gray-600 tracking-wider">
                                      MER/Rate
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-right text-base font-medium text-gray-600 tracking-wider">
                                      Income/Yield
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                  {account.holdings.map((holding, index) => {
                          // Mock yield data - would come from props in real app
                          const holdingYield = holding.ticker === 'GIC' || holding.ticker === 'CASH' ? holding.rate || 0 : [2.1, 3.2, 1.8, 2.5, 1.9][index % 5];
                          return <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-4 py-4 whitespace-nowrap sticky left-0 bg-white">
                                          <div className="text-base font-medium text-gray-900">
                                            {holding.ticker}
                                          </div>
                                          <div className="text-sm text-gray-600">
                                            {holding.name}
                                          </div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-base text-gray-600 text-right">
                                          {holding.units.toLocaleString()}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-base text-gray-900 font-medium text-right">
                                          {holding.currency === 'USD' && showOriginalCurrency ? <div>
                                              <div>
                                                {formatCurrency(holding.value, holding.currency)}
                                              </div>
                                              <div className="text-sm text-gray-500">
                                                ≈{' '}
                                                {formatCurrency(holding.valueCAD || holding.value * fxRate)}
                                              </div>
                                            </div> : formatCurrency(holding.currency === 'CAD' ? holding.value : holding.valueCAD || holding.value * fxRate)}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-base text-gray-600 text-right">
                                          <div className="flex items-center justify-end">
                                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                              <div className="bg-indigo-600 h-2 rounded-full" style={{
                                    width: `${holding.allocation}%`
                                  }}></div>
                                            </div>
                                            <span>{holding.allocation}%</span>
                                          </div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-base text-gray-600 text-right">
                                          {holding.mer ? `${holding.mer}%` : holding.rate ? `${holding.rate}%` : '-'}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-right">
                                          <div className="text-base text-gray-900 font-medium">
                                            {holdingYield}%
                                          </div>
                                          <div className="text-sm text-gray-600">
                                            {formatCurrency(holding.value * (holdingYield / 100))}
                                          </div>
                                        </td>
                                      </tr>;
                        })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          {/* Account-specific insights */}
                          {insight && <div className={`mt-4 ${insight.bgColor || 'bg-green-50'} p-4 rounded-lg flex items-start`}>
                              {insight.icon}
                              <div>
                                <p className={`text-base ${insight.textColor || 'text-green-800'} font-medium`}>
                                  {insight.title}
                                </p>
                                <p className={`text-base ${insight.textBodyColor || 'text-green-700'} mt-1`}>
                                  {insight.text}
                                </p>
                              </div>
                            </div>}
                        </>}
                    </div>}
                </div>
              </Fragment>;
      })}
        </div> : <>
          <div>
            {/* Margaret's Accounts Section */}
            <div className="border-b border-gray-200 py-3 px-5">
              <div className="flex items-center">
                <div className="h-6 w-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-medium text-xs mr-2">
                  M
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Margaret's Accounts
                </h3>
                <span className="ml-2 text-gray-600">
                  {formatCurrency(margaretPortfolioBalance || 0)}
                </span>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {margaretAccounts.map(account => {
            const performance = getPerformanceData(account.id);
            const income = getIncomeData(account.id);
            const showUSD = accountCurrencyPreferences[account.id] === 'USD' || account.currency === 'USD' && !accountCurrencyPreferences[account.id];
            const insight = getAccountInsight(account.id);
            const isInTransfer = account.status === 'In Transfer';
            const transferInfo = isInTransfer ? transferData[account.id] : null;
            return <Fragment key={account.id}>
                    <div className="p-0">
                      <div className="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => toggleAccountExpansion(account.id)} aria-expanded={expandedAccount === account.id} aria-controls={`${account.id}-holdings`}>
                        <div className="flex items-center space-x-4">
                          <div className="bg-white rounded-lg p-2 w-14 h-14 flex items-center justify-center border border-gray-200 shadow-sm">
                            <img src={`https://placehold.co/60x60/e6e6e6/666666?text=${account.institution}`} alt={`${account.institution} logo`} className="max-h-10 max-w-10" />
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${getStatusClass(account.status)}`}>
                                {getStatusIcon(account.status)}
                                {account.status}
                              </span>
                              <div className="relative ml-2">
                                <button onClick={e => {
                            e.stopPropagation();
                            setActiveTooltip(activeTooltip === account.name ? null : account.name);
                          }} className="text-gray-400 hover:text-gray-600" aria-label={`About ${account.name}`}>
                                  <HelpCircleIcon size={16} />
                                </button>
                                {activeTooltip === account.name && <AccountTooltip accountType={account.name} isOpen={activeTooltip === account.name} onClose={e => {
                            e.stopPropagation();
                            setActiveTooltip(null);
                          }} />}
                              </div>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {account.name}
                            </h3>
                            <p className="text-base text-gray-600">
                              {account.institution}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            {account.currency === 'USD' && showUSD ? <div>
                                <p className="text-xl font-medium text-gray-900">
                                  {formatCurrency(account.balance, account.currency)}
                                </p>
                                <p className="text-sm text-gray-500">
                                  ≈{' '}
                                  {formatCurrency(account.balanceCAD || account.balance * fxRate)}
                                </p>
                              </div> : <p className="text-xl font-medium text-gray-900">
                                {formatCurrency(account.currency === 'CAD' ? account.balance : account.balanceCAD || account.balance * fxRate)}
                              </p>}
                            <div className="flex items-center justify-end mt-1">
                              <TrendingUpIcon size={14} className="text-green-600 mr-1" />
                              <span className="text-sm text-green-600">
                                {performance.ytd}% YTD
                              </span>
                            </div>
                          </div>
                          <div>
                            {expandedAccount === account.id ? <ChevronUpIcon size={24} className="text-gray-500" /> : <ChevronDownIcon size={24} className="text-gray-500" />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fragment>;
          })}
            </div>
            {/* John's Accounts Section */}
            <div className="border-b border-gray-200 py-3 px-5 mt-4">
              <div className="flex items-center">
                <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-xs mr-2">
                  J
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  John's Accounts
                </h3>
                <span className="ml-2 text-gray-600">
                  {formatCurrency(johnPortfolioBalance || 0)}
                </span>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {johnAccounts.map(account => {
            const performance = getPerformanceData(account.id);
            const income = getIncomeData(account.id);
            const showUSD = accountCurrencyPreferences[account.id] === 'USD' || account.currency === 'USD' && !accountCurrencyPreferences[account.id];
            const insight = getAccountInsight(account.id);
            const isInTransfer = account.status === 'In Transfer';
            const transferInfo = isInTransfer ? transferData[account.id] : null;
            return <Fragment key={account.id}>
                    <div className="p-0">
                      <div className="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => toggleAccountExpansion(account.id)} aria-expanded={expandedAccount === account.id} aria-controls={`${account.id}-holdings`}>
                        <div className="flex items-center space-x-4">
                          <div className="bg-white rounded-lg p-2 w-14 h-14 flex items-center justify-center border border-gray-200 shadow-sm">
                            <img src={`https://placehold.co/60x60/e6e6e6/666666?text=${account.institution}`} alt={`${account.institution} logo`} className="max-h-10 max-w-10" />
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${getStatusClass(account.status)}`}>
                                {getStatusIcon(account.status)}
                                {account.status}
                              </span>
                              <div className="relative ml-2">
                                <button onClick={e => {
                            e.stopPropagation();
                            setActiveTooltip(activeTooltip === account.name ? null : account.name);
                          }} className="text-gray-400 hover:text-gray-600" aria-label={`About ${account.name}`}>
                                  <HelpCircleIcon size={16} />
                                </button>
                                {activeTooltip === account.name && <AccountTooltip accountType={account.name} isOpen={activeTooltip === account.name} onClose={e => {
                            e.stopPropagation();
                            setActiveTooltip(null);
                          }} />}
                              </div>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {account.name}
                            </h3>
                            <p className="text-base text-gray-600">
                              {account.institution}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            {account.currency === 'USD' && showUSD ? <div>
                                <p className="text-xl font-medium text-gray-900">
                                  {formatCurrency(account.balance, account.currency)}
                                </p>
                                <p className="text-sm text-gray-500">
                                  ≈{' '}
                                  {formatCurrency(account.balanceCAD || account.balance * fxRate)}
                                </p>
                              </div> : <p className="text-xl font-medium text-gray-900">
                                {formatCurrency(account.currency === 'CAD' ? account.balance : account.balanceCAD || account.balance * fxRate)}
                              </p>}
                            <div className="flex items-center justify-end mt-1">
                              <TrendingUpIcon size={14} className="text-green-600 mr-1" />
                              <span className="text-sm text-green-600">
                                {performance.ytd}% YTD
                              </span>
                            </div>
                          </div>
                          <div>
                            {expandedAccount === account.id ? <ChevronUpIcon size={24} className="text-gray-500" /> : <ChevronDownIcon size={24} className="text-gray-500" />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fragment>;
          })}
            </div>
          </div>
        </>}
      {/* Add Account card */}
      <div className="p-5">
        <button className="w-full flex flex-col items-center justify-center py-8 rounded-lg border-2 border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 transition-colors">
          <div className="bg-gray-100 rounded-full p-3 mb-3">
            <PlusCircleIcon size={24} className="text-gray-600" />
          </div>
          <span className="text-lg font-medium text-gray-700 mb-1">
            Add Account
          </span>
          <span className="text-base text-gray-500">
            Link a new investment account
          </span>
        </button>
      </div>
    </div>;
};