import React, { useState } from 'react';
import { BellIcon, MenuIcon, ChevronDownIcon, EyeIcon, EyeOffIcon, CheckCircleIcon, ClockIcon, RefreshCwIcon, PlusIcon, SearchIcon, DollarSignIcon, ChevronUpIcon, UsersIcon, UserIcon } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { AccountTab } from './UI/AccountTab';
import { Link } from 'react-router-dom';
interface HeaderProps {
  portfolioBalance: number;
  portfolioBalanceUSD?: number;
  fxRate: number;
  isBalanceHidden: boolean;
  showOriginalCurrency: boolean;
  onToggleBalanceVisibility: () => void;
  onToggleCurrencyDisplay: () => void;
  accounts: Array<{
    id: string;
    name: string;
    balance: number;
    balanceCAD?: number;
    currency: string;
    owner?: string;
  }>;
  selectedAccount: string;
  onSelectAccount: (accountId: string) => void;
  selectedTimeframe: string;
  onSelectTimeframe: (timeframe: string) => void;
  viewMode: 'individual' | 'household';
  setViewMode: (mode: 'individual' | 'household') => void;
  margaretPortfolioBalance?: number;
  johnPortfolioBalance?: number;
  margaretPortfolioBalanceUSD?: number;
  johnPortfolioBalanceUSD?: number;
  activeTab?: string;
  displayCurrency?: string;
}
export const Header: React.FC<HeaderProps> = ({
  portfolioBalance,
  portfolioBalanceUSD,
  fxRate,
  isBalanceHidden,
  showOriginalCurrency,
  onToggleBalanceVisibility,
  onToggleCurrencyDisplay,
  accounts,
  selectedAccount,
  onSelectAccount,
  selectedTimeframe,
  onSelectTimeframe,
  viewMode,
  setViewMode,
  margaretPortfolioBalance,
  johnPortfolioBalance,
  margaretPortfolioBalanceUSD,
  johnPortfolioBalanceUSD,
  activeTab = 'dashboard',
  displayCurrency = 'CAD'
}) => {
  const timeframes = [{
    id: '1M',
    label: '1M'
  }, {
    id: '3M',
    label: '3M'
  }, {
    id: 'YTD',
    label: 'YTD'
  }, {
    id: '1Y',
    label: '1Y'
  }, {
    id: '5Y',
    label: '5Y'
  }];
  // Currency dropdown state
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  // Calculate portfolio growth
  const portfolioGrowth = showOriginalCurrency ? 12450 / fxRate : 12450;
  const portfolioGrowthPercent = 1.5;
  // Get current date and time for last sync
  const now = new Date();
  const lastSyncTime = `${now.toLocaleDateString()} ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
  // Group accounts by owner for household view
  const margaretAccounts = accounts.filter(account => account.owner === 'Margaret' || !account.owner);
  const johnAccounts = accounts.filter(account => account.owner === 'John');
  return <header className="bg-white shadow-sm">
      {/* Top navigation */}
      <div className="container mx-auto px-4 py-4 max-w-screen-xl flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-8">
            <img src="https://placehold.co/180x50/e6e6e6/333333?text=BAM" alt="Big Asset Management Logo" className="h-10" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className={`font-medium ${activeTab === 'dashboard' ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'text-gray-600 hover:text-gray-900'}`}>
              Dashboard
            </Link>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Transfers
            </a>
            <Link to="/income-builder" className={`font-medium ${activeTab === 'income-builder' ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'text-gray-600 hover:text-gray-900'}`}>
              Income Builder
            </Link>
            <Link to="/performance-monitoring" className={`font-medium ${activeTab === 'performance-monitoring' ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'text-gray-600 hover:text-gray-900'}`}>
              Performance
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {/* Refresh button */}
          <button className="text-gray-600 hover:text-gray-900" aria-label="Refresh data">
            <RefreshCwIcon size={22} />
          </button>
          <button className="text-gray-600 hover:text-gray-900" aria-label="Notifications">
            <BellIcon size={24} />
          </button>
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-medium">
              {viewMode === 'individual' ? 'M' : 'M+J'}
            </div>
            <div className="hidden md:block">
              <div className="text-gray-800 font-medium">
                {viewMode === 'individual' ? 'Hi, Margaret' : 'Margaret & John'}
              </div>
              {/* Last sync time instead of login time */}
              <div className="text-xs text-gray-500 flex items-center">
                <ClockIcon size={12} className="mr-1" />
                Last sync: {lastSyncTime}
              </div>
            </div>
            <ChevronDownIcon size={20} className="text-gray-600" />
          </div>
          <button className="md:hidden text-gray-600">
            <MenuIcon size={24} />
          </button>
        </div>
      </div>

      {/* Search bar - full width */}
      <div className="container mx-auto px-4 py-3 max-w-screen-xl border-t border-gray-100">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input type="text" placeholder="Search accounts, transactions, or help topics..." className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" />
        </div>
      </div>

      {/* Portfolio balance and account tabs - only show on dashboard */}
      {activeTab === 'dashboard' && <div className="container mx-auto px-4 py-4 max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900 mr-3">
                  {viewMode === 'individual' ? 'Portfolio Balance' : 'Household Portfolio'}
                </h1>
                <div className="flex space-x-2">
                  <button onClick={onToggleBalanceVisibility} className="text-gray-500 hover:text-gray-700" aria-label={isBalanceHidden ? 'Show balance' : 'Hide balance'}>
                    {isBalanceHidden ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                  </button>
                  {/* Currency Dropdown */}
                  <div className="relative">
                    <button onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)} className="flex items-center space-x-1 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm font-medium text-gray-700" aria-haspopup="true" aria-expanded={isCurrencyDropdownOpen}>
                      <DollarSignIcon size={16} />
                      <span>{displayCurrency}</span>
                      {isCurrencyDropdownOpen ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
                    </button>
                    {isCurrencyDropdownOpen && <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                        <div className="py-1">
                          <button className={`block w-full text-left px-4 py-2 text-sm ${!showOriginalCurrency ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => {
                      onToggleCurrencyDisplay();
                      setIsCurrencyDropdownOpen(false);
                    }}>
                            {!showOriginalCurrency && <CheckCircleIcon size={14} className="inline mr-2" />}
                            CAD
                          </button>
                          <button className={`block w-full text-left px-4 py-2 text-sm ${showOriginalCurrency ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => {
                      onToggleCurrencyDisplay();
                      setIsCurrencyDropdownOpen(false);
                    }}>
                            {showOriginalCurrency && <CheckCircleIcon size={14} className="inline mr-2" />}
                            USD
                          </button>
                        </div>
                      </div>}
                  </div>
                  {/* View Mode Toggle (Individual/Household) */}
                  <div className="ml-2 bg-gray-100 rounded-lg p-1 flex">
                    <button onClick={() => setViewMode('individual')} className={`flex items-center px-3 py-1 rounded text-sm font-medium ${viewMode === 'individual' ? 'bg-white text-indigo-700 shadow-sm' : 'text-gray-700 hover:bg-gray-200'}`} aria-pressed={viewMode === 'individual'}>
                      <UserIcon size={16} className="mr-1.5" />
                      Individual
                    </button>
                    <button onClick={() => setViewMode('household')} className={`flex items-center px-3 py-1 rounded text-sm font-medium ${viewMode === 'household' ? 'bg-white text-indigo-700 shadow-sm' : 'text-gray-700 hover:bg-gray-200'}`} aria-pressed={viewMode === 'household'}>
                      <UsersIcon size={16} className="mr-1.5" />
                      Household
                    </button>
                  </div>
                </div>
              </div>
              {viewMode === 'individual' ? <p className="text-3xl font-bold text-gray-900 mt-1">
                  {isBalanceHidden ? '••••••••' : <>
                      {formatCurrency(portfolioBalance, displayCurrency)}
                      {portfolioBalanceUSD && displayCurrency === 'CAD' && <span className="ml-2 text-base font-medium text-gray-600">
                          (includes {formatCurrency(portfolioBalanceUSD, 'USD')}
                          )
                        </span>}
                    </>}
                </p> : <div>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    {isBalanceHidden ? '••••••••' : <>
                        {formatCurrency(portfolioBalance, displayCurrency)}
                        {portfolioBalanceUSD && displayCurrency === 'CAD' && <span className="ml-2 text-base font-medium text-gray-600">
                            (includes{' '}
                            {formatCurrency(portfolioBalanceUSD, 'USD')})
                          </span>}
                      </>}
                  </p>
                  {!isBalanceHidden && <div className="flex items-center mt-1 text-sm">
                      <div className="flex items-center mr-4">
                        <div className="h-4 w-4 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-medium text-xs mr-1">
                          M
                        </div>
                        <span className="text-gray-700">
                          Margaret:{' '}
                          {formatCurrency(showOriginalCurrency ? margaretPortfolioBalanceUSD || 0 : margaretPortfolioBalance || 0, displayCurrency)}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-4 w-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-xs mr-1">
                          J
                        </div>
                        <span className="text-gray-700">
                          John:{' '}
                          {formatCurrency(showOriginalCurrency ? johnPortfolioBalanceUSD || 0 : johnPortfolioBalance || 0, displayCurrency)}
                        </span>
                      </div>
                    </div>}
                </div>}
              {/* Portfolio growth message */}
              <div className="flex items-center mt-1">
                <span className="text-sm font-medium text-green-600 flex items-center">
                  <span className="mr-1">
                    +{formatCurrency(portfolioGrowth, displayCurrency)}
                  </span>
                  <span>({portfolioGrowthPercent}% YTD)</span>
                </span>
                <div className="flex items-center ml-3 bg-green-50 px-2 py-0.5 rounded-full">
                  <CheckCircleIcon size={14} className="text-green-600 mr-1" />
                  <span className="text-xs font-medium text-green-800">
                    {viewMode === 'individual' ? 'Your plan is on track' : 'Your household plan is on track'}
                  </span>
                </div>
                {!isBalanceHidden && fxRate && <div className="ml-3 text-xs text-gray-600">
                    FX Rate: 1 USD = {fxRate} CAD
                  </div>}
              </div>
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {timeframes.map(timeframe => <button key={timeframe.id} onClick={() => onSelectTimeframe(timeframe.id)} className={`px-4 py-2 rounded-full text-base font-medium ${selectedTimeframe === timeframe.id ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {timeframe.label}
                </button>)}
            </div>
          </div>
          {/* Account tabs */}
          <div className="mt-4">
            {viewMode === 'individual' /* Individual view account tabs */ ? <div className="flex space-x-2 overflow-x-auto pb-2">
                <AccountTab id="all" name="All Accounts" balance={portfolioBalance} currency={displayCurrency} isSelected={selectedAccount === 'all'} onClick={() => onSelectAccount('all')} isBalanceHidden={isBalanceHidden} showOriginalCurrency={showOriginalCurrency} />
                {accounts.map(account => <AccountTab key={account.id} id={account.id} name={account.name} balance={account.balance} balanceCAD={account.balanceCAD} currency={account.currency} isSelected={selectedAccount === account.id} onClick={() => onSelectAccount(account.id)} isBalanceHidden={isBalanceHidden} showOriginalCurrency={showOriginalCurrency} fxRate={fxRate} displayCurrency={displayCurrency} />)}
                {/* Add Account button */}
                <button className="flex flex-col items-center justify-center px-5 py-3 rounded-lg min-w-[140px] border-2 border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 transition-colors">
                  <PlusIcon className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium text-gray-600 mt-1">
                    Add Account
                  </span>
                </button>
              </div> /* Household view account tabs - grouped by person */ : <div className="space-y-4">
                {/* Account filter options */}
                <div className="flex space-x-2 mb-2">
                  <button className="px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700">
                    All Accounts
                  </button>
                  <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                    By Person
                  </button>
                  <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                    By Account Type
                  </button>
                </div>
                {/* Margaret's accounts */}
                <div>
                  <div className="flex items-center mb-2">
                    <div className="h-5 w-5 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-medium text-xs mr-2">
                      M
                    </div>
                    <h3 className="text-sm font-medium text-gray-700">
                      Margaret's Accounts
                    </h3>
                    <span className="ml-2 text-sm text-gray-500">
                      {!isBalanceHidden && `(${formatCurrency(showOriginalCurrency ? margaretPortfolioBalanceUSD || 0 : margaretPortfolioBalance || 0, displayCurrency)})`}
                    </span>
                  </div>
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {margaretAccounts.map(account => <AccountTab key={account.id} id={account.id} name={account.name} balance={account.balance} balanceCAD={account.balanceCAD} currency={account.currency} isSelected={selectedAccount === account.id} onClick={() => onSelectAccount(account.id)} isBalanceHidden={isBalanceHidden} showOriginalCurrency={showOriginalCurrency} fxRate={fxRate} owner="Margaret" displayCurrency={displayCurrency} />)}
                  </div>
                </div>
                {/* John's accounts */}
                <div>
                  <div className="flex items-center mb-2">
                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium text-xs mr-2">
                      J
                    </div>
                    <h3 className="text-sm font-medium text-gray-700">
                      John's Accounts
                    </h3>
                    <span className="ml-2 text-sm text-gray-500">
                      {!isBalanceHidden && `(${formatCurrency(showOriginalCurrency ? johnPortfolioBalanceUSD || 0 : johnPortfolioBalance || 0, displayCurrency)})`}
                    </span>
                  </div>
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {johnAccounts.map(account => <AccountTab key={account.id} id={account.id} name={account.name} balance={account.balance} balanceCAD={account.balanceCAD} currency={account.currency} isSelected={selectedAccount === account.id} onClick={() => onSelectAccount(account.id)} isBalanceHidden={isBalanceHidden} showOriginalCurrency={showOriginalCurrency} fxRate={fxRate} owner="John" displayCurrency={displayCurrency} />)}
                  </div>
                </div>
                {/* Add Account button */}
                <button className="flex items-center justify-center px-5 py-2 rounded-lg border-2 border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 transition-colors">
                  <PlusIcon className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-sm font-medium text-gray-600">
                    Add Account
                  </span>
                </button>
              </div>}
          </div>
        </div>}
    </header>;
};