import React, { Component } from 'react';
import { ComponentShowcase, ComponentExample, PropsTable } from '../Layout';
import { ArrowRightIcon, PlusIcon, SaveIcon, RefreshCwIcon } from 'lucide-react';
export const ButtonShowcase = () => {
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Buttons</h1>
      <p className="text-gray-600 mb-8">
        Buttons are used to trigger actions or events, such as submitting a
        form, opening a dialog, canceling an action, or performing a delete
        operation.
      </p>
      <ComponentShowcase title="Button Variants" description="Different button styles for different purposes and hierarchies.">
        <ComponentExample title="Primary Buttons" description="Used for primary actions and main calls-to-action." code={`<button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium">
  Primary Button
</button>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium flex items-center">
  <ArrowRightIcon size={16} className="mr-2" />
  With Icon
</button>`}>
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium">
              Primary Button
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium flex items-center">
              <ArrowRightIcon size={16} className="mr-2" />
              With Icon
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium text-lg">
              Large Primary
            </button>
            <button disabled className="bg-indigo-300 cursor-not-allowed text-white py-2 px-4 rounded-lg font-medium">
              Disabled
            </button>
          </div>
        </ComponentExample>
        <ComponentExample title="Secondary Buttons" description="Used for secondary actions that don't require as much emphasis." code={`<button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg font-medium">
  Secondary Button
</button>
<button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg font-medium flex items-center">
  <SaveIcon size={16} className="mr-2" />
  Save
</button>`}>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg font-medium">
              Secondary Button
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg font-medium flex items-center">
              <SaveIcon size={16} className="mr-2" />
              Save
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium text-lg">
              Large Secondary
            </button>
            <button disabled className="bg-white border border-gray-200 text-gray-300 cursor-not-allowed py-2 px-4 rounded-lg font-medium">
              Disabled
            </button>
          </div>
        </ComponentExample>
        <ComponentExample title="Colored Action Buttons" description="Used for specific actions with semantic colors." code={`<button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium">
  Success
</button>
<button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium">
  Danger
</button>`}>
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium">
              Success
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium">
              Info
            </button>
            <button className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg font-medium">
              Warning
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium">
              Danger
            </button>
          </div>
        </ComponentExample>
        <ComponentExample title="Icon Buttons" description="Buttons with just icons for compact UI elements." code={`<button className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
  <RefreshCwIcon size={18} />
</button>
<button className="p-2 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
  <PlusIcon size={18} />
</button>`}>
          <div className="flex flex-wrap gap-4">
            <button className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
              <RefreshCwIcon size={18} />
            </button>
            <button className="p-2 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
              <PlusIcon size={18} />
            </button>
            <button className="p-2 rounded-full bg-red-100 text-red-700 hover:bg-red-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
            <button className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
              <RefreshCwIcon size={24} />
            </button>
          </div>
        </ComponentExample>
        <ComponentExample title="Link Buttons" description="Buttons that look like links for less prominent actions." code={`<button className="text-indigo-600 hover:text-indigo-800 font-medium">
  Simple Link
</button>
<button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
  View Details
  <ArrowRightIcon size={16} className="ml-1" />
</button>`}>
          <div className="flex flex-wrap gap-6">
            <button className="text-indigo-600 hover:text-indigo-800 font-medium">
              Simple Link
            </button>
            <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              View Details
              <ArrowRightIcon size={16} className="ml-1" />
            </button>
            <button className="text-gray-600 hover:text-gray-800 font-medium underline">
              Learn More
            </button>
            <button disabled className="text-gray-400 cursor-not-allowed font-medium">
              Disabled Link
            </button>
          </div>
        </ComponentExample>
        <ComponentExample title="Button Groups" description="Groups of related buttons." code={`<div className="inline-flex rounded-md shadow-sm">
  <button className="py-2 px-4 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-l-lg border border-indigo-200 hover:bg-indigo-200">
    Monthly
  </button>
  <button className="py-2 px-4 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-200 hover:bg-gray-100">
    Quarterly
  </button>
  <button className="py-2 px-4 text-sm font-medium text-gray-700 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100">
    Yearly
  </button>
</div>`}>
          <div className="flex flex-wrap gap-6">
            <div className="inline-flex rounded-md shadow-sm">
              <button className="py-2 px-4 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-l-lg border border-indigo-200 hover:bg-indigo-200">
                Monthly
              </button>
              <button className="py-2 px-4 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-200 hover:bg-gray-100">
                Quarterly
              </button>
              <button className="py-2 px-4 text-sm font-medium text-gray-700 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100">
                Yearly
              </button>
            </div>
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button className="px-3 py-1 rounded text-sm font-medium bg-white text-indigo-700 shadow-sm">
                Individual
              </button>
              <button className="px-3 py-1 rounded text-sm font-medium text-gray-700 hover:bg-gray-200">
                Household
              </button>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <PropsTable props={[{
      name: 'variant',
      type: "'primary' | 'secondary' | 'success' | 'danger' | 'link'",
      default: "'primary'",
      description: 'The visual style of the button'
    }, {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'The size of the button'
    }, {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the button is disabled'
    }, {
      name: 'onClick',
      type: '() => void',
      description: 'Function called when the button is clicked',
      required: true
    }, {
      name: 'icon',
      type: 'ReactNode',
      description: 'Icon to display in the button'
    }, {
      name: 'iconPosition',
      type: "'left' | 'right'",
      default: "'left'",
      description: 'Position of the icon relative to the text'
    }, {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply'
    }, {
      name: 'children',
      type: 'ReactNode',
      description: 'Button content',
      required: true
    }]} />
    </div>;
};