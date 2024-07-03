import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

function Pagination({ currentPage, totalPages, onPageChange }) {

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Calculate start and end index for the current page
  const itemsPerPage = 5; // Adjust if your items per page vary
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalPages * itemsPerPage);

  return (
    <div className="flex justify-between items-center text-xl px-10">
      <p>{`Showing ${startIndex}-${endIndex} from ${totalPages * itemsPerPage}`}</p>
      <div className="flex gap-6 items-center justify-center">
        <MdOutlineKeyboardArrowLeft
          className={`bg-blue-100 text-blue-500 rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          style={{ fontSize: '2.5rem' }}
          onClick={goToPreviousPage}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <p
            key={index + 1}
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              currentPage === index + 1 ? 'bg-primary-light text-white' : 'bg-blue-100 text-blue-500'
            }`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </p>
        ))}
        <MdOutlineKeyboardArrowRight
          className={`bg-blue-100 text-blue-500 rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          style={{ fontSize: '2.5rem' }}
          onClick={goToNextPage}
        />
      </div>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
