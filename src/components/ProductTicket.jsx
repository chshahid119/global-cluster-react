import React from 'react';
import PropTypes from 'prop-types';
import ProductTicketImg from './../assets/images/productTicketImg.png';

function ProductTicket({ purpose, numbers }) {
  return (
    <div className="flex gap-4 items-center justify-center bg-[#f8f8f8] w-fit px-12 py-8 rounded-lg">
      <div className="p-4 rounded-full bg-[#e3e9ef]">
        <img
          className="w-8 h-8  "
          src={ProductTicketImg}
          alt="product ticket logo"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-xl">{numbers}</p>
        <p className="text-lg text-gray-400">{purpose}</p>
      </div>
    </div>
  );
}

ProductTicket.propTypes = {
  purpose: PropTypes.string.isRequired,
  numbers: PropTypes.number.isRequired,
};

export default ProductTicket;
