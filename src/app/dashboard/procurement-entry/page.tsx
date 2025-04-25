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
    procurementDate: '',
    rejectedMilkTypes: {
      ptc: false,
      sour: false,
      curd: false,
    },
  });

  const [activeTab, setActiveTab] = useState<'search' | 'entry' | 'edit'>('search');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const { name, value, type } = target;

    if (type === 'checkbox') {
      const checkbox = target as HTMLInputElement;
      const checked = checkbox.checked;

      // Handle nested checkbox fields (like rejectedMilkTypes)
      if (name in formData.rejectedMilkTypes) {
        setFormData((prev) => ({
          ...prev,
          rejectedMilkTypes: {
            ...prev.rejectedMilkTypes,
            [name]: checked,
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }));
      }
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
        {['search', 'entry', 'edit'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => setActiveTab(tab as typeof activeTab)}
          >
            {tab[0].toUpperCase() + tab.slice(1)} Procurement Entry
          </button>
        ))}
      </div>

      {activeTab === 'search' && (
        <div>
          <h2 className="text-2xl font-semibold text-black">Search Procurement Entry</h2>
          <form className="space-y-6">
            {['unitCode', 'routeCode', 'centerCode', 'userLogin'].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-black" htmlFor={field}>
                  {field.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  id={field}
                  name={field}
                  value={formData[field as keyof typeof formData] as string}
                  onChange={handleInputChange}
                  className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  type="text"
                  placeholder={`Enter ${field}`}
                />
              </div>
            ))}
            {['milkType', 'purchaseTime'].map((selectName) => (
              <div key={selectName}>
                <label className="block text-sm font-medium text-black" htmlFor={selectName}>
                  {selectName.replace(/([A-Z])/g, ' $1')}
                </label>
                <select
                  id={selectName}
                  name={selectName}
                  value={formData[selectName as keyof typeof formData] as string}
                  onChange={handleInputChange}
                  className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {selectName === 'milkType' ? (
                    <>
                      <option value="Buffalo Milk">Buffalo Milk</option>
                      <option value="Cow Milk">Cow Milk</option>
                    </>
                  ) : (
                    <>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </>
                  )}
                </select>
              </div>
            ))}
            {['fromDate', 'thruDate'].map((dateField) => (
              <div key={dateField}>
                <label className="block text-sm font-medium text-black" htmlFor={dateField}>
                  {dateField.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  id={dateField}
                  name={dateField}
                  value={formData[dateField as keyof typeof formData] as string}
                  onChange={handleInputChange}
                  className="mt-2 px-4 py-3 border rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  type="date"
                />
              </div>
            ))}
            <div className="mt-6">
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">
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
            {/* Reuse some fields */}
            <div>
              <label className="block text-sm font-medium text-black" htmlFor="unitCode">
                Unit Code
              </label>
              <input
                id="unitCode"
                name="unitCode"
                value={formData.unitCode}
                onChange={handleInputChange}
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black"
                type="text"
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
                className="mt-2 px-4 py-3 border rounded-lg w-full text-black"
                type="date"
              />
            </div>

            {/* Add checkbox fields for rejectedMilkTypes */}
            <div>
              <span className="block text-sm font-medium text-black mb-2">Rejected Milk Types</span>
              {Object.entries(formData.rejectedMilkTypes).map(([key, val]) => (
                <label key={key} className="inline-flex items-center mr-6">
                  <input
                    type="checkbox"
                    name={key}
                    checked={val}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  {key.toUpperCase()}
                </label>
              ))}
            </div>

            <div className="mt-6">
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400">
                Submit Entry
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
