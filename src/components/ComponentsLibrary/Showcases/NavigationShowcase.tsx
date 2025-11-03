import React, { useState, Component } from 'react';
import { ComponentShowcase, ComponentExample, PropsTable } from '../Layout';
export const NavigationShowcase = () => {
  const [activeTab, setActiveTab] = useState('overview');
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Navigation</h1>
      <p className="text-gray-600 mb-8">
        Navigation components used throughout the retirement dashboard
        application to help users move between different sections and pages.
      </p>
      <ComponentShowcase title="Headers" description="Header components for application navigation.">
        <ComponentExample title="Main Header" description="Primary navigation header with logo and menu items.">
          <div className="bg-white shadow-sm border-b border-gray-200 mb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span className="ml-2 text-xl font-bold text-gray-900">
                      BAM Retirement
                    </span>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Dashboard
                    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Income Builder
                    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Performance
                    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Reports
                    </a>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                  <div className="ml-3 relative">
                    <div>
                      <button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="inline-flex h-8 w-8 rounded-full bg-gray-200 items-center justify-center">
                          <span className="text-sm font-medium leading-none text-gray-600">
                            M
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Tabs" description="Tab navigation for switching between related content sections.">
        <ComponentExample title="Basic Tabs" description="Simple tab navigation with active indicator.">
          <div>
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button onClick={() => setActiveTab('overview')} className={`${activeTab === 'overview' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                  Overview
                </button>
                <button onClick={() => setActiveTab('accounts')} className={`${activeTab === 'accounts' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                  Accounts
                </button>
                <button onClick={() => setActiveTab('income')} className={`${activeTab === 'income' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                  Income
                </button>
                <button onClick={() => setActiveTab('performance')} className={`${activeTab === 'performance' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                  Performance
                </button>
              </nav>
            </div>
            <div className="py-4">
              {activeTab === 'overview' && <p className="text-gray-700">
                  Overview content would display here.
                </p>}
              {activeTab === 'accounts' && <p className="text-gray-700">
                  Accounts content would display here.
                </p>}
              {activeTab === 'income' && <p className="text-gray-700">
                  Income content would display here.
                </p>}
              {activeTab === 'performance' && <p className="text-gray-700">
                  Performance content would display here.
                </p>}
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Breadcrumbs" description="Breadcrumb navigation to show the current location in a hierarchy.">
        <ComponentExample title="Standard Breadcrumbs" description="Breadcrumb trail showing page hierarchy.">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2">
                    Accounts
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                    RRIF Details
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </ComponentExample>
      </ComponentShowcase>
      <PropsTable props={[{
      name: 'items',
      type: 'Array<{ label: string, href?: string, icon?: ReactNode }>',
      description: 'Navigation items to display',
      required: true
    }, {
      name: 'activeItem',
      type: 'string',
      description: 'The currently active item label'
    }, {
      name: 'onItemClick',
      type: '(item: string) => void',
      description: 'Function called when an item is clicked'
    }, {
      name: 'variant',
      type: "'tabs' | 'pills' | 'breadcrumbs' | 'sidebar'",
      default: "'tabs'",
      description: 'The visual style of the navigation'
    }, {
      name: 'orientation',
      type: "'horizontal' | 'vertical'",
      default: "'horizontal'",
      description: 'The orientation of the navigation'
    }, {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes'
    }]} />
    </div>;
};