import React from 'react';
import { XIcon, ShieldCheckIcon, CalendarIcon, ChartBarIcon, PiggyBankIcon, InfoIcon, CheckCircleIcon } from 'lucide-react';
interface OnboardingModalProps {
  onClose: () => void;
}
export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  onClose
}) => {
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-900">
            Welcome to Retirement Income Builder
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100" aria-label="Close welcome modal">
            <XIcon size={24} />
          </button>
        </div>
        <div className="p-6">
          {/* Safe Environment Badge */}
          <div className="mb-8 flex flex-col items-center">
            <div className="inline-flex items-center justify-center bg-blue-50 text-blue-700 px-6 py-3 rounded-full mb-4">
              <ShieldCheckIcon size={20} className="mr-2" />
              <span className="font-medium text-base">
                Safe Exploration Environment
              </span>
            </div>
            <p className="text-lg text-center text-gray-700 max-w-lg">
              Here you can safely explore different retirement income scenarios.
              <span className="font-medium">
                {' '}
                Nothing you do here will affect your real accounts.
              </span>
            </p>
          </div>
          {/* Three Entry Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Plan Your Horizon */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CalendarIcon size={28} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg text-center mb-3">
                Plan Your Horizon
              </h3>
              <p className="text-gray-600 text-base text-center">
                Adjust life expectancy, monthly expenses, and risk tolerance to
                fit your retirement goals.
              </p>
            </div>
            {/* See Your Income Lasting */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon size={28} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg text-center mb-3">
                See Your Income Lasting
              </h3>
              <p className="text-gray-600 text-base text-center">
                View projections of how long your retirement savings may last
                under different strategies.
              </p>
            </div>
            {/* Discover Tax-Smart Options */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PiggyBankIcon size={28} className="text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg text-center mb-3">
                Discover Tax-Smart Options
              </h3>
              <p className="text-gray-600 text-base text-center">
                Explore withdrawal and tax optimization strategies to discuss
                with your advisor.
              </p>
            </div>
          </div>
          {/* Compliance Section */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
            <div className="flex items-start mb-3">
              <InfoIcon size={20} className="text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
              <h3 className="font-medium text-gray-900 text-lg">
                Important Information
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700 text-base">
              <li className="flex items-start">
                <CheckCircleIcon size={20} className="text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  All projections are estimates based on current information and
                  assumptions.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon size={20} className="text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  You can save multiple scenarios to compare different
                  retirement strategies.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon size={20} className="text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>No changes will be made to your actual accounts.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon size={20} className="text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  For personalized advice, please consult with your financial
                  advisor.
                </span>
              </li>
            </ul>
          </div>
          {/* Language Toggle - Bilingual Ready */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">Version 1.0</div>
            <div className="flex space-x-2">
              <button className="px-3 py-2 text-base font-medium text-indigo-600 border-b-2 border-indigo-600">
                English
              </button>
              <button className="px-3 py-2 text-base font-medium text-gray-500 hover:text-indigo-600">
                Français
              </button>
            </div>
          </div>
          {/* Get Started Button */}
          <div className="flex justify-center">
            <button onClick={onClose} className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-8 rounded-lg text-lg min-h-[44px] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>;
};