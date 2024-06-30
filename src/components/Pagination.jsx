import React from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function Pagination() {
  return (
    <div className="flex justify-between items-center text-xl px-10">
      <p>Showing 1-10 from 100</p>
      <div className="flex gap-6 items-center justify-center">
        <MdOutlineKeyboardArrowLeft
          className="bg-blue-100 text-blue-500 rounded-lg"
          style={{ fontSize: '2.5rem' }}
        />
        <p className="bg-primary-dark text-white rounded-lg py-2 px-4">1</p>
        <p className="bg-blue-100 text-blue-500 rounded-lg py-2 px-4">2</p>
        <p className="bg-blue-100 text-blue-500 rounded-lg py-2 px-4">3</p>
        <p className="bg-blue-100 text-blue-500 rounded-lg py-2 px-4">4</p>
        <p className="bg-blue-100 text-blue-500 rounded-lg py-2 px-4">5</p>
        <MdOutlineKeyboardArrowRight
          className="bg-blue-100 text-blue-500 rounded-lg"
          style={{ fontSize: '2.5rem' }}
        />
      </div>
    </div>
  );
}

export default Pagination;
