import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PlusIcon, SaveIcon, RefreshCwIcon, CheckCircleIcon, XIcon, InfoIcon, AlertTriangleIcon, ClockIcon, ChevronDownIcon, ChevronUpIcon, HelpCircleIcon, UserIcon, FileTextIcon, CalendarIcon, DollarSignIcon, BarChart2Icon } from 'lucide-react';
import { ButtonShowcase } from '../components/ComponentsLibrary/Showcases/ButtonShowcase';
import { DesignTokensShowcase } from '../components/ComponentsLibrary/Showcases/DesignTokensShowcase';
import { NavigationShowcase } from '../components/ComponentsLibrary/Showcases/NavigationShowcase';
import { ProgressShowcase } from '../components/ComponentsLibrary/Showcases/ProgressShowcase';
import { CardShowcase } from '../components/ComponentsLibrary/Showcases/CardShowcase';
import { InputsShowcase } from '../components/ComponentsLibrary/Showcases/InputsShowcase';
import { FeedbackShowcase } from '../components/ComponentsLibrary/Showcases/FeedbackShowcase';
import { TypographyShowcase } from '../components/ComponentsLibrary/Showcases/TypographyShowcase';
import { IndicatorsShowcase } from '../components/ComponentsLibrary/Showcases/IndicatorsShowcase';
import { ChartShowcase } from '../components/ComponentsLibrary/Showcases/ChartShowcase';
import { TagsShowcase } from '../components/ComponentsLibrary/Showcases/TagsShowcase';
import { MicroInteractionsShowcase } from '../components/ComponentsLibrary/Showcases/MicroInteractionsShowcase';
import { LoadingStatesShowcase } from '../components/ComponentsLibrary/Showcases/LoadingStatesShowcase';
import { EmptyStatesShowcase } from '../components/ComponentsLibrary/Showcases/EmptyStatesShowcase';
export function ComponentsVisualInventory() {
  const [activeSection, setActiveSection] = useState('design-tokens');
  const sections = [{
    id: 'design-tokens',
    label: 'Design Tokens'
  }, {
    id: 'buttons',
    label: 'Buttons'
  }, {
    id: 'progress',
    label: 'Progress'
  }, {
    id: 'cards',
    label: 'Cards'
  }, {
    id: 'inputs',
    label: 'Inputs'
  }, {
    id: 'feedback',
    label: 'Feedback'
  }, {
    id: 'typography',
    label: 'Typography'
  }, {
    id: 'navigation',
    label: 'Navigation'
  }, {
    id: 'indicators',
    label: 'Indicators'
  }, {
    id: 'charts',
    label: 'Charts'
  }, {
    id: 'tags',
    label: 'Tags'
  }, {
    id: 'micro-interactions',
    label: 'Micro-interactions'
  }, {
    id: 'loading-states',
    label: 'Loading States'
  }, {
    id: 'empty-states',
    label: 'Empty States'
  }];
  return <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 max-w-screen-xl flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://placehold.co/180x50/e6e6e6/333333?text=BAM" alt="Big Asset Management Logo" className="h-10 mr-4" />
            <h1 className="text-xl font-bold text-gray-900">Design System</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">
              Dashboard
            </Link>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 max-w-screen-xl">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Design System
          </h2>
          <p className="text-gray-600 mb-6">
            This is a comprehensive reference of all UI components and their
            states used in the retirement dashboard application.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-64 flex-shrink-0">
              <nav className="space-y-1 sticky top-24">
                {sections.map(section => <button key={section.id} className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === section.id ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`} onClick={() => setActiveSection(section.id)}>
                    {section.label}
                  </button>)}
              </nav>
            </div>
            {/* Main content */}
            <div className="flex-1">
              <div className="mt-8 space-y-12">
                {activeSection === 'design-tokens' && <DesignTokensShowcase />}
                {activeSection === 'buttons' && <ButtonShowcase />}
                {activeSection === 'progress' && <ProgressShowcase />}
                {activeSection === 'cards' && <CardShowcase />}
                {activeSection === 'inputs' && <InputsShowcase />}
                {activeSection === 'feedback' && <FeedbackShowcase />}
                {activeSection === 'typography' && <TypographyShowcase />}
                {activeSection === 'navigation' && <NavigationShowcase />}
                {activeSection === 'indicators' && <IndicatorsShowcase />}
                {activeSection === 'charts' && <ChartShowcase />}
                {activeSection === 'tags' && <TagsShowcase />}
                {activeSection === 'micro-interactions' && <MicroInteractionsShowcase />}
                {activeSection === 'loading-states' && <LoadingStatesShowcase />}
                {activeSection === 'empty-states' && <EmptyStatesShowcase />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>;
}