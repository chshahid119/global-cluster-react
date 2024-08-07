import React from 'react';
import { PropTypes } from 'prop-types';
import { FaSearch } from 'react-icons/fa';

function HeaderSearch({ placeholder = 'Search here....' }) {
  return (
    <div className="flex gap-6  bg-white py-5 px-4 rounded-lg items-center">
      <FaSearch style={{ color: '#0369a1', fontSize: '1.5rem' }} />
      <input
        className=" w-full outline-none border-none"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

HeaderSearch.propTypes = {
  placeholder: PropTypes.string,
};

export default HeaderSearch;
