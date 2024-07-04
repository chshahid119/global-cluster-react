import React from 'react';
import PropTypes from 'prop-types';

function ConfirmDeletion({ notificationMsg, handleConfirmDelete, deleteIndex, handleCancelDelete }) {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-55'>
      <div className='flex flex-col gap-6 items-center justify-center bg-white p-20 rounded-md border'>
        <h2 className='text-4xl font-semibold'>{notificationMsg}</h2>
        <div className='flex gap-4'>
          <button className='bg-primary-light text-white font-semibold text-2xl py-3 px-5 cursor-pointer' onClick={handleCancelDelete}>
            Cancel
          </button>
          <button className='bg-red-400 text-white font-semibold text-2xl py-3 px-5 cursor-pointer' onClick={() => handleConfirmDelete(deleteIndex)}>
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
}

ConfirmDeletion.propTypes = {
  notificationMsg: PropTypes.string,
  handleConfirmDelete: PropTypes.func.isRequired,
  handleCancelDelete: PropTypes.func.isRequired,
  deleteIndex: PropTypes.number.isRequired
};

export default ConfirmDeletion;
