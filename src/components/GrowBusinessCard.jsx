import React from 'react';
import { NavLink } from 'react-router-dom';
import HeartImg from './../assets/images/heart.png';

function GrowBusinessCard() {
  return (
    <div className="bg-primary-light flex-1  text-white rounded-xl flex items-center">
      <div className="flex flex-col gap-4 px-20 py-8 justify-center">
        <p className="font-bold text-2xl">
          Grow Business Your Business and Product
        </p>
        <p className="text-gray-200 text-lg">
          Explore next elvel marketing solution by uploading your product
        </p>
        <NavLink
          className="bg-white w-fit text-primary-light px-6 text-2xl py-2 rounded-xl"
          to="products"
        >
          Go to Products
        </NavLink>
      </div>
      <div className="bg-sky-600 opacity-90 p-3 rounded-full translate-x-48 -rotate-12">
        <img className="" src={HeartImg} alt="heart blue img" />
      </div>
    </div>
  );
}

export default GrowBusinessCard;
