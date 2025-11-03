import React, { useState } from 'react';
import { CheckCircleIcon, AlertTriangleIcon, PlusIcon, XIcon } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
interface GoalProgressionIndicatorsProps {
  goalProgressData: Array<{
    name: string;
    target: number;
    current: number;
    percentComplete: number;
    status: string;
  }>;
}
export const GoalProgressionIndicators: React.FC<GoalProgressionIndicatorsProps> = ({
  goalProgressData: initialGoalData
}) => {
  const [goalProgressData, setGoalProgressData] = useState(initialGoalData);
  const [showAddGoalForm, setShowAddGoalForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    name: '',
    target: 0,
    current: 0
  });
  const [formError, setFormError] = useState('');
  // Sort goals by status: Needs Attention first, then On Track, then Achieved
  const sortedGoals = [...goalProgressData].sort((a, b) => {
    const statusOrder = {
      'Needs Attention': 0,
      'On Track': 1,
      Achieved: 2
    };
    return statusOrder[a.status as keyof typeof statusOrder] - statusOrder[b.status as keyof typeof statusOrder];
  });
  const handleAddGoal = () => {
    if (!newGoal.name.trim()) {
      setFormError('Please enter a goal name');
      return;
    }
    if (newGoal.target <= 0) {
      setFormError('Target amount must be greater than zero');
      return;
    }
    // Calculate percentage complete
    const percentComplete = newGoal.current > 0 ? Math.min(Math.round(newGoal.current / newGoal.target * 100 * 10) / 10, 100) : 0;
    // Determine status based on percentage
    let status = 'On Track';
    if (percentComplete >= 100) {
      status = 'Achieved';
    } else if (percentComplete < 50) {
      status = 'Needs Attention';
    }
    // Create new goal
    const goal = {
      name: newGoal.name,
      target: newGoal.target,
      current: newGoal.current,
      percentComplete,
      status
    };
    // Add goal to the list
    setGoalProgressData([...goalProgressData, goal]);
    // Reset form
    setNewGoal({
      name: '',
      target: 0,
      current: 0
    });
    setFormError('');
    setShowAddGoalForm(false);
  };
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-indigo-50 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
              <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1"></path>
              <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1"></path>
              <path d="M12 12v9"></path>
              <path d="M8 21h8"></path>
              <path d="M12 3v9"></path>
            </svg>
          </div>
          <h2 className="text-lg font-medium text-gray-900">
            Goal Progression
          </h2>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Overall Status:</span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircleIcon size={12} className="mr-1" />
            On Track
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedGoals.map((goal, index) => <div key={index} className={`rounded-lg border p-4 ${goal.status === 'Needs Attention' ? 'border-amber-200 bg-amber-50' : goal.status === 'Achieved' ? 'border-green-200 bg-green-50' : 'border-blue-200 bg-blue-50'}`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base font-medium text-gray-900">
                  {goal.name}
                </h3>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${goal.status === 'Needs Attention' ? 'bg-amber-100 text-amber-800' : goal.status === 'Achieved' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                  {goal.status === 'Needs Attention' ? <AlertTriangleIcon size={10} className="mr-1" /> : <CheckCircleIcon size={10} className="mr-1" />}
                  {goal.status}
                </span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-gray-900">
                    {goal.percentComplete}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full ${goal.status === 'Needs Attention' ? 'bg-amber-500' : goal.status === 'Achieved' ? 'bg-green-500' : 'bg-blue-500'}`} style={{
                width: `${goal.percentComplete}%`
              }}></div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-gray-500">Current</div>
                  <div className="font-medium text-gray-900">
                    {formatCurrency(goal.current)}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">Target</div>
                  <div className="font-medium text-gray-900">
                    {formatCurrency(goal.target)}
                  </div>
                </div>
              </div>
            </div>)}
          {/* Add Goal Card */}
          <div className={`rounded-lg border border-dashed border-gray-300 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors ${showAddGoalForm ? 'hidden' : ''}`} onClick={() => setShowAddGoalForm(true)}>
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
              <PlusIcon size={20} className="text-indigo-600" />
            </div>
            <span className="text-base font-medium text-indigo-600">
              Add New Goal
            </span>
            <p className="text-sm text-gray-500 text-center mt-1">
              Track a new financial goal
            </p>
          </div>
        </div>
        {/* Add Goal Form */}
        {showAddGoalForm && <div className="mt-6 border rounded-lg p-5 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Add New Goal
              </h3>
              <button onClick={() => {
            setShowAddGoalForm(false);
            setFormError('');
          }} className="text-gray-500 hover:text-gray-700">
                <XIcon size={18} />
              </button>
            </div>
            {formError && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                {formError}
              </div>}
            <div className="space-y-4">
              <div>
                <label htmlFor="goalName" className="block text-sm font-medium text-gray-700 mb-1">
                  Goal Name
                </label>
                <input type="text" id="goalName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., Home Renovation" value={newGoal.name} onChange={e => setNewGoal({
              ...newGoal,
              name: e.target.value
            })} />
              </div>
              <div>
                <label htmlFor="targetAmount" className="block text-sm font-medium text-gray-700 mb-1">
                  Target Amount ($)
                </label>
                <input type="number" id="targetAmount" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., 10000" min="0" value={newGoal.target || ''} onChange={e => setNewGoal({
              ...newGoal,
              target: Number(e.target.value)
            })} />
              </div>
              <div>
                <label htmlFor="currentAmount" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Amount ($)
                </label>
                <input type="number" id="currentAmount" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., 2500" min="0" value={newGoal.current || ''} onChange={e => setNewGoal({
              ...newGoal,
              current: Number(e.target.value)
            })} />
              </div>
              <div className="flex justify-end space-x-3 pt-2">
                <button type="button" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50" onClick={() => {
              setShowAddGoalForm(false);
              setFormError('');
            }}>
                  Cancel
                </button>
                <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" onClick={handleAddGoal}>
                  Add Goal
                </button>
              </div>
            </div>
          </div>}
      </div>
    </div>;
};