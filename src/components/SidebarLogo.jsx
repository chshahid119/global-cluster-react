import React from 'react';
import SideBarLogoImg from './../assets/images/sidebarLogo.png';

function SidebarLogo() {
  return (
    <div className="border-b border-b-white flex px-24 py-8 gap-6 items-center justify-center">
      <img className="w-20" src={SideBarLogoImg} alt="Company Side bar Logo" />
      <p className="font-semibold text-3xl">Global Cluster</p>
    </div>
  );
}

export default SidebarLogo;
