import React, { useState } from 'react';
import RowData from './RowData';
import UserImg from './../assets/images/userImg.png';
import { GoArrowRight } from "react-icons/go";

function TeamPerformance() {
  const [activeTab, setActiveTab] = useState('earners'); // State to track active tab

  // Sample data for demonstration
  const earners = [
    { memberName: 'Silas Dahun', userName: 'SilasDahun', amount: '$1500' },
    { memberName: 'Jane Doe', userName: 'JaneDoe', amount: '$2000' },
    { memberName: 'John Smith', userName: 'JohnSmith', amount: '$1800' },
  ];

  const recruiters = [
    { memberName: 'Alice Brown', userName: 'AliceBrown', recruits: '25' },
    { memberName: 'Bob White', userName: 'BobWhite', recruits: '20' },
    { memberName: 'Charlie Green', userName: 'CharlieGreen', recruits: '22' },
  ];

  return (
    <div className='flex flex-col gap-8'>
      <p className='font-semibold'>Team Performance</p>
      <div className='border-b flex gap-6 p-2'>
        <p
          className={`text-2xl cursor-pointer ${activeTab === 'earners' ? 'bg-primary-light text-white rounded-lg px-2' : ''}`}
          onClick={() => setActiveTab('earners')}
        >
          Top Earners
        </p>
        <p
          className={`text-2xl cursor-pointer ${activeTab === 'recruiters' ? 'bg-primary-light text-white rounded-lg px-2' : ''}`}
          onClick={() => setActiveTab('recruiters')}
        >
          Top Recruiters
        </p>
      </div>

      {activeTab === 'earners' && (
        <div className='flex flex-col gap-8'>
          {earners.map((earner, index) => (
            <RowData key={index} memberName={earner.memberName} userName={earner.userName} img={UserImg}>
              <p className='px-6 font-bold text-primary-dark mb-4'>{earner.amount}</p>
            </RowData>
          ))}
        </div>
      )}

      {activeTab === 'recruiters' && (
        <div className='flex flex-col gap-8'>
          {recruiters.map((recruiter, index) => (
            <RowData key={index} memberName={recruiter.memberName} userName={recruiter.userName} img={UserImg}>
              <p className='px-6 font-bold text-white rounded-lg bg-primary-light mb-4'>{recruiter.recruits} Recruits</p>
            </RowData>
          ))}
        </div>
      )}

      <div className='flex gap-4 p-8 text-2xl items-center justify-center font-bold text-primary-light cursor-pointer'>
        <GoArrowRight />
        <p>View All</p>
      </div>
    </div>
  );
}

export default TeamPerformance;
