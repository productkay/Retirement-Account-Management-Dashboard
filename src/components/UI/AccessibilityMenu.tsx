import React, { useState } from 'react';
import { AccessibilityIcon, ZoomInIcon, ZoomOutIcon, SunIcon, MoonIcon, TypeIcon, XIcon, SettingsIcon } from 'lucide-react';
export const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState('normal');
  const [reduceMotion, setReduceMotion] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };
  const decreaseFontSize = () => {
    if (fontSize > 90) {
      const newSize = fontSize - 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };
  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };
  const toggleContrast = () => {
    if (contrast === 'normal') {
      setContrast('high');
      document.body.classList.add('high-contrast');
    } else {
      setContrast('normal');
      document.body.classList.remove('high-contrast');
    }
  };
  const toggleReduceMotion = () => {
    setReduceMotion(!reduceMotion);
    if (!reduceMotion) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  };
  return <div className="fixed bottom-6 left-6 z-50">
      {/* Main accessibility button */}
      <button onClick={toggleMenu} className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors flex items-center justify-center" aria-label="Accessibility options" aria-expanded={isOpen}>
        <AccessibilityIcon size={24} />
      </button>
      {/* Accessibility menu panel */}
      {isOpen && <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl p-4 w-64 border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-medium text-gray-900 flex items-center">
              <SettingsIcon size={18} className="mr-2" />
              Accessibility
            </h3>
            <button onClick={toggleMenu} className="text-gray-400 hover:text-gray-600" aria-label="Close accessibility menu">
              <XIcon size={18} />
            </button>
          </div>
          <div className="space-y-4">
            {/* Text size controls */}
            <div className="pb-3 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <TypeIcon size={16} className="mr-1.5" />
                  Text Size
                </label>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  {fontSize}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <button onClick={decreaseFontSize} className="p-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700" aria-label="Decrease text size" disabled={fontSize <= 90}>
                  <ZoomOutIcon size={16} />
                </button>
                <button onClick={resetFontSize} className="mx-2 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm text-gray-700">
                  Reset
                </button>
                <button onClick={increaseFontSize} className="p-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700" aria-label="Increase text size" disabled={fontSize >= 150}>
                  <ZoomInIcon size={16} />
                </button>
              </div>
            </div>
            {/* Contrast mode toggle */}
            <div className="pb-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  {contrast === 'normal' ? <SunIcon size={16} className="mr-1.5" /> : <MoonIcon size={16} className="mr-1.5" />}
                  High Contrast
                </label>
                <button onClick={toggleContrast} className={`relative inline-flex h-6 w-11 items-center rounded-full ${contrast === 'high' ? 'bg-indigo-600' : 'bg-gray-200'}`} role="switch" aria-checked={contrast === 'high'}>
                  <span className="sr-only">Enable high contrast</span>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${contrast === 'high' ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
            {/* Reduce motion toggle */}
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Reduce Motion
                </label>
                <button onClick={toggleReduceMotion} className={`relative inline-flex h-6 w-11 items-center rounded-full ${reduceMotion ? 'bg-indigo-600' : 'bg-gray-200'}`} role="switch" aria-checked={reduceMotion}>
                  <span className="sr-only">Reduce motion</span>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${reduceMotion ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              These settings will be saved for your current session.
            </p>
          </div>
        </div>}
    </div>;
};