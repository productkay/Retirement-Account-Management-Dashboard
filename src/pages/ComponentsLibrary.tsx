import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, PuzzleIcon, ChevronRightIcon, BoxIcon, TypeIcon, LayoutIcon, BarChartIcon, FormInputIcon, BellIcon, TableIcon, MenuIcon } from '../components/ComponentsLibrary/Layout';
import { ButtonShowcase } from '../components/ComponentsLibrary/Showcases/ButtonShowcase';
import { CardShowcase } from '../components/ComponentsLibrary/Showcases/CardShowcase';
import { ChartShowcase } from '../components/ComponentsLibrary/Showcases/ChartShowcase';
import { FormShowcase } from '../components/ComponentsLibrary/Showcases/FormShowcase';
import { FeedbackShowcase } from '../components/ComponentsLibrary/Showcases/FeedbackShowcase';
import { TypographyShowcase } from '../components/ComponentsLibrary/Showcases/TypographyShowcase';
import { TableShowcase } from '../components/ComponentsLibrary/Showcases/TableShowcase';
import { NavigationShowcase } from '../components/ComponentsLibrary/Showcases/NavigationShowcase';
export function ComponentsLibrary() {
  const [activeCategory, setActiveCategory] = useState('overview');
  const categories = [{
    id: 'overview',
    name: 'Overview',
    icon: <LayoutIcon />
  }, {
    id: 'buttons',
    name: 'Buttons',
    icon: <BoxIcon />
  }, {
    id: 'cards',
    name: 'Cards',
    icon: <BoxIcon />
  }, {
    id: 'charts',
    name: 'Charts & Visualizations',
    icon: <BarChartIcon />
  }, {
    id: 'forms',
    name: 'Form Elements',
    icon: <FormInputIcon />
  }, {
    id: 'feedback',
    name: 'Feedback & Alerts',
    icon: <BellIcon />
  }, {
    id: 'typography',
    name: 'Typography',
    icon: <TypeIcon />
  }, {
    id: 'tables',
    name: 'Tables & Lists',
    icon: <TableIcon />
  }, {
    id: 'navigation',
    name: 'Navigation',
    icon: <MenuIcon />
  }];
  const renderContent = () => {
    switch (activeCategory) {
      case 'buttons':
        return <ButtonShowcase />;
      case 'cards':
        return <CardShowcase />;
      case 'charts':
        return <ChartShowcase />;
      case 'forms':
        return <FormShowcase />;
      case 'feedback':
        return <FeedbackShowcase />;
      case 'typography':
        return <TypographyShowcase />;
      case 'tables':
        return <TableShowcase />;
      case 'navigation':
        return <NavigationShowcase />;
      default:
        return <Overview />;
    }
  };
  return <Layout>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 max-w-screen-xl flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-8 flex items-center">
                <PuzzleIcon className="h-6 w-6 text-indigo-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">
                  Components Library
                </span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">
                  Back to Dashboard
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/your-repo/components" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                v1.0.0
              </span>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-8 max-w-screen-xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Components
                </h2>
                <nav className="space-y-1">
                  {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeCategory === category.id ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <span className="mr-3">{category.icon}</span>
                      <span>{category.name}</span>
                      <ChevronRightIcon className="ml-auto h-4 w-4" />
                    </button>)}
                </nav>
              </div>
            </div>
            {/* Main content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
}
function Overview() {
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Retirement Dashboard Components Library
      </h1>
      <p className="text-gray-600 mb-6">
        This library contains all the reusable UI components used across the
        retirement dashboard application. Use the sidebar to navigate between
        component categories.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[{
        title: 'Buttons',
        description: 'Primary, secondary, and action buttons',
        link: 'buttons'
      }, {
        title: 'Cards',
        description: 'Information cards and containers',
        link: 'cards'
      }, {
        title: 'Charts & Visualizations',
        description: 'Data visualization components',
        link: 'charts'
      }, {
        title: 'Form Elements',
        description: 'Inputs, selects, and form controls',
        link: 'forms'
      }, {
        title: 'Feedback & Alerts',
        description: 'Notifications, banners, and modals',
        link: 'feedback'
      }, {
        title: 'Typography',
        description: 'Text styles and headings',
        link: 'typography'
      }, {
        title: 'Tables & Lists',
        description: 'Data tables and list components',
        link: 'tables'
      }, {
        title: 'Navigation',
        description: 'Headers, tabs, and navigation elements',
        link: 'navigation'
      }].map((category, index) => <div key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {category.title}
            </h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <button onClick={() => document.querySelector(`button[data-category="${category.link}"]`)?.click()} className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              Explore components
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </button>
          </div>)}
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-blue-800 mb-2">
          Design System Guidelines
        </h2>
        <p className="text-blue-700 mb-4">
          This components library follows these key design principles:
        </p>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>Accessibility:</strong> All components meet WCAG 2.1 AA
              standards with proper contrast, keyboard navigation, and screen
              reader support.
            </span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>Consistency:</strong> Unified color palette, spacing
              system, and typography across all components.
            </span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>Responsiveness:</strong> All components are designed to
              work across desktop, tablet, and mobile devices.
            </span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>Modularity:</strong> Components are designed to be
              composable and reusable across different contexts.
            </span>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-200 pt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Getting Started
        </h2>
        <p className="text-gray-600 mb-4">
          To use these components in your project, import them from the
          components directory:
        </p>
        <div className="bg-gray-800 text-gray-200 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre>
            <code>{`import { Button } from '../components/UI/Button'
import { Card } from '../components/UI/Card'
import { ProgressBar } from '../components/UI/ProgressBar'
// Then use in your component
function MyComponent() {
  return (
    <Card>
      <h2>My Card Title</h2>
      <ProgressBar percentage={75} label="Progress" />
      <Button variant="primary">Click Me</Button>
    </Card>
  )
}`}</code>
          </pre>
        </div>
      </div>
    </div>;
}