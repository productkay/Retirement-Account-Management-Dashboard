import React from 'react';
import { SearchIcon, FileIcon, InboxIcon, AlertCircleIcon, RefreshCwIcon, PlusIcon, FolderIcon, MailIcon, ShoppingCartIcon, ImageIcon, CalendarIcon, BellIcon, DollarSignIcon, UserIcon } from 'lucide-react';
export function EmptyStatesShowcase() {
  return <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Empty States</h2>
      <p className="text-gray-600 mb-8">
        Empty states guide users when there's no data to display. Well-designed
        empty states help users understand what actions they can take and
        provide context about why the data is missing.
      </p>
      <div className="space-y-8">
        {/* Empty Search Results */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Empty Search Results
          </h3>
          <p className="text-gray-600 mb-6">
            Display when a user's search returns no matches.
          </p>
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <SearchIcon className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                No results found
              </h3>
              <p className="text-gray-500 mb-4 max-w-sm">
                We couldn't find any matches for "retirement planning". Try
                adjusting your search terms.
              </p>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-50">
                  Clear Search
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700">
                  Browse All
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Implementation Guidelines
            </h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Include the search term in the message</li>
              <li>Suggest alternative actions (clear search, browse all)</li>
              <li>Use friendly, non-technical language</li>
              <li>Provide guidance on how to get better results</li>
            </ul>
          </div>
        </div>
        {/* Empty Data Table */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Empty Data Table
          </h3>
          <p className="text-gray-600 mb-6">
            Display when a table or list has no entries.
          </p>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium text-gray-700">
                  Transactions
                </h4>
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-gray-400 hover:text-gray-500">
                    <RefreshCwIcon className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-500">
                    <SearchIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            {/* Empty State */}
            <div className="px-6 py-12">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FileIcon className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-1">
                  No transactions yet
                </h3>
                <p className="text-gray-500 mb-4 max-w-sm">
                  When you make transactions, they will appear here.
                </p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 flex items-center">
                  <PlusIcon className="h-4 w-4 mr-1" />
                  New Transaction
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Implementation Guidelines
            </h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Keep the table header visible to maintain context</li>
              <li>
                Explain why the table is empty (new account, filtered results,
                etc.)
              </li>
              <li>Provide a primary action button if applicable</li>
              <li>Use concise, helpful messaging that guides the user</li>
            </ul>
          </div>
        </div>
        {/* Empty Dashboard State */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            First-Use Empty Dashboard
          </h3>
          <p className="text-gray-600 mb-6">
            Display for new users who haven't added any content yet.
          </p>
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <FolderIcon className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Welcome to your dashboard
              </h3>
              <p className="text-gray-500 mb-6 max-w-md">
                Get started by connecting your accounts to see your complete
                financial picture in one place.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <PlusIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                      Add Accounts
                    </h4>
                    <p className="text-xs text-gray-500">
                      Connect your financial accounts
                    </p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                      <DollarSignIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                      Set Goals
                    </h4>
                    <p className="text-xs text-gray-500">
                      Create your retirement goals
                    </p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                      <UserIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                      Complete Profile
                    </h4>
                    <p className="text-xs text-gray-500">
                      Finish setting up your profile
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-6 text-indigo-600 text-sm font-medium hover:text-indigo-800">
                Take a tour of the dashboard
              </button>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Implementation Guidelines
            </h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Use a welcoming, encouraging tone for first-time users</li>
              <li>Provide clear next steps with visual cues</li>
              <li>
                Limit options to prevent choice paralysis (3-5 actions maximum)
              </li>
              <li>Consider offering a product tour or onboarding flow</li>
              <li>Make the primary action visually prominent</li>
            </ul>
          </div>
        </div>
        {/* Empty State Gallery */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Empty State Gallery
          </h3>
          <p className="text-gray-600 mb-6">
            A collection of empty states for different scenarios.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Empty Inbox */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col items-center justify-center text-center h-48">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <InboxIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                  Inbox Zero
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  You've processed all your notifications.
                </p>
                <button className="text-sm text-blue-600 font-medium hover:text-blue-800">
                  View Archive
                </button>
              </div>
            </div>
            {/* No Notifications */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col items-center justify-center text-center h-48">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3">
                  <BellIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                  No Notifications
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  We'll notify you when something requires your attention.
                </p>
                <button className="text-sm text-indigo-600 font-medium hover:text-indigo-800">
                  Notification Settings
                </button>
              </div>
            </div>
            {/* Empty Cart */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col items-center justify-center text-center h-48">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                  <ShoppingCartIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                  Your Cart is Empty
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  Add services to your cart to proceed.
                </p>
                <button className="px-3 py-1.5 bg-yellow-600 text-white rounded text-xs font-medium hover:bg-yellow-700">
                  Browse Services
                </button>
              </div>
            </div>
            {/* No Upcoming Events */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col items-center justify-center text-center h-48">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <CalendarIcon className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                  No Upcoming Events
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  Your calendar is clear for the next 7 days.
                </p>
                <button className="text-sm text-green-600 font-medium hover:text-green-800 flex items-center">
                  <PlusIcon className="h-3 w-3 mr-1" />
                  Add Event
                </button>
              </div>
            </div>
            {/* No Messages */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col items-center justify-center text-center h-48">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <MailIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                  No Messages
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  When you receive messages, they will appear here.
                </p>
                <button className="text-sm text-purple-600 font-medium hover:text-purple-800">
                  Contact Support
                </button>
              </div>
            </div>
            {/* No Images */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col items-center justify-center text-center h-48">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                  <ImageIcon className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                  No Images
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  Upload images to see them in your gallery.
                </p>
                <button className="px-3 py-1.5 bg-red-600 text-white rounded text-xs font-medium hover:bg-red-700 flex items-center">
                  <PlusIcon className="h-3 w-3 mr-1" />
                  Upload Images
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Implementation Guidelines
            </h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Keep empty state messaging brief and helpful</li>
              <li>Use appropriate icons that relate to the content type</li>
              <li>Include a clear call-to-action when possible</li>
              <li>Maintain consistent styling across empty states</li>
              <li>
                Consider the context and user journey when designing empty
                states
              </li>
            </ul>
          </div>
        </div>
        {/* Error States */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Error States
          </h3>
          <p className="text-gray-600 mb-6">
            Error states help users understand when something has gone wrong and
            how to resolve it.
          </p>
          <div className="space-y-6">
            {/* Connection Error */}
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <AlertCircleIcon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  Unable to Load Data
                </h3>
                <p className="text-gray-500 mb-4 max-w-sm">
                  We couldn't connect to the server. Check your internet
                  connection and try again.
                </p>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-50">
                    Help
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 flex items-center">
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Try Again
                  </button>
                </div>
              </div>
            </div>
            {/* Access Denied */}
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <AlertCircleIcon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  Access Denied
                </h3>
                <p className="text-gray-500 mb-4 max-w-sm">
                  You don't have permission to view this content. Contact your
                  advisor for access.
                </p>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-50">
                    Back to Dashboard
                  </button>
                  <button className="px-4 py-2 bg-yellow-600 text-white rounded-md text-sm font-medium hover:bg-yellow-700">
                    Contact Advisor
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Implementation Guidelines
            </h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Be clear about what went wrong without technical jargon</li>
              <li>Provide actionable steps to resolve the issue</li>
              <li>
                Use appropriate warning colors (red for errors, yellow for
                warnings)
              </li>
              <li>Offer multiple resolution paths when appropriate</li>
              <li>Consider including contact information for support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
}