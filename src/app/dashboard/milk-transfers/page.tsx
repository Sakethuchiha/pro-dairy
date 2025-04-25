'use client';

import { useState } from 'react';

export default function MilkTransfersPage() {
  const [formData, setFormData] = useState({
    sendMilkDate: '',
    from: '',
    to: '',
    receivedMilkDateTime: '',
    qtyKg: '',
    fat: false,
    snf: false,
    tankerSealNo: '',
    outputUnitCode: '',
    outputTimePeriod: '',
    outputQtyKg: '',
    outputQtyLit: '',
    outputFat: false,
    outputSnf: false,
    outputClr: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="p-6">
      <h1 className="text-3xl font-bold text-black mb-6">Milk Transfers</h1>

      <form className="space-y-6">
        {/* Send Milk Date */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="sendMilkDate">
            Send Milk Date
          </label>
          <input
            id="sendMilkDate"
            name="sendMilkDate"
            value={formData.sendMilkDate}
            onChange={handleChange}
            className="mt-2 px-4 py-3 border rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
            type="date"
          />
        </div>

        {/* From & To */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-black" htmlFor="from">
              From
            </label>
            <input
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              className="mt-2 px-4 py-3 border rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
              type="text"
              placeholder="Enter From"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-black" htmlFor="to">
              To
            </label>
            <input
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              className="mt-2 px-4 py-3 border rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
              type="text"
              placeholder="Enter To"
            />
          </div>
        </div>

        {/* Received Milk Date & Time */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="receivedMilkDateTime">
            Received Milk Date / Time
          </label>
          <input
            id="receivedMilkDateTime"
            name="receivedMilkDateTime"
            value={formData.receivedMilkDateTime}
            onChange={handleChange}
            className="mt-2 px-4 py-3 border rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
            type="datetime-local"
          />
        </div>

        {/* Quantity */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-black" htmlFor="qtyKg">
              Quantity (Kg)
            </label>
            <input
              id="qtyKg"
              name="qtyKg"
              value={formData.qtyKg}
              onChange={handleChange}
              className="mt-2 px-4 py-3 border rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
              type="number"
              placeholder="Enter Qty in Kg"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-black" htmlFor="fat">
              Fat
            </label>
            <input
              type="checkbox"
              id="fat"
              name="fat"
              checked={formData.fat}
              onChange={handleChange}
              className="mt-2"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-black" htmlFor="snf">
              SNF
            </label>
            <input
              type="checkbox"
              id="snf"
              name="snf"
              checked={formData.snf}
              onChange={handleChange}
              className="mt-2"
            />
          </div>
        </div>

        {/* Tanker Seal No */}
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="tankerSealNo">
            Tanker Seal No
          </label>
          <input
            id="tankerSealNo"
            name="tankerSealNo"
            value={formData.tankerSealNo}
            onChange={handleChange}
            className="mt-2 px-4 py-3 border rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
            type="text"
            placeholder="Enter Tanker Seal No"
          />
        </div>

        {/* Output Entry */}
        <div>
          <h2 className="text-2xl font-semibold text-black mt-8">Output Entry</h2>

          {/* Unit Code */}
          <div>
            <label className="block text-sm font-medium text-black" htmlFor="outputUnitCode">
              Unit Code
            </label>
            <input
              id="outputUnitCode"
              name="outputUnitCode"
              value={formData.outputUnitCode}
              onChange={handleChange}
              className="mt-2 px-4 py-3 border rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
              type="text"
              placeholder="Enter Unit Code"
            />
          </div>

          {/* Time Period */}
          <div>
            <label className="block text-sm font-medium text-black" htmlFor="outputTimePeriod">
              Time Period
            </label>
            <input
              id="outputTimePeriod"
              name="outputTimePeriod"
              value={formData.outputTimePeriod}
              onChange={handleChange}
              className="mt-2 px-4 py-3 border rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
              type="text"
              placeholder="Enter Time Period"
            />
          </div>

          {/* Output Details */}
          <div className="flex space-x-4 mt-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-black" htmlFor="outputQtyKg">
                Qty (Kg)
              </label>
              <input
                id="outputQtyKg"
                name="outputQtyKg"
                value={formData.outputQtyKg}
                onChange={handleChange}
                className="mt-2 px-4 py-3 border rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
                type="number"
                placeholder="Enter Qty in Kg"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-black" htmlFor="outputQtyLit">
                Qty (L)
              </label>
              <input
                id="outputQtyLit"
                name="outputQtyLit"
                value={formData.outputQtyLit}
                onChange={handleChange}
                className="mt-2 px-4 py-3 border rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
                type="number"
                placeholder="Enter Qty in Lit"
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-black" htmlFor="outputFat">
                Fat
              </label>
              <input
                type="checkbox"
                id="outputFat"
                name="outputFat"
                checked={formData.outputFat}
                onChange={handleChange}
                className="mr-2"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-black" htmlFor="outputSnf">
                SNF
              </label>
              <input
                type="checkbox"
                id="outputSnf"
                name="outputSnf"
                checked={formData.outputSnf}
                onChange={handleChange}
                className="mr-2"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-black" htmlFor="outputClr">
                CLR
              </label>
              <input
                type="checkbox"
                id="outputClr"
                name="outputClr"
                checked={formData.outputClr}
                onChange={handleChange}
                className="mr-2"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 font-semibold rounded-lg bg-[#FF6F00] text-white hover:bg-[#FF6F00] focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
