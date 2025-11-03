import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, InfoIcon, HelpCircleIcon, CheckIcon, XIcon, LoaderIcon, BellIcon, UserIcon, SearchIcon, EyeIcon, EyeOffIcon, ArrowRightIcon, HeartIcon, ThumbsUpIcon, StarIcon, AlertCircleIcon, CheckCircleIcon, RotateCwIcon, SaveIcon, SendIcon, MessageSquareIcon, ShieldIcon, MailIcon } from 'lucide-react';
export function MicroInteractionsShowcase() {
  const [activeTab, setActiveTab] = useState('buttons');
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [checkboxState, setCheckboxState] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [notificationCount, setNotificationCount] = useState(3);
  const [showNotification, setShowNotification] = useState(false);
  const [likeCount, setLikeCount] = useState(24);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveComplete, setSaveComplete] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  // Function to validate email
  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  // Handle email validation
  useEffect(() => {
    if (emailValue) {
      if (validateEmail(emailValue)) {
        setEmailError('');
        setEmailSuccess(true);
      } else {
        setEmailError('Please enter a valid email address');
        setEmailSuccess(false);
      }
    } else {
      setEmailError('');
      setEmailSuccess(false);
    }
  }, [emailValue]);
  // Simulate save process
  const handleSave = () => {
    setIsSaving(true);
    setSaveComplete(false);
    setTimeout(() => {
      setIsSaving(false);
      setSaveComplete(true);
      setTimeout(() => {
        setSaveComplete(false);
      }, 2000);
    }, 1500);
  };
  // Show notification temporarily
  const triggerNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  return <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Micro-Interactions
      </h2>
      <p className="text-gray-600 mb-8">
        Micro-interactions are subtle animations and visual feedback that guide
        users through the application. They help create an intuitive and
        responsive interface by providing immediate feedback for user actions.
      </p>
      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex flex-wrap space-x-4 md:space-x-8">
          {['buttons', 'form', 'dropdown', 'tooltip', 'accordion', 'notifications', 'transitions', 'feedback'].map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === tab ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Interactions
            </button>)}
        </nav>
      </div>
      {/* Button Interactions */}
      {activeTab === 'buttons' && <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Button States & Transitions
            </h3>
            <p className="text-gray-600 mb-4">
              Buttons provide visual feedback through state changes. Hover over,
              click, or focus on the buttons below to see the interactions.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200">
                Hover & Focus Me
              </button>
              <button className="px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200">
                Secondary Button
              </button>
              <button className="group px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200">
                <span className="flex items-center">
                  <CheckIcon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Success Action
                </span>
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Implementation Notes
              </h4>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                <li>
                  Use{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    transition-all
                  </code>{' '}
                  for smooth state changes
                </li>
                <li>
                  Apply{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    hover:
                  </code>{' '}
                  and{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    focus:
                  </code>{' '}
                  modifiers for state styling
                </li>
                <li>
                  For icon animations, use{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    group-hover:
                  </code>{' '}
                  with{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    transition-transform
                  </code>
                </li>
                <li>Maintain 200-300ms duration for most transitions</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Interactive Button Examples
            </h3>
            <div className="space-y-6">
              {/* Loading Button */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Loading Button
                </h4>
                <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200">
                  <LoaderIcon className="animate-spin h-4 w-4 mr-2" />
                  Processing...
                </button>
              </div>
              {/* Success/Error Button */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Success/Error Feedback
                </h4>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200">
                    <CheckIcon className="h-4 w-4 mr-2" />
                    Success
                  </button>
                  <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200">
                    <XIcon className="h-4 w-4 mr-2" />
                    Error
                  </button>
                </div>
              </div>
              {/* Save Button with State */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Save Button with State Changes
                </h4>
                <button onClick={handleSave} disabled={isSaving} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70">
                  {isSaving ? <>
                      <LoaderIcon className="animate-spin h-4 w-4 mr-2" />
                      Saving...
                    </> : saveComplete ? <>
                      <CheckIcon className="h-4 w-4 mr-2" />
                      Saved!
                    </> : <>
                      <SaveIcon className="h-4 w-4 mr-2" />
                      Save Changes
                    </>}
                </button>
              </div>
              {/* Social Interaction Buttons */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Social Interaction Buttons
                </h4>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => setIsLiked(!isLiked)} className={`flex items-center px-4 py-2 rounded-md border transition-all duration-200 ${isLiked ? 'bg-red-50 border-red-200 text-red-600' : 'bg-white border-gray-300 text-gray-700'}`}>
                    <HeartIcon className={`h-4 w-4 mr-2 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500'} transition-colors ${isLiked ? 'scale-110' : ''} transform duration-200`} />
                    {isLiked ? 'Liked' : 'Like'} (
                    {likeCount + (isLiked ? 1 : 0)})
                  </button>
                  <button onClick={() => setIsBookmarked(!isBookmarked)} className={`flex items-center px-4 py-2 rounded-md border transition-all duration-200 ${isBookmarked ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-white border-gray-300 text-gray-700'}`}>
                    <BookmarkIcon className={`h-4 w-4 mr-2 ${isBookmarked ? 'fill-indigo-500 text-indigo-500' : 'text-gray-500'} transition-colors`} />
                    {isBookmarked ? 'Saved' : 'Save'}
                  </button>
                </div>
              </div>
              {/* Star Rating */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Star Rating
                </h4>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => <button key={star} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(star)} className="p-1 focus:outline-none">
                      <StarIcon className={`h-6 w-6 transition-all duration-200 ${(hoverRating ? hoverRating >= star : rating >= star) ? 'text-yellow-400 fill-yellow-400 scale-110' : 'text-gray-300'}`} />
                    </button>)}
                  {rating > 0 && <span className="ml-2 text-sm text-gray-600 self-center">
                      {rating} out of 5
                    </span>}
                </div>
              </div>
            </div>
          </div>
        </div>}
      {/* Form Interactions */}
      {activeTab === 'form' && <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Form Field Interactions
            </h3>
            <p className="text-gray-600 mb-4">
              Form fields provide immediate feedback as users interact with
              them.
            </p>
            <div className="space-y-6 max-w-md">
              {/* Text Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Text Input
                </label>
                <div className="relative">
                  <input type="text" id="name" value={inputValue} onChange={e => setInputValue(e.target.value)} className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200" placeholder="Type something..." />
                  {inputValue && <button onClick={() => setInputValue('')} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
                      <XIcon className="h-4 w-4" />
                    </button>}
                </div>
                {inputValue && <p className="mt-1 text-xs text-gray-500">
                    You typed: {inputValue}
                  </p>}
              </div>
              {/* Password Input with Show/Hide */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password with Show/Hide
                </label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} id="password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200" placeholder="Enter password" />
                  <button onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                    {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                  </button>
                </div>
                {passwordValue && <div className="mt-2">
                    <div className="flex items-center space-x-1 mb-1">
                      <div className={`h-1 flex-1 rounded-full ${passwordValue.length > 8 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${/[A-Z]/.test(passwordValue) ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${/[0-9]/.test(passwordValue) ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${/[^A-Za-z0-9]/.test(passwordValue) ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                    </div>
                    <p className="text-xs text-gray-500">
                      Password strength:{' '}
                      {passwordValue.length > 8 && /[A-Z]/.test(passwordValue) && /[0-9]/.test(passwordValue) && /[^A-Za-z0-9]/.test(passwordValue) ? 'Strong' : passwordValue.length > 6 && (/[A-Z]/.test(passwordValue) || /[0-9]/.test(passwordValue)) ? 'Medium' : 'Weak'}
                    </p>
                  </div>}
              </div>
              {/* Email Input with Validation */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email with Validation
                </label>
                <div className="relative">
                  <input type="email" id="email" value={emailValue} onChange={e => setEmailValue(e.target.value)} className={`block w-full px-4 py-2 border ${emailError ? 'border-red-300' : emailSuccess ? 'border-green-300' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 ${emailError ? 'focus:ring-red-500 focus:border-red-500' : emailSuccess ? 'focus:ring-green-500 focus:border-green-500' : 'focus:ring-indigo-500 focus:border-indigo-500'} transition-all duration-200`} placeholder="Enter email address" />
                  {emailValue && <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      {emailError ? <AlertCircleIcon className="h-4 w-4 text-red-500" /> : emailSuccess ? <CheckCircleIcon className="h-4 w-4 text-green-500" /> : null}
                    </div>}
                </div>
                {emailError ? <p className="mt-1 text-xs text-red-600">{emailError}</p> : emailSuccess ? <p className="mt-1 text-xs text-green-600">
                    Valid email format
                  </p> : null}
              </div>
              {/* Search Input */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search Input
                </label>
                <div className="relative">
                  <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-all duration-200 ${isSearchFocused ? 'text-indigo-500' : 'text-gray-400'}`}>
                    <SearchIcon className="h-4 w-4" />
                  </div>
                  <input type="text" id="search" value={searchValue} onChange={e => setSearchValue(e.target.value)} onFocus={() => setIsSearchFocused(true)} onBlur={() => setIsSearchFocused(false)} className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200" placeholder="Search..." />
                  {searchValue && <button onClick={() => setSearchValue('')} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
                      <XIcon className="h-4 w-4" />
                    </button>}
                </div>
                {isSearchFocused && !searchValue && <div className="mt-1 text-xs text-gray-500 animate-fade-in">
                    Try searching for "retirement", "investments", or "accounts"
                  </div>}
              </div>
              {/* Checkbox */}
              <div>
                <div className="flex items-center">
                  <input id="checkbox" type="checkbox" checked={checkboxState} onChange={() => setCheckboxState(!checkboxState)} className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 transition-all duration-200" />
                  <label htmlFor="checkbox" className="ml-2 block text-sm text-gray-700">
                    Checkbox with animation
                  </label>
                </div>
                {checkboxState && <div className="mt-2 text-xs text-green-600 flex items-center animate-fade-in">
                    <CheckIcon className="h-3 w-3 mr-1" />
                    Option selected!
                  </div>}
              </div>
              {/* Radio Buttons */}
              <div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="option1" name="radio-group" type="radio" value="option1" checked={radioValue === 'option1'} onChange={() => setRadioValue('option1')} className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 transition-all duration-200" />
                    <label htmlFor="option1" className="ml-2 block text-sm text-gray-700">
                      Option 1
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input id="option2" name="radio-group" type="radio" value="option2" checked={radioValue === 'option2'} onChange={() => setRadioValue('option2')} className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 transition-all duration-200" />
                    <label htmlFor="option2" className="ml-2 block text-sm text-gray-700">
                      Option 2
                    </label>
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Selected: {radioValue === 'option1' ? 'Option 1' : 'Option 2'}
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Implementation Notes
              </h4>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                <li>
                  Use{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    focus:ring-2
                  </code>{' '}
                  for keyboard focus states
                </li>
                <li>Add subtle animations for state changes</li>
                <li>Provide immediate visual feedback for user actions</li>
                <li>
                  Use conditional rendering to show validation or helper
                  messages
                </li>
                <li>
                  Consider using different colors for different states (error,
                  success, neutral)
                </li>
              </ul>
            </div>
          </div>
        </div>}
      {/* Dropdown Interactions */}
      {activeTab === 'dropdown' && <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Dropdown Interactions
            </h3>
            <p className="text-gray-600 mb-4">
              Dropdowns provide expandable options with smooth open/close
              animations.
            </p>
            <div className="relative inline-block text-left">
              <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="inline-flex justify-between items-center w-48 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" id="dropdown-button" aria-expanded={isDropdownOpen} aria-haspopup="true">
                Select an option
                {isDropdownOpen ? <ChevronUpIcon className="ml-2 h-5 w-5" aria-hidden="true" /> : <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />}
              </button>
              {isDropdownOpen && <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10 animate-dropdown" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button" tabIndex={-1}>
                  <div className="py-1" role="none">
                    {['Option 1', 'Option 2', 'Option 3'].map((option, idx) => <a key={idx} href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150" role="menuitem" tabIndex={-1} onClick={e => {
                e.preventDefault();
                setIsDropdownOpen(false);
              }}>
                        {option}
                      </a>)}
                  </div>
                </div>}
            </div>
            <div className="bg-gray-50 p-4 rounded-md mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Implementation Notes
              </h4>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                <li>
                  Use{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    absolute
                  </code>{' '}
                  positioning for the dropdown panel
                </li>
                <li>Toggle icon rotation to indicate open/closed state</li>
                <li>
                  Add{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    animate-dropdown
                  </code>{' '}
                  for smooth opening animation
                </li>
                <li>Include hover states for dropdown items</li>
                <li>Use proper ARIA attributes for accessibility</li>
              </ul>
            </div>
          </div>
        </div>}
      {/* Tooltip Interactions */}
      {activeTab === 'tooltip' && <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Tooltip Interactions
            </h3>
            <p className="text-gray-600 mb-4">
              Tooltips provide additional information on hover or focus.
            </p>
            <div className="flex flex-col items-center justify-center h-40">
              <div className="relative inline-block">
                <button onMouseEnter={() => setIsTooltipVisible(true)} onMouseLeave={() => setIsTooltipVisible(false)} onFocus={() => setIsTooltipVisible(true)} onBlur={() => setIsTooltipVisible(false)} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200">
                  <HelpCircleIcon className="h-5 w-5 text-gray-600" />
                </button>
                {isTooltipVisible && <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 px-3 py-2 bg-gray-900 text-white text-xs rounded shadow-lg w-48 animate-fade-in z-10 mb-2">
                    <div className="text-center">
                      This is a tooltip with information about this feature.
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-gray-900"></div>
                  </div>}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Hover or focus on the icon to see the tooltip
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Implementation Notes
              </h4>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                <li>
                  Position tooltips using{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    absolute
                  </code>{' '}
                  with{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    transform
                  </code>
                </li>
                <li>Add a small triangle using border techniques</li>
                <li>
                  Use{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    animate-fade-in
                  </code>{' '}
                  for smooth appearance
                </li>
                <li>Support both mouse and keyboard interactions</li>
                <li>Set appropriate z-index to prevent overlap issues</li>
              </ul>
            </div>
          </div>
        </div>}
      {/* Accordion Interactions */}
      {activeTab === 'accordion' && <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Accordion Interactions
            </h3>
            <p className="text-gray-600 mb-4">
              Accordions expand and collapse to reveal content with smooth
              animations.
            </p>
            <div className="border border-gray-200 rounded-md">
              <button onClick={() => setIsAccordionOpen(!isAccordionOpen)} className="w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset transition-colors duration-200 flex justify-between items-center">
                <span>Click to toggle accordion</span>
                {isAccordionOpen ? <ChevronUpIcon className="h-5 w-5 text-gray-500" /> : <ChevronDownIcon className="h-5 w-5 text-gray-500" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isAccordionOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    This is the expandable content area of the accordion. It
                    animates smoothly when opening and closing. The height
                    transition creates a nice expanding effect.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Implementation Notes
              </h4>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                <li>
                  Use{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    max-h-0
                  </code>{' '}
                  and{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    max-h-40
                  </code>{' '}
                  with{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    transition-all
                  </code>{' '}
                  for smooth height animation
                </li>
                <li>
                  Add{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    overflow-hidden
                  </code>{' '}
                  to contain the animation
                </li>
                <li>Toggle icon rotation to indicate state</li>
                <li>Include opacity transition for smoother appearance</li>
                <li>
                  Use{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    ease-in-out
                  </code>{' '}
                  for natural motion
                </li>
              </ul>
            </div>
          </div>
        </div>}
      {/* Notification Interactions */}
      {activeTab === 'notifications' && <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Notification Interactions
            </h3>
            <p className="text-gray-600 mb-4">
              Notifications provide timely feedback and alerts to users.
            </p>
            <div className="space-y-6">
              {/* Notification Badge */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Notification Badge
                </h4>
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200">
                      <BellIcon className="h-6 w-6 text-gray-600" />
                      {notificationCount > 0 && <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse-once">
                          {notificationCount}
                        </span>}
                    </button>
                  </div>
                  <div className="relative">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200">
                      <MailIcon className="h-6 w-6 text-gray-600" />
                      <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        2
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => setNotificationCount(notificationCount > 0 ? notificationCount - 1 : 0)} className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors">
                      Clear
                    </button>
                    <button onClick={() => setNotificationCount(notificationCount + 1)} className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition-colors">
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {/* Toast Notification */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Toast Notification
                </h4>
                <button onClick={triggerNotification} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                  Show Toast Notification
                </button>
                {showNotification && <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-72 animate-slide-up z-50">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3 w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          Success!
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Your changes have been saved successfully.
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0 flex">
                        <button className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none" onClick={() => setShowNotification(false)}>
                          <XIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Implementation Notes
              </h4>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                <li>
                  Use{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    absolute
                  </code>{' '}
                  positioning for notification badges
                </li>
                <li>
                  Add{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    animate-pulse
                  </code>{' '}
                  to draw attention to new notifications
                </li>
                <li>
                  For toast notifications, use{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">fixed</code>{' '}
                  positioning
                </li>
                <li>
                  Include entrance and exit animations for toast notifications
                </li>
                <li>
                  Set appropriate z-index to ensure notifications appear above
                  other content
                </li>
              </ul>
            </div>
          </div>
        </div>}
      {/* Transitions Interactions */}
      {activeTab === 'transitions' && <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Page Transitions & Animations
            </h3>
            <p className="text-gray-600 mb-4">
              Smooth transitions between states and pages enhance the user
              experience.
            </p>
            <div className="space-y-6">
              {/* Page Transition Demo */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Page Transition Demo
                </h4>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="w-48 bg-white rounded h-5"></div>
                    <div></div>
                  </div>
                  <div className="h-64 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-500 ease-in-out animate-fade-in">
                      <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          Welcome to Your Dashboard
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Your financial overview is just a click away.
                        </p>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center space-x-2">
                  <button className="w-3 h-3 bg-indigo-600 rounded-full"></button>
                  <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors"></button>
                  <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors"></button>
                </div>
              </div>
              {/* Element Transition Demo */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Element Transition Demo
                </h4>
                <div className="flex space-x-4 mb-4">
                  <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition-colors" onClick={() => {
                const element = document.getElementById('animated-element');
                if (element) {
                  element.classList.remove('translate-x-0', 'opacity-100', 'scale-100');
                  element.classList.add('translate-x-full', 'opacity-0', 'scale-90');
                  setTimeout(() => {
                    element.classList.remove('translate-x-full', 'opacity-0', 'scale-90');
                    element.classList.add('-translate-x-full');
                    setTimeout(() => {
                      element.classList.remove('-translate-x-full');
                      element.classList.add('translate-x-0', 'opacity-100', 'scale-100');
                    }, 50);
                  }, 300);
                }
              }}>
                    Slide Out & In
                  </button>
                  <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors" onClick={() => {
                const element = document.getElementById('animated-element');
                if (element) {
                  element.classList.remove('scale-100', 'opacity-100');
                  element.classList.add('scale-50', 'opacity-0');
                  setTimeout(() => {
                    element.classList.remove('scale-50', 'opacity-0');
                    element.classList.add('scale-100', 'opacity-100');
                  }, 300);
                }
              }}>
                    Zoom Effect
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors" onClick={() => {
                const element = document.getElementById('animated-element');
                if (element) {
                  element.classList.add('animate-bounce');
                  setTimeout(() => {
                    element.classList.remove('animate-bounce');
                  }, 1000);
                }
              }}>
                    Bounce
                  </button>
                </div>
                <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div id="animated-element" className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 ease-in-out translate-x-0 opacity-100 scale-100">
                    <div className="text-center">
                      <UserIcon className="h-10 w-10 text-indigo-600 mx-auto mb-2" />
                      <h3 className="text-lg font-medium text-gray-900">
                        User Profile
                      </h3>
                      <p className="text-gray-500 mt-1">
                        Click the buttons to see transitions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Implementation Notes
              </h4>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                <li>
                  Use{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    transition-all
                  </code>{' '}
                  for smooth animations
                </li>
                <li>
                  Combine{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    transform
                  </code>
                  ,{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    opacity
                  </code>
                  , and other properties for complex animations
                </li>
                <li>
                  Use{' '}
                  <code className="text-xs bg-gray-100 p-1 rounded">
                    ease-in-out
                  </code>{' '}
                  for natural-feeling transitions
                </li>
                <li>
                  Consider using libraries like Framer Motion for more complex
                  page transitions
                </li>
                <li>
                  Keep animations subtle and purposeful to avoid distracting
                  users
                </li>
              </ul>
            </div>
          </div>
        </div>}
      {/* Feedback Interactions */}
      {activeTab === 'feedback' && <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Interactive Feedback
            </h3>
            <p className="text-gray-600 mb-4">
              Visual and interactive feedback helps users understand the results
              of their actions.
            </p>
            <div className="space-y-6">
              {/* Success/Error Feedback */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Success/Error States
                </h4>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-fade-in">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">
                          Success
                        </h3>
                        <div className="mt-1 text-sm text-green-700">
                          <p>Your profile has been successfully updated.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 animate-fade-in">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <XIcon className="h-5 w-5 text-red-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          Error
                        </h3>
                        <div className="mt-1 text-sm text-red-700">
                          <p>
                            There was an error processing your request. Please
                            try again.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Form Submission Feedback */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Form Submission Feedback
                </h4>
                <div className="border border-gray-200 rounded-lg p-4">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="feedback-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input type="email" id="feedback-email" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label htmlFor="feedback-message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea id="feedback-message" rows={3} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your feedback..."></textarea>
                    </div>
                    <div>
                      <button type="button" onClick={handleSave} disabled={isSaving} className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
                        {isSaving ? <>
                            <LoaderIcon className="animate-spin -ml-1 mr-2 h-4 w-4" />
                            Submitting...
                          </> : saveComplete ? <>
                            <CheckIcon className="-ml-1 mr-2 h-4 w-4" />
                            Submitted!
                          </> : <>
                            <SendIcon className="-ml-1 mr-2 h-4 w-4" />
                            Submit Feedback
                          </>}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Interactive Progress */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Interactive Progress
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Profile Completion
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        75%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-indigo-600 h-2.5 rounded-full w-3/4 transition-all duration-1000"></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <button className="text-sm text-indigo-600 hover:text-indigo-800">
                        Complete Profile
                      </button>
                      <div className="flex items-center text-sm text-gray-500">
                        <ShieldIcon className="h-4 w-4 mr-1 text-green-500" />
                        Security Level: Good
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Implementation Notes
              </h4>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                <li>
                  Use appropriate colors to convey meaning (green for success,
                  red for errors)
                </li>
                <li>
                  Add subtle animations to draw attention to feedback messages
                </li>
                <li>Ensure feedback is clear and actionable</li>
                <li>Use loading states to indicate processing</li>
                <li>
                  Provide both visual and text feedback for important actions
                </li>
              </ul>
            </div>
          </div>
        </div>}
      {/* Global CSS for animations */}
      <style jsx>{`
        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-once {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .animate-dropdown {
          animation: dropdown 0.2s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }
        .animate-pulse-once {
          animation: pulse-once 0.5s ease-in-out;
        }
      `}</style>
    </div>;
}
function BookmarkIcon({
  className = ''
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </svg>;
}