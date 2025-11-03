import React, { Component } from 'react';
import { ComponentShowcase, ComponentExample } from '../Layout';
import { CheckCircleIcon, XCircleIcon, AlertTriangleIcon, InfoIcon, ArrowUpIcon, ArrowDownIcon, TrendingUpIcon, TrendingDownIcon, ClockIcon } from 'lucide-react';
export const IndicatorsShowcase = () => {
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Status Indicators
      </h1>
      <p className="text-gray-600 mb-8">
        Status indicators provide visual cues about the state or status of
        various elements in the application.
      </p>
      <ComponentShowcase title="Status Badges" description="Badges that indicate status or state of an item.">
        <ComponentExample title="Basic Status Badges" description="Simple badges with different colors for different statuses.">
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Active
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Inactive
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              Pending
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Processing
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Cancelled
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              Premium
            </span>
          </div>
        </ComponentExample>
        <ComponentExample title="Status Badges with Icons" description="Status badges with icons for stronger visual cues.">
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <CheckCircleIcon className="mr-1 h-3.5 w-3.5" />
              Completed
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              <XCircleIcon className="mr-1 h-3.5 w-3.5" />
              Failed
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              <AlertTriangleIcon className="mr-1 h-3.5 w-3.5" />
              Warning
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <InfoIcon className="mr-1 h-3.5 w-3.5" />
              Information
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              <ClockIcon className="mr-1 h-3.5 w-3.5" />
              In Progress
            </span>
          </div>
        </ComponentExample>
        <ComponentExample title="Bordered Status Badges" description="Status badges with borders instead of background colors.">
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white border border-green-400 text-green-700">
              Active
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white border border-red-400 text-red-700">
              Inactive
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white border border-yellow-400 text-yellow-700">
              Pending
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white border border-blue-400 text-blue-700">
              Processing
            </span>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Value Change Indicators" description="Indicators that show changes in values or trends.">
        <ComponentExample title="Numeric Value Changes" description="Indicators showing positive or negative changes in numeric values.">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-8">
              <div>
                <span className="text-sm text-gray-500">Today's Change</span>
                <div className="flex items-center">
                  <span className="text-xl font-semibold text-green-600 flex items-center">
                    <ArrowUpIcon className="h-5 w-5 mr-1" />
                    +2.45%
                  </span>
                </div>
              </div>
              <div>
                <span className="text-sm text-gray-500">Weekly Change</span>
                <div className="flex items-center">
                  <span className="text-xl font-semibold text-red-600 flex items-center">
                    <ArrowDownIcon className="h-5 w-5 mr-1" />
                    -1.32%
                  </span>
                </div>
              </div>
              <div>
                <span className="text-sm text-gray-500">
                  Monthly Performance
                </span>
                <div className="flex items-center">
                  <span className="text-xl font-semibold text-green-600 flex items-center">
                    <ArrowUpIcon className="h-5 w-5 mr-1" />
                    +8.74%
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Portfolio Value</span>
                  <span className="text-green-600 flex items-center text-sm font-medium">
                    <ArrowUpIcon className="h-4 w-4 mr-1" />
                    +$12,450
                  </span>
                </div>
                <div className="text-2xl font-bold mt-1">$847,500</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly Income</span>
                  <span className="text-red-600 flex items-center text-sm font-medium">
                    <ArrowDownIcon className="h-4 w-4 mr-1" />
                    -$120
                  </span>
                </div>
                <div className="text-2xl font-bold mt-1">$4,850</div>
              </div>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Trend Indicators" description="Indicators showing trends over time.">
          <div className="flex flex-wrap gap-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-700">
                  RRSP Performance
                </span>
                <span className="flex items-center text-green-600 text-sm font-medium">
                  <TrendingUpIcon className="h-4 w-4 mr-1" />
                  Uptrend
                </span>
              </div>
              <div className="flex items-end space-x-1 h-12">
                {[4, 6, 5, 7, 5, 8, 9, 8, 10, 12].map((value, i) => <div key={i} className="bg-green-500 rounded-sm w-4" style={{
                height: `${value * 8}%`
              }}></div>)}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-700">
                  TFSA Performance
                </span>
                <span className="flex items-center text-red-600 text-sm font-medium">
                  <TrendingDownIcon className="h-4 w-4 mr-1" />
                  Downtrend
                </span>
              </div>
              <div className="flex items-end space-x-1 h-12">
                {[12, 10, 11, 9, 10, 8, 7, 6, 5, 4].map((value, i) => <div key={i} className="bg-red-500 rounded-sm w-4" style={{
                height: `${value * 8}%`
              }}></div>)}
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Status Indicators" description="Indicators that show the status of processes or systems.">
        <ComponentExample title="Connection Status" description="Indicators showing connection status.">
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Online</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Offline</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Away</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-gray-300 mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Unknown</span>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Process Status" description="Indicators showing the status of processes.">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative">
                <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <div className="absolute top-0 left-0 h-4 w-4 rounded-full bg-green-500 opacity-75 animate-ping"></div>
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">
                Processing
              </span>
            </div>
            <div className="flex items-center">
              <svg className="animate-spin h-4 w-4 text-indigo-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-sm font-medium text-gray-700">Loading</span>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Syncing</span>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Notification Indicators" description="Indicators showing notification status.">
          <div className="flex flex-wrap gap-8">
            <div className="relative">
              <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-white"></div>
            </div>
            <div className="relative">
              <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <div className="absolute top-0 right-0 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                3
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
    </div>;
};