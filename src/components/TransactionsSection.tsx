import React, { useState } from 'react';
import { Card } from './UI/Card';
import { InfoModal } from './UI/InfoModal';
import { ArrowUpIcon, ArrowDownIcon, DollarSignIcon, RefreshCwIcon, ArrowRightIcon, CheckCircleIcon, CalendarIcon, ListIcon, LayoutGridIcon, ClockIcon, FilterIcon, ChevronLeftIcon, ChevronRightIcon, HelpCircleIcon, AlertCircleIcon, ClockIcon as PendingIcon } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { CalendarView } from './UI/CalendarView';
import { IncomeTimeline } from './UI/IncomeTimeline';
interface TransactionsSectionProps {
  recentTransactions: Array<{
    date: string;
    account: string;
    type: string;
    amount: number;
    amountCAD?: number;
    currency: string;
    status: string;
    owner?: string;
  }>;
  incomeCalendar: Array<{
    date: string;
    source: string;
    amount: number;
    currency: string;
    owner?: string;
  }>;
  showOriginalCurrency?: boolean;
  fxRate?: number;
  viewMode: 'individual' | 'household';
}
export const TransactionsSection: React.FC<TransactionsSectionProps> = ({
  recentTransactions,
  incomeCalendar,
  showOriginalCurrency = false,
  fxRate = 1.32,
  viewMode
}) => {
  // Add state for income calendar view mode and selected month
  const [calendarViewMode, setCalendarViewMode] = useState<'list' | 'calendar' | 'timeline'>('calendar'); // Default to calendar view
  const [selectedMonth, setSelectedMonth] = useState<string>('Jan');
  const [transactionTypeFilter, setTransactionTypeFilter] = useState<string>('All Types');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const months = ['Jan', 'Feb', 'Mar'];
  // Add state for person filter in household view
  const [personFilter, setPersonFilter] = useState<'all' | 'margaret' | 'john'>('all');
  // Filter transactions by person if in household view
  const filteredByPersonTransactions = viewMode === 'household' && personFilter !== 'all' ? recentTransactions.filter(t => t.owner?.toLowerCase() === personFilter) : recentTransactions;
  // Filter transactions by type
  const filteredTransactions = transactionTypeFilter === 'All Types' ? filteredByPersonTransactions : filteredByPersonTransactions.filter(transaction => transaction.type === transactionTypeFilter);
  // Filter income calendar by person if in household view
  const filteredIncomeCalendar = viewMode === 'household' && personFilter !== 'all' ? incomeCalendar.filter(item => item.owner?.toLowerCase() === personFilter) : incomeCalendar;
  // Modal content
  const modalContent = {
    transactions: {
      title: 'Recent Transactions',
      content: <div className="space-y-4">
          <p>
            This section shows your most recent financial transactions across
            all accounts.
          </p>
          <p>Transaction types include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-medium">Deposits</span>: Money added to your
              accounts
            </li>
            <li>
              <span className="font-medium">Withdrawals</span>: Money taken from
              your accounts
            </li>
            <li>
              <span className="font-medium">Transfers</span>: Money moved
              between your accounts
            </li>
            <li>
              <span className="font-medium">Dividends</span>: Investment income
              paid to you
            </li>
          </ul>
          <p>
            You can filter transactions by type using the dropdown menu in the
            top right corner.
          </p>
        </div>
    },
    income: {
      title: 'Upcoming Income',
      content: <div className="space-y-4">
          <p>
            This section shows your scheduled income payments for the next 90
            days.
          </p>
          <p>You can view your income in three different ways:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-medium">List View</span>: Shows income
              grouped by month
            </li>
            <li>
              <span className="font-medium">Calendar View</span>: Shows income
              on a monthly calendar
            </li>
            <li>
              <span className="font-medium">Timeline View</span>: Shows income
              in chronological order
            </li>
          </ul>
          <p>
            All your income sources are currently on schedule with no payment
            disruptions expected.
          </p>
        </div>
    }
  };
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'Deposit':
        return <ArrowUpIcon size={16} className="text-green-500" />;
      case 'Withdrawal':
        return <ArrowDownIcon size={16} className="text-red-500" />;
      case 'Dividend':
        return <DollarSignIcon size={16} className="text-blue-500" />;
      case 'Transfer':
        return <RefreshCwIcon size={16} className="text-purple-500" />;
      default:
        return <DollarSignIcon size={16} className="text-gray-500" />;
    }
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircleIcon size={14} className="text-gray-800" />;
      case 'Pending':
        return <PendingIcon size={14} className="text-yellow-500" />;
      case 'Failed':
        return <AlertCircleIcon size={14} className="text-red-500" />;
      default:
        return null;
    }
  };
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-gray-50 text-gray-800 border border-gray-200';
      case 'Pending':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
      case 'Failed':
        return 'bg-red-50 text-red-700 border border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border border-gray-200';
    }
  };
  const getAmountColor = (amount: number, status: string) => {
    if (status === 'Failed') {
      return 'text-red-600';
    }
    if (status === 'Completed') {
      return amount >= 0 ? 'text-gray-900' : 'text-red-600';
    }
    return amount >= 0 ? 'text-gray-600' : 'text-red-600';
  };
  // Group income calendar by month
  const groupedCalendar: Record<string, typeof incomeCalendar> = {};
  incomeCalendar.forEach(item => {
    const month = item.date.split(' ')[0];
    if (!groupedCalendar[month]) {
      groupedCalendar[month] = [];
    }
    groupedCalendar[month].push(item);
  });
  // Calculate total income per month
  const monthlyTotals: Record<string, number> = {};
  incomeCalendar.forEach(item => {
    const month = item.date.split(' ')[0];
    if (!monthlyTotals[month]) {
      monthlyTotals[month] = 0;
    }
    monthlyTotals[month] += item.amount;
  });
  // Get source color
  const getSourceColor = (source: string) => {
    switch (source) {
      case 'CPP':
        return 'border-l-blue-500';
      case 'OAS':
        return 'border-l-green-500';
      case 'RRIF':
        return 'border-l-indigo-600';
      case 'Pension':
        return 'border-l-amber-500';
      default:
        return 'border-l-gray-500';
    }
  };
  const getSourceBgColor = (source: string) => {
    switch (source) {
      case 'CPP':
        return 'bg-blue-50';
      case 'OAS':
        return 'bg-green-50';
      case 'RRIF':
        return 'bg-indigo-50';
      case 'Pension':
        return 'bg-amber-50';
      default:
        return 'bg-gray-50';
    }
  };
  const getSourceTextColor = (source: string) => {
    switch (source) {
      case 'CPP':
        return 'text-blue-800';
      case 'OAS':
        return 'text-green-800';
      case 'RRIF':
        return 'text-indigo-800';
      case 'Pension':
        return 'text-amber-800';
      default:
        return 'text-gray-800';
    }
  };
  // Group transactions by status
  const pendingTransactions = filteredTransactions.filter(t => t.status === 'Pending');
  const nonPendingTransactions = filteredTransactions.filter(t => t.status !== 'Pending');
  // Limit displayed transactions unless "show all" is clicked
  const displayedTransactions = showAllTransactions ? nonPendingTransactions : nonPendingTransactions.slice(0, 3);
  return <div className="space-y-6">
      {/* Upcoming Income */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="text-lg font-medium text-gray-900">
              {viewMode === 'individual' ? 'Your Upcoming Income' : 'Household Upcoming Income'}
            </h2>
            <button className="ml-3 text-gray-400 hover:text-gray-600 flex items-center" onClick={() => setActiveModal('income')} aria-label="More information about upcoming income">
              <HelpCircleIcon size={16} />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            {/* Person filter in household view */}
            {viewMode === 'household' && <div className="mr-3">
                <select className="text-sm border border-gray-200 rounded-md py-1 px-2 text-gray-700" value={personFilter} onChange={e => setPersonFilter(e.target.value as 'all' | 'margaret' | 'john')}>
                  <option value="all">All</option>
                  <option value="margaret">Margaret</option>
                  <option value="john">John</option>
                </select>
              </div>}
            <button onClick={() => setCalendarViewMode('list')} className={`p-2 rounded ${calendarViewMode === 'list' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'}`} aria-label="List view" title="List view">
              <ListIcon size={18} />
            </button>
            <button onClick={() => setCalendarViewMode('calendar')} className={`p-2 rounded ${calendarViewMode === 'calendar' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'}`} aria-label="Calendar view" title="Calendar view">
              <LayoutGridIcon size={18} />
            </button>
            <button onClick={() => setCalendarViewMode('timeline')} className={`p-2 rounded ${calendarViewMode === 'timeline' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'}`} aria-label="Timeline view" title="Timeline view">
              <ClockIcon size={18} />
            </button>
          </div>
        </div>
        <div className="p-5">
          {calendarViewMode === 'list' && <div className="space-y-4">
              {/* Month slider */}
              <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3 mb-4">
                <button className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-100" onClick={() => {
              const currentIndex = months.indexOf(selectedMonth);
              if (currentIndex > 0) {
                setSelectedMonth(months[currentIndex - 1]);
              }
            }} disabled={selectedMonth === months[0]}>
                  <ChevronLeftIcon size={18} className={selectedMonth === months[0] ? 'text-gray-300' : 'text-gray-600'} />
                </button>
                <div className="flex space-x-4 items-center">
                  {months.map(month => <button key={month} className={`px-4 py-2 rounded-full text-base font-medium ${selectedMonth === month ? 'bg-indigo-100 text-indigo-700' : 'bg-white text-gray-700 hover:bg-gray-100'}`} onClick={() => setSelectedMonth(month)}>
                      {month}
                      {selectedMonth === month && <div className="text-xs text-indigo-600 font-normal mt-1">
                          {formatCurrency(monthlyTotals[month] || 0)}
                        </div>}
                    </button>)}
                </div>
                <button className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-100" onClick={() => {
              const currentIndex = months.indexOf(selectedMonth);
              if (currentIndex < months.length - 1) {
                setSelectedMonth(months[currentIndex + 1]);
              }
            }} disabled={selectedMonth === months[months.length - 1]}>
                  <ChevronRightIcon size={18} className={selectedMonth === months[months.length - 1] ? 'text-gray-300' : 'text-gray-600'} />
                </button>
              </div>
              {/* Selected month's income items */}
              <div className="bg-white rounded-lg">
                <div className="space-y-3">
                  {groupedCalendar[selectedMonth]?.filter(item => {
                if (viewMode === 'individual') return true;
                if (personFilter === 'all') return true;
                return item.owner?.toLowerCase() === personFilter;
              }).map((item, index) => <div key={index} className="bg-white shadow-sm rounded-lg p-3 flex justify-between items-center border-l-4 border-l-solid hover:shadow-md transition-shadow" style={{
                borderLeftColor: item.source === 'CPP' ? '#3b82f6' : item.source === 'OAS' ? '#10b981' : item.source === 'RRIF' ? '#4f46e5' : item.source === 'Pension' ? '#f59e0b' : item.source === 'LIF' ? '#2563eb' : '#6b7280'
              }}>
                        <div className="flex items-center space-x-3">
                          {viewMode === 'household' && item.owner && <div className="h-5 w-5 rounded-full flex items-center justify-center text-xs" style={{
                    backgroundColor: item.owner === 'Margaret' ? '#e0e7ff' : '#dbeafe',
                    color: item.owner === 'Margaret' ? '#4f46e5' : '#2563eb'
                  }}>
                              {item.owner.charAt(0)}
                            </div>}
                          <div className="p-2 rounded-full" style={{
                    backgroundColor: item.source === 'CPP' ? '#eff6ff' : item.source === 'OAS' ? '#ecfdf5' : item.source === 'RRIF' ? '#eef2ff' : item.source === 'Pension' ? '#fffbeb' : item.source === 'LIF' ? '#dbeafe' : '#f3f4f6'
                  }}>
                            <CalendarIcon size={16} style={{
                      color: item.source === 'CPP' ? '#3b82f6' : item.source === 'OAS' ? '#10b981' : item.source === 'RRIF' ? '#4f46e5' : item.source === 'Pension' ? '#f59e0b' : item.source === 'LIF' ? '#2563eb' : '#6b7280'
                    }} />
                          </div>
                          <div>
                            <p className="text-base font-medium text-gray-900">
                              {item.source}
                            </p>
                            <p className="text-sm text-gray-600">{item.date}</p>
                          </div>
                        </div>
                        <div className="text-base font-semibold text-gray-900">
                          {formatCurrency(item.amount)}
                        </div>
                      </div>)}
                </div>
              </div>
              <div className="flex items-center justify-center text-indigo-700 text-sm bg-indigo-50 rounded-lg p-3">
                <CheckCircleIcon size={16} className="mr-2" />
                <span>
                  {viewMode === 'individual' ? 'All payments are on schedule for the next 90 days' : 'All household payments are on schedule for the next 90 days'}
                </span>
              </div>
            </div>}
          {calendarViewMode === 'calendar' && <CalendarView incomeCalendar={filteredIncomeCalendar} viewMode={viewMode} />}
          {calendarViewMode === 'timeline' && <IncomeTimeline incomeCalendar={filteredIncomeCalendar} viewMode={viewMode} />}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="text-lg font-medium text-gray-900">
              {viewMode === 'individual' ? 'Recent Transactions' : 'Household Transactions'}
            </h2>
            <button className="ml-3 text-gray-400 hover:text-gray-600 flex items-center" onClick={() => setActiveModal('transactions')} aria-label="More information about transactions">
              <HelpCircleIcon size={16} />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            {/* Person filter in household view */}
            {viewMode === 'household' && <div className="mr-2">
                <select className="text-sm border border-gray-200 rounded-md py-1 px-2 text-gray-700" value={personFilter} onChange={e => setPersonFilter(e.target.value as 'all' | 'margaret' | 'john')}>
                  <option value="all">All</option>
                  <option value="margaret">Margaret</option>
                  <option value="john">John</option>
                </select>
              </div>}
            <div className="relative">
              <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm">
                <FilterIcon size={16} className="mr-2" />
                {transactionTypeFilter}
              </button>
              {isFilterOpen && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <div className="py-1">
                    {['All Types', 'Deposit', 'Withdrawal', 'Transfer', 'Dividend'].map(type => <button key={type} className={`block w-full text-left px-4 py-2 text-sm ${transactionTypeFilter === type ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => {
                  setTransactionTypeFilter(type);
                  setIsFilterOpen(false);
                }}>
                        {transactionTypeFilter === type && <CheckCircleIcon size={14} className="inline mr-2" />}
                        {type}
                      </button>)}
                  </div>
                </div>}
            </div>
          </div>
        </div>
        <div className="p-5">
          {/* Pending Transactions Group */}
          {pendingTransactions.length > 0 && <div className="mb-5">
              <div className="flex items-center py-2 px-3 bg-yellow-50 rounded-lg mb-3 border border-yellow-200">
                <PendingIcon size={16} className="text-yellow-600 mr-2" />
                <span className="text-sm font-medium text-yellow-800">
                  Pending Transactions ({pendingTransactions.length})
                </span>
              </div>
              <div className="space-y-3 pl-2 border-l-2 border-yellow-200">
                {pendingTransactions.map((transaction, index) => <div key={index} className="bg-white border border-yellow-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
                    <div className="flex items-center">
                      {viewMode === 'household' && transaction.owner && <div className="h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2" style={{
                  backgroundColor: transaction.owner === 'Margaret' ? '#e0e7ff' : '#dbeafe',
                  color: transaction.owner === 'Margaret' ? '#4f46e5' : '#2563eb'
                }}>
                          {transaction.owner.charAt(0)}
                        </div>}
                      <div className="p-2 bg-gray-100 rounded-full mr-3">
                        {getTransactionIcon(transaction.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium text-gray-900">
                            {transaction.type}
                          </p>
                          <div>
                            {transaction.currency === 'USD' && showOriginalCurrency ? <div className="text-right">
                                <p className={`text-sm font-medium ${getAmountColor(transaction.amount, transaction.status)}`}>
                                  {transaction.amount >= 0 ? '+' : ''}
                                  {formatCurrency(transaction.amount, 'USD')}
                                </p>
                                <p className="text-xs text-gray-500">
                                  ≈{' '}
                                  {formatCurrency(transaction.amountCAD || transaction.amount * fxRate)}
                                </p>
                              </div> : <p className={`text-sm font-medium ${getAmountColor(transaction.amount, transaction.status)}`}>
                                {transaction.amount >= 0 ? '+' : ''}
                                {formatCurrency(transaction.currency === 'CAD' ? transaction.amount : transaction.amountCAD || transaction.amount * fxRate)}
                              </p>}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div>
                            <p className="text-xs text-gray-600">
                              {transaction.date} · {transaction.account}
                            </p>
                            <div className="mt-1">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusClass(transaction.status)}`}>
                                {getStatusIcon(transaction.status)}
                                <span className="ml-1">
                                  {transaction.status}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="text-xs text-yellow-600 flex items-center">
                            <PendingIcon size={12} className="mr-1" />
                            Processing
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>}
          {/* Completed and Failed Transactions */}
          <div className="space-y-3">
            {nonPendingTransactions.length > 0 && <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg mb-3 border border-gray-200">
                <CheckCircleIcon size={16} className="text-gray-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">
                  Other Transactions ({nonPendingTransactions.length})
                </span>
              </div>}
            {displayedTransactions.map((transaction, index) => <div key={index} className="bg-white border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
                <div className="flex items-center">
                  {viewMode === 'household' && transaction.owner && <div className="h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2" style={{
                backgroundColor: transaction.owner === 'Margaret' ? '#e0e7ff' : '#dbeafe',
                color: transaction.owner === 'Margaret' ? '#4f46e5' : '#2563eb'
              }}>
                      {transaction.owner.charAt(0)}
                    </div>}
                  <div className="p-2 bg-gray-100 rounded-full mr-3">
                    {getTransactionIcon(transaction.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        {transaction.type}
                      </p>
                      <div>
                        {transaction.currency === 'USD' && showOriginalCurrency ? <div className="text-right">
                            <p className={`text-sm font-medium ${getAmountColor(transaction.amount, transaction.status)}`}>
                              {transaction.amount >= 0 ? '+' : ''}
                              {formatCurrency(transaction.amount, 'USD')}
                            </p>
                            <p className="text-xs text-gray-500">
                              ≈{' '}
                              {formatCurrency(transaction.amountCAD || transaction.amount * fxRate)}
                            </p>
                          </div> : <p className={`text-sm font-medium ${getAmountColor(transaction.amount, transaction.status)}`}>
                            {transaction.amount >= 0 ? '+' : ''}
                            {formatCurrency(transaction.currency === 'CAD' ? transaction.amount : transaction.amountCAD || transaction.amount * fxRate)}
                          </p>}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <div>
                        <p className="text-xs text-gray-600">
                          {transaction.date} · {transaction.account}
                        </p>
                        <div className="mt-1">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusClass(transaction.status)}`}>
                            {getStatusIcon(transaction.status)}
                            <span className="ml-1">{transaction.status}</span>
                          </span>
                        </div>
                      </div>
                      {transaction.status === 'Failed' && <div className="text-xs text-red-600 flex items-center">
                          <AlertCircleIcon size={12} className="mr-1" />
                          Action Required
                        </div>}
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center">
            {!showAllTransactions && nonPendingTransactions.length > 3 ? <button onClick={() => setShowAllTransactions(true)} className="text-indigo-600 font-medium flex items-center">
                <span>Show All Transactions</span>
                <ArrowRightIcon size={16} className="ml-1" />
              </button> : <a href="#" className="text-indigo-600 font-medium flex items-center">
                <span>View Transaction History</span>
                <ArrowRightIcon size={16} className="ml-1" />
              </a>}
            <div className="flex items-center text-green-800 text-sm bg-green-50 px-3 py-1 rounded-full">
              <CheckCircleIcon size={14} className="mr-1 text-green-700" />
              <span>
                {viewMode === 'individual' ? 'All transactions recorded' : 'All household transactions recorded'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg text-base transition-colors">
              Transfer Funds
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg text-base transition-colors">
              Schedule Withdrawal
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg text-base transition-colors">
              Performance Report
            </button>
          </div>
        </div>
      </div>

      {/* Info Modals */}
      {activeModal && <InfoModal title={modalContent[activeModal].title} content={modalContent[activeModal].content} isOpen={!!activeModal} onClose={() => setActiveModal(null)} />}
    </div>;
};