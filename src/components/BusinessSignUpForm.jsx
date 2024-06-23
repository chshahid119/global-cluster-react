import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { HiMiniUserPlus } from 'react-icons/hi2';

function BusinessSignUpForm({ companySizeInput, SetCompanySizeInput }) {
  function handleSubmit() {
    console.log(companySizeInput);
  }

  return (
    <form onSubmit={handleSubmit} className=" ">
      {companySizeInput && (
        <div className={`space-y-6  px-8`}>
          <div className="space-y-4">
            <label htmlFor="companyName" className="block text-gray-700">
              Email Address or Username<span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              placeholder="Dahort Consult"
              className="w-full p-4 border border-gray-300 outline-none rounded-2xl"
            />
          </div>
          <div className="space-y-4">
            <label htmlFor="emailOrUsername" className="block text-gray-700">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              id="emailOrUsername"
              name="emailOrUsername"
              type="email"
              placeholder="janedoe@xxx.com"
              className="w-full p-4 border border-gray-300 outline-none rounded-2xl"
            />
          </div>
          <div className="space-y-4">
            <label htmlFor="address" className="block text-gray-700">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Enter your Address"
              className="w-full p-4 border border-gray-300 outline-none rounded-2xl"
            />
          </div>

          <div className="space-y-4">
            <label htmlFor="phone" className="block text-gray-700">
              Phone No
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="w-full p-4 border border-gray-300 outline-none rounded-2xl"
            />
          </div>

          <div className="space-y-4">
            <label htmlFor="country" className="block text-gray-700">
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              placeholder="Select Your Country"
              className="w-full p-4 border border-gray-300 outline-none rounded-2xl"
            />
          </div>

          <div className="space-y-4">
            <label
              htmlFor="CompanyRegistrationNumber"
              className="block text-gray-700"
            >
              Country Registration No (RC or BN)
              <span className="text-red-500">*</span>
            </label>
            <input
              id="CompanyRegistrationNumber"
              name="CompanyRegistrationNumber"
              type="text"
              placeholder="Reg1245669"
              className="w-full p-4 border border-gray-300 outline-none rounded-2xl"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-700">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Confirm Your Password"
              className="w-full border border-gray-300 p-4 outline-none rounded-2xl"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="cofirmPassword" className="block text-gray-700">
              Confirm Password<span className="text-red-500">*</span>
            </label>
            <input
              id="cofirmPassword"
              type="password"
              placeholder="Confirm Your Password"
              className="w-full border border-gray-300 p-4 outline-none rounded-2xl"
            />
          </div>

          <div
            className="w-full bg-primary-light text-white font-semibold py-6 rounded-full hover:bg-primary-dark 
        transition duration-300 flex gap-4 items-center justify-center cursor-pointer"
            onClick={() => SetCompanySizeInput(false)}
          >
            <button
              type="submit"
              className="flex items-center justify-center gap-4"
            >
              <HiMiniUserPlus className="text-5xl " />
              <p>Sign Up</p>
            </button>
          </div>

          <div className="text-center text-lg">
            <NavLink to="/login">
              {`Don't `} Have an account,{' '}
              <span className="font-semibold">Login Here</span>
            </NavLink>
          </div>
        </div>
      )}
    </form>
  );
}

BusinessSignUpForm.propTypes = {
  companySizeInput: PropTypes.bool.isRequired,
  SetCompanySizeInput: PropTypes.func.isRequired,
};

export default BusinessSignUpForm;
