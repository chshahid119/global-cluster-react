import React from 'react';
import BusinessDashboardHeader from '../../components/ui/Header';
import PageDataHeader from '../../components/ui/PageDataHeader';

function Settings() {
  return (
    <div>
      <BusinessDashboardHeader />
      <main className="px-10 py-10">
        <PageDataHeader
          name="Products"
          to="products"
          btnText="Add New Product"
        />
      </main>
    </div>
  );
}

export default Settings;
