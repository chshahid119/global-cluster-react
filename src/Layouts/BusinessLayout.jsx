import React from 'react';
import { Outlet } from 'react-router-dom';
import BusinesSidebar from '../pages/BusinesSidebar';

function BusinessLayout() {
  return (
    <div className="flex">
      <div className="bg-primary w-[20%] h-screen">
        <BusinesSidebar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default BusinessLayout;
