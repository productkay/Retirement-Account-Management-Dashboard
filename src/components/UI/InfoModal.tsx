import React, { useEffect, useState, useRef } from 'react';
import { XIcon } from 'lucide-react';
interface InfoModalProps {
  title: string;
  content: string | React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
export const InfoModal: React.FC<InfoModalProps> = ({
  title,
  content,
  isOpen,
  onClose
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 focus:outline-none" aria-label="Close">
            <XIcon size={20} />
          </button>
        </div>
        <div className="px-6 py-4">
          {typeof content === 'string' ? <p className="text-gray-700">{content}</p> : content}
        </div>
        <div className="px-6 py-3 bg-gray-50 text-right">
          <button onClick={onClose} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Close
          </button>
        </div>
      </div>
    </div>;
};