import React from 'react';

function ContactDetailsForm() {
  return (
    <div className="flex flex-col gap-16 py-20 px-14">
      <h2 className="text-3xl font-semibold">Account Settings</h2>

      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="address">Address</label>
          <input
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
          />
        </div>
        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="country">Country</label>
          <input
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            type="text"
            id="country"
            name="country"
            placeholder="Enter your country"
          />
        </div>
        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="state">State</label>
          <input
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            type="text"
            id="state"
            name="state"
            placeholder="Enter your state"
          />
        </div>
        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="city">City</label>
          <input
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            type="text"
            id="city"
            name="city"
            placeholder="Enter your City"
          />
        </div>
        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="phone">Phone</label>
          <input
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your Phone No"
          />
        </div>
        <button className="bg-primary-light text-white w-fit px-6 rounded-md py-4">
          Save Contact Details
        </button>
      </form>
    </div>
  );
}

export default ContactDetailsForm;
