import React, { useState, Component } from 'react';
interface LayoutProps {
  children: ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
};
// Icon components for the sidebar
export const PuzzleIcon = ({
  className = 'h-6 w-6'
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>;
export const ChevronRightIcon = ({
  className = 'h-6 w-6'
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>;
export const BoxIcon = ({
  className = 'h-6 w-6'
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>;
export const TypeIcon = ({
  className = 'h-6 w-6'
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>;
export const LayoutIcon = ({
  className = 'h-6 w-6'
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>;
export const BarChartIcon = ({
  className = 'h-6 w-6'
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>;
export const FormInputIcon = ({
  className = 'h-6 w-6'
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>;
export const BellIcon = ({
  className = 'h-6 w-6'
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>;
export const TableIcon = ({
  className = 'h-6 w-6'
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>;
export const MenuIcon = ({
  className = 'h-6 w-6'
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>;
// Component showcase container
interface ComponentShowcaseProps {
  title: string;
  description: string;
  children: ReactNode;
}
export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  title,
  description,
  children
}) => {
  return <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      {children}
    </div>;
};
// Component example container
interface ComponentExampleProps {
  title: string;
  description?: string;
  code?: string;
  children: ReactNode;
}
export const ComponentExample: React.FC<ComponentExampleProps> = ({
  title,
  description,
  code,
  children
}) => {
  const [showCode, setShowCode] = useState(false);
  return <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {description && <p className="text-gray-600 text-sm mt-1">{description}</p>}
      </div>
      <div className="p-6 bg-white">{children}</div>
      {code && <>
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
            <span className="text-sm text-gray-500">Code Example</span>
            <button onClick={() => setShowCode(!showCode)} className="text-sm text-indigo-600 hover:text-indigo-800">
              {showCode ? 'Hide Code' : 'Show Code'}
            </button>
          </div>
          {showCode && <div className="bg-gray-800 p-4 text-gray-200 overflow-x-auto">
              <pre>
                <code>{code}</code>
              </pre>
            </div>}
        </>}
    </div>;
};
// Component props table
interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}
interface PropsTableProps {
  props: PropDefinition[];
}
export const PropsTable: React.FC<PropsTableProps> = ({
  props
}) => {
  return <div className="mt-6 mb-8">
      <h3 className="text-lg font-medium text-gray-900 mb-3">
        Component Props
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prop Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Default
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {props.map((prop, index) => <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {prop.name}
                  {prop.required && <span className="text-red-500 ml-1">*</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {prop.type}
                  </code>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {prop.default ? <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                      {prop.default}
                    </code> : <span className="text-gray-400">—</span>}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {prop.description}
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};