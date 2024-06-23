import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function CompanySizeInput({ companySize, setCompanySize }) {
  // Handle radio button change
  const handleSizeChange = e => {
    setCompanySize(e.target.value);
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    if (companySize) {
      console.log('Selected Company Size:', companySize);
    } else {
      console.log('No size selected');
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl font-semibold mb-4">Select Company Size</h2>
      <p className="text-gray-600 mb-6">Choose the size of your business.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex items-center gap-2 hover:bg-[#ffede6] cursor-pointer border border-gray-400 p-8 rounded-2xl">
          <input
            type="radio"
            id="2-5Employee"
            name="companySize"
            value="2-5 Employees"
            checked={companySize === '2-5 Employees'}
            onChange={handleSizeChange}
            className="form-radio text-primary "
          />
          <label htmlFor="2-5Employee" className="text-gray-700">
            2-5 Employees
          </label>
        </div>
        <div className="flex items-center gap-2 hover:bg-[#ffede6] cursor-pointer border border-gray-400 p-8 rounded-2xl">
          <input
            type="radio"
            id="5-10Employee"
            name="companySize"
            value="5-10 Employees"
            checked={companySize === '5-10 Employees'}
            onChange={handleSizeChange}
            className="form-radio text-primary"
          />
          <label htmlFor="5-10Employee" className="text-gray-700">
            5-10 Employees
          </label>
        </div>
        <div className="flex items-center gap-2 hover:bg-[#ffede6] cursor-pointer border border-gray-400 p-8 rounded-2xl">
          <input
            type="radio"
            id="10-50Employee"
            name="companySize"
            value="10-50 Employees"
            checked={companySize === '10-50 Employees'}
            onChange={handleSizeChange}
            className="form-radio text-primary"
          />
          <label htmlFor="10-50Employee" className="text-gray-700 ">
            10-50 Employees
          </label>
        </div>
        <div className="">
          <NavLink to="/business-dashboard">
            {' '}
            <button
              type="submit"
              className="w-full bg-primary-light text-white font-semibold py-6 rounded-full hover:bg-primary-dark transition duration-300 flex items-center justify-center"
            >
              Proceed
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

CompanySizeInput.propTypes = {
  companySize: PropTypes.string,
  setCompanySize: PropTypes.func,
};

export default CompanySizeInput;
