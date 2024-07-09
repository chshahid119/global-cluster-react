import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

function AddPayout({ CloseModalWindow, currentStatus }) {
  const modalRef = useRef(null);

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      CloseModalWindow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div
        ref={modalRef}
        className="w-[55rem] font-thin rounded-xl border bg-white p-4"
      >
        Add Payout Form
      </div>
    </div>
  );
}
AddPayout.propTypes = {
  CloseModalWindow: PropTypes.func,
  currentStatus: PropTypes.bool,
};
export default AddPayout;
