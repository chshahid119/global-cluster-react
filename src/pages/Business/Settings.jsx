import React, { useState } from 'react';
import BusinessDashboardHeader from '../../components/ui/Header';
import BusinessCredentials from '../../components/ui/BusinessCredentials';
import ActiveTab from '../../components/ui/ActiveTab';

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
      <ActiveTab
        handleTabClick={handleTabClick}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <section>
        <h2>Account Setting</h2>
      </section>
    </div>
  );
}

export default Settings;
