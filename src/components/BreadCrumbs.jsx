import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import { GoChevronRight } from 'react-icons/go';

function BreadCrumbs() {
  return (
    <div className="flex items-center gap-2">
      <Link to="/business/dashboard" className="text-red-500 hover:underline">
        Dashboard
      </Link>
      <GoChevronRight />
      <p>Products</p>
    </div>
  );
}

export default BreadCrumbs;
