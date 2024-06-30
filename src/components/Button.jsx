import React from 'react';
import PropTypes from 'prop-types';
import { IoMdAdd } from 'react-icons/io';

function Button({ btnText }) {
  return (
    <div
      className="bg-primary-light text-white font-semibold w-fit 
    px-4 py-4 rounded-md flex items-center justify-center gap-4 hover:bg-primary-dark cursor-pointer"
    >
      <IoMdAdd />
      <p>{btnText}</p>
    </div>
  );
}

Button.propTypes = {
  btnText: PropTypes.string,
};

export default Button;
