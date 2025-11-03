import React, { useState, Component } from 'react';
import { ComponentShowcase, ComponentExample } from '../Layout';
import { EyeIcon, EyeOffIcon, SearchIcon, ChevronDownIcon, CalendarIcon } from 'lucide-react';
export const InputsShowcase = () => {
  const [textValue, setTextValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [checkboxValues, setCheckboxValues] = useState({
    option1: false,
    option2: true,
    option3: false
  });
  const [radioValue, setRadioValue] = useState('option1');
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Form Inputs</h1>
      <p className="text-gray-600 mb-8">
        Form input components used for gathering user data and interaction.
      </p>
      <ComponentShowcase title="Text Inputs" description="Text input fields for capturing single-line text data.">
        <ComponentExample title="Basic Text Input" description="Standard text input field with label and placeholder.">
          <div className="space-y-6 max-w-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your name" value={textValue} onChange={e => setTextValue(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@example.com" />
              <p className="mt-1 text-sm text-gray-500">
                We'll never share your email with anyone else.
              </p>
            </div>
            <div>
              <label htmlFor="disabled" className="block text-sm font-medium text-gray-700 mb-1">
                Disabled Input
              </label>
              <input type="text" id="disabled" className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm bg-gray-100 text-gray-500 cursor-not-allowed" placeholder="This input is disabled" disabled />
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Input with Icon" description="Text inputs with leading or trailing icons.">
          <div className="space-y-6 max-w-md">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" id="search" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Search" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} id="password" className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                    {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <div className="relative">
                <input type="text" id="date" className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="MM/DD/YYYY" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Input Validation States" description="Text inputs with different validation states.">
          <div className="space-y-6 max-w-md">
            <div>
              <label htmlFor="valid" className="block text-sm font-medium text-gray-700 mb-1">
                Valid Input
              </label>
              <div className="relative">
                <input type="text" id="valid" className="w-full px-3 py-2 border border-green-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" value="john.doe@example.com" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="mt-1 text-sm text-green-600">Email is valid!</p>
            </div>
            <div>
              <label htmlFor="invalid" className="block text-sm font-medium text-gray-700 mb-1">
                Invalid Input
              </label>
              <div className="relative">
                <input type="text" id="invalid" className="w-full px-3 py-2 border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500" value="invalid-email" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="mt-1 text-sm text-red-600">
                Please enter a valid email address.
              </p>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Select Inputs" description="Dropdown select inputs for choosing from predefined options.">
        <ComponentExample title="Basic Select" description="Standard dropdown select input.">
          <div className="space-y-6 max-w-md">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <div className="relative">
                <select id="country" className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                  <option value="">Select a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="MX">Mexico</option>
                  <option value="UK">United Kingdom</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="account" className="block text-sm font-medium text-gray-700 mb-1">
                Account Type
              </label>
              <div className="relative">
                <select id="account" className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none">
                  <option value="rrsp">RRSP</option>
                  <option value="tfsa">TFSA</option>
                  <option value="rrif">RRIF</option>
                  <option value="lif">LIF</option>
                  <option value="non-registered">Non-Registered</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Checkbox and Radio Inputs" description="Selection inputs for multiple or single choice options.">
        <ComponentExample title="Checkboxes" description="Checkbox inputs for multiple selections.">
          <div className="space-y-4 max-w-md">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="option1" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" checked={checkboxValues.option1} onChange={() => setCheckboxValues({
                ...checkboxValues,
                option1: !checkboxValues.option1
              })} />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="option1" className="font-medium text-gray-700">
                  Email notifications
                </label>
                <p className="text-gray-500">
                  Get notified when someone sends you a message.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="option2" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" checked={checkboxValues.option2} onChange={() => setCheckboxValues({
                ...checkboxValues,
                option2: !checkboxValues.option2
              })} />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="option2" className="font-medium text-gray-700">
                  SMS notifications
                </label>
                <p className="text-gray-500">
                  Get notified when a withdrawal is processed.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="option3" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" checked={checkboxValues.option3} onChange={() => setCheckboxValues({
                ...checkboxValues,
                option3: !checkboxValues.option3
              })} />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="option3" className="font-medium text-gray-700">
                  Push notifications
                </label>
                <p className="text-gray-500">
                  Get notified when your portfolio changes significantly.
                </p>
              </div>
            </div>
          </div>
        </ComponentExample>
        <ComponentExample title="Radio Buttons" description="Radio inputs for single selections.">
          <div className="space-y-4 max-w-md">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                View Mode
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input id="radio-individual" name="view-mode" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" value="option1" checked={radioValue === 'option1'} onChange={() => setRadioValue('option1')} />
                  <label htmlFor="radio-individual" className="ml-3 block text-sm font-medium text-gray-700">
                    Individual
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="radio-household" name="view-mode" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" value="option2" checked={radioValue === 'option2'} onChange={() => setRadioValue('option2')} />
                  <label htmlFor="radio-household" className="ml-3 block text-sm font-medium text-gray-700">
                    Household
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Time Period
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input id="radio-1m" name="time-period" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" checked />
                  <label htmlFor="radio-1m" className="ml-3 block text-sm font-medium text-gray-700">
                    1 Month
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="radio-3m" name="time-period" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                  <label htmlFor="radio-3m" className="ml-3 block text-sm font-medium text-gray-700">
                    3 Months
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="radio-1y" name="time-period" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                  <label htmlFor="radio-1y" className="ml-3 block text-sm font-medium text-gray-700">
                    1 Year
                  </label>
                </div>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Textarea" description="Multi-line text input fields.">
        <ComponentExample title="Basic Textarea" description="Standard multi-line text input.">
          <div className="space-y-6 max-w-md">
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your message here"></textarea>
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea id="notes" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Any additional information"></textarea>
              <p className="mt-1 text-sm text-gray-500">Max 500 characters</p>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
    </div>;
};