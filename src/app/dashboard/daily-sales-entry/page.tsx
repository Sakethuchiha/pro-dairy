'use client';

import { useState } from 'react';

export default function DailySalesEntry() {
  const [formData, setFormData] = useState({
    procurementDate: '',
    purchaseTime: 'AM',
    milkType: 'TM',
    vendorCode: '',
    qtyKg: '',
    rate: '',
    totalAmount: '',
    paymentMode: 'Cash',
    approvedBy: '',
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
      <h1 className="text-3xl font-bold text-black mb-6">Daily Sales Entry</h1>
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
            className="mt-2 px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#FF6F00] focus:outline-none"
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
            className="mt-2 px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#FF6F00] focus:outline-none"
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
            className="mt-2 px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#FF6F00] focus:outline-none"
          >
            <option value="TM">TM</option>
            <option value="DTM">DTM</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Vendor Code */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="vendorCode">
            Vendor Code
          </label>
          <input
            id="vendorCode"
            name="vendorCode"
            value={formData.vendorCode}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#FF6F00] focus:outline-none"
            type="text"
            placeholder="Enter Vendor Code"
          />
        </div>

        {/* Qty (Kg) */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="qtyKg">
            Qty (Kg)
          </label>
          <input
            id="qtyKg"
            name="qtyKg"
            value={formData.qtyKg}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#FF6F00] focus:outline-none"
            type="number"
            placeholder="Enter Quantity"
          />
        </div>

        {/* Rate */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="rate">
            Rate
          </label>
          <input
            id="rate"
            name="rate"
            value={formData.rate}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#FF6F00] focus:outline-none"
            type="number"
            placeholder="Enter Rate"
          />
        </div>

        {/* Total Amount */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="totalAmount">
            Total Amount
          </label>
          <input
            id="totalAmount"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#FF6F00] focus:outline-none"
            type="number"
            placeholder="Enter Total Amount"
          />
        </div>

        {/* Cash or Credit */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="paymentMode">
            Payment Mode
          </label>
          <select
            id="paymentMode"
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#FF6F00] focus:outline-none"
          >
            <option value="Cash">Cash</option>
            <option value="Credit">Credit</option>
          </select>
        </div>

        {/* Approved By */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="approvedBy">
            Approved By
          </label>
          <input
            id="approvedBy"
            name="approvedBy"
            value={formData.approvedBy}
            onChange={handleInputChange}
            className="mt-2 px-4 py-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#FF6F00] focus:outline-none"
            type="text"
            placeholder="Enter Approved By"
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
