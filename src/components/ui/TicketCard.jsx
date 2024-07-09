import { PropTypes } from 'prop-types';
import React from 'react';
import productTicketImg from './../../assets/images/productTicketImg.png';

function TicketCard({ name, numbers }) {
  return (
    <div className="p-8 text-gray-500">
      <div className="flex gap-6 items-center">
        <div className="bg-blue-100 rounded-full p-6">
          <img
            className="w-10 h-10"
            src={productTicketImg}
            alt="support ticket images for cards"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-semibold">{numbers}</p>
          <p className="text-xl">{name}</p>
        </div>
      </div>
    </div>
  );
}

TicketCard.propTypes = {
  name: PropTypes.string,
  numbers: PropTypes.number,
};

export default TicketCard;
