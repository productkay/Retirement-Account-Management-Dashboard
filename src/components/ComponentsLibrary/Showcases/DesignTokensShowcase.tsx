import React, { lazy, Component } from 'react';
import { ComponentShowcase, ComponentExample } from '../Layout';
import { tokens } from '../../../utils/designTokens';
export const DesignTokensShowcase = () => {
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Design Tokens</h1>
      <p className="text-gray-600 mb-8">
        Design tokens are the visual design atoms of the design system —
        specifically, they are named entities that store visual design
        attributes. We use them in place of hard-coded values to ensure
        flexibility and consistency across all product experiences.
      </p>
      {/* Colors Section */}
      <ComponentShowcase title="Colors" description="Color tokens represent the color palette of the design system.">
        <ComponentExample title="Primary Colors" description="The main brand colors used throughout the application.">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(tokens.colors.primary).map(([key, value]) => <div key={key} className="flex flex-col">
                <div className="h-16 rounded-lg shadow-sm" style={{
              backgroundColor: value
            }}></div>
                <div className="mt-2 text-xs">
                  <div className="font-medium">{key}</div>
                  <div className="text-gray-500">{value}</div>
                </div>
              </div>)}
          </div>
        </ComponentExample>
        <ComponentExample title="Secondary Colors" description="Supporting colors that complement the primary palette.">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(tokens.colors.secondary).map(([key, value]) => <div key={key} className="flex flex-col">
                <div className="h-16 rounded-lg shadow-sm" style={{
              backgroundColor: value
            }}></div>
                <div className="mt-2 text-xs">
                  <div className="font-medium">{key}</div>
                  <div className="text-gray-500">{value}</div>
                </div>
              </div>)}
          </div>
        </ComponentExample>
        <ComponentExample title="Semantic Colors" description="Colors that convey meaning and represent states.">
          <div className="space-y-6">
            {Object.entries(tokens.colors.semantic).map(([category, colors]) => <div key={category}>
                  <h3 className="text-base font-medium text-gray-900 mb-3 capitalize">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {Object.entries(colors).map(([key, value]) => <div key={`${category}-${key}`} className="flex flex-col">
                        <div className="h-16 rounded-lg shadow-sm" style={{
                  backgroundColor: value
                }}></div>
                        <div className="mt-2 text-xs">
                          <div className="font-medium">{key}</div>
                          <div className="text-gray-500">{value}</div>
                        </div>
                      </div>)}
                  </div>
                </div>)}
          </div>
        </ComponentExample>
        <ComponentExample title="Neutral Colors" description="Grayscale palette used for text, backgrounds, and borders.">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(tokens.colors.neutral).map(([key, value]) => <div key={key} className="flex flex-col">
                <div className="h-16 rounded-lg shadow-sm" style={{
              backgroundColor: value
            }}></div>
                <div className="mt-2 text-xs">
                  <div className="font-medium">{key}</div>
                  <div className="text-gray-500">{value}</div>
                </div>
              </div>)}
          </div>
        </ComponentExample>
        <ComponentExample title="State Colors" description="Colors used to indicate interactive states.">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(tokens.colors.state).map(([key, value]) => <div key={key} className="flex flex-col">
                <div className="h-16 rounded-lg shadow-sm" style={{
              backgroundColor: value
            }}></div>
                <div className="mt-2 text-xs">
                  <div className="font-medium">{key}</div>
                  <div className="text-gray-500">{value}</div>
                </div>
              </div>)}
          </div>
        </ComponentExample>
      </ComponentShowcase>
      {/* Border Radius Section */}
      <ComponentShowcase title="Border Radius" description="Border radius tokens define the roundness of element corners.">
        <ComponentExample title="Radius Sizes" description="Different border radius values for various UI elements.">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(tokens.radius).map(([key, value]) => <div key={key} className="flex flex-col items-center">
                <div className="h-16 w-16 border-2 border-indigo-500 bg-indigo-100" style={{
              borderRadius: value
            }}></div>
                <div className="mt-2 text-center">
                  <div className="font-medium">{key}</div>
                  <div className="text-gray-500 text-xs">{value}</div>
                </div>
              </div>)}
          </div>
        </ComponentExample>
      </ComponentShowcase>
      {/* Shadows Section */}
      <ComponentShowcase title="Shadows" description="Shadow tokens define the depth and elevation of elements.">
        <ComponentExample title="Shadow Elevations" description="Different shadow values for creating depth hierarchy.">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(tokens.shadows).map(([key, value]) => <div key={key} className="flex flex-col items-center">
                <div className="h-16 w-16 bg-white rounded-lg" style={{
              boxShadow: value
            }}></div>
                <div className="mt-2 text-center">
                  <div className="font-medium">{key}</div>
                  <div className="text-gray-500 text-xs truncate max-w-[150px]">
                    {value}
                  </div>
                </div>
              </div>)}
          </div>
        </ComponentExample>
      </ComponentShowcase>
      {/* Effects Section */}
      <ComponentShowcase title="Effects" description="Effect tokens define transitions and animations.">
        <ComponentExample title="Transitions" description="Timing functions for smooth state changes.">
          <div className="space-y-6">
            {Object.entries(tokens.effects.transition).map(([key, value]) => <div key={key} className="flex flex-col">
                <div className="flex items-center space-x-4">
                  <div className="w-24">
                    <div className="font-medium">{key}</div>
                    <div className="text-gray-500 text-xs">{value}</div>
                  </div>
                  <div className="h-12 w-12 bg-indigo-500 hover:w-48 rounded" style={{
                transition: `width ${value}`
              }}></div>
                </div>
              </div>)}
          </div>
        </ComponentExample>
        <ComponentExample title="Animations" description="Predefined animations for interactive elements.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-24">
                <div className="font-medium">spin</div>
              </div>
              <div className="h-12 w-12 bg-indigo-500 rounded-full animate-spin"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-24">
                <div className="font-medium">pulse</div>
              </div>
              <div className="h-12 w-12 bg-indigo-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-24">
                <div className="font-medium">ping</div>
              </div>
              <div className="relative">
                <div className="absolute h-12 w-12 bg-indigo-500 rounded-full animate-ping opacity-75"></div>
                <div className="relative h-12 w-12 bg-indigo-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-24">
                <div className="font-medium">bounce</div>
              </div>
              <div className="h-12 w-12 bg-indigo-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      {/* Typography Section */}
      <ComponentShowcase title="Typography" description="Typography tokens define text styles and characteristics.">
        <ComponentExample title="Font Sizes" description="Text size scale for consistent typography.">
          <div className="space-y-4">
            {Object.entries(tokens.typography.fontSize).map(([key, value]) => <div key={key} className="flex items-center">
                <div className="w-24">
                  <div className="font-medium">{key}</div>
                  <div className="text-gray-500 text-xs">{value}</div>
                </div>
                <div style={{
              fontSize: value
            }}>
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>)}
          </div>
        </ComponentExample>
        <ComponentExample title="Font Weights" description="Text weight options for emphasis hierarchy.">
          <div className="space-y-4">
            {Object.entries(tokens.typography.fontWeight).map(([key, value]) => <div key={key} className="flex items-center">
                  <div className="w-24">
                    <div className="font-medium">{key}</div>
                    <div className="text-gray-500 text-xs">{value}</div>
                  </div>
                  <div style={{
              fontWeight: value
            }}>
                    The quick brown fox jumps over the lazy dog
                  </div>
                </div>)}
          </div>
        </ComponentExample>
      </ComponentShowcase>
      {/* Spacing Section */}
      <ComponentShowcase title="Spacing" description="Spacing tokens define consistent margins, padding, and layout spacing.">
        <ComponentExample title="Spacing Scale" description="Consistent spacing values for layout and components.">
          <div className="space-y-4">
            {[0, 1, 2, 4, 6, 8, 12, 16, 24].map(size => <div key={size} className="flex items-center">
                <div className="w-24">
                  <div className="font-medium">{size}</div>
                  <div className="text-gray-500 text-xs">
                    {tokens.spacing[size]}
                  </div>
                </div>
                <div className="bg-indigo-300" style={{
              height: '24px',
              width: tokens.spacing[size]
            }}></div>
              </div>)}
          </div>
        </ComponentExample>
      </ComponentShowcase>
    </div>;
};