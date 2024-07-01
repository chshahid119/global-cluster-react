import React from 'react';
import { PropTypes } from 'prop-types';

function ActiveTab({ handleTabClick, activeTab, setActiveTab }) {
  return (
    <section className="px-10 mx-14 my-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] ">
      <div className="pt-10 px-10 flex gap-6 border-b">
        {/* Personal Details Tab */}
        <p
          onClick={() => handleTabClick('Personal Details')}
          className={`px-4 py-6 rounded-md cursor-pointer ${
            activeTab === 'Personal Details'
              ? 'bg-primary-light text-white'
              : ''
          }`}
        >
          Personal Details
        </p>
        {/* Contact Details Tab */}
        <p
          onClick={() => handleTabClick('Contact Details')}
          className={`px-4 py-6 rounded-md cursor-pointer ${
            activeTab === 'Contact Details' ? 'bg-primary-light text-white' : ''
          }`}
        >
          Contact Details
        </p>
        {/* Security Tab */}
        <p
          onClick={() => handleTabClick('Security')}
          className={`px-4 py-6 rounded-md cursor-pointer ${
            activeTab === 'Security' ? 'bg-primary-light text-white' : ''
          }`}
        >
          Security
        </p>
      </div>
    </section>
  );
}

ActiveTab.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ActiveTab;
