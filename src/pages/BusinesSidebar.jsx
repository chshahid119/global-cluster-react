import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarLogo from './../components/SidebarLogo';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineProduct } from 'react-icons/ai';
import { LuPieChart } from 'react-icons/lu';
import { PiSignOutFill } from 'react-icons/pi';

function BusinesSidebar() {
  return (
    <div className="flex flex-col gap-20">
      <SidebarLogo />
      <nav>
        <ul className="flex flex-col gap-6">
          <NavLink to="dashboard">
            <li className="flex gap-4">
              <LuPieChart />
              <p>Dashboard</p>
            </li>
          </NavLink>
          <li>
            <NavLink to="/">
              <AiOutlineProduct />
              <p>Products</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Support Ticket</NavLink>
          </li>
          <li>
            <NavLink to="/">
              <IoSettingsOutline />
              <p> Settings</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <PiSignOutFill />
              <p>Sign Out</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BusinesSidebar;
