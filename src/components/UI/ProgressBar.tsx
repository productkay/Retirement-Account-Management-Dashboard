import React from 'react';
interface ProgressBarProps {
  percentage: number;
  label: string;
  color?: string;
}
export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  label,
  color = 'bg-indigo-600'
}) => {
  return <div className="w-full">
      {label && <div className="text-sm font-medium text-gray-700 mb-1">{label}</div>}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={`${color} h-2.5 rounded-full`} style={{
        width: `${percentage}%`
      }}></div>
      </div>
    </div>;
};