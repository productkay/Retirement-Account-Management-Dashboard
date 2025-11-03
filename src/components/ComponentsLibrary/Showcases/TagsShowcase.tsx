import React, { useState, Component } from 'react';
import { ComponentShowcase, ComponentExample } from '../Layout';
import { XIcon, PlusIcon } from 'lucide-react';
export const TagsShowcase = () => {
  const [tags, setTags] = useState(['Retirement', 'Investment', 'RRSP', 'Tax Planning']);
  const [inputValue, setInputValue] = useState('');
  const handleAddTag = () => {
    if (inputValue.trim() !== '' && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Tags</h1>
      <p className="text-gray-600 mb-8">
        Tag components for categorizing, filtering, and displaying metadata.
      </p>
      <ComponentShowcase title="Basic Tags" description="Simple tag components for displaying categories or attributes.">
        <ComponentExample title="Standard Tags" description="Basic tags in different colors.">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              Retirement
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Investment
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              RRSP
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
              Tax Planning
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
              High Risk
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              Premium
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              Archive
            </span>
          </div>
        </ComponentExample>
        <ComponentExample title="Bordered Tags" description="Tags with borders instead of background colors.">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-indigo-300 text-indigo-700">
              Retirement
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-green-300 text-green-700">
              Investment
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-blue-300 text-blue-700">
              RRSP
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-amber-300 text-amber-700">
              Tax Planning
            </span>
          </div>
        </ComponentExample>
        <ComponentExample title="Solid Tags" description="Tags with solid background colors.">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-600 text-white">
              Retirement
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-600 text-white">
              Investment
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
              RRSP
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-600 text-white">
              Tax Planning
            </span>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Removable Tags" description="Tags that can be removed with a click.">
        <ComponentExample title="Removable Tag List" description="A list of tags that can be individually removed.">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  {tag}
                  <button type="button" className="ml-1.5 h-4 w-4 inline-flex items-center justify-center rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-600 focus:outline-none" onClick={() => handleRemoveTag(tag)}>
                    <XIcon className="h-3 w-3" />
                    <span className="sr-only">Remove tag</span>
                  </button>
                </span>)}
            </div>
            <div className="flex">
              <input type="text" className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Add a tag" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
              <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleAddTag}>
                <PlusIcon className="h-4 w-4 mr-1" />
                Add
              </button>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Tag with Count" description="Tags that include a count or numeric indicator.">
        <ComponentExample title="Category Tags with Count" description="Tags that show the number of items in each category.">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              Stocks
              <span className="ml-1.5 px-2 py-0.5 text-xs rounded-full bg-indigo-200 text-indigo-800">
                42
              </span>
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              ETFs
              <span className="ml-1.5 px-2 py-0.5 text-xs rounded-full bg-green-200 text-green-800">
                16
              </span>
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Bonds
              <span className="ml-1.5 px-2 py-0.5 text-xs rounded-full bg-blue-200 text-blue-800">
                8
              </span>
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
              GICs
              <span className="ml-1.5 px-2 py-0.5 text-xs rounded-full bg-amber-200 text-amber-800">
                3
              </span>
            </span>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Interactive Tags" description="Tags that can be selected or toggled.">
        <ComponentExample title="Selectable Tags" description="Tags that can be selected to filter content.">
          <div className="space-y-4">
            <p className="text-sm text-gray-600">Filter by investment type:</p>
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-600 text-white">
                All Types
              </button>
              <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                Stocks
              </button>
              <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                ETFs
              </button>
              <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                Bonds
              </button>
              <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                GICs
              </button>
            </div>
            <p className="text-sm text-gray-600">Filter by account type:</p>
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                All Accounts
              </button>
              <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 border border-indigo-300 text-indigo-800">
                RRSP
              </button>
              <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                TFSA
              </button>
              <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                RRIF
              </button>
              <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                Non-Registered
              </button>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
    </div>;
};