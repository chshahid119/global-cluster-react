import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarLogo from './SidebarLogo';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineProduct } from 'react-icons/ai';
import { LuPieChart } from 'react-icons/lu';
import { PiSignOutFill } from 'react-icons/pi';
import { BsTicketPerforated } from 'react-icons/bs';

function UserSidebar() {
  return (
    <div className="flex  flex-col gap-6 items-center">
      <SidebarLogo />
      <nav>
        <ul className="flex flex-col gap-6 p-20 text-white">
         <NavLink to="dashboard" className="py-4 px-8 ">
            <li className="flex gap-6 items-center ">
              <LuPieChart className="text-4xl" />
              <p>Dashboard</p>
            </li>
          </NavLink>
          <NavLink to="register" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <LuPieChart className="text-4xl" />
              <p>Register User</p>
            </li>
          </NavLink>
          <NavLink to="registrations" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <LuPieChart className="text-4xl" />
              <p>Registererations</p>
            </li>
          </NavLink>
          <NavLink to="network" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <LuPieChart className="text-4xl" />
              <p>Network</p>
            </li>
          </NavLink>
          <NavLink to="promote-and-earn" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <LuPieChart className="text-4xl" />
              <p>Promote & Earn</p>
            </li>
          </NavLink>
          <NavLink to="wallet" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <AiOutlineProduct className="text-4xl" />
              <p>Wallet</p>
            </li> 
          </NavLink>
          <NavLink to="payout" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <BsTicketPerforated className="text-4xl" />
              <p>Payout</p>
            </li>
          </NavLink>
          <NavLink to="support-ticket" className="py-4 px-8">
            <li className="flex gap-6 items-center justify-start ">
              <IoSettingsOutline className="text-4xl" />
              <p>Support Ticket</p>
            </li>
          </NavLink>
          <NavLink to="settings" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <PiSignOutFill className="text-4xl" />
              <p>Settings</p>
            </li>
          </NavLink>
           <NavLink to="sign-out" className="py-4 px-8">
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

export default UserSidebar;
