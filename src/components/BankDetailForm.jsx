// src/components/ui/BankDetailForm.js

import React from 'react';

function BankDetailForm() {
  return (
    <div className="flex flex-col gap-16 py-20 px-14">
      <h2 className="text-3xl font-semibold">Primary Bank Details</h2>

      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="bank-name">Bank Name</label>
          <select
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            id="bank-name"
            name="bank-name"
          >
            <option>Select Bank Name</option>
            {/* Add more bank options as needed */}
            <option>Bank A</option>
            <option>Bank B</option>
            <option>Bank C</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="account-number">Account Number</label>
          <input
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            type="text"
            id="account-number"
            name="account-number"
            placeholder="Enter Account Number"
          />
        </div>
        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="account-name">Account Name</label>
          <input
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            type="text"
            id="account-name"
            name="account-name"
            placeholder="Oladipo Silas"
          />
        </div>
        <button className="bg-primary-light text-white w-fit px-6 rounded-md py-4">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default BankDetailForm;
