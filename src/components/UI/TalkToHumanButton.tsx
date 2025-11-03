import React, { useState } from 'react';
import { PhoneIcon, MessageSquareIcon } from 'lucide-react';
export const TalkToHumanButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {showTooltip && <div className="mb-3 bg-white p-3 rounded-lg shadow-lg text-sm max-w-xs">
          <p className="font-medium text-gray-900">Need help?</p>
          <p className="text-gray-600">
            Our retirement specialists are ready to assist you.
          </p>
          <p className="mt-2 text-green-700 font-medium">
            Available Monday-Friday, 9AM-5PM
          </p>
        </div>}
      <button className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors flex items-center justify-center" aria-label="Talk to a human" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        <PhoneIcon size={24} />
      </button>
    </div>;
};