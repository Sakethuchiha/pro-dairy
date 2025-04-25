'use client';

import { useState } from "react";

export default function TmBatchPreparation() {
  const [formData, setFormData] = useState({
    procurementDate: '',
    purchaseTime: 'AM',
    milkType: 'Issue to Whole Milk',
    goodMilkQty: '',
    goodMilkFat: '',
    goodMilkSNF: '',
    addRequiredSMP: '',
    creamPercentage: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-black mb-6">TM Batch Preparation</h1>
      <form className="space-y-6 max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg shadow-sm bg-white">
        {/* Procurement Date */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="procurementDate">
            Procurement Date
          </label>
          <input
            id="procurementDate"
            name="procurementDate"
            value={formData.procurementDate}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
            type="date"
          />
        </div>

        {/* Purchase Time */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="purchaseTime">
            Purchase Time
          </label>
          <select
            id="purchaseTime"
            name="purchaseTime"
            value={formData.purchaseTime}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>

        {/* Milk Type */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="milkType">
            Milk Type
          </label>
          <select
            id="milkType"
            name="milkType"
            value={formData.milkType}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
          >
            <option value="Issue to Whole Milk">Issue to Whole Milk</option>
          </select>
        </div>

        {/* Good Milk Qty (Kg) */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="goodMilkQty">
            Good Milk Qty (Kg)
          </label>
          <input
            id="goodMilkQty"
            name="goodMilkQty"
            value={formData.goodMilkQty}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
            type="number"
            placeholder="Enter Good Milk Qty"
          />
        </div>

        {/* Good Milk Fat */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="goodMilkFat">
            Good Milk Fat
          </label>
          <input
            id="goodMilkFat"
            name="goodMilkFat"
            value={formData.goodMilkFat}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
            type="number"
            placeholder="Enter Good Milk Fat"
          />
        </div>

        {/* Good Milk SNF */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="goodMilkSNF">
            Good Milk SNF
          </label>
          <input
            id="goodMilkSNF"
            name="goodMilkSNF"
            value={formData.goodMilkSNF}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
            type="number"
            placeholder="Enter Good Milk SNF"
          />
        </div>

        {/* Add Required SMP Kgs */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="addRequiredSMP">
            Add Required SMP Kgs
          </label>
          <input
            id="addRequiredSMP"
            name="addRequiredSMP"
            value={formData.addRequiredSMP}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
            type="number"
            placeholder="Enter SMP Kgs"
          />
        </div>

        {/* Cream Percentage */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="creamPercentage">
            Cream Percentage
          </label>
          <input
            id="creamPercentage"
            name="creamPercentage"
            value={formData.creamPercentage}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
            type="number"
            placeholder="Enter Cream Percentage"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-[#FF6F00] text-white rounded hover:bg-[#ff9c2b] w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
