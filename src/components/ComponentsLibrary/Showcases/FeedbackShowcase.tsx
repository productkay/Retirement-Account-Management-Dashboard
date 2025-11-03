import React, { useState, Component } from 'react';
import { ComponentShowcase, ComponentExample, PropsTable } from '../Layout';
import { CheckCircleIcon, XIcon, InfoIcon, AlertTriangleIcon, ShieldCheckIcon } from 'lucide-react';
export const FeedbackShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Feedback & Alerts
      </h1>
      <p className="text-gray-600 mb-8">
        Components that provide feedback to users, display notifications, or
        request confirmation.
      </p>
      <ComponentShowcase title="Banners" description="Horizontal banners that display important information at the top of the page.">
        <ComponentExample title="Success Banner" description="Banner that confirms a successful action or status." code={`<div className="bg-green-50 border-l-4 border-green-500 p-4">
  <div className="flex">
    <div className="flex-shrink-0">
      <CheckCircleIcon className="h-5 w-5 text-green-600" />
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium text-green-800">
        Your retirement plan is on track! Well done!
      </p>
      <p className="mt-1 text-sm text-green-700">
        Your monthly income exceeds your expenses by $1,650
      </p>
    </div>
    <div className="ml-auto pl-3">
      <div className="-mx-1.5 -my-1.5">
        <button className="p-1.5 rounded-md text-green-500 hover:bg-green-100">
          <XIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</div>`}>
          {showBanner && <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Your retirement plan is on track! Well done!
                  </p>
                  <p className="mt-1 text-sm text-green-700">
                    Your monthly income exceeds your expenses by $1,650
                  </p>
                </div>
                <div className="ml-auto pl-3">
                  <div className="-mx-1.5 -my-1.5">
                    <button className="p-1.5 rounded-md text-green-500 hover:bg-green-100" onClick={() => setShowBanner(false)}>
                      <XIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>}
          {!showBanner && <button className="px-4 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200" onClick={() => setShowBanner(true)}>
              Show Banner Again
            </button>}
        </ComponentExample>
        <ComponentExample title="Information Banner" description="Banner that provides important information or context." code={`<div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
  <InfoIcon className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" size={20} />
  <div>
    <h2 className="text-blue-800 font-medium text-base">
      You're in the Income Builder Sandbox
    </h2>
    <p className="text-blue-700 text-sm mt-1">
      This is a safe space to explore different retirement income scenarios. 
      Nothing you do here will affect your real accounts.
    </p>
  </div>
</div>`}>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
            <InfoIcon className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" size={20} />
            <div>
              <h2 className="text-blue-800 font-medium text-base">
                You're in the Income Builder Sandbox
              </h2>
              <p className="text-blue-700 text-sm mt-1">
                This is a safe space to explore different retirement income
                scenarios. Nothing you do here will affect your real accounts.
              </p>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Warning Banner" description="Banner that alerts users to potential issues." code={`<div className="bg-amber-50 border-l-4 border-amber-500 p-4">
  <div className="flex">
    <div className="flex-shrink-0">
      <AlertTriangleIcon className="h-5 w-5 text-amber-600" />
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium text-amber-800">
        Attention Required
      </p>
      <p className="mt-1 text-sm text-amber-700">
        Your RRIF withdrawal is below the minimum required amount. 
        You need to withdraw an additional $2,600 before December 31.
      </p>
    </div>
  </div>
</div>`}>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangleIcon className="h-5 w-5 text-amber-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-amber-800">
                  Attention Required
                </p>
                <p className="mt-1 text-sm text-amber-700">
                  Your RRIF withdrawal is below the minimum required amount. You
                  need to withdraw an additional $2,600 before December 31.
                </p>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Inline Notifications" description="Compact notifications that appear within the content.">
        <ComponentExample title="Status Indicators" description="Compact indicators for various statuses." code={`<div className="flex space-x-4">
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
    <CheckCircleIcon size={12} className="mr-1" />
    On Track
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
    <AlertTriangleIcon size={12} className="mr-1" />
    Needs Attention
  </span>
</div>`}>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <CheckCircleIcon size={12} className="mr-1" />
              On Track
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              <AlertTriangleIcon size={12} className="mr-1" />
              Needs Attention
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 mr-1">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              At Risk
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <InfoIcon size={12} className="mr-1" />
              Information
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              New
            </span>
          </div>
        </ComponentExample>
        <ComponentExample title="Transaction Status" description="Status indicators for financial transactions." code={`<div className="space-y-2">
  <div className="flex items-center text-sm text-green-600">
    <CheckCircleIcon size={14} className="mr-1" />
    <span>Completed</span>
  </div>
  <div className="flex items-center text-sm text-amber-600">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 mr-1">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
    <span>Pending</span>
  </div>
