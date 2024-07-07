import React from 'react';
import UserProfile from './../assets/images/userProfile.jpg';

function UserCredentials() {
  return (
    <section className="px-10 mx-14 my-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] ">
      <div className="p-6 flex gap-20 items-center">
        <img
          className="w-[14rem] h-[14rem] border-2 rounded-lg"
          src={UserProfile}
          alt="Settings Page Business Logo"
        />
        <div className="flex gap-20 items-center text-2xl divide-x">
          <div className="flex flex-col gap-8 px-16 ">
            <p className="font-semibold">Silas Dahunzy</p>
            <p className="text-gray-400">INF20953045</p>
          </div>
          <div className="flex flex-col gap-8 px-16 ">
            <p className="font-semibold">Sponsor</p>
            <p className="text-gray-400">INF00123</p>
          </div>
          <div className="flex flex-col gap-8 px-16 ">
            <p className="font-semibold">Placement</p>
            <p className="text-gray-400">INF00123</p>
          </div>
          <div className="flex flex-col gap-8 px-16 ">
            <p className="font-semibold">Membership Package</p>
            <p className="text-gray-400">Individual Package</p>
          </div>
          <div className="flex flex-col gap-8 px-16 ">
            <p className="font-semibold">Current Marking</p>
            <p className="text-gray-400">Field Marsha</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserCredentials;
