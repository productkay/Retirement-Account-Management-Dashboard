import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { IncomeBuilder } from './pages/IncomeBuilder';
import { PerformanceMonitoring } from './pages/PerformanceMonitoring';
import { ComponentsVisualInventory } from './pages/ComponentsVisualInventory';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/income-builder" element={<IncomeBuilder />} />
        <Route path="/performance-monitoring" element={<PerformanceMonitoring />} />
        <Route path="/design-system" element={<ComponentsVisualInventory />} />
      </Routes>
    </BrowserRouter>;
}