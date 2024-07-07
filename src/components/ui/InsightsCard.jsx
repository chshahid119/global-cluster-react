import PropTypes from 'prop-types'; // Import PropTypes
import React from 'react';
import { AiOutlineRise } from 'react-icons/ai';
import { MdSupervisorAccount } from 'react-icons/md';

function InsightsCard({ CardName, TotalCount, TotalIncDec }) {
  return (
    <div className="flex gap-6 w-[25%] justify-between px-8 py-12 text-lg rounded-2xl bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col gap-6">
        <p className="text-gray-500">{CardName}</p>
        <p className="font-bold text-6xl text-gray-600">{TotalCount}</p>
        <p className="flex items-center gap-2 justify-center text-[#10baa1]">
          {TotalIncDec}% <AiOutlineRise style={{ color: '#10baa1' }} />{' '}
          <span className="text-black">Up from yesterday</span>
        </p>
      </div>
      <div className="p-4 rounded-xl bg-[#d1deea] w-fit h-fit">
        <MdSupervisorAccount style={{ color: '#0369a1', fontSize: '2.5rem' }} />
      </div>
    </div>
  );
}

// Define PropTypes for the component
InsightsCard.propTypes = {
  CardName: PropTypes.string.isRequired,
  TotalCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  TotalIncDec: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

export default InsightsCard;
