import React from 'react';
import HeaderSearch from './../../components/HeaderSearch';
import { IoFilterSharp } from 'react-icons/io5';

function Filter() {
  return (
    <section className="flex justify-between items-center ">
      <div className=" flex gap-8">
        <div className="border rounded-md">
          <HeaderSearch placeholder="Search for an entry" />
        </div>
        <div className="flex gap-6 items-center py-3 px-12 justify-center rounded-md font-bold border">
          <IoFilterSharp style={{ fontSize: '2rem' }} /> <p>Filter</p>
        </div>
      </div>
      <div className="flex gap-6 items-center py-4 px-10 justify-center border font-bold rounded-md">
        <IoFilterSharp style={{ fontSize: '2rem' }} /> <p>Download</p>
      </div>
    </section>
  );
}

export default Filter;
