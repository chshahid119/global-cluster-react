import React from 'react';

function PersonalDetailsForm() {
  return (
    <div className="flex flex-col gap-16 py-20 px-14">
      <h2 className="text-3xl font-semibold">Account Settings</h2>

      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="name">Business Name</label>
          <input
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            type="text"
            id="name"
            name="name"
            placeholder="Global Cluster"
          />
        </div>
        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="name">Email Address</label>
          <input
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            type="text"
            id="name"
            name="name"
            placeholder="dahunzy@gmail.com"
          />
        </div>
        <button className="bg-primary-light text-white w-fit px-6 rounded-md py-4">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default PersonalDetailsForm;
