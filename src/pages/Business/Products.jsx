import React from 'react';
import BusinessDashboardHeader from './../../ui/Business/Header';

import { GoChevronRight } from "react-icons/go";
import Button from './../../components/Button';



function Products() {
  return (
    <div className=''>
      <BusinessDashboardHeader />
      

      <section className='px-10 py-14 flex justify-between items-center'>
      <div className='flex flex-col gap-4 px-20 py-20 '>
        <h2 className='font-bold text-4xl'>Product</h2>
        <div className='flex gap-2 items-center'>
          <p className='text-red-600'>Dasboard</p> 
          <GoChevronRight />
          <p>Product</p>
        </div>
      </div>
     <Button/>
      </section>
      
    </div>
  );
}

export default Products;
