import React from 'react';
import UserImg from './../assets/images/userProfile.png';

function RegisterNowStep1() {
  return (
    <div className="bg-white px-20 py-8 flex justify-between flex-col gap-4">
      <h2 className="font-semibold text-4xl">Sponsor</h2>
      <div className="flex flex-col gap-8">
        <div className="flex gap-6 items-center">
          <div className="p-3 rounded-full w-fit h-fit">
            <img src={UserImg} alt="user profile" />
          </div>
          <div className="text-lg text-gray-500">
            <p>REF00111</p>
            <p>SilasDahun</p>
          </div>
        </div>
        <div className="flex  gap-6 text-white">
          <p className="px-20 py-4 bg-gray-500 rounded-lg">Left</p>
          <p className="px-20 py-4 bg-primary-light rounded-lg">Right</p>
        </div>
      </div>
    </div>
  );
}

export default RegisterNowStep1;
