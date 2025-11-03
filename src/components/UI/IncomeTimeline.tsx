import React from 'react';
import { formatCurrency } from '../../utils/formatters';
import { CalendarIcon } from 'lucide-react';
interface IncomeTimelineProps {
  incomeCalendar: Array<{
    date: string;
    source: string;
    amount: number;
    owner?: string;
  }>;
  viewMode?: 'individual' | 'household';
}
export const IncomeTimeline: React.FC<IncomeTimelineProps> = ({
  incomeCalendar,
  viewMode = 'individual'
}) => {
  // Sort income by date
  const sortedIncome = [...incomeCalendar].sort((a, b) => {
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
  // Get source color
  const getSourceColor = (source: string) => {
    switch (source) {
      case 'CPP':
        return 'border-blue-500 bg-blue-50';
      case 'OAS':
        return 'border-green-500 bg-green-50';
      case 'RRIF':
        return 'border-indigo-600 bg-indigo-50';
      case 'Pension':
        return 'border-amber-500 bg-amber-50';
      case 'LIF':
        return 'border-blue-600 bg-blue-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };
  const getSourceTextColor = (source: string) => {
    switch (source) {
      case 'CPP':
        return 'text-blue-700';
      case 'OAS':
        return 'text-green-700';
      case 'RRIF':
        return 'text-indigo-700';
      case 'Pension':
        return 'text-amber-700';
      case 'LIF':
        return 'text-blue-700';
      default:
        return 'text-gray-700';
    }
  };
  return <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
      <div className="space-y-4">
        {sortedIncome.map((income, index) => <div key={index} className="relative pl-10">
            {/* Timeline dot */}
            <div className={`absolute left-0 top-2 w-7 h-7 rounded-full border-2 flex items-center justify-center ${getSourceColor(income.source)}`}>
              {viewMode === 'household' && income.owner ? <span className={`text-xs font-bold`} style={{
            color: income.owner === 'Margaret' ? '#4f46e5' : '#2563eb'
          }}>
                  {income.owner.charAt(0)}
                </span> : <span className={`text-xs font-bold ${getSourceTextColor(income.source)}`}>
                  {income.source.charAt(0)}
                </span>}
            </div>
            {/* Income card */}
            <div className={`rounded-lg p-3 border-l-4 ${getSourceColor(income.source).split(' ')[0]}`}>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    {viewMode === 'household' && income.owner && <div className="h-4 w-4 rounded-full flex items-center justify-center text-xs mr-2" style={{
                  backgroundColor: income.owner === 'Margaret' ? '#e0e7ff' : '#dbeafe',
                  color: income.owner === 'Margaret' ? '#4f46e5' : '#2563eb'
                }}>
                        {income.owner.charAt(0)}
                      </div>}
                    <h4 className={`font-medium ${getSourceTextColor(income.source)}`}>
                      {income.source}
                    </h4>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <CalendarIcon size={14} className="mr-1.5" />
                    <span>{income.date}</span>
                  </div>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {formatCurrency(income.amount)}
                </div>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};