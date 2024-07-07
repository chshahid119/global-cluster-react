// src/components/ui/ActiveTab.js

import PropTypes from 'prop-types';
import React from 'react';

function ActiveTab({ handleTabClick, activeTab, businessTab = 'false' }) {
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
      {/* Bank Details Tab */}
      {businessTab !== 'true' && (
        <>
          <p
            onClick={() => handleTabClick('Bank Details')}
            className={`p-3 rounded-sm cursor-pointer ${
              activeTab === 'Bank Details' ? 'bg-primary-light text-white' : ''
            }`}
          >
            Bank Details
          </p>
          {/* Payment Settings Tab */}
          <p
            onClick={() => handleTabClick('Payment Settings')}
            className={`p-3 rounded-sm cursor-pointer ${
              activeTab === 'Payment Settings'
                ? 'bg-primary-light text-white'
                : ''
            }`}
          >
            Payment Settings
          </p>
        </>
      )}
    </div>
  );
}

ActiveTab.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  businessTab: PropTypes.string,
};

export default ActiveTab;
