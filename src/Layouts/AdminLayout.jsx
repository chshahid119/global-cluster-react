import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './../components/AdminSidebar';

function AdminLayout() {
  return (
    <div className="flex">
      <div className="bg-primary w-[48rem] flex flex-col min-h-screen">
        <AdminSidebar style={{ color: '#1F2937', fontSize: '1.5rem' }} />
      </div>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
