import React from 'react';
import AdminDashboardHeader from './../../components/ui/Header';

function BonusMangement() {
  return (
    <div className="bg-gray-50 h-full w-full">
      <div className="bg-white">
        <AdminDashboardHeader />
      </div>
      <main className="m-10 rounded-xl flex flex-col gap-4"></main>
    </div>
  );
}

export default BonusMangement;
