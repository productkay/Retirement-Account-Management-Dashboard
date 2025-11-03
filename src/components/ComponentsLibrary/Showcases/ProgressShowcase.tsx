import React, { useState, Component } from 'react';
import { ComponentShowcase, ComponentExample } from '../Layout';
export const ProgressShowcase = () => {
  const [progress, setProgress] = useState(45);
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Progress Indicators
      </h1>
      <p className="text-gray-600 mb-8">
        Progress indicators provide visual feedback about the completion status
        of tasks and processes.
      </p>
      <ComponentShowcase title="Progress Bars" description="Linear progress indicators that show completion percentage.">
        <ComponentExample title="Basic Progress Bar" description="Standard progress bar with percentage indicator.">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">
                  Basic Progress
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                width: `${progress}%`
              }}></div>
              </div>
              <div className="mt-4 flex space-x-2">
                <button onClick={() => setProgress(Math.max(0, progress - 10))} className="px-2 py-1 bg-gray-200 rounded text-sm">
                  Decrease
                </button>
                <button onClick={() => setProgress(Math.min(100, progress + 10))} className="px-2 py-1 bg-gray-200 rounded text-sm">
                  Increase
                </button>
              </div>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Colored Progress Bars" description="Progress bars with different colors for different statuses.">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">
                  Success
                </span>
                <span className="text-sm font-medium text-gray-700">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{
                width: '75%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">
                  Warning
                </span>
                <span className="text-sm font-medium text-gray-700">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{
                width: '45%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">
                  Danger
                </span>
                <span className="text-sm font-medium text-gray-700">25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-red-600 h-2.5 rounded-full" style={{
                width: '25%'
              }}></div>
              </div>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Progress Bar with Steps" description="Progress bar with discrete steps.">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                Application Progress
              </span>
              <span className="text-sm font-medium text-gray-700">
                Step 3 of 5
              </span>
            </div>
            <div className="w-full h-2.5 bg-gray-200 rounded-full mb-4">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{
              width: '60%'
            }}></div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs">
                  1
                </div>
                <span className="text-xs mt-1 text-gray-600">Details</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs">
                  2
                </div>
                <span className="text-xs mt-1 text-gray-600">Account</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs">
                  3
                </div>
                <span className="text-xs mt-1 text-gray-600">Goals</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-gray-600 text-xs">
                  4
                </div>
                <span className="text-xs mt-1 text-gray-600">Invest</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-gray-600 text-xs">
                  5
                </div>
                <span className="text-xs mt-1 text-gray-600">Review</span>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Circular Progress" description="Radial progress indicators for compact displays.">
        <ComponentExample title="Circular Progress Indicators" description="Circular progress indicators with different sizes and colors.">
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24" viewBox="0 0 100 100">
                  <circle className="text-gray-200" strokeWidth="8" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                  <circle className="text-indigo-600" strokeWidth="8" strokeDasharray={2 * Math.PI * 45} strokeDashoffset={2 * Math.PI * 45 * (1 - 75 / 100)} strokeLinecap="round" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-700">
                    75%
                  </span>
                </div>
              </div>
              <span className="mt-2 text-sm text-gray-600">Primary</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24" viewBox="0 0 100 100">
                  <circle className="text-gray-200" strokeWidth="8" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                  <circle className="text-green-500" strokeWidth="8" strokeDasharray={2 * Math.PI * 45} strokeDashoffset={2 * Math.PI * 45 * (1 - 90 / 100)} strokeLinecap="round" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-700">
                    90%
                  </span>
                </div>
              </div>
              <span className="mt-2 text-sm text-gray-600">Success</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24" viewBox="0 0 100 100">
                  <circle className="text-gray-200" strokeWidth="8" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                  <circle className="text-amber-500" strokeWidth="8" strokeDasharray={2 * Math.PI * 45} strokeDashoffset={2 * Math.PI * 45 * (1 - 40 / 100)} strokeLinecap="round" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-700">
                    40%
                  </span>
                </div>
              </div>
              <span className="mt-2 text-sm text-gray-600">Warning</span>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Loading Indicators" description="Indicators for loading states and processes.">
        <ComponentExample title="Spinners" description="Animated spinners for loading states.">
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="mt-2 text-sm text-gray-600">Default</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="mt-2 text-sm text-gray-600">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="mt-2 text-sm text-gray-600">Large</span>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Skeleton Loading" description="Placeholder content while data is loading.">
          <div className="space-y-4 w-full max-w-md">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
            <div className="animate-pulse space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-2">
                <div className="h-24 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
    </div>;
};