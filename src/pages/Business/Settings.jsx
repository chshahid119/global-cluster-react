import React, { useState } from 'react';
import ActiveTab from '../../components/ui/ActiveTab';
import BusinessCredentials from '../../components/ui/BusinessCredentials';
import ContactDetailsForm from '../../components/ui/ContactDetailsForm';
import BusinessDashboardHeader from '../../components/ui/Header';
import PersonalDetailsForm from '../../components/ui/PersonalDetailsForm';
import SecurityDetailsForm from '../../components/ui/SecurityDetailsForm';

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
      <BusinessCredentials />

      <section className="px-10 py-20 mx-14 my-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-white">
        <ActiveTab
          businessTab="true"
          handleTabClick={handleTabClick}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === 'Personal Details' && <PersonalDetailsForm business />}
        {activeTab === 'Contact Details' && <ContactDetailsForm />}
        {activeTab === 'Security' && <SecurityDetailsForm />}
      </section>
    </div>
  );
}

export default Settings;
