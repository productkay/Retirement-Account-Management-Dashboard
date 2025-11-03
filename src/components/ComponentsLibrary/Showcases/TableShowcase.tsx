import React, { Component } from 'react';
import { ComponentShowcase, ComponentExample, PropsTable } from '../Layout';
export const TableShowcase = () => {
  return <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Tables & Lists</h1>
      <p className="text-gray-600 mb-8">
        Table and list components used to display structured data throughout the
        retirement dashboard application.
      </p>
      <ComponentShowcase title="Data Tables" description="Tables for displaying structured data with rows and columns.">
        <ComponentExample title="Basic Table" description="Standard data table with headers and rows.">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Account
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Institution
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Balance
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    RRSP
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    TD
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $250,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    TFSA
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    RBC
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $180,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    RRIF
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Questrade
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $300,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      In Transfer
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <ComponentShowcase title="Lists" description="List components for displaying collections of items.">
        <ComponentExample title="Transaction List" description="List of financial transactions with details.">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              <li>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        RRIF Withdrawal
                      </p>
                      <p className="ml-2 flex-shrink-0 font-normal text-sm text-gray-500">
                        Dec 15
                      </p>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        RRIF Account
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p className="text-red-600 font-medium">-$2,450</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        TFSA Deposit
                      </p>
                      <p className="ml-2 flex-shrink-0 font-normal text-sm text-gray-500">
                        Dec 10
                      </p>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        TFSA Account
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p className="text-green-600 font-medium">+$5,000</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        RRSP Transfer
                      </p>
                      <p className="ml-2 flex-shrink-0 font-normal text-sm text-gray-500">
                        Dec 8
                      </p>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        RRSP Account
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p className="text-red-600 font-medium">-$10,000</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </ComponentExample>
      </ComponentShowcase>
      <PropsTable props={[{
      name: 'data',
      type: 'Array<Object>',
      description: 'The data to display in the table',
      required: true
    }, {
      name: 'columns',
      type: 'Array<{ field: string, header: string, render?: (row: any) => ReactNode }>',
      description: 'Configuration for table columns',
      required: true
    }, {
      name: 'sortable',
      type: 'boolean',
      default: 'false',
      description: 'Whether the table can be sorted'
    }, {
      name: 'pagination',
      type: 'boolean',
      default: 'false',
      description: 'Whether to show pagination controls'
    }, {
      name: 'pageSize',
      type: 'number',
      default: '10',
      description: 'Number of rows per page when pagination is enabled'
    }, {
      name: 'onRowClick',
      type: '(row: any) => void',
      description: 'Function called when a row is clicked'
    }, {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes'
    }]} />
    </div>;
};