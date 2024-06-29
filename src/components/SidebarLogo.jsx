import React from 'react';
import SideBarLogoImg from './../assets/images/sidebarLogo.png';

function SidebarLogo() {
  return (
   
    <div className="w-full flex text-white pt-20 gap-6 items-center justify-center border-b border-blue-300 py-8 ">
      <img className="w-16" src={SideBarLogoImg} alt="Company Side bar Logo" />
      <p className="font-semibold text-4xl">Global Cluster</p>
    </div>
   
   
  );
}

export default SidebarLogo;
