"use client";  // Ensures this is a client-side component

import React, { useState } from "react";

const LocationNetwork = () => {
  // State variables for form inputs and form visibility
  const [facilityId, setFacilityId] = useState("");
  const [facilityType, setFacilityType] = useState("");
  const [showForm, setShowForm] = useState(false); // Controls the form visibility
  const [formData, setFormData] = useState({
    unitName: "",
    centerName: "",
    ownerPartyName: "",
    mobileNumber: "",
    panNumber: "",
    gstNumber: "",
    bankDetails: {
      bankName: "",
      branch: "",
      accountNumber: "",
      ifscCode: "",
    },
  });

  // Handle change in input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in formData.bankDetails) {
      setFormData({
        ...formData,
        bankDetails: {
          ...formData.bankDetails,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle change in facility type selection
  const handleFacilityTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFacilityType(e.target.value);
    setShowForm(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Location Network</h2>

      {/* Create New Location Button */}
      <button
        onClick={() => setShowForm(true)} // Show the form when clicked
        className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-400"
      >
        Create New Location
      </button>

      {showForm && (
        <div className="mt-6 space-y-6 p-6 bg-white rounded-lg shadow-md border border-gray-300">
          {/* Facility ID */}
          <div>
            <label className="block text-sm font-medium text-gray-900" htmlFor="facilityId">
              Facility ID
            </label>
            <input
              type="number"
              name="facilityId"
              value={facilityId}
              onChange={(e) => setFacilityId(e.target.value)}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
              required
            />
          </div>

          {/* Facility Type ID */}
          <div>
            <label className="block text-sm font-medium text-gray-900" htmlFor="facilityType">
              Facility Type
            </label>
            <select
              name="facilityType"
              value={facilityType}
              onChange={handleFacilityTypeChange}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
              required
            >
              <option value="">Select Facility Type</option>
              <option value="shed-mcc">Shed MCC</option>
              <option value="bmcu">BMCU Procurement Route Center</option>
            </select>
          </div>

          {facilityType && (
            <div>
              <h3 className="text-xl font-semibold mt-4 text-gray-900">Unit/Center Details</h3>
              <div className="space-y-4 mt-4">
                {/* Unit Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900">Name of the Unit/Center</label>
                  <input
                    type="text"
                    name="unitName"
                    value={formData.unitName}
                    onChange={handleInputChange}
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                    required
                  />
                </div>

                {/* Center Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900">Name of the Center</label>
                  <input
                    type="text"
                    name="centerName"
                    value={formData.centerName}
                    onChange={handleInputChange}
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                    required
                  />
                </div>

                {/* Owner Party Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900">Owner Party Name</label>
                  <input
                    type="text"
                    name="ownerPartyName"
                    value={formData.ownerPartyName}
                    onChange={handleInputChange}
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-900">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                    required
                  />
                </div>

                {/* Pan Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-900">Pan Number</label>
                  <input
                    type="text"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleInputChange}
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                    required
                  />
                </div>

                {/* GST Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-900">GST Number</label>
                  <input
                    type="text"
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleInputChange}
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                    required
                  />
                </div>

                {/* Bank Details */}
                <h4 className="text-lg font-semibold mt-4 text-gray-900">Bank Details</h4>
                <div className="space-y-4 mt-4">
                  {/* Bank Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900">Bank Name</label>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankDetails.bankName}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                      required
                    />
                  </div>

                  {/* Branch */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900">Branch</label>
                    <input
                      type="text"
                      name="branch"
                      value={formData.bankDetails.branch}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                      required
                    />
                  </div>

                  {/* Account Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900">Account Number</label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.bankDetails.accountNumber}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                      required
                    />
                  </div>

                  {/* IFSC Code */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900">IFSC Code</label>
                    <input
                      type="text"
                      name="ifscCode"
                      value={formData.bankDetails.ifscCode}
                      onChange={handleInputChange}
                      className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationNetwork;
