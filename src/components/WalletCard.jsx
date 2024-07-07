import React from 'react';
import { CiWallet } from 'react-icons/ci';
import { PiApproximateEquals } from 'react-icons/pi';

function WalletCard() {
  return (
    <div className=" flex gap-10 text-white items-center w-2/6 px-20 py-10 bg-primary-light rounded-xl">
      <div className="p-4 bg-orange-400 font-bold rounded-full">
        <CiWallet className="text-6xl font-bold" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="uppercase font-semibold">Available Balance</p>
        <div>
          <h3 className="text-6xl font-bold">3000.00</h3>
          <div className="flex gap-3 items-center">
            <PiApproximateEquals />
            <p>$10,000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletCard;
