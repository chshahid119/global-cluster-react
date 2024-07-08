import React from 'react';
import { BiWalletAlt } from 'react-icons/bi';
import { BsTicketPerforated } from 'react-icons/bs';
import { HiOutlineUsers } from 'react-icons/hi2';
import { IoSettingsOutline } from 'react-icons/io5';
import { TbNotes } from 'react-icons/tb';

import { PiChartPieSliceFill, PiSignOutFill } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import SidebarLogo from './SidebarLogo';

function UserSidebar() {
  return (
    <div className="flex  flex-col gap-6 items-center">
      <SidebarLogo />
      <nav>
        <ul className="flex flex-col gap-6 p-20 text-white">
          <NavLink to="dashboard" className="py-4 px-8 ">
            <li className="flex gap-6 items-center">
              <PiChartPieSliceFill className="text-5xl" />
              <p>Dashboard</p>
            </li>
          </NavLink>
          <NavLink to="register" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <HiOutlineUsers className="text-5xl" />
              <p>Register User</p>
            </li>
          </NavLink>
          <NavLink to="registrations" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <HiOutlineUsers className="text-5xl" />
              <p>Registrations</p>
            </li>
          </NavLink>
          <NavLink to="network" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <HiOutlineUsers className="text-5xl" />
              <p>Network</p>
            </li>
          </NavLink>
          <NavLink to="promote-and-earn" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <TbNotes className="text-5xl" />
              <p>Promote & Earn</p>
            </li>
          </NavLink>
          <NavLink to="wallet" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <BiWalletAlt className="text-5xl" />
              <p>Wallet</p>
            </li>
          </NavLink>
          <NavLink to="payout" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
              <TbNotes className="text-5xl" />
              <p>Payout</p>
            </li>
          </NavLink>
          <NavLink to="support-ticket" className="py-4 px-8">
            <li className="flex gap-6 items-center justify-start ">
              <BsTicketPerforated className="text-5xl" />
              <p>Support Ticket</p>
            </li>
          </NavLink>
          <NavLink to="settings" className="py-4 px-8">
            <li className="flex gap-6 items-center ">
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

export default UserSidebar;
