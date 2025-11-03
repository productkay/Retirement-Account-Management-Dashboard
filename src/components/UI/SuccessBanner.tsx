import React, { useState } from 'react';
import { CheckCircleIcon, XIcon } from 'lucide-react';
interface SuccessBannerProps {
  message: string;
  submessage?: string;
}
export const SuccessBanner: React.FC<SuccessBannerProps> = ({
  message,
  submessage
}) => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start">
      <div className="flex-shrink-0">
        <CheckCircleIcon className="h-5 w-5 text-green-600" />
      </div>
      <div className="ml-3 flex-1">
        <p className="text-sm font-medium text-green-800">{message}</p>
        {submessage && <p className="mt-1 text-sm text-green-700">{submessage}</p>}
      </div>
      <button className="ml-auto flex-shrink-0 bg-green-50 text-green-500 hover:text-green-800 focus:outline-none" onClick={() => setIsVisible(false)}>
        <XIcon className="h-5 w-5" />
      </button>
    </div>;
};