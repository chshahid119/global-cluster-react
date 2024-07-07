// src/components/ui/PaymentSettings.js

import React from 'react';

function PaymentSettings() {
  return (
    <div className="flex flex-col gap-16 py-20 px-14">
      <h2 className="text-3xl font-semibold">Payment Settings</h2>

      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="payment-method">Payment Method</label>
          <select
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            id="payment-method"
            name="payment-method"
          >
            <option>Select Payment Method</option>
            {/* Add more payment method options as needed */}
            <option>Bank Transfer</option>
            <option>Credit Card</option>
            <option>PayPal</option>
          </select>
        </div>
        <button className="bg-primary-light text-white w-fit px-6 rounded-md py-4">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default PaymentSettings;
