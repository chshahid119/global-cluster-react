// src/pages/Settings.js

import React, { useState } from 'react';
import ActiveTab from '../../components/ui/ActiveTab';
import ContactDetailsForm from '../../components/ui/ContactDetailsForm';
import BusinessDashboardHeader from '../../components/ui/Header';
import PersonalDetailsForm from '../../components/ui/PersonalDetailsForm';
import SecurityDetailsForm from '../../components/ui/SecurityDetailsForm';
import UserCredentials from '../../components/UserCredentials';
import BankDetailForm from './../../components/BankDetailForm';
import PaymentSettings from './../../components/PaymentSettings';

function Settings() {
  // State to keep track of the active tab, default to "Personal Details"
  const [activeTab, setActiveTab] = useState('Personal Details');

  // Function to handle tab click and set the active tab
  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col gap-4 bg-gray-50">
      <BusinessDashboardHeader />
      <UserCredentials />

      <section className="px-10 py-20 mx-14 my-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-white">
        <ActiveTab handleTabClick={handleTabClick} activeTab={activeTab} />
        {activeTab === 'Personal Details' && <PersonalDetailsForm />}
        {activeTab === 'Contact Details' && <ContactDetailsForm />}
        {activeTab === 'Security' && <SecurityDetailsForm />}
        {activeTab === 'Bank Details' && <BankDetailForm />}{' '}
        {/* Render BankDetailForm */}
        {activeTab === 'Payment Settings' && <PaymentSettings />}{' '}
        {/* Render PaymentSettings */}
      </section>
    </div>
  );
}

export default Settings;
