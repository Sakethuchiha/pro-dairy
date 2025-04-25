'use client';

import { useState } from 'react';

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState('procurementReports');

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-black mb-6">Procurement Reports</h1>

      {/* Internal Navigation Bar */}
      <div className="bg-blue-600 text-white flex space-x-4 p-3 rounded-t-lg mb-6">
        <button
          onClick={() => setActiveTab('procurementReports')}
          className={`px-4 py-2 rounded ${activeTab === 'procurementReports' ? 'bg-blue-800' : 'bg-blue-600'}`}
        >
          Procurement Reports
        </button>
        <button
          onClick={() => setActiveTab('unitReports')}
          className={`px-4 py-2 rounded ${activeTab === 'unitReports' ? 'bg-blue-800' : 'bg-blue-600'}`}
        >
          Unit Reports
        </button>
        <button
          onClick={() => setActiveTab('billingReports')}
          className={`px-4 py-2 rounded ${activeTab === 'billingReports' ? 'bg-blue-800' : 'bg-blue-600'}`}
        >
          Billing Reports
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg border border-gray-300">
        {activeTab === 'procurementReports' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Procurement Reports</h2>
            <form className="space-y-4">
              {/* Form Fields for Procurement Reports */}
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-black w-1/4" htmlFor="procDate">
                  Procurement Date:
                </label>
                <input
                  type="date"
                  id="procDate"
                  className="p-2 border border-gray-300 rounded-md w-1/4"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-black w-1/4" htmlFor="purchaseTime">
                  Purchase Time:
                </label>
                <select
                  id="purchaseTime"
                  className="p-2 border border-gray-300 rounded-md w-1/4"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-black w-1/4" htmlFor="milkType">
                  Milk Type:
                </label>
                <select
                  id="milkType"
                  className="p-2 border border-gray-300 rounded-md w-1/4"
                >
                  <option value="BuffaloMilk">Buffalo Milk</option>
                  <option value="CowMilk">Cow Milk</option>
                </select>
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-black w-1/4" htmlFor="vendorCode">
                  Vendor Code:
                </label>
                <input
                  type="text"
                  id="vendorCode"
                  className="p-2 border border-gray-300 rounded-md w-1/4"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-black w-1/4" htmlFor="quantity">
                  Qty (Kgs/Ltrs):
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="p-2 border border-gray-300 rounded-md w-1/4"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-black w-1/4" htmlFor="rate">
                  Rate:
                </label>
                <input
                  type="number"
                  id="rate"
                  className="p-2 border border-gray-300 rounded-md w-1/4"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-black w-1/4" htmlFor="totalAmount">
                  Total Amount:
                </label>
                <input
                  type="number"
                  id="totalAmount"
                  className="p-2 border border-gray-300 rounded-md w-1/4"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-black w-1/4" htmlFor="cashOrCredit">
                  Cash/Credit:
                </label>
                <input
                  type="text"
                  id="cashOrCredit"
                  className="p-2 border border-gray-300 rounded-md w-1/4"
                />
              </div>
              <div className="mt-6">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 w-full">
                  Download Report
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'unitReports' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Unit Reports</h2>
            {/* Add similar structure for Unit Reports */}
            <form className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-black w-1/4" htmlFor="unitName">
                  Unit Name:
                </label>
                <input
                  type="text"
                  id="unitName"
                  className="p-2 border border-gray-300 rounded-md w-1/4"
                />
              </div>
              {/* Additional form fields */}
              <div className="mt-6">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 w-full">
                  Download Report
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'billingReports' && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Billing Reports</h2>
            {/* Add similar structure for Billing Reports */}
            <form className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-black w-1/4" htmlFor="billingPeriod">
                  Billing Period:
                </label>
                <input
                  type="text"
                  id="billingPeriod"
                  className="p-2 border border-gray-300 rounded-md w-1/4"
                />
              </div>
              {/* Additional form fields */}
              <div className="mt-6">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 w-full">
                  Download Report
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
