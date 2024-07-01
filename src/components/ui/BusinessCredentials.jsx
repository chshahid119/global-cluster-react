import React from 'react';
import BusinessImg from './../../assets/images/BusinessImg.png';

function BusinessCredentials() {
  return (
    <section className="px-10 mx-14 my-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] ">
      <div className="p-6 flex gap-20 items-center">
        <img
          className="w-[14rem] h-[14rem]"
          src={BusinessImg}
          alt="Settings Page Business Logo"
        />
        <div className="flex gap-20 items-center text-2xl divide-x">
          <div className="flex flex-col gap-8 px-16 ">
            <p className="font-semibold">Business Name</p>
            <p className="text-gray-400">Global Cluster</p>
          </div>
          <div className="flex flex-col gap-8 px-16 ">
            <p className="font-semibold">Email</p>
            <p className="text-gray-400">dahunzy@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessCredentials;
