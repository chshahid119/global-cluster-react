import React from 'react';
import { PiChartPieSliceFill, PiSignOutFill } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

import { AiOutlineProduct } from 'react-icons/ai';
import { BsTicketPerforated } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import SidebarLogo from './SidebarLogo';

function BusinesSidebar() {
  return (
    <div className="flex  flex-col gap-6 items-center">
      <SidebarLogo />
      <nav>
        <ul className="flex flex-col gap-4 p-20 text-white">
          <NavLink to="dashboard" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <PiChartPieSliceFill className="text-5xl" />
              <p>Dashboard</p>
            </li>
          </NavLink>
          <NavLink to="products" className="py-4 px-8">
            <li className="flex gap-6 items-center">
              <AiOutlineProduct className="text-5xl" />
              <p>Products</p>
            </li>
          </NavLink>
          <NavLink to="support-ticket" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <BsTicketPerforated className="text-5xl" />
              <p>Support Ticket</p>
            </li>
          </NavLink>
          <NavLink to="settings" className="py-4 px-8">
            <li className="flex gap-6 items-center justify-start ">
              <IoSettingsOutline className="text-5xl" />
              <p>Settings</p>
            </li>
          </NavLink>
          <NavLink to="sign-out" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <PiSignOutFill className="text-5xl" />
              <p>Sign Out</p>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default BusinesSidebar;
