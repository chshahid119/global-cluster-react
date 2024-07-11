import React from 'react';

import { AiOutlineProduct } from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi2';
import { IoBusinessOutline } from 'react-icons/io5';
import { LuUser2 } from 'react-icons/lu';
import {
  MdOutlineBusinessCenter,
  MdOutlineManageAccounts,
  MdSupportAgent,
} from 'react-icons/md';

import { FaGift } from 'react-icons/fa';
import { PiChartPieSliceFill, PiRankingFill } from 'react-icons/pi';
import { TbNotes } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import SidebarLogo from './SidebarLogo';

function AdminSidebar() {
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? 'py-4 px-8 bg-white text-primary-light rounded-[1.5rem]'
      : 'py-4 px-8 text-white rounded-[1.5rem]';

  return (
    <div className="flex flex-col gap-6 items-center ">
      <SidebarLogo />
      <nav>
        <ul className="flex flex-col gap-6 p-20">
          <NavLink to="dashboard" className={getNavLinkClass}>
            <li className="flex gap-6 items-center">
              <PiChartPieSliceFill className="text-5xl" />
              <p>Dashboard</p>
            </li>
          </NavLink>
          <NavLink to="user/registrations" className={getNavLinkClass}>
            <li className="flex gap-6 items-center">
              <HiOutlineUsers className="text-5xl"/>
              <p>User Registrations</p>
            </li>
          </NavLink>
          <NavLink to="business/registrations" className={getNavLinkClass}>
            <li className="flex gap-6 items-center">
              <MdOutlineBusinessCenter className="text-5xl" />
              <p>Business Registrations</p>
            </li>
          </NavLink>
          <NavLink to="user/manage" className={getNavLinkClass}>
            <li className="flex gap-6 items-center">
              <LuUser2 className="text-5xl" />
              <p>Manage User</p>
            </li>
          </NavLink>
          <NavLink to="business/manage" className={getNavLinkClass}>
            <li className="flex gap-6 items-center">
              <IoBusinessOutline className="text-5xl" />
              <p>Manage Business</p>
            </li>
          </NavLink>
          <NavLink to="staff/management" className={getNavLinkClass}>
            <li className="flex gap-6 items-center">
              <MdOutlineManageAccounts className="text-5xl" />
              <p>Staff Management</p>
            </li>
          </NavLink>
          <NavLink to="products" className={getNavLinkClass}>
            <li className="flex gap-6 items-center">
              <AiOutlineProduct className="text-5xl" />
              <p>Products</p>
            </li>
          </NavLink>
          <NavLink to="payout" className={getNavLinkClass}>
            <li className="flex gap-6 items-center justify-start">
              <TbNotes className="text-6xl" />
              <p>Payout</p>
            </li>
          </NavLink>
          <NavLink to="user/rankings" className={getNavLinkClass}>
            <li className="flex gap-6 items-center">
              <PiRankingFill className="text-5xl" />
              <p>User Rankings</p>
            </li>
          </NavLink>
          <NavLink to="bonus/management" className={getNavLinkClass}>
            <li className="flex gap-6 items-center">
              <FaGift className="text-5xl" />
              <p>Bonus Management</p>
            </li>
          </NavLink>
          <NavLink to="support/center" className={getNavLinkClass}>
            <li className="flex gap-6 items-center">
              <MdSupportAgent className="text-5xl" />
              <p>Support Center</p>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default AdminSidebar;
