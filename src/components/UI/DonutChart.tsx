import React from 'react';
interface DonutChartProps {
  data: Array<{
    category: string;
    percentage: number;
    color: string;
  }>;
}
export const DonutChart: React.FC<DonutChartProps> = ({
  data
}) => {
  // Calculate the stroke-dasharray and stroke-dashoffset for each segment
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  let currentOffset = 0;
  const segments = data.map(item => {
    const strokeDasharray = item.percentage / 100 * circumference;
    const segment = {
      strokeDasharray: `${strokeDasharray} ${circumference - strokeDasharray}`,
      strokeDashoffset: -currentOffset,
      color: item.color
    };
    currentOffset += strokeDasharray;
    return segment;
  });
  return <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        {segments.map((segment, index) => <circle key={index} cx="50" cy="50" r={radius} fill="transparent" stroke={segment.color} strokeWidth="20" strokeDasharray={segment.strokeDasharray} strokeDashoffset={segment.strokeDashoffset} aria-hidden="true" />)}
        <circle cx="50" cy="50" r="30" fill="white" aria-hidden="true" />
      </svg>
    </div>;
};