"use client";  // Ensures this is a client-side component

import React, { useState } from 'react';

const RateChart = () => {
  // State for toggling between tabs
  const [activeTab, setActiveTab] = useState<'priceCalculator' | 'priceChart'>('priceCalculator');

  // Form state for Price Calculator
  const [formData, setFormData] = useState({
    centerCode: '',
    priceDate: '',
    purchaseTime: 'AM',
    milkType: 'Buffalo Milk',
    milkKgs: '',
    fat: '',
    snf: ''
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="p-8 space-y-6">
      {/* Tabs for Price Calculator and Price Chart */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('priceCalculator')}
          className={`px-6 py-3 text-lg font-semibold rounded-lg w-full ${
            activeTab === 'priceCalculator' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Price Calculator
        </button>
        <button
          onClick={() => setActiveTab('priceChart')}
          className={`px-6 py-3 text-lg font-semibold rounded-lg w-full ${
            activeTab === 'priceChart' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Price Chart
        </button>
      </div>

      {/* Price Calculator Form */}
      {activeTab === 'priceCalculator' && (
        <div className="p-6 border-2 border-orange-500 rounded-lg space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Price Calculator</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Center Code */}
              <div>
                <label className="block text-sm font-medium text-gray-900">Center Code</label>
                <input
                  type="text"
                  name="centerCode"
                  value={formData.centerCode}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Price Date */}
              <div>
                <label className="block text-sm font-medium text-gray-900">Price Date</label>
                <input
                  type="date"
                  name="priceDate"
                  value={formData.priceDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            {/* Purchase Time and Milk Type */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900">Purchase Time</label>
                <select
                  name="purchaseTime"
                  value={formData.purchaseTime}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">Milk Type</label>
                <select
                  name="milkType"
                  value={formData.milkType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="Buffalo Milk">Buffalo Milk</option>
                  <option value="Cow Milk">Cow Milk</option>
                </select>
              </div>
            </div>

            {/* Milk Kgs, Fat, and SNF */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900">Milk Kgs</label>
                <input
                  type="number"
                  name="milkKgs"
                  value={formData.milkKgs}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">Milk FAT</label>
                <input
                  type="text"
                  name="fat"
                  value={formData.fat}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">Milk SNF</label>
                <input
                  type="text"
                  name="snf"
                  value={formData.snf}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>

            {/* Calculate Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-400"
              >
                Calculate
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Price Chart Form */}
      {activeTab === 'priceChart' && (
        <div className="p-6 border-2 border-orange-500 rounded-lg space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Price Chart</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Price Effective Date */}
              <div>
                <label className="block text-sm font-medium text-gray-900">Price Effective Date</label>
                <input
                  type="date"
                  name="priceEffectiveDate"
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Purchase Time */}
              <div>
                <label className="block text-sm font-medium text-gray-900">Purchase Time</label>
                <select
                  name="purchaseTime"
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>

            {/* Find Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-400"
              >
                Find
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default RateChart;
