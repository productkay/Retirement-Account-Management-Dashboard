import React, { useState } from 'react';
import { LoaderIcon, RefreshCwIcon, DownloadIcon, CheckIcon, XIcon, UploadCloudIcon } from 'lucide-react';
export function LoadingStatesShowcase() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  // Function to simulate loading
  const simulateLoading = (demoId: string) => {
    setActiveDemo(demoId);
    setIsLoading(true);
    setLoadingProgress(0);
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            setActiveDemo(null);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };
  return <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Loading States</h2>
      <p className="text-gray-600 mb-8">
        Loading states provide visual feedback when content is being fetched or
        processed. They improve perceived performance and reassure users that
        their action is being handled.
      </p>
      <div className="space-y-8">
        {/* Spinners and Loaders */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Spinners & Loaders
          </h3>
          <p className="text-gray-600 mb-6">
            Use these loading indicators when fetching data or during processing
            operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Simple Spinner */}
            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
              <div className="mb-2">
                <LoaderIcon className="h-8 w-8 text-indigo-600 animate-spin" />
              </div>
              <h4 className="text-sm font-medium text-gray-700">
                Simple Spinner
              </h4>
              <p className="text-xs text-gray-500 text-center mt-2">
                Basic loading spinner for general use
              </p>
            </div>
            {/* Circular Loader */}
            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
              <div className="mb-2 relative">
                <svg className="w-10 h-10" viewBox="0 0 100 100">
                  <circle className="text-gray-200" strokeWidth="8" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
                  <circle className="text-indigo-600" strokeWidth="8" strokeDasharray={264} strokeDashoffset={264 - loadingProgress / 100 * 264} strokeLinecap="round" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                  {loadingProgress}%
                </span>
              </div>
              <h4 className="text-sm font-medium text-gray-700">
                Progress Loader
              </h4>
              <p className="text-xs text-gray-500 text-center mt-2">
                Shows precise loading progress
              </p>
            </div>
            {/* Pulse Loader */}
            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
              <div className="mb-2 flex space-x-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" style={{
                animationDelay: '0ms'
              }}></div>
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" style={{
                animationDelay: '300ms'
              }}></div>
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" style={{
                animationDelay: '600ms'
              }}></div>
              </div>
              <h4 className="text-sm font-medium text-gray-700">
                Pulse Loader
              </h4>
              <p className="text-xs text-gray-500 text-center mt-2">
                Subtle animation for lighter contexts
              </p>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Implementation Guidelines
            </h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Use spinners for brief operations (under 10 seconds)</li>
              <li>Use progress indicators for longer operations</li>
              <li>Position loaders in the context of the loading content</li>
              <li>Keep animations subtle to avoid distracting users</li>
              <li>
                Consider using{' '}
                <code className="text-xs bg-gray-100 p-1 rounded">
                  animate-spin
                </code>{' '}
                or{' '}
                <code className="text-xs bg-gray-100 p-1 rounded">
                  animate-pulse
                </code>{' '}
                utilities
              </li>
            </ul>
          </div>
        </div>
        {/* Skeleton Loaders */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Skeleton Loaders
          </h3>
          <p className="text-gray-600 mb-6">
            Skeleton screens provide a preview of the content structure while
            data is loading, reducing perceived wait time.
          </p>
          <div className="space-y-6">
            {/* Card Skeleton */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Card Skeleton
              </h4>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-gray-200 h-12 w-12"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Table Skeleton */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Table Skeleton
              </h4>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="animate-pulse">
                  <div className="h-10 bg-gray-100 flex items-center px-4">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 ml-auto"></div>
                  </div>
                  {[1, 2, 3].map(item => <div key={item} className="h-16 border-t border-gray-200 px-4 flex items-center">
                      <div className="space-y-2 flex-1">
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>)}
                </div>
              </div>
            </div>
            {/* Dashboard Skeleton */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Dashboard Skeleton
              </h4>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="animate-pulse space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-gray-200 rounded col-span-2"></div>
                    <div className="h-24 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mt-6"></div>
                  <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(item => <div key={item} className="h-20 bg-gray-200 rounded"></div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Implementation Guidelines
            </h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Match skeleton structure to the actual content layout</li>
              <li>
                Use{' '}
                <code className="text-xs bg-gray-100 p-1 rounded">
                  animate-pulse
                </code>{' '}
                for subtle animation
              </li>
              <li>Use lighter colors (gray-200) to reduce visual noise</li>
              <li>
                Avoid using skeletons for very brief loading states (under
                300ms)
              </li>
              <li>
                Consider component-specific skeletons rather than page-wide
                loaders
              </li>
            </ul>
          </div>
        </div>
        {/* Interactive Loading Demos */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Interactive Loading Demos
          </h3>
          <p className="text-gray-600 mb-6">
            Click the buttons below to see different loading patterns in action.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Button Loading State */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Button Loading State
              </h4>
              <button onClick={() => simulateLoading('button')} disabled={isLoading && activeDemo === 'button'} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70">
                {isLoading && activeDemo === 'button' ? <span className="flex items-center">
                    <LoaderIcon className="animate-spin h-4 w-4 mr-2" />
                    Processing...
                  </span> : <span className="flex items-center">
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Download Report
                  </span>}
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Click to see button loading state
              </p>
            </div>
            {/* Form Submission */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Form Submission
              </h4>
              <div className="flex items-center">
                <button onClick={() => simulateLoading('form')} disabled={isLoading && activeDemo === 'form'} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70">
                  {isLoading && activeDemo === 'form' ? <span className="flex items-center">
                      <LoaderIcon className="animate-spin h-4 w-4 mr-2" />
                      Submitting...
                    </span> : loadingProgress === 100 && activeDemo === 'form' ? <span className="flex items-center">
                      <CheckIcon className="h-4 w-4 mr-2" />
                      Submitted!
                    </span> : <span className="flex items-center">
                      <UploadCloudIcon className="h-4 w-4 mr-2" />
                      Submit Form
                    </span>}
                </button>
                {isLoading && activeDemo === 'form' && <div className="ml-4 w-full max-w-xs">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full transition-all duration-300" style={{
                    width: `${loadingProgress}%`
                  }}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 text-right">
                      {loadingProgress}%
                    </div>
                  </div>}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Click to see form submission with progress
              </p>
            </div>
            {/* Overlay Loading */}
            <div className="border border-gray-200 rounded-lg p-4 relative">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Content Overlay
              </h4>
              <div className="bg-gray-50 p-4 rounded-md h-40 relative">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
                {isLoading && activeDemo === 'overlay' && <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center">
                    <div className="text-center">
                      <LoaderIcon className="h-8 w-8 text-indigo-600 animate-spin mx-auto" />
                      <p className="text-sm text-indigo-700 font-medium mt-2">
                        Loading content...
                      </p>
                    </div>
                  </div>}
              </div>
              <button onClick={() => simulateLoading('overlay')} disabled={isLoading && activeDemo === 'overlay'} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70">
                {isLoading && activeDemo === 'overlay' ? 'Loading...' : 'Refresh Content'}
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Click to see content overlay loading
              </p>
            </div>
            {/* Error & Success States */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Error & Success States
              </h4>
              <div className="flex space-x-3">
                <button onClick={() => simulateLoading('success')} disabled={isLoading && (activeDemo === 'success' || activeDemo === 'error')} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70">
                  {isLoading && activeDemo === 'success' ? <span className="flex items-center">
                      <LoaderIcon className="animate-spin h-4 w-4 mr-2" />
                      Loading...
                    </span> : 'Success Demo'}
                </button>
                <button onClick={() => simulateLoading('error')} disabled={isLoading && (activeDemo === 'success' || activeDemo === 'error')} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70">
                  {isLoading && activeDemo === 'error' ? <span className="flex items-center">
                      <LoaderIcon className="animate-spin h-4 w-4 mr-2" />
                      Loading...
                    </span> : 'Error Demo'}
                </button>
              </div>
              {loadingProgress === 100 && activeDemo === 'success' && <div className="mt-3 p-2 bg-green-50 text-green-800 text-sm rounded-md flex items-center">
                  <CheckIcon className="h-4 w-4 mr-2" />
                  Operation completed successfully!
                </div>}
              {loadingProgress === 100 && activeDemo === 'error' && <div className="mt-3 p-2 bg-red-50 text-red-800 text-sm rounded-md flex items-center">
                  <XIcon className="h-4 w-4 mr-2" />
                  An error occurred. Please try again.
                </div>}
              <p className="text-xs text-gray-500 mt-2">
                Click to see success and error states after loading
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}