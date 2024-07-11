import React, { useState } from 'react'
import { GoArrowRight } from 'react-icons/go'
import TopRecruiters from './../components/TopRecruiters'
import TopEarners from './TopEarners'

// Sample data for demonstration
const earners = [
  { memberName: 'Silas Dahun', userName: 'SilasDahun', amount: '$1500' },
  { memberName: 'Jane Doe', userName: 'JaneDoe', amount: '$2000' },
  { memberName: 'John Smith', userName: 'JohnSmith', amount: '$1800' },
]

const recruiters = [
  { memberName: 'Alice Brown', userName: 'AliceBrown', recruits: '25' },
  { memberName: 'Bob White', userName: 'BobWhite', recruits: '20' },
  { memberName: 'Charlie Green', userName: 'CharlieGreen', recruits: '22' },
]

function TeamPerformance() {
  const [activeTab, setActiveTab] = useState('earners')

  return (
    <div className="flex flex-col gap-8">
      <p className="font-semibold">Team Performance</p>
      <div className="border-b flex gap-6 p-2">
        <p
          className={`text-2xl cursor-pointer ${
            activeTab === 'earners'
              ? 'bg-primary-light text-white rounded-lg px-2'
              : ''
          }`}
          onClick={() => setActiveTab('earners')}
        >
          Top Earners
        </p>
        <p
          className={`text-2xl cursor-pointer ${
            activeTab === 'recruiters'
              ? 'bg-primary-light text-white rounded-lg px-2'
              : ''
          }`}
          onClick={() => setActiveTab('recruiters')}
        >
          Top Recruiters
        </p>
      </div>

      {activeTab === 'earners' && <TopEarners earners={earners} />}

      {activeTab === 'recruiters' && <TopRecruiters recruiters={recruiters} />}

      <div className="flex gap-4 p-8 text-2xl items-center justify-center font-bold text-primary-light cursor-pointer">
        <GoArrowRight />
        <p>View All</p>
      </div>
    </div>
  )
}

export default TeamPerformance
