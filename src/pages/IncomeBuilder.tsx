import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { OnboardingModal } from '../components/IncomeBuilder/OnboardingModal';
import { HeroInputs } from '../components/IncomeBuilder/HeroInputs';
import { SimulationChart } from '../components/IncomeBuilder/SimulationChart';
import { WithdrawalStrategies } from '../components/IncomeBuilder/WithdrawalStrategies';
import { TaxOptimization } from '../components/IncomeBuilder/TaxOptimization';
import { PlanSummary } from '../components/IncomeBuilder/PlanSummary';
import { TalkToHumanButton } from '../components/UI/TalkToHumanButton';
import { AccessibilityMenu } from '../components/UI/AccessibilityMenu';
import { InfoIcon, SaveIcon } from 'lucide-react';
export function IncomeBuilder() {
  // State for showing onboarding modal
  const [showOnboarding, setShowOnboarding] = useState(false);
  // State for user inputs
  const [planningHorizon, setPlanningHorizon] = useState('95');
  const [healthFactor, setHealthFactor] = useState('average');
  const [monthlyExpenses, setMonthlyExpenses] = useState(3200);
  const [riskTolerance, setRiskTolerance] = useState('balanced');
  // State for view mode
  const [viewMode, setViewMode] = useState<'individual' | 'household'>('individual');
  // State for simulation results
  const [simulationSuccess, setSimulationSuccess] = useState(82);
  // State for saved plans
  const [savedPlans, setSavedPlans] = useState([{
    id: 1,
    name: 'Base Retirement Plan'
  }]);
  const [currentPlan, setCurrentPlan] = useState('Base Retirement Plan');
  // Check if this is the first visit (would use localStorage in production)
  useEffect(() => {
    // Simulate first visit check - in real app would use localStorage
    const isFirstVisit = true;
    if (isFirstVisit) {
      setShowOnboarding(true);
    }
  }, []);
  // Calculate new simulation when inputs change
  useEffect(() => {
    // In a real app, this would be a more complex calculation
    // For now, we'll just simulate different success rates based on inputs
    let success = 82; // Base success rate
    // Adjust based on planning horizon
    if (planningHorizon === '90') success += 8;
    if (planningHorizon === '100') success -= 12;
    // Adjust based on health
    if (healthFactor === 'good') success += 5;
    if (healthFactor === 'poor') success -= 10;
    // Adjust based on expenses
    const expenseImpact = (3200 - monthlyExpenses) / 100;
    success += expenseImpact;
    // Adjust based on risk
    if (riskTolerance === 'conservative') success -= 5;
    if (riskTolerance === 'growth') success += 3;
    // Ensure within bounds
    success = Math.min(Math.max(success, 30), 99);
    setSimulationSuccess(Math.round(success));
  }, [planningHorizon, healthFactor, monthlyExpenses, riskTolerance]);
  return <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header portfolioBalance={730000} isBalanceHidden={false} showOriginalCurrency={false} onToggleBalanceVisibility={() => {}} onToggleCurrencyDisplay={() => {}} accounts={[]} selectedAccount={'all'} onSelectAccount={() => {}} selectedTimeframe={'1Y'} onSelectTimeframe={() => {}} viewMode={viewMode} setViewMode={setViewMode} fxRate={1.32} activeTab="income-builder" />
      <main className="container mx-auto px-4 py-6 max-w-screen-xl">
        {/* Safe Environment Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start">
          <InfoIcon className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" size={20} />
          <div>
            <h2 className="text-blue-800 font-medium text-base">
              You're in the Income Builder Sandbox
            </h2>
            <p className="text-blue-700 text-sm mt-1">
              This is a safe space to explore different retirement income
              scenarios. Nothing you do here will affect your real accounts.
            </p>
          </div>
        </div>
        {/* Plan Selection and Save Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <label htmlFor="plan-select" className="text-gray-700 font-medium mr-2">
              Current Plan:
            </label>
            <select id="plan-select" className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" value={currentPlan} onChange={e => setCurrentPlan(e.target.value)}>
              {savedPlans.map(plan => <option key={plan.id} value={plan.name}>
                  {plan.name}
                </option>)}
            </select>
          </div>
          <div className="flex space-x-3">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center">
              <SaveIcon size={18} className="mr-2" />
              Save Plan
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
              Rename
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Create New Plan
            </button>
          </div>
        </div>
        {/* Hero Inputs Section */}
        <HeroInputs planningHorizon={planningHorizon} setPlanningHorizon={setPlanningHorizon} healthFactor={healthFactor} setHealthFactor={setHealthFactor} monthlyExpenses={monthlyExpenses} setMonthlyExpenses={setMonthlyExpenses} riskTolerance={riskTolerance} setRiskTolerance={setRiskTolerance} viewMode={viewMode} />
        {/* Main Content Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Simulation Visualization */}
            <SimulationChart successRate={simulationSuccess} planningHorizon={planningHorizon} monthlyExpenses={monthlyExpenses} viewMode={viewMode} />
            {/* Withdrawal Strategies */}
            <div className="mt-6">
              <WithdrawalStrategies planningHorizon={planningHorizon} monthlyExpenses={monthlyExpenses} riskTolerance={riskTolerance} viewMode={viewMode} />
            </div>
          </div>
          <div className="lg:col-span-1">
            {/* Plan Summary */}
            <PlanSummary successRate={simulationSuccess} planningHorizon={planningHorizon} monthlyExpenses={monthlyExpenses} riskTolerance={riskTolerance} viewMode={viewMode} />
            {/* Tax Optimization */}
            <div className="mt-6">
              <TaxOptimization viewMode={viewMode} />
            </div>
          </div>
        </div>
        {/* Disclaimer */}
        <div className="mt-8 bg-gray-100 border border-gray-200 rounded-lg p-4">
          <p className="text-gray-600 text-sm text-center">
            The Income Builder is for educational purposes only. All projections
            are estimates based on current information and assumptions. Please
            consult with a qualified financial advisor before making investment
            decisions.
          </p>
        </div>
      </main>
      <TalkToHumanButton />
      <AccessibilityMenu />
      {/* Onboarding Modal */}
      {showOnboarding && <OnboardingModal onClose={() => setShowOnboarding(false)} />}
    </div>;
}