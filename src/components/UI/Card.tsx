import React from 'react';
interface CardProps {
  title: string;
  children: ReactNode;
}
export const Card: React.FC<CardProps> = ({
  title,
  children
}) => {
  return <div className="bg-white rounded-lg shadow-sm">
      <div className="p-5 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </div>;
};