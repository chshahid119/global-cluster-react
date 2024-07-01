import React from 'react';

function SecurityDetailsForm() {
  return (
    <div className="flex flex-col gap-16 py-20 px-14">
      <h2 className="text-3xl font-semibold">Password Settings</h2>

      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="oldPassword">Old Password</label>
          <input
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            type="password"
            id="oldPassword"
            name="oldPassword"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="newPassword">New Password</label>
          <input
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Enter your new password"
          />
        </div>

        <div className="flex flex-col gap-2 text-gray-500">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="outline-none border border-gray-300 rounded-md px-4 py-3 w-1/3 focus:border-primary-light transition-all duration-300 ease-in-out"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Enter your Passwrd"
          />
        </div>

        <button className="bg-primary-light text-white w-fit px-6 rounded-md py-4">
          Change Password
        </button>
      </form>
    </div>
  );
}

export default SecurityDetailsForm;
