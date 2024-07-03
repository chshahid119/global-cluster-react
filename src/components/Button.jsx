import React from 'react';
import PropTypes from 'prop-types';
import { IoMdAdd } from 'react-icons/io';

function Button({ btnText,onClick }) {
  return (
    <div onClick={onClick}
      className="bg-primary-light text-white font-semibold w-fit 
    px-4 py-4 rounded-md flex items-center justify-center gap-4 hover:bg-primary-dark cursor-pointer select-none"
    >
      <IoMdAdd />
      <p>{btnText}</p>
    </div>
  );
}

Button.propTypes = {
  btnText: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
