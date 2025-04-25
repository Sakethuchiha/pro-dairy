'use client'; // Ensures this is a client-side component

import { useState } from 'react';

export default function ProcurementEntry() {
  const [formData, setFormData] = useState({
    unitCode: '',
    routeCode: '',
    centerCode: '',
    milkType: 'Buffalo Milk',
    purchaseTime: 'AM',
    fromDate: '',
    thruDate: '',
    userLogin: '',
    goodMilkQty: '',
    goodMilkFat: '',
    goodMilkSNF: '',
    rejectedMilkQty: '',
    rejectedMilkTypes: {
      ptc: false,
      sour: false,
      curd: false,
    },
  });

  const [activeTab, setActiveTab] = useState<'search' | 'entry' | 'edit'>('search');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-black mb-6">Procurement Entry</h1>

      {/* Tabs to toggle between different forms */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'search' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setActiveTab('search')}
        >
          Search Procurement Entry
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'entry' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setActiveTab('entry')}
        >
          Procurement Entry
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'edit' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setActiveTab('edit')}
        >
          Edit Procurement Entry
        </button>
      </div>

      {activeTab === 'search' && (
        <div>
          <h2 className="text-2xl font-semibold text-black">Search Procurement Entry</h2>
          <form className="space-y-6">
            {/* Search Form Fields */}
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="unitCode">
                Unit Code
              </label>
              <input
                id="unitCode"
                name="unitCode"
                value={formData.unitCode}
                onChange={handleInputChange}
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                placeholder="Search by Unit Code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="routeCode">
                Route Code
              </label>
              <input
                id="routeCode"
                name="routeCode"
                value={formData.routeCode}
                onChange={handleInputChange}
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                placeholder="Search by Route Code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="centerCode">
                Center Code
              </label>
              <input
                id="centerCode"
                name="centerCode"
                value={formData.centerCode}
                onChange={handleInputChange}
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                placeholder="Search by Center Code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="milkType">
                Milk Type
              </label>
              <select
                id="milkType"
                name="milkType"
                value={formData.milkType}
                onChange={handleInputChange}
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="Buffalo Milk">Buffalo Milk</option>
                <option value="Cow Milk">Cow Milk</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="purchaseTime">
                Purchase Time
              </label>
              <select
                id="purchaseTime"
                name="purchaseTime"
                value={formData.purchaseTime}
                onChange={handleInputChange}
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="fromDate">
                From Date
              </label>
              <input
                id="fromDate"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleInputChange}
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="date"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="thruDate">
                Thru Date
              </label>
              <input
                id="thruDate"
                name="thruDate"
                value={formData.thruDate}
                onChange={handleInputChange}
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="date"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="userLogin">
                User Login
              </label>
              <input
                id="userLogin"
                name="userLogin"
                value={formData.userLogin}
                onChange={handleInputChange}
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                placeholder="Enter User Login"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      )}

      {activeTab === 'entry' && (
        <div>
          <h2 className="text-2xl font-semibold text-black">Procurement Entry</h2>
          <form className="space-y-6">
            {/* Procurement Entry Form */}
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="unitCode">
                Unit Code
              </label>
              <input
                id="unitCode"
                name="unitCode"
                value={formData.unitCode}
                onChange={handleInputChange}
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                placeholder="Enter Unit Code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="procurementDate">
                Procurement Date
              </label>
              <input
                id="procurementDate"
                name="procurementDate"
                value={formData.procurementDate}
                onChange={handleInputChange}
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="date"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="milkType">
                Milk Type
              </label>
              <select
                id="milkType"
                name="milkType"
                value={formData.milkType}
                onChange={handleInputChange}
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="Buffalo Milk">Buffalo Milk</option>
                <option value="Cow Milk">Cow Milk</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="purchaseTime">
                Purchase Time
              </label>
              <select
                id="purchaseTime"
                name="purchaseTime"
                value={formData.purchaseTime}
                onChange={handleInputChange}
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>

            {/* Additional Procurement Fields */}
            {/* Same as per the previous code */}
            <div className="mt-6">
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
              >
                Add Procurement Entry
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
