import React from 'react';
import { PropTypes } from 'prop-types';
import productTicketImg from './../../assets/images/productTicketImg.png';

function SupportTicketCard({ name, numbers }) {
  return (
    <div className="p-8">
      <div className="flex gap-4 items-center">
        <div className="bg-blue-100 rounded-full p-4">
          <img
            className="w-8 h-8"
            src={productTicketImg}
            alt="support ticket images for cards"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>{numbers}</p>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

SupportTicketCard.propTypes = {
  name: PropTypes.string,
  numbers: PropTypes.number,
};

export default SupportTicketCard;
