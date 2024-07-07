import React from 'react';
import { Outlet } from 'react-router-dom';
import BusinesSidebar from '../components/BusinesSidebar';

function BusinessLayout() {
  return (
    <div className="flex">
      <div className="bg-primary w-[20%] flex flex-col min-h-screen">
        <BusinesSidebar style={{ color: '#1F2937', fontSize: '1.5rem' }} />
      </div>

      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default BusinessLayout;