</div>`}>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-green-600">
              <CheckCircleIcon size={14} className="mr-1" />
              <span>Completed</span>
            </div>
            <div className="flex items-center text-sm text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 mr-1">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Pending</span>
            </div>
            <div className="flex items-center text-sm text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 mr-1">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>Failed</span>
            </div>
            <div className="flex items-center text-sm text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 mr-1">
                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8z" />
                <path d="M12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
              </svg>
              <span>In Transfer</span>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Modals" description="Dialog windows that appear on top of the main content.">
        <ComponentExample title="Information Modal" description="Modal that provides detailed information." code={`<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
      <h3 className="text-lg font-medium text-gray-900">
        Income This Month
      </h3>
      <button className="text-gray-400 hover:text-gray-500">
        <XIcon size={20} />
      </button>
    </div>
    <div className="px-6 py-4">
      <p className="text-gray-600">
        This card shows your total monthly income from all sources for the current month.
      </p>
      <p className="mt-4 text-gray-600">
        Your income comes from multiple sources including CPP, OAS, RRIF, and Pension.
      </p>
    </div>
    <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-end">
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
        Got it
      </button>
    </div>
  </div>
</div>`}>
          <div className="flex justify-center">
            <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Open Modal
            </button>
          </div>
          {isModalOpen && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    Income This Month
                  </h3>
                  <button className="text-gray-400 hover:text-gray-500" onClick={() => setIsModalOpen(false)}>
                    <XIcon size={20} />
                  </button>
                </div>
                <div className="px-6 py-4">
                  <p className="text-gray-600">
                    This card shows your total monthly income from all sources
                    for the current month.
                  </p>
                  <p className="mt-4 text-gray-600">
                    Your income comes from multiple sources including CPP, OAS,
                    RRIF, and Pension.
                  </p>
                </div>
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-end">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" onClick={() => setIsModalOpen(false)}>
                    Got it
                  </button>
                </div>
              </div>
            </div>}
        </ComponentExample>
        <ComponentExample title="Onboarding Modal" description="Modal that introduces users to new features." code={`<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
    <div className="p-6 border-b border-gray-200 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-900">
        Welcome to Retirement Income Builder
      </h2>
      <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100">
        <XIcon size={24} />
      </button>
    </div>
    <div className="p-6">
      {/* Safe Environment Badge */}
      <div className="mb-8 flex flex-col items-center">
        <div className="inline-flex items-center justify-center bg-blue-50 text-blue-700 px-6 py-3 rounded-full mb-4">
          <ShieldCheckIcon size={20} className="mr-2" />
          <span className="font-medium text-base">Safe Exploration Environment</span>
        </div>
        <p className="text-lg text-center text-gray-700 max-w-lg">
          Here you can safely explore different retirement income scenarios. 
          <span className="font-medium"> Nothing you do here will affect your real accounts.</span>
        </p>
      </div>
      {/* Get Started Button */}
      <div className="flex justify-center">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-8 rounded-lg text-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  </div>
</div>`}>
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Onboarding Modal Preview
              </h3>
              <p className="text-gray-600 mb-6">
                This modal appears when users first access the Retirement Income
                Builder feature.
              </p>
              <div className="flex justify-center">
                <div className="bg-white rounded-xl shadow-md max-w-md w-full">
                  <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900">
                      Welcome to Retirement Income Builder
                    </h2>
                    <button className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
                      <XIcon size={18} />
                    </button>
                  </div>
                  <div className="p-4">
                    {/* Safe Environment Badge */}
                    <div className="mb-6 flex flex-col items-center">
                      <div className="inline-flex items-center justify-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-3">
                        <ShieldCheckIcon size={16} className="mr-2" />
                        <span className="font-medium text-sm">
                          Safe Exploration Environment
                        </span>
                      </div>
                      <p className="text-sm text-center text-gray-700">
                        Here you can safely explore different retirement income
                        scenarios.
                      </p>
                    </div>
                    {/* Get Started Button */}
                    <div className="flex justify-center">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <PropsTable props={[{
      name: 'type',
      type: "'success' | 'info' | 'warning' | 'error'",
      default: "'info'",
      description: 'The type of notification'
    }, {
      name: 'title',
      type: 'string',
      description: 'The title of the notification'
    }, {
      name: 'message',
      type: 'string',
      description: 'The main content of the notification',
      required: true
    }, {
      name: 'icon',
      type: 'ReactNode',
      description: 'Custom icon to display'
    }, {
      name: 'onClose',
      type: '() => void',
      description: 'Function called when the notification is closed'
    }, {
      name: 'autoClose',
      type: 'boolean | number',
      default: 'false',
      description: 'Whether to automatically close the notification and after how many milliseconds'
    }, {
      name: 'position',
      type: "'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",
      default: "'top-right'",
      description: 'Position of the notification on the screen'
    }, {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes'
    }]} />
    </div>;
};