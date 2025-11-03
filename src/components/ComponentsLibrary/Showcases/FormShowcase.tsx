import React, { useState, Component } from 'react';
import { ComponentShowcase, ComponentExample, PropsTable } from '../Layout';
export const FormShowcase = () => {
  const [rangeValue, setRangeValue] = useState(50);
  const [selectedOption, setSelectedOption] = useState('balanced');
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Form Elements</h1>
      <p className="text-gray-600 mb-8">
        Form components used for user input across the retirement dashboard
        application.
      </p>
      <ComponentShowcase title="Text Inputs" description="Various text input components for different types of data entry.">
        <ComponentExample title="Basic Text Input" description="Standard text input field with label." code={`<div>
  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
    Full Name
  </label>
  <input
    type="text"
    id="name"
    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
    placeholder="Enter your name"
  />
</div>`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input type="text" id="name" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input type="email" id="email" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@example.com" />
              <p className="mt-1 text-xs text-gray-500">
                We'll never share your email with anyone else.
              </p>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Input with Icon" description="Text input with an icon for additional context." code={`<div>
  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
    Search
  </label>
  <div className="relative rounded-md shadow-sm">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
      </svg>
    </div>
    <input
      type="text"
      id="search"
      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
      placeholder="Search accounts or transactions"
    />
  </div>
</div>`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input type="text" id="search" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Search accounts or transactions" />
              </div>
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                Amount
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input type="text" id="amount" className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="0.00" />
              </div>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Input States" description="Different states of text inputs: default, focused, disabled, and with validation." code={`<div>
  <label htmlFor="default" className="block text-sm font-medium text-gray-700 mb-1">
    Default
  </label>
  <input
    type="text"
    id="default"
    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
    placeholder="Default input"
  />
</div>
<div>
  <label htmlFor="error" className="block text-sm font-medium text-red-700 mb-1">
    Error
  </label>
  <input
    type="text"
    id="error"
    className="block w-full px-3 py-2 border border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
    placeholder="Error input"
  />
  <p className="mt-1 text-xs text-red-600">This field is required</p>
</div>`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="default" className="block text-sm font-medium text-gray-700 mb-1">
                Default
              </label>
              <input type="text" id="default" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Default input" />
            </div>
            <div>
              <label htmlFor="disabled" className="block text-sm font-medium text-gray-500 mb-1">
                Disabled
              </label>
              <input type="text" id="disabled" className="block w-full px-3 py-2 border border-gray-200 bg-gray-100 rounded-md shadow-sm text-gray-500 cursor-not-allowed" placeholder="Disabled input" disabled />
            </div>
            <div>
              <label htmlFor="error" className="block text-sm font-medium text-red-700 mb-1">
                Error
              </label>
              <input type="text" id="error" className="block w-full px-3 py-2 border border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" placeholder="Error input" />
              <p className="mt-1 text-xs text-red-600">
                This field is required
              </p>
            </div>
            <div>
              <label htmlFor="success" className="block text-sm font-medium text-green-700 mb-1">
                Success
              </label>
              <div className="relative">
                <input type="text" id="success" className="block w-full px-3 py-2 border border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" value="Valid input" readOnly />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Select Inputs" description="Dropdown selects for choosing from predefined options.">
        <ComponentExample title="Basic Select" description="Standard dropdown select with options." code={`<div>
  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
    Country
  </label>
  <select
    id="country"
    className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
  >
    <option value="">Select a country</option>
    <option value="CA">Canada</option>
    <option value="US">United States</option>
    <option value="UK">United Kingdom</option>
  </select>
</div>`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select id="country" className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select a country</option>
                <option value="CA">Canada</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
            <div>
              <label htmlFor="risk" className="block text-sm font-medium text-gray-700 mb-1">
                Risk Tolerance
              </label>
              <select id="risk" value={selectedOption} onChange={e => setSelectedOption(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                <option value="conservative">Conservative</option>
                <option value="balanced">Balanced</option>
                <option value="growth">Growth</option>
              </select>
              <p className="mt-1 text-xs text-gray-500">
                Selected:{' '}
                {selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}
              </p>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Custom Select Styles" description="Styled select inputs for better visual hierarchy." code={`<div className="flex flex-wrap gap-2">
  <button className="px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700">
    Monthly
  </button>
  <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
    Quarterly
  </button>
  <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
    Yearly
  </button>
</div>`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Time Period
              </label>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700">
                  Monthly
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Quarterly
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Yearly
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                View Mode
              </label>
              <div className="bg-gray-100 rounded-lg p-1 flex w-fit">
                <button className="flex items-center px-3 py-1 rounded text-sm font-medium bg-white text-indigo-700 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Individual
                </button>
                <button className="flex items-center px-3 py-1 rounded text-sm font-medium text-gray-700 hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  Household
                </button>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Range Inputs" description="Slider inputs for selecting numeric values within a range.">
        <ComponentExample title="Basic Range Slider" description="Standard range slider with value display." code={`const [rangeValue, setRangeValue] = useState(50)
<div>
  <label htmlFor="range" className="block text-sm font-medium text-gray-700 mb-1">
    Percentage: {rangeValue}%
  </label>
  <input
    type="range"
    id="range"
    min="0"
    max="100"
    value={rangeValue}
    onChange={(e) => setRangeValue(parseInt(e.target.value))}
    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
  />
</div>`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="range" className="block text-sm font-medium text-gray-700 mb-1">
                Percentage: {rangeValue}%
              </label>
              <input type="range" id="range" min="0" max="100" value={rangeValue} onChange={e => setRangeValue(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
            <div>
              <label htmlFor="expenses" className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Expenses: ${rangeValue * 80}
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-3">$0</span>
                <input type="range" id="expenses" min="0" max="100" value={rangeValue} onChange={e => setRangeValue(parseInt(e.target.value))} className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <span className="text-gray-500 ml-3">$8,000</span>
              </div>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Styled Range Input with Labels" description="Range input with styled track, thumb, and value labels." code={`<div>
  <label className="block text-sm font-medium text-gray-700 mb-3">
    Planning Horizon
  </label>
  <div className="flex flex-col space-y-2">
    <div className="flex justify-between">
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-4 w-4 text-indigo-600"
          name="horizon"
          value="90"
          checked
        />
        <span className="ml-2 text-sm text-gray-700">90 years</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-4 w-4 text-indigo-600"
          name="horizon"
          value="95"
        />
        <span className="ml-2 text-sm text-gray-700">95 years</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-4 w-4 text-indigo-600"
          name="horizon"
          value="100"
        />
        <span className="ml-2 text-sm text-gray-700">100 years</span>
      </label>
    </div>
  </div>
</div>`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Planning Horizon
              </label>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <label className="inline-flex items-center">
                    <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="horizon" value="90" checked />
                    <span className="ml-2 text-sm text-gray-700">90 years</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="horizon" value="95" />
                    <span className="ml-2 text-sm text-gray-700">95 years</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="horizon" value="100" />
                    <span className="ml-2 text-sm text-gray-700">
                      100 years
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Health Factor
              </label>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <label className="inline-flex items-center">
                    <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="health" value="poor" />
                    <span className="ml-2 text-sm text-gray-700">Poor</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="health" value="average" checked />
                    <span className="ml-2 text-sm text-gray-700">Average</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" className="form-radio h-4 w-4 text-indigo-600" name="health" value="good" />
                    <span className="ml-2 text-sm text-gray-700">Good</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <PropsTable props={[{
      name: 'id',
      type: 'string',
      description: 'Unique identifier for the input',
      required: true
    }, {
      name: 'label',
      type: 'string',
      description: 'Label text for the input'
    }, {
      name: 'type',
      type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'",
      default: "'text'",
      description: 'Type of input field'
    }, {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text for the input'
    }, {
      name: 'value',
      type: 'string | number',
      description: 'Current value of the input'
    }, {
      name: 'onChange',
      type: '(e: ChangeEvent<HTMLInputElement>) => void',
      description: 'Function called when the input value changes',
      required: true
    }, {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the input is disabled'
    }, {
      name: 'error',
      type: 'string',
      description: 'Error message to display'
    }, {
      name: 'helperText',
      type: 'string',
      description: 'Helper text to display below the input'
    }, {
      name: 'icon',
      type: 'ReactNode',
      description: 'Icon to display in the input'
    }, {
      name: 'iconPosition',
      type: "'left' | 'right'",
      default: "'left'",
      description: 'Position of the icon'
    }, {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes'
    }]} />
    </div>;
};