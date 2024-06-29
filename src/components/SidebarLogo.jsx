import React from 'react';
import SideBarLogoImg from './../assets/images/sidebarLogo.png';

function SidebarLogo() {
  return (
   
    <div className="flex text-white pt-20 gap-6 items-center justify-center">
      <img className="w-14" src={SideBarLogoImg} alt="Company Side bar Logo" />
      <p className="font-semibold text-4xl">Global Cluster</p>
    </div>
   
   
  );
}

export default SidebarLogo;
