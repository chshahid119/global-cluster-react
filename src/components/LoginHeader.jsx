import React from 'react';
import GlobalClusterLogo from './../assets/images/Logo.png';

function LoginHeader() {
  return (
    <div className="flex items-center justify-center gap-4 py-6 border-b ">
      <img
        className="w-20"
        src={GlobalClusterLogo}
        alt="Company Official Logo"
      />
      <p className="font-bold text-3xl text-primary-light">Global Cluster</p>
    </div>
  );
}

export default LoginHeader;
