import React, { Component } from 'react';
import { ComponentShowcase, ComponentExample, PropsTable } from '../Layout';
import { Card } from '../../UI/Card';
import { ArrowRightIcon, CheckCircleIcon, ChevronUpIcon, InfoIcon } from 'lucide-react';
export const CardShowcase = () => {
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Cards</h1>
      <p className="text-gray-600 mb-8">
        Cards are containers that group related content and actions. They're
        used throughout the application to organize information into digestible
        sections.
      </p>
      <ComponentShowcase title="Card Variants" description="Different card styles for different content types and purposes.">
        <ComponentExample title="Basic Card" description="Standard card with title and content." code={`<Card>
  <div className="p-5">
    <h3 className="text-lg font-medium text-gray-900 mb-2">Card Title</h3>
    <p className="text-gray-600">
      This is a basic card with some content. Cards are used to group related information.
    </p>
  </div>
</Card>`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Card Title
                </h3>
                <p className="text-gray-600">
                  This is a basic card with some content. Cards are used to
                  group related information.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  With Action
                </h3>
                <p className="text-gray-600 mb-4">
                  Cards often include actions related to their content.
                </p>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                  Learn More
                  <ArrowRightIcon size={16} className="ml-1" />
                </button>
              </div>
            </Card>
          </div>
        </ComponentExample>
        <ComponentExample title="Card with Header" description="Card with a distinct header section." code={`<div className="bg-white rounded-lg shadow-sm overflow-hidden">
  <div className="px-6 py-4 border-b border-gray-200">
    <h3 className="text-lg font-medium text-gray-900">Card with Header</h3>
  </div>
  <div className="p-6">
    <p className="text-gray-600">
      This card has a separate header section, useful for titles or actions.
    </p>
  </div>
</div>`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Card with Header
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  This card has a separate header section, useful for titles or
                  actions.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  With Actions
                </h3>
                <div className="flex items-center">
                  <button className="text-gray-400 hover:text-gray-600 mr-2">
                    <InfoIcon size={16} />
                  </button>
                  <ChevronUpIcon size={20} className="text-gray-500" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  This card has a header with actions like info and collapse
                  buttons.
                </p>
              </div>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Feature Cards" description="Cards that highlight features or benefits." code={`<Card>
  <div className="p-5">
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-full bg-indigo-50 mr-3">
        <svg className="h-5 w-5 text-indigo-600" /* ... */ />
      </div>
      <h3 className="text-lg font-medium text-gray-900">Feature Title</h3>
    </div>
    <p className="text-gray-600 mb-4">
      Description of the feature and its benefits to users.
    </p>
    <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
      Learn More
      <ArrowRightIcon size={16} className="ml-1" />
    </button>
  </div>
</Card>`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-indigo-50 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Performance Analysis
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Dive deeper into your portfolio's performance across different
                  time periods.
                </p>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                  Analyze Performance
                  <ArrowRightIcon size={16} className="ml-1" />
                </button>
              </div>
            </Card>
            <Card>
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-green-50 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Asset Allocation
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Review your current asset allocation and see if it aligns with
                  your retirement goals.
                </p>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                  View Allocation
                  <ArrowRightIcon size={16} className="ml-1" />
                </button>
              </div>
            </Card>
            <Card>
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-amber-50 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Fee Analysis
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Understand the impact of fees on your long-term returns and
                  identify cost savings.
                </p>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                  Review Fees
                  <ArrowRightIcon size={16} className="ml-1" />
                </button>
              </div>
            </Card>
          </div>
        </ComponentExample>
        <ComponentExample title="Status Cards" description="Cards that show status information or alerts." code={`<div className="bg-green-50 border border-green-200 rounded-lg p-4">
  <div className="flex items-center">
    <CheckCircleIcon size={20} className="text-green-600 mr-3" />
    <div>
      <h3 className="text-green-800 font-medium">Success Status</h3>
      <p className="text-green-700 mt-1">Operation completed successfully.</p>
    </div>
  </div>
</div>`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center">
                <CheckCircleIcon size={20} className="text-green-600 mr-3" />
                <div>
                  <h3 className="text-green-800 font-medium">Success Status</h3>
                  <p className="text-green-700 mt-1">
                    Operation completed successfully.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
              <InfoIcon className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-blue-800 font-medium">
                  Information Notice
                </h3>
                <p className="text-blue-700 mt-1">
                  This is a safe space to explore different retirement income
                  scenarios.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-amber-800 font-medium">Warning Alert</h3>
                  <p className="text-amber-700 mt-1">
                    Please review your information before proceeding.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-red-800 font-medium">Error Alert</h3>
                  <p className="text-red-700 mt-1">
                    There was a problem processing your request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Data Cards" description="Cards that display data or metrics." code={`<div className="bg-white rounded-lg shadow-sm p-6">
  <div className="text-sm text-gray-500 mb-1">Total Portfolio Value</div>
  <div className="text-3xl font-bold text-gray-900 mb-2">$847,500</div>
  <div className="flex items-center text-sm">
    <span className="text-green-600 font-medium flex items-center">
      +$32,500 (3.99%)
    </span>
    <span className="ml-2 text-gray-600">Last 30 days</span>
  </div>
</div>`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-sm text-gray-500 mb-1">
                Total Portfolio Value
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                $847,500
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium flex items-center">
                  +$32,500 (3.99%)
                </span>
                <span className="ml-2 text-gray-600">Last 30 days</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-sm text-gray-500 mb-1">Monthly Income</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                $4,850
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium flex items-center">
                  <CheckCircleIcon size={14} className="mr-1" />
                  On track
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-sm text-gray-500 mb-1">Projected Age</div>
              <div className="text-3xl font-bold text-green-600 mb-2">91</div>
              <div className="flex items-center text-sm text-gray-600">
                <span>6 years beyond average life expectancy</span>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <PropsTable props={[{
      name: 'children',
      type: 'ReactNode',
      description: 'The content of the card',
      required: true
    }, {
      name: 'variant',
      type: "'default' | 'bordered' | 'elevated'",
      default: "'default'",
      description: 'The visual style variant of the card'
    }, {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply to the card'
    }, {
      name: 'onClick',
      type: '() => void',
      description: 'Function called when the card is clicked'
    }, {
      name: 'interactive',
      type: 'boolean',
      default: 'false',
      description: 'Whether the card should have hover and active states'
    }, {
      name: 'padding',
      type: 'boolean',
      default: 'false',
      description: 'Whether the card should have default padding'
    }]} />
    </div>;
};