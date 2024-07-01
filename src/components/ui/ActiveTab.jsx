import React from 'react';
import { PropTypes } from 'prop-types';

function ActiveTab({ handleTabClick, activeTab, setActiveTab }) {
  return (
    <div className="py-2 px-10 flex gap-6 border-b">
      {/* Personal Details Tab */}
      <p
        onClick={() => handleTabClick('Personal Details')}
        className={`p-3 rounded-sm cursor-pointer ${
          activeTab === 'Personal Details' ? 'bg-primary-light text-white' : ''
        }`}
      >
        Personal Details
      </p>
      {/* Contact Details Tab */}
      <p
        onClick={() => handleTabClick('Contact Details')}
        className={`p-3 rounded-sm cursor-pointer ${
          activeTab === 'Contact Details' ? 'bg-primary-light text-white' : ''
        }`}
      >
        Contact Details
      </p>
      {/* Security Tab */}
      <p
        onClick={() => handleTabClick('Security')}
        className={`p-3 rounded-sm cursor-pointer ${
          activeTab === 'Security' ? 'bg-primary-light text-white' : ''
        }`}
      >
        Security
      </p>
    </div>
  );
}

ActiveTab.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ActiveTab;
