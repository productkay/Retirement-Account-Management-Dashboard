import React from 'react';
import { CheckCircleIcon, ThumbsUpIcon, StarIcon, BadgeCheckIcon } from 'lucide-react';
type ReassuranceType = 'success' | 'progress' | 'reminder' | 'achievement';
interface ReassuranceMessageProps {
  type: ReassuranceType;
  message: string;
}
export const ReassuranceMessage: React.FC<ReassuranceMessageProps> = ({
  type,
  message
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="h-4 w-4 text-green-600" />;
      case 'progress':
        return <ThumbsUpIcon className="h-4 w-4 text-indigo-600" />;
      case 'reminder':
        return <StarIcon className="h-4 w-4 text-amber-500" />;
      case 'achievement':
        return <BadgeCheckIcon className="h-4 w-4 text-indigo-600" />;
      default:
        return <CheckCircleIcon className="h-4 w-4 text-green-600" />;
    }
  };
  const getTextColor = () => {
    switch (type) {
      case 'success':
        return 'text-green-700';
      case 'progress':
        return 'text-indigo-700';
      case 'reminder':
        return 'text-amber-700';
      case 'achievement':
        return 'text-indigo-700';
      default:
        return 'text-green-700';
    }
  };
  return <div className="flex items-center space-x-1.5 mt-1">
      {getIcon()}
      <p className={`text-sm font-medium ${getTextColor()}`}>{message}</p>
    </div>;
};