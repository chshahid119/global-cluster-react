import React from 'react'
import UserDashboardHeader from './../../components/ui/Header'
import EarningCard from '../../components/EarningCard'

function Dashboard() {
  return (
    <div className='bg-gray-50 h-full w-full'>
      <div className='bg-white'><UserDashboardHeader/></div>
     <main className='m-10 border rounded-xl'>
      <div className='p-10 flex flex-col gap-6'>
        <div className='flex flex-col gap-3'>
          <h2 className='font-semibold text-3xl'>Welcome Silas Oladipo</h2>
          <p>Dashboard Summary</p>
        </div>
        <div className='flex gap-4'>
          <EarningCard icon='icon' earnings='$1,000,00.00' whichEarning='Total Earning' rateIncDec='6.7% Increase'/>
        </div>
      </div>
     </main>
    </div>
  )
}

export default Dashboard