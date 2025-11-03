import React, { useState } from 'react';
import { CheckCircleIcon, ClockIcon, AlertTriangleIcon, HelpCircleIcon, FileTextIcon, ShieldCheckIcon, UserCheckIcon, ArrowRightIcon, XIcon } from 'lucide-react';
interface TransferOrchestrationSystemProps {
  accountName: string;
  sourceInstitution: string;
  destinationInstitution: string;
  accountNumber: string;
  estimatedCompletionDays: number;
  currentStep: number;
  totalSteps: number;
  documents: {
    name: string;
    status: 'pending' | 'uploaded' | 'verified' | 'rejected';
  }[];
  kycStatus: 'not_started' | 'submitted' | 'in_review' | 'verified' | 'rejected';
}
export const TransferOrchestrationSystem: React.FC<TransferOrchestrationSystemProps> = ({
  accountName,
  sourceInstitution,
  destinationInstitution,
  accountNumber,
  estimatedCompletionDays,
  currentStep,
  totalSteps,
  documents,
  kycStatus
}) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'uploaded':
      case 'verified':
        return <CheckCircleIcon size={16} className="text-green-600" />;
      case 'pending':
        return <ClockIcon size={16} className="text-yellow-600" />;
      case 'rejected':
        return <AlertTriangleIcon size={16} className="text-red-600" />;
      default:
        return <ClockIcon size={16} className="text-gray-400" />;
    }
  };
  const getKycStatusText = () => {
    switch (kycStatus) {
      case 'not_started':
        return 'Not Started';
      case 'submitted':
        return 'Submitted';
      case 'in_review':
        return 'In Review';
      case 'verified':
        return 'Verified';
      case 'rejected':
        return 'Requires Attention';
      default:
        return 'Unknown';
    }
  };
  const getKycStatusColor = () => {
    switch (kycStatus) {
      case 'verified':
        return 'text-green-600';
      case 'in_review':
      case 'submitted':
        return 'text-yellow-600';
      case 'rejected':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };
  const tooltips = {
    kyc: 'KYC (Know Your Customer) is a regulatory requirement to verify your identity. This helps prevent fraud and ensures compliance with anti-money laundering regulations.',
    documents: 'Required documents include government ID, transfer authorization forms, and account statements from your current institution.',
    compliance: 'This step ensures that your transfer meets all CRA (Canada Revenue Agency) requirements for registered accounts to maintain tax-sheltered status.',
    timeline: 'The estimated timeline is based on average processing times. Transfers between financial institutions typically take 4-6 weeks to complete.'
  };
  return <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">
          Transfer in Progress
        </h3>
        <div className="text-sm text-gray-700 font-medium flex items-center">
          <ClockIcon size={16} className="mr-1" />~{estimatedCompletionDays}{' '}
          days remaining
          <div className="relative ml-1">
            <button onClick={() => setActiveTooltip(activeTooltip === 'timeline' ? null : 'timeline')} className="text-gray-600 hover:text-gray-800">
              <HelpCircleIcon size={16} />
            </button>
            {activeTooltip === 'timeline' && <div className="absolute right-0 top-full mt-1 bg-white rounded-md shadow-lg z-10 border border-gray-200 p-3 w-64">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-gray-900">
                    Estimated Timeline
                  </h4>
                  <button onClick={() => setActiveTooltip(null)} className="text-gray-500 hover:text-gray-700">
                    <XIcon size={14} />
                  </button>
                </div>
                <p className="text-sm text-gray-700">{tooltips.timeline}</p>
              </div>}
          </div>
        </div>
      </div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-800">
            Transfer Progress
          </span>
          <span className="text-sm font-medium text-gray-800">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-indigo-600 h-4 rounded-full transition-all duration-500" style={{
          width: `${currentStep / totalSteps * 100}%`
        }} role="progressbar" aria-valuenow={currentStep / totalSteps * 100} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
      </div>
      {/* Institution details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">From Institution</div>
          <div className="flex items-center">
            <div className="bg-white rounded-lg p-1 w-12 h-12 flex items-center justify-center border border-gray-200 shadow-sm mr-3">
              <img src={`https://placehold.co/48x48/e6e6e6/666666?text=${sourceInstitution}`} alt={`${sourceInstitution} logo`} className="max-h-10 max-w-10" />
            </div>
            <div>
              <div className="text-base font-medium text-gray-900">
                {sourceInstitution}
              </div>
              <div className="text-sm text-gray-600">
                Account: •••• {accountNumber.slice(-4)}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">To Institution</div>
          <div className="flex items-center">
            <div className="bg-white rounded-lg p-1 w-12 h-12 flex items-center justify-center border border-gray-200 shadow-sm mr-3">
              <img src={`https://placehold.co/48x48/e6e6e6/666666?text=${destinationInstitution}`} alt={`${destinationInstitution} logo`} className="max-h-10 max-w-10" />
            </div>
            <div>
              <div className="text-base font-medium text-gray-900">
                {destinationInstitution}
              </div>
              <div className="text-sm text-gray-600">{accountName}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Document status */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <FileTextIcon size={18} className="text-gray-700 mr-2" />
          <h4 className="text-base font-medium text-gray-900">
            Required Documents
          </h4>
          <div className="relative ml-1">
            <button onClick={() => setActiveTooltip(activeTooltip === 'documents' ? null : 'documents')} className="text-gray-600 hover:text-gray-800">
              <HelpCircleIcon size={16} />
            </button>
            {activeTooltip === 'documents' && <div className="absolute left-0 top-full mt-1 bg-white rounded-md shadow-lg z-10 border border-gray-200 p-3 w-64">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-gray-900">
                    Required Documents
                  </h4>
                  <button onClick={() => setActiveTooltip(null)} className="text-gray-500 hover:text-gray-700">
                    <XIcon size={14} />
                  </button>
                </div>
                <p className="text-sm text-gray-700">{tooltips.documents}</p>
              </div>}
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="space-y-3">
            {documents.map((doc, index) => <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  {getStatusIcon(doc.status)}
                  <span className="ml-2 text-gray-700">{doc.name}</span>
                </div>
                <span className={`text-sm font-medium ${doc.status === 'verified' ? 'text-green-600' : doc.status === 'uploaded' ? 'text-indigo-600' : doc.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
                  {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                </span>
              </div>)}
          </div>
        </div>
      </div>
      {/* KYC Status */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <UserCheckIcon size={18} className="text-gray-700 mr-2" />
          <h4 className="text-base font-medium text-gray-900">
            KYC Verification
          </h4>
          <div className="relative ml-1">
            <button onClick={() => setActiveTooltip(activeTooltip === 'kyc' ? null : 'kyc')} className="text-gray-600 hover:text-gray-800">
              <HelpCircleIcon size={16} />
            </button>
            {activeTooltip === 'kyc' && <div className="absolute left-0 top-full mt-1 bg-white rounded-md shadow-lg z-10 border border-gray-200 p-3 w-64">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-gray-900">
                    KYC Verification
                  </h4>
                  <button onClick={() => setActiveTooltip(null)} className="text-gray-500 hover:text-gray-700">
                    <XIcon size={14} />
                  </button>
                </div>
                <p className="text-sm text-gray-700">{tooltips.kyc}</p>
              </div>}
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`h-3 w-3 rounded-full ${kycStatus === 'verified' ? 'bg-green-500' : kycStatus === 'in_review' || kycStatus === 'submitted' ? 'bg-yellow-500' : kycStatus === 'rejected' ? 'bg-red-500' : 'bg-gray-300'}`}></div>
              <span className="text-gray-700">Status:</span>
            </div>
            <span className={`text-base font-medium ${getKycStatusColor()}`}>
              {getKycStatusText()}
            </span>
          </div>
        </div>
      </div>
      {/* Regulatory compliance */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <ShieldCheckIcon size={18} className="text-gray-700 mr-2" />
          <h4 className="text-base font-medium text-gray-900">
            Regulatory Compliance
          </h4>
          <div className="relative ml-1">
            <button onClick={() => setActiveTooltip(activeTooltip === 'compliance' ? null : 'compliance')} className="text-gray-600 hover:text-gray-800">
              <HelpCircleIcon size={16} />
            </button>
            {activeTooltip === 'compliance' && <div className="absolute left-0 top-full mt-1 bg-white rounded-md shadow-lg z-10 border border-gray-200 p-3 w-64">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-gray-900">
                    Regulatory Compliance
                  </h4>
                  <button onClick={() => setActiveTooltip(null)} className="text-gray-500 hover:text-gray-700">
                    <XIcon size={14} />
                  </button>
                </div>
                <p className="text-sm text-gray-700">{tooltips.compliance}</p>
              </div>}
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center">
            <CheckCircleIcon size={18} className="text-green-600 mr-2" />
            <span className="text-gray-700">CRA transfer rules verified</span>
          </div>
        </div>
      </div>
      {/* Support CTA */}
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center text-base">
        <ArrowRightIcon size={18} className="mr-2" />
        Talk to a Human About This Transfer
      </button>
    </div>;
};