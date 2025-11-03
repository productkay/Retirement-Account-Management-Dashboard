import React from 'react';
import { formatCurrency } from '../../utils/formatters';
interface CalendarViewProps {
  incomeCalendar: Array<{
    date: string;
    source: string;
    amount: number;
    currency?: string;
    owner?: string;
  }>;
  viewMode?: 'individual' | 'household';
}
export const CalendarView: React.FC<CalendarViewProps> = ({
  incomeCalendar,
  viewMode = 'individual'
}) => {
  // Group by date
  const calendarByDate = incomeCalendar.reduce((acc, item) => {
    const [month, day] = item.date.split(' ');
    const key = `${month} ${day}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, typeof incomeCalendar>);
  // Generate calendar days
  const generateCalendarDays = (month: string) => {
    const days = [];
    // In a real app, this would be dynamic based on the actual month
    const daysInMonth = month === 'Feb' ? 28 : 31;
    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${month} ${i}`;
      const hasIncome = calendarByDate[date] ? true : false;
      days.push({
        day: i,
        date,
        hasIncome,
        incomeItems: calendarByDate[date] || []
      });
    }
    return days;
  };
  // Get current month from first item
  const currentMonth = incomeCalendar.length > 0 ? incomeCalendar[0].date.split(' ')[0] : 'Jan';
  const calendarDays = generateCalendarDays(currentMonth);
  // Get source color
  const getSourceColor = (source: string) => {
    switch (source) {
      case 'CPP':
        return 'bg-blue-500';
      case 'OAS':
        return 'bg-green-500';
      case 'RRIF':
        return 'bg-indigo-600';
      case 'Pension':
        return 'bg-amber-500';
      case 'LIF':
        return 'bg-blue-600';
      default:
        return 'bg-gray-500';
    }
  };
  return <div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900">
          {currentMonth} {new Date().getFullYear()}
        </h3>
      </div>
      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="text-center text-sm font-medium text-gray-600">
            {day}
          </div>)}
      </div>
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Offset for starting day - this would be dynamic in a real app */}
        {[...Array(6)].map((_, i) => <div key={`offset-${i}`} className="h-24 p-1"></div>)}
        {calendarDays.map(day => <div key={day.day} className={`h-24 p-1 border rounded-lg ${day.hasIncome ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200'}`}>
            <div className="text-right mb-1">
              <span className={`text-sm font-medium ${day.hasIncome ? 'text-indigo-700' : 'text-gray-700'}`}>
                {day.day}
              </span>
            </div>
            {day.incomeItems.length > 0 && <div className="space-y-1">
                {day.incomeItems.map((item, index) => <div key={index} className="flex items-center text-xs">
                    {viewMode === 'household' && item.owner && <div className="h-3 w-3 rounded-full flex items-center justify-center mr-1" style={{
              backgroundColor: item.owner === 'Margaret' ? '#e0e7ff' : '#dbeafe',
              color: item.owner === 'Margaret' ? '#4f46e5' : '#2563eb'
            }}></div>}
                    <div className={`h-2 w-2 rounded-full ${getSourceColor(item.source)} mr-1`}></div>
                    <div className="truncate flex-1">{item.source}</div>
                  </div>)}
                <div className="text-xs font-medium text-indigo-700 text-right">
                  {formatCurrency(day.incomeItems.reduce((sum, item) => sum + item.amount, 0))}
                </div>
              </div>}
          </div>)}
      </div>
      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-3">
        <div className="flex items-center text-xs">
          <div className="h-3 w-3 rounded-full bg-blue-500 mr-1"></div>
          <span>CPP</span>
        </div>
        <div className="flex items-center text-xs">
          <div className="h-3 w-3 rounded-full bg-green-500 mr-1"></div>
          <span>OAS</span>
        </div>
        <div className="flex items-center text-xs">
          <div className="h-3 w-3 rounded-full bg-indigo-600 mr-1"></div>
          <span>RRIF</span>
        </div>
        <div className="flex items-center text-xs">
          <div className="h-3 w-3 rounded-full bg-amber-500 mr-1"></div>
          <span>Pension</span>
        </div>
        {viewMode === 'household' && <div className="flex items-center text-xs">
            <div className="h-3 w-3 rounded-full bg-blue-600 mr-1"></div>
            <span>LIF</span>
          </div>}
        {viewMode === 'household' && <>
            <div className="flex items-center text-xs ml-4">
              <div className="h-3 w-3 rounded-full bg-indigo-100 mr-1"></div>
              <span>Margaret</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="h-3 w-3 rounded-full bg-blue-100 mr-1"></div>
              <span>John</span>
            </div>
          </>}
      </div>
    </div>;
};