import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import MemberDownline from '../../components/MemberDownline';
import Header from '../../components/ui/Header';
import GenealogyTree from './../../components/ui/GenealogyTree';

function Network() {
  const [tabs, setTabs] = useState('genealogy');

  return (
    <div className="bg-gray-50">
      <Header />
      <main className="bg-white m-10 p-10">
        <div className="flex justify-between items-center pb-2 border-b">
          <div className="flex gap-8">
            <p
              className={`${
                tabs === 'genealogy' ? 'bg-primary-light text-white' : ''
              } py-3 px-8 cursor-pointer`}
              onClick={() => setTabs('genealogy')}
            >
              Genealogy
            </p>
            <p
              className={`${
                tabs === 'memberDownline' ? 'bg-primary-light text-white' : ''
              } py-3 px-8 cursor-pointer`}
              onClick={() => setTabs('memberDownline')}
            >
              Member Downline
            </p>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center bg-gray-50 border rounded-xl gap-6">
              <IoIosSearch className="text-7xl text-primary-light p-2" />
              <input
                type="text"
                className="h-full  w-full bg-gray-50 outline-none"
                placeholder="Search..."
              />
            </div>
            <p className="px-10 py-4 text-white bg-primary-light select-none cursor-pointer">
              Search
            </p>
          </div>
        </div>
        <section className="p-10">
          {tabs === 'genealogy' && (
            <div className="bg-white m-10 border">
              <div className="bg-gray-50 m-10">
                <GenealogyTree />
              </div>
            </div>
          )}
          {tabs === 'memberDownline' && <MemberDownline />}
        </section>
      </main>
    </div>
  );
}

export default Network;
