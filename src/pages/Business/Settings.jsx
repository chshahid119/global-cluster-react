import React, { useState } from 'react';
import BusinessDashboardHeader from '../../components/ui/Header';
import BusinessCredentials from '../../components/ui/BusinessCredentials';
import ActiveTab from '../../components/ui/ActiveTab';
import PersonalDetailsForm from '../../components/ui/PersonalDetailsForm';
import ContactDetailsForm from '../../components/ui/ContactDetailsForm';
import SecurityDetailsForm from '../../components/ui/SecurityDetailsForm';

function Settings() {
  // State to keep track of the active tab, default to "Personal Details"
  const [activeTab, setActiveTab] = useState('Personal Details');

  // Function to handle tab click and set the active tab
  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col gap-4">
      <BusinessDashboardHeader />
      <BusinessCredentials />

      <section className="px-10 py-20 mx-14 my-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] ">
        <ActiveTab
          handleTabClick={handleTabClick}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === 'Personal Details' && <PersonalDetailsForm />}
        {activeTab === 'Contact Details' && <ContactDetailsForm />}
        {activeTab === 'Security' && <SecurityDetailsForm />}
      </section>
    </div>
  );
}

export default Settings;
