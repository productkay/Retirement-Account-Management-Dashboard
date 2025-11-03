import React, { useEffect, useState, useRef } from 'react';
import { formatCurrency } from '../../utils/formatters';
import { EyeIcon, PlusIcon } from 'lucide-react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
interface PerformanceChartProps {
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
  showOriginalCurrency?: boolean;
}
export const PerformanceChart: React.FC<PerformanceChartProps> = ({
  portfolioBalance,
  performanceData,
  onSelectTimePeriod,
  showOriginalCurrency = false
}) => {
  const {
    selectedPeriod,
    data
  } = performanceData;
  const currentPeriodData = data[selectedPeriod];
  const [isBalanceHidden, setIsBalanceHidden] = useState(false);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  // Create or update chart when data changes
  useEffect(() => {
    if (!chartRef.current) return;
    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;
    const chartData = currentPeriodData.values.map(item => ({
      x: item.date,
      y: item.value
    }));
    // Create new chart
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Portfolio Value',
          data: chartData,
          borderColor: '#4ade80',
          backgroundColor: 'rgba(74, 222, 128, 0.2)',
          borderWidth: 2,
          pointBackgroundColor: '#4ade80',
          pointRadius: 3,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#4ade80',
          pointHoverBorderColor: 'white',
          pointHoverBorderWidth: 2,
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          tooltip: {
            backgroundColor: 'rgba(17, 24, 39, 0.95)',
            padding: 12,
            titleFont: {
              size: 14,
              weight: 'bold'
            },
            bodyFont: {
              size: 14
            },
            callbacks: {
              title: tooltipItems => {
                return tooltipItems[0].label;
              },
              label: context => {
                return `${formatCurrency(context.parsed.y)}`;
              }
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 12
              },
              color: '#9ca3af'
            }
          },
          y: {
            grid: {
              color: 'rgba(209, 213, 219, 0.5)',
              drawBorder: false
            },
            ticks: {
              font: {
                size: 12
              },
              color: '#9ca3af',
              callback: function (value) {
                return `${(Number(value) / 1000).toFixed(0)},000`;
              }
            }
          }
        }
      }
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [currentPeriodData]);
  return <div className="w-full">
      {/* Header with total equity and time period selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
        <div className="flex items-center gap-2">
          <h3 className="text-gray-600 font-medium text-lg">
            Total equity (Combined in CAD)
          </h3>
          <button onClick={() => setIsBalanceHidden(!isBalanceHidden)} className="text-gray-500 hover:text-gray-700">
            <EyeIcon size={20} />
          </button>
        </div>
        {/* Time period selector */}
        <div className="flex flex-wrap gap-2">
          {performanceData.timePeriods.map(period => <button key={period} onClick={() => onSelectTimePeriod(period)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${period === performanceData.selectedPeriod ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {period}
            </button>)}
        </div>
      </div>
      {/* Portfolio balance and performance metrics */}
      <div className="mb-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-2">
          {isBalanceHidden ? '••••••••' : formatCurrency(portfolioBalance)}
        </h2>
        <div className="flex items-center text-sm">
          {isBalanceHidden ? <span className="text-green-600 font-medium">••••••••</span> : <span className="text-green-600 font-medium">
              +{formatCurrency(currentPeriodData.change)}
            </span>}
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-green-600 font-medium">
            +{currentPeriodData.percentChange}%
          </span>
          <span className="ml-1 text-gray-600">over {selectedPeriod}</span>
        </div>
      </div>
      {/* Chart container */}
      <div className="relative h-80 mt-6 mb-8">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>;
};