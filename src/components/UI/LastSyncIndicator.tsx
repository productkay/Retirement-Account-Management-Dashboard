import React from 'react';
import { ClockIcon, RefreshCwIcon } from 'lucide-react';
interface LastSyncIndicatorProps {
  lastSyncTime: string;
}
export const LastSyncIndicator: React.FC<LastSyncIndicatorProps> = ({
  lastSyncTime
}) => {
  return <div className="flex items-center text-sm text-gray-600">
      <ClockIcon size={14} className="mr-1.5" />
      <span>Last synced: {lastSyncTime}</span>
      <button className="ml-2 text-indigo-600 hover:text-indigo-800 flex items-center">
        <RefreshCwIcon size={14} className="mr-1" />
        <span>Refresh</span>
      </button>
    </div>;
};