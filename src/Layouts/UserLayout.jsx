import React from 'react';
import { Outlet } from 'react-router-dom';
import UserSidebar from './../components/UserSidebar';

function UserLayout() {
  return (
    <div className="flex">
      <div className="bg-primary w-[22%] flex flex-col min-h-screen">
        <UserSidebar style={{ color: '#1F2937', fontSize: '1.5rem' }} />
      </div>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
