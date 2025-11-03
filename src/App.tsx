import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AccountsOverview } from './components/AccountsOverview';
import { TransactionsSection } from './components/TransactionsSection';
import { TalkToHumanButton } from './components/UI/TalkToHumanButton';
import { SuccessBanner } from './components/UI/SuccessBanner';
import { LastSyncIndicator } from './components/UI/LastSyncIndicator';
import { PortfolioInsights } from './components/PortfolioInsights';
import { AccessibilityMenu } from './components/UI/AccessibilityMenu';
export function App() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M');
  const [selectedAccount, setSelectedAccount] = useState('all');
  const [isBalanceHidden, setIsBalanceHidden] = useState(false);
  const [expandedAccount, setExpandedAccount] = useState('rrif');
  const [selectedPerformancePeriod, setSelectedPerformancePeriod] = useState('6M');
  const [showOriginalCurrency, setShowOriginalCurrency] = useState(false);
  const [viewMode, setViewMode] = useState<'individual' | 'household'>('individual');
  // Exchange rate
  const fxRate = 1.32; // 1 USD = 1.32 CAD
  // Primary user (Margaret) account data
  const margaretAccounts = [{
    id: 'rrsp',
    name: 'RRSP',
    institution: 'TD',
    balance: 250000,
    currency: 'CAD',
    status: 'Active',
    owner: 'Margaret',
    holdings: [{
      ticker: 'VCN',
      name: 'Vanguard FTSE Canada All Cap',
      units: 1250,
      value: 45000,
      currency: 'CAD',
      allocation: 18,
      mer: 0.05
    }, {
      ticker: 'XUS',
      name: 'iShares Core S&P 500',
      units: 850,
      value: 75000,
      currency: 'CAD',
      allocation: 30,
      mer: 0.1
    }, {
      ticker: 'ZAG',
      name: 'BMO Aggregate Bond Index',
      units: 2500,
      value: 65000,
      currency: 'CAD',
      allocation: 26,
      mer: 0.08
    }, {
      ticker: 'GIC',
      name: 'TD GIC (2-Year)',
      units: 1,
      value: 50000,
      currency: 'CAD',
      allocation: 20,
      rate: 4.15
    }, {
      ticker: 'CASH',
      name: 'Cash',
      units: 1,
      value: 15000,
      currency: 'CAD',
      allocation: 6,
      rate: 1.5
    }]
  }, {
    id: 'tfsa',
    name: 'TFSA',
    institution: 'RBC',
    balance: 180000,
    currency: 'CAD',
    status: 'Active',
    owner: 'Margaret',
    holdings: []
  }, {
    id: 'rrif',
    name: 'RRIF',
    institution: 'Questrade',
    balance: 300000,
    currency: 'CAD',
    status: 'In Transfer',
    owner: 'Margaret',
    holdings: [{
      ticker: 'VGRO',
      name: 'Vanguard Growth ETF Portfolio',
      units: 3200,
      value: 120000,
      currency: 'CAD',
      allocation: 40,
      mer: 0.22
    }, {
      ticker: 'VDY',
      name: 'Vanguard FTSE Canadian High Dividend Yield',
      units: 2800,
      value: 95000,
      currency: 'CAD',
      allocation: 31.7,
      mer: 0.2
    }, {
      ticker: 'ZDB',
      name: 'BMO Discount Bond Index ETF',
      units: 1950,
      value: 55000,
      currency: 'CAD',
      allocation: 18.3,
      mer: 0.09
    }, {
      ticker: 'CASH',
      name: 'Cash',
      units: 1,
      value: 30000,
      currency: 'CAD',
      allocation: 10,
      rate: 1.5
    }]
  }];
  // Secondary user (John) account data
  const johnAccounts = [{
    id: 'john-rrsp',
    name: 'RRSP',
    institution: 'BMO',
    balance: 180000,
    currency: 'CAD',
    status: 'Active',
    owner: 'John',
    holdings: [{
      ticker: 'VCN',
      name: 'Vanguard FTSE Canada All Cap',
      units: 950,
      value: 35000,
      currency: 'CAD',
      allocation: 19.4,
      mer: 0.05
    }, {
      ticker: 'XUS',
      name: 'iShares Core S&P 500',
      units: 650,
      value: 55000,
      currency: 'CAD',
      allocation: 30.6,
      mer: 0.1
    }, {
      ticker: 'ZAG',
      name: 'BMO Aggregate Bond Index',
      units: 1800,
      value: 45000,
      currency: 'CAD',
      allocation: 25,
      mer: 0.08
    }, {
      ticker: 'GIC',
      name: 'BMO GIC (3-Year)',
      units: 1,
      value: 35000,
      currency: 'CAD',
      allocation: 19.4,
      rate: 4.25
    }, {
      ticker: 'CASH',
      name: 'Cash',
      units: 1,
      value: 10000,
      currency: 'CAD',
      allocation: 5.6,
      rate: 1.5
    }]
  }, {
    id: 'john-lif',
    name: 'LIF',
    institution: 'TD',
    balance: 125000,
    currency: 'CAD',
    status: 'Active',
    owner: 'John',
    holdings: [{
      ticker: 'VCNS',
      name: 'Vanguard Conservative ETF Portfolio',
      units: 2200,
      value: 65000,
      currency: 'CAD',
      allocation: 52,
      mer: 0.25
    }, {
      ticker: 'XBB',
      name: 'iShares Core Canadian Universe Bond Index ETF',
      units: 1500,
      value: 45000,
      currency: 'CAD',
      allocation: 36,
      mer: 0.1
    }, {
      ticker: 'CASH',
      name: 'Cash',
      units: 1,
      value: 15000,
      currency: 'CAD',
      allocation: 12,
      rate: 1.5
    }]
  }, {
    id: 'non-registered',
    name: 'Non-Registered',
    institution: 'Wealthsimple',
    balance: 50000,
    balanceCAD: 66000,
    currency: 'USD',
    status: 'Active',
    owner: 'John',
    holdings: [{
      ticker: 'AAPL',
      name: 'Apple Inc.',
      units: 50,
      value: 8500,
      valueCAD: 11220,
      currency: 'USD',
      allocation: 17,
      mer: 0
    }, {
      ticker: 'MSFT',
      name: 'Microsoft Corporation',
      units: 30,
      value: 10500,
      valueCAD: 13860,
      currency: 'USD',
      allocation: 21,
      mer: 0
    }, {
      ticker: 'AMZN',
      name: 'Amazon.com Inc.',
      units: 25,
      value: 8000,
      valueCAD: 10560,
      currency: 'USD',
      allocation: 16,
      mer: 0
    }, {
      ticker: 'VTI',
      name: 'Vanguard Total Stock Market ETF',
      units: 60,
      value: 15000,
      valueCAD: 19800,
      currency: 'USD',
      allocation: 30,
      mer: 0.03
    }, {
      ticker: 'CASH',
      name: 'Cash',
      units: 1,
      value: 8000,
      valueCAD: 10560,
      currency: 'USD',
      allocation: 16,
      rate: 1.5
    }]
  }];
  // Combine or filter accounts based on view mode
  const accounts = viewMode === 'individual' ? margaretAccounts : [...margaretAccounts, ...johnAccounts];
  // Calculate portfolio balance based on view mode
  const calculatePortfolioBalance = () => {
    const accountsToCalculate = viewMode === 'individual' ? margaretAccounts : accounts;
    return accountsToCalculate.reduce((total, account) => {
      // For USD accounts, use the CAD equivalent
      if (account.currency === 'USD') {
        return total + (account.balanceCAD || account.balance * fxRate);
      }
      return total + account.balance;
    }, 0);
  };
  // Calculate USD equivalent of the portfolio balance
  const calculatePortfolioBalanceUSD = () => {
    const accountsToCalculate = viewMode === 'individual' ? margaretAccounts : accounts;
    return accountsToCalculate.reduce((total, account) => {
      if (account.currency === 'USD') {
        return total + account.balance;
      }
      return total + account.balance / fxRate;
    }, 0);
  };
  // Calculate individual portfolio balances
  const margaretPortfolioBalance = margaretAccounts.reduce((total, account) => {
    if (account.currency === 'USD') {
      return total + (account.balanceCAD || account.balance * fxRate);
    }
    return total + account.balance;
  }, 0);
  const margaretPortfolioBalanceUSD = margaretAccounts.reduce((total, account) => {
    if (account.currency === 'USD') {
      return total + account.balance;
    }
    return total + account.balance / fxRate;
  }, 0);
  const johnPortfolioBalance = johnAccounts.reduce((total, account) => {
    if (account.currency === 'USD') {
      return total + (account.balanceCAD || account.balance * fxRate);
    }
    return total + account.balance;
  }, 0);
  const johnPortfolioBalanceUSD = johnAccounts.reduce((total, account) => {
    if (account.currency === 'USD') {
      return total + account.balance;
    }
    return total + account.balance / fxRate;
  }, 0);
  // Portfolio balance based on view mode and currency preference
  const portfolioBalance = showOriginalCurrency ? calculatePortfolioBalanceUSD() : calculatePortfolioBalance();
  const displayCurrency = showOriginalCurrency ? 'USD' : 'CAD';
  // Calculate USD portion of portfolio for display
  const portfolioBalanceUSD = accounts.filter(account => account.currency === 'USD').reduce((total, account) => total + account.balance, 0);
  const portfolioBalanceCAD = accounts.filter(account => account.currency === 'CAD').reduce((total, account) => total + account.balance, 0);
  // Performance data with new time periods
  const performanceData = {
    timePeriods: ['15D', '1M', '3M', '6M', '1Y', 'Since inception'],
    selectedPeriod: selectedPerformancePeriod,
    data: {
      '15D': {
        values: [{
          date: 'Sep 1',
          value: 825000,
          valueUSD: 825000 / fxRate
        }, {
          date: 'Sep 3',
          value: 830000,
          valueUSD: 830000 / fxRate
        }, {
          date: 'Sep 5',
          value: 828000,
          valueUSD: 828000 / fxRate
        }, {
          date: 'Sep 7',
          value: 832000,
          valueUSD: 832000 / fxRate
        }, {
          date: 'Sep 9',
          value: 835000,
          valueUSD: 835000 / fxRate
        }, {
          date: 'Sep 11',
          value: 840000,
          valueUSD: 840000 / fxRate
        }, {
          date: 'Sep 13',
          value: 847500,
          valueUSD: 847500 / fxRate
        }],
        change: 22500,
        changeUSD: 22500 / fxRate,
        percentChange: 2.73
      },
      '1M': {
        values: [{
          date: 'Aug 15',
          value: 815000,
          valueUSD: 815000 / fxRate
        }, {
          date: 'Aug 20',
          value: 820000,
          valueUSD: 820000 / fxRate
        }, {
          date: 'Aug 25',
          value: 825000,
          valueUSD: 825000 / fxRate
        }, {
          date: 'Aug 30',
          value: 830000,
          valueUSD: 830000 / fxRate
        }, {
          date: 'Sep 5',
          value: 835000,
          valueUSD: 835000 / fxRate
        }, {
          date: 'Sep 10',
          value: 840000,
          valueUSD: 840000 / fxRate
        }, {
          date: 'Sep 15',
          value: 847500,
          valueUSD: 847500 / fxRate
        }],
        change: 32500,
        changeUSD: 32500 / fxRate,
        percentChange: 3.99
      },
      '3M': {
        values: [{
          date: 'Jun 15',
          value: 790000,
          valueUSD: 790000 / fxRate
        }, {
          date: 'Jul 1',
          value: 800000,
          valueUSD: 800000 / fxRate
        }, {
          date: 'Jul 15',
          value: 810000,
          valueUSD: 810000 / fxRate
        }, {
          date: 'Aug 1',
          value: 820000,
          valueUSD: 820000 / fxRate
        }, {
          date: 'Aug 15',
          value: 830000,
          valueUSD: 830000 / fxRate
        }, {
          date: 'Sep 1',
          value: 840000,
          valueUSD: 840000 / fxRate
        }, {
          date: 'Sep 15',
          value: 847500,
          valueUSD: 847500 / fxRate
        }],
        change: 57500,
        changeUSD: 57500 / fxRate,
        percentChange: 7.28
      },
      '6M': {
        values: [{
          date: 'Mar 15',
          value: 760000,
          valueUSD: 760000 / fxRate
        }, {
          date: 'Apr 15',
          value: 775000,
          valueUSD: 775000 / fxRate
        }, {
          date: 'May 15',
          value: 790000,
          valueUSD: 790000 / fxRate
        }, {
          date: 'Jun 15',
          value: 805000,
          valueUSD: 805000 / fxRate
        }, {
          date: 'Jul 15',
          value: 820000,
          valueUSD: 820000 / fxRate
        }, {
          date: 'Aug 15',
          value: 835000,
          valueUSD: 835000 / fxRate
        }, {
          date: 'Sep 15',
          value: 847500,
          valueUSD: 847500 / fxRate
        }],
        change: 87500,
        changeUSD: 87500 / fxRate,
        percentChange: 11.51
      },
      '1Y': {
        values: [{
          date: 'Sep 22',
          value: 700000,
          valueUSD: 700000 / fxRate
        }, {
          date: 'Nov 22',
          value: 720000,
          valueUSD: 720000 / fxRate
        }, {
          date: 'Jan 23',
          value: 745000,
          valueUSD: 745000 / fxRate
        }, {
          date: 'Mar 23',
          value: 770000,
          valueUSD: 770000 / fxRate
        }, {
          date: 'May 23',
          value: 795000,
          valueUSD: 795000 / fxRate
        }, {
          date: 'Jul 23',
          value: 820000,
          valueUSD: 820000 / fxRate
        }, {
          date: 'Sep 23',
          value: 847500,
          valueUSD: 847500 / fxRate
        }],
        change: 147500,
        changeUSD: 147500 / fxRate,
        percentChange: 21.07
      },
      'Since inception': {
        values: [{
          date: 'Jan 19',
          value: 620000,
          valueUSD: 620000 / fxRate
        }, {
          date: 'Jan 20',
          value: 645000,
          valueUSD: 645000 / fxRate
        }, {
          date: 'Jan 21',
          value: 690000,
          valueUSD: 690000 / fxRate
        }, {
          date: 'Jan 22',
          value: 715000,
          valueUSD: 715000 / fxRate
        }, {
          date: 'Jan 23',
          value: 760000,
          valueUSD: 760000 / fxRate
        }, {
          date: 'Jan 24',
          value: 847500,
          valueUSD: 847500 / fxRate
        }],
        change: 227500,
        changeUSD: 227500 / fxRate,
        percentChange: 36.7
      }
    }
  };
  // Asset allocation data
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
  // Income data - Margaret
  const margaretMonthlyIncome = {
    total: 4850,
    totalUSD: 4850 / fxRate,
    sources: [{
      name: 'CPP',
      amount: 1200,
      amountUSD: 1200 / fxRate,
      currency: 'CAD',
      owner: 'Margaret'
    }, {
      name: 'OAS',
      amount: 700,
      amountUSD: 700 / fxRate,
      currency: 'CAD',
      owner: 'Margaret'
    }, {
      name: 'RRIF',
      amount: 2450,
      amountUSD: 2450 / fxRate,
      currency: 'CAD',
      owner: 'Margaret'
    }, {
      name: 'Pension',
      amount: 500,
      amountUSD: 500 / fxRate,
      currency: 'CAD',
      owner: 'Margaret'
    }]
  };
  // Income data - John
  const johnMonthlyIncome = {
    total: 2350,
    totalUSD: 2350 / fxRate,
    sources: [{
      name: 'CPP',
      amount: 1050,
      amountUSD: 1050 / fxRate,
      currency: 'CAD',
      owner: 'John'
    }, {
      name: 'OAS',
      amount: 650,
      amountUSD: 650 / fxRate,
      currency: 'CAD',
      owner: 'John'
    }, {
      name: 'LIF',
      amount: 650,
      amountUSD: 650 / fxRate,
      currency: 'CAD',
      owner: 'John'
    }]
  };
  // Household income data
  const householdMonthlyIncome = {
    total: margaretMonthlyIncome.total + johnMonthlyIncome.total,
    totalUSD: margaretMonthlyIncome.totalUSD + johnMonthlyIncome.totalUSD,
    sources: [...margaretMonthlyIncome.sources, ...johnMonthlyIncome.sources],
    individuals: [{
      name: 'Margaret',
      total: margaretMonthlyIncome.total,
      totalUSD: margaretMonthlyIncome.totalUSD,
      percentage: Math.round(margaretMonthlyIncome.total / (margaretMonthlyIncome.total + johnMonthlyIncome.total) * 100)
    }, {
      name: 'John',
      total: johnMonthlyIncome.total,
      totalUSD: johnMonthlyIncome.totalUSD,
      percentage: Math.round(johnMonthlyIncome.total / (margaretMonthlyIncome.total + johnMonthlyIncome.total) * 100)
    }]
  };
  // Monthly income based on view mode
  const monthlyIncome = viewMode === 'individual' ? margaretMonthlyIncome : householdMonthlyIncome;
  // RRIF withdrawal data - Margaret
  const margaretRrifData = {
    withdrawalsYTD: 29400,
    withdrawalsYTDUSD: 29400 / fxRate,
    minimumRequired: 32000,
    minimumRequiredUSD: 32000 / fxRate,
    percentComplete: 92,
    owner: 'Margaret'
  };
  // RRIF/LIF withdrawal data - John
  const johnRrifData = {
    withdrawalsYTD: 7800,
    withdrawalsYTDUSD: 7800 / fxRate,
    minimumRequired: 8500,
    minimumRequiredUSD: 8500 / fxRate,
    percentComplete: 92,
    owner: 'John'
  };
  // Household RRIF data
  const householdRrifData = {
    withdrawalsYTD: margaretRrifData.withdrawalsYTD + johnRrifData.withdrawalsYTD,
    withdrawalsYTDUSD: margaretRrifData.withdrawalsYTDUSD + johnRrifData.withdrawalsYTDUSD,
    minimumRequired: margaretRrifData.minimumRequired + johnRrifData.minimumRequired,
    minimumRequiredUSD: margaretRrifData.minimumRequiredUSD + johnRrifData.minimumRequiredUSD,
    percentComplete: Math.round((margaretRrifData.withdrawalsYTD + johnRrifData.withdrawalsYTD) / (margaretRrifData.minimumRequired + johnRrifData.minimumRequired) * 100),
    individuals: [margaretRrifData, johnRrifData]
  };
  // RRIF data based on view mode
  const rrifData = viewMode === 'individual' ? margaretRrifData : householdRrifData;
  // Longevity projection - Margaret
  const margaretLongevityProjection = {
    projectedAge: 91,
    monthlySpending: 3200,
    monthlySpendingUSD: 3200 / fxRate,
    assumedReturn: 4,
    owner: 'Margaret'
  };
  // Longevity projection - John
  const johnLongevityProjection = {
    projectedAge: 89,
    monthlySpending: 2800,
    monthlySpendingUSD: 2800 / fxRate,
    assumedReturn: 4,
    owner: 'John'
  };
  // Household longevity projection
  const householdLongevityProjection = {
    projectedAge: 92,
    monthlySpending: 5800,
    monthlySpendingUSD: 5800 / fxRate,
    assumedReturn: 4,
    individuals: [margaretLongevityProjection, johnLongevityProjection]
  };
  // Longevity projection based on view mode
  const longevityProjection = viewMode === 'individual' ? margaretLongevityProjection : householdLongevityProjection;
  // Margaret's transactions
  const margaretTransactions = [{
    date: 'Dec 15',
    account: 'RRIF',
    type: 'Withdrawal',
    amount: -2450,
    amountUSD: -2450 / fxRate,
    currency: 'CAD',
    status: 'Completed',
    owner: 'Margaret'
  }, {
    date: 'Dec 10',
    account: 'TFSA',
    type: 'Deposit',
    amount: 5000,
    amountUSD: 5000 / fxRate,
    currency: 'CAD',
    status: 'Pending',
    owner: 'Margaret'
  }, {
    date: 'Dec 8',
    account: 'RRSP',
    type: 'Transfer',
    amount: -10000,
    amountUSD: -10000 / fxRate,
    currency: 'CAD',
    status: 'Completed',
    owner: 'Margaret'
  }];
  // John's transactions
  const johnTransactions = [{
    date: 'Dec 12',
    account: 'Non-Registered',
    type: 'Dividend',
    amount: 118,
    amountCAD: 156,
    amountUSD: 118,
    currency: 'USD',
    status: 'Completed',
    owner: 'John'
  }, {
    date: 'Dec 5',
    account: 'Non-Registered',
    type: 'Transfer',
    amount: -758,
    amountCAD: -1000,
    amountUSD: -758,
    currency: 'USD',
    status: 'Failed',
    owner: 'John'
  }, {
    date: 'Dec 3',
    account: 'LIF',
    type: 'Withdrawal',
    amount: -650,
    amountUSD: -650 / fxRate,
    currency: 'CAD',
    status: 'Completed',
    owner: 'John'
  }];
  // Recent transactions based on view mode
  const recentTransactions = viewMode === 'individual' ? margaretTransactions : [...margaretTransactions, ...johnTransactions].sort((a, b) => {
    // Sort by date (assuming format is "MMM DD")
    const dateA = new Date(`2023 ${a.date}`);
    const dateB = new Date(`2023 ${b.date}`);
    return dateB.getTime() - dateA.getTime();
  });
  // Margaret's income calendar
  const margaretIncomeCalendar = [{
    date: 'Jan 20',
    source: 'CPP',
    amount: 1200,
    amountUSD: 1200 / fxRate,
    currency: 'CAD',
    owner: 'Margaret'
  }, {
    date: 'Jan 20',
    source: 'OAS',
    amount: 700,
    amountUSD: 700 / fxRate,
    currency: 'CAD',
    owner: 'Margaret'
  }, {
    date: 'Jan 25',
    source: 'Pension',
    amount: 500,
    amountUSD: 500 / fxRate,
    currency: 'CAD',
    owner: 'Margaret'
  }, {
    date: 'Jan 31',
    source: 'RRIF',
    amount: 2450,
    amountUSD: 2450 / fxRate,
    currency: 'CAD',
    owner: 'Margaret'
  }, {
    date: 'Feb 20',
    source: 'CPP',
    amount: 1200,
    amountUSD: 1200 / fxRate,
    currency: 'CAD',
    owner: 'Margaret'
  }, {
    date: 'Feb 20',
    source: 'OAS',
    amount: 700,
    amountUSD: 700 / fxRate,
    currency: 'CAD',
    owner: 'Margaret'
  }, {
    date: 'Feb 25',
    source: 'Pension',
    amount: 500,
    amountUSD: 500 / fxRate,
    currency: 'CAD',
    owner: 'Margaret'
  }, {
    date: 'Feb 28',
    source: 'RRIF',
    amount: 2450,
    amountUSD: 2450 / fxRate,
    currency: 'CAD',
    owner: 'Margaret'
  }, {
    date: 'Mar 20',
    source: 'CPP',
    amount: 1200,
    amountUSD: 1200 / fxRate,
    currency: 'CAD',
    owner: 'Margaret'
  }, {
    date: 'Mar 20',
    source: 'OAS',
    amount: 700,
    amountUSD: 700 / fxRate,
    currency: 'CAD',
    owner: 'Margaret'
  }, {
    date: 'Mar 25',
    source: 'Pension',
    amount: 500,
    amountUSD: 500 / fxRate,
    currency: 'CAD',
    owner: 'Margaret'
  }, {
    date: 'Mar 31',
    source: 'RRIF',
    amount: 2450,
    amountUSD: 2450 / fxRate,
    currency: 'CAD',
    owner: 'Margaret'
  }];
  // John's income calendar
  const johnIncomeCalendar = [{
    date: 'Jan 18',
    source: 'CPP',
    amount: 1050,
    amountUSD: 1050 / fxRate,
    currency: 'CAD',
    owner: 'John'
  }, {
    date: 'Jan 18',
    source: 'OAS',
    amount: 650,
    amountUSD: 650 / fxRate,
    currency: 'CAD',
    owner: 'John'
  }, {
    date: 'Jan 28',
    source: 'LIF',
    amount: 650,
    amountUSD: 650 / fxRate,
    currency: 'CAD',
    owner: 'John'
  }, {
    date: 'Feb 18',
    source: 'CPP',
    amount: 1050,
    amountUSD: 1050 / fxRate,
    currency: 'CAD',
    owner: 'John'
  }, {
    date: 'Feb 18',
    source: 'OAS',
    amount: 650,
    amountUSD: 650 / fxRate,
    currency: 'CAD',
    owner: 'John'
  }, {
    date: 'Feb 28',
    source: 'LIF',
    amount: 650,
    amountUSD: 650 / fxRate,
    currency: 'CAD',
    owner: 'John'
  }, {
    date: 'Mar 18',
    source: 'CPP',
    amount: 1050,
    amountUSD: 1050 / fxRate,
    currency: 'CAD',
    owner: 'John'
  }, {
    date: 'Mar 18',
    source: 'OAS',
    amount: 650,
    amountUSD: 650 / fxRate,
    currency: 'CAD',
    owner: 'John'
  }, {
    date: 'Mar 28',
    source: 'LIF',
    amount: 650,
    amountUSD: 650 / fxRate,
    currency: 'CAD',
    owner: 'John'
  }];
  // Income calendar based on view mode
  const incomeCalendar = viewMode === 'individual' ? margaretIncomeCalendar : [...margaretIncomeCalendar, ...johnIncomeCalendar].sort((a, b) => {
    // Sort by month then day
    const [aMonth, aDay] = a.date.split(' ');
    const [bMonth, bDay] = b.date.split(' ');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const aMonthIndex = months.indexOf(aMonth);
    const bMonthIndex = months.indexOf(bMonth);
    if (aMonthIndex !== bMonthIndex) {
      return aMonthIndex - bMonthIndex;
    }
    return parseInt(aDay) - parseInt(bDay);
  });
  // Get current date and time for last sync
  const now = new Date();
  const lastSyncTime = `${now.toLocaleDateString()} ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')} PM`;
  return <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header portfolioBalance={portfolioBalance} portfolioBalanceUSD={portfolioBalanceUSD} fxRate={fxRate} isBalanceHidden={isBalanceHidden} showOriginalCurrency={showOriginalCurrency} onToggleBalanceVisibility={() => setIsBalanceHidden(!isBalanceHidden)} onToggleCurrencyDisplay={() => setShowOriginalCurrency(!showOriginalCurrency)} accounts={accounts} selectedAccount={selectedAccount} onSelectAccount={setSelectedAccount} selectedTimeframe={selectedTimeframe} onSelectTimeframe={setSelectedTimeframe} viewMode={viewMode} setViewMode={setViewMode} margaretPortfolioBalance={margaretPortfolioBalance} johnPortfolioBalance={johnPortfolioBalance} margaretPortfolioBalanceUSD={margaretPortfolioBalanceUSD} johnPortfolioBalanceUSD={johnPortfolioBalanceUSD} displayCurrency={displayCurrency} />
      <main className="container mx-auto px-4 py-6 max-w-screen-xl">
        <SuccessBanner message={viewMode === 'individual' ? 'Your retirement plan is on track! Well done!' : 'Your household retirement plan is on track! Well done!'} submessage={viewMode === 'individual' ? `Your monthly income exceeds your expenses by ${showOriginalCurrency ? '$1,250' : '$1,650'}` : `Your household monthly income exceeds expenses by ${showOriginalCurrency ? '$1,818' : '$2,400'}`} />
        <div className="flex justify-between items-center mb-4">
          <LastSyncIndicator lastSyncTime={lastSyncTime} />
        </div>
        <HeroSection monthlyIncome={monthlyIncome} rrifData={rrifData} longevityProjection={longevityProjection} assetAllocation={assetAllocation} portfolioBalance={portfolioBalance} performanceData={performanceData} onSelectTimePeriod={setSelectedPerformancePeriod} showOriginalCurrency={showOriginalCurrency} viewMode={viewMode} displayCurrency={displayCurrency} fxRate={fxRate} />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AccountsOverview accounts={accounts} expandedAccount={expandedAccount} setExpandedAccount={setExpandedAccount} showOriginalCurrency={showOriginalCurrency} fxRate={fxRate} viewMode={viewMode} margaretPortfolioBalance={margaretPortfolioBalance} johnPortfolioBalance={johnPortfolioBalance} margaretPortfolioBalanceUSD={margaretPortfolioBalanceUSD} johnPortfolioBalanceUSD={johnPortfolioBalanceUSD} displayCurrency={displayCurrency} />
          </div>
          <div className="lg:col-span-1">
            <TransactionsSection recentTransactions={recentTransactions} incomeCalendar={incomeCalendar} showOriginalCurrency={showOriginalCurrency} fxRate={fxRate} viewMode={viewMode} displayCurrency={displayCurrency} />
          </div>
        </div>
        <PortfolioInsights viewMode={viewMode} displayCurrency={displayCurrency} />
      </main>
      <TalkToHumanButton />
      <AccessibilityMenu />
    </div>;
}