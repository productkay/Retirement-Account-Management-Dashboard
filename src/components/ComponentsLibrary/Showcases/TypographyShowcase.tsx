import React, { Component } from 'react';
import { ComponentShowcase, ComponentExample, PropsTable } from '../Layout';
export const TypographyShowcase = () => {
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Typography</h1>
      <p className="text-gray-600 mb-8">
        Typography components and styles used throughout the retirement
        dashboard application.
      </p>
      <ComponentShowcase title="Headings" description="Different heading levels for page and section titles.">
        <ComponentExample title="Heading Levels" description="Standard heading hierarchy from h1 to h6.">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Heading 1</h1>
              <p className="text-sm text-gray-500 mt-1">
                Used for main page titles
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Heading 2</h2>
              <p className="text-sm text-gray-500 mt-1">
                Used for section titles
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Heading 3</h3>
              <p className="text-sm text-gray-500 mt-1">
                Used for subsection titles
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-900">Heading 4</h4>
              <p className="text-sm text-gray-500 mt-1">Used for card titles</p>
            </div>
            <div>
              <h5 className="text-lg font-medium text-gray-900">Heading 5</h5>
              <p className="text-sm text-gray-500 mt-1">
                Used for widget titles
              </p>
            </div>
            <div>
              <h6 className="text-base font-medium text-gray-900">Heading 6</h6>
              <p className="text-sm text-gray-500 mt-1">
                Used for small section titles
              </p>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Body Text" description="Text styles for body content and paragraphs.">
        <ComponentExample title="Paragraph Styles" description="Different paragraph styles for various contexts.">
          <div className="space-y-6">
            <div>
              <p className="text-base text-gray-900">Regular paragraph text</p>
              <p className="text-sm text-gray-500 mt-1">
                Default text style for most content
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-900">Large paragraph text</p>
              <p className="text-sm text-gray-500 mt-1">
                Used for emphasized paragraphs
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Small paragraph text</p>
              <p className="text-sm text-gray-500 mt-1">
                Used for secondary information
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Extra small text</p>
              <p className="text-sm text-gray-500 mt-1">
                Used for captions and helper text
              </p>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Text Variants" description="Special text styles for different purposes.">
        <ComponentExample title="Text Colors and Weights" description="Different text colors and weights for various contexts.">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold text-gray-900">Bold text</p>
                <p className="font-semibold text-gray-900 mt-2">
                  Semi-bold text
                </p>
                <p className="font-medium text-gray-900 mt-2">Medium text</p>
                <p className="font-normal text-gray-900 mt-2">Regular text</p>
                <p className="font-light text-gray-900 mt-2">Light text</p>
              </div>
              <div>
                <p className="text-gray-900 mt-2">Primary text</p>
                <p className="text-gray-600 mt-2">Secondary text</p>
                <p className="text-gray-400 mt-2">Tertiary text</p>
                <p className="text-indigo-600 mt-2">Brand primary</p>
                <p className="text-green-600 mt-2">Success text</p>
                <p className="text-red-600 mt-2">Error text</p>
              </div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <PropsTable props={[{
      name: 'variant',
      type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'caption'",
      default: "'p'",
      description: 'The typography variant to use'
    }, {
      name: 'weight',
      type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold'",
      default: "'normal'",
      description: 'The font weight to apply'
    }, {
      name: 'color',
      type: "'default' | 'secondary' | 'tertiary' | 'brand' | 'success' | 'error' | 'warning'",
      default: "'default'",
      description: 'The text color to apply'
    }, {
      name: 'align',
      type: "'left' | 'center' | 'right'",
      default: "'left'",
      description: 'Text alignment'
    }, {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes'
    }, {
      name: 'children',
      type: 'ReactNode',
      description: 'The content to display',
      required: true
    }]} />
    </div>;
};