import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarLogo from './SidebarLogo';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineProduct } from 'react-icons/ai';
import { LuPieChart } from 'react-icons/lu';
import { PiSignOutFill } from 'react-icons/pi';
import { BsTicketPerforated } from 'react-icons/bs';

function BusinesSidebar() {
  return (
    <div className="flex  flex-col gap-8 items-center">
      <SidebarLogo />
      <nav>
        <ul className="flex flex-col gap-4 p-20 text-white">
          <NavLink to="dashboard" className="py-4 px-4">
            <li className="flex gap-6 items-center ">
              <LuPieChart className="text-4xl" />
              <p>Dashboard</p>
            </li>
          </NavLink>
          <NavLink to="products" className="py-4 px-4">
            <li className="flex gap-6 items-center ">
              <AiOutlineProduct className="text-4xl" />
              <p>Products</p>
            </li>
          </NavLink>
          <NavLink to="support-ticket" className="py-4 px-4">
            <li className="flex gap-6 items-center ">
              <BsTicketPerforated className="text-4xl" />
              <p>Support Ticket</p>
            </li>
          </NavLink>
          <NavLink to="settings" className="py-4 px-4">
            <li className="flex gap-6 items-center justify-start ">
              <IoSettingsOutline className="text-4xl" />
              <p>Settings</p>
            </li>
          </NavLink>
          <NavLink to="sign-out" className="py-4 px-4">
            <li className="flex gap-6 items-center ">
              <PiSignOutFill className="text-4xl" />
              <p>Sign Out</p>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default BusinesSidebar;
