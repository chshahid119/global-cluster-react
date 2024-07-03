import React from 'react'
import UserDashboardHeader from './../../components/ui/Header'

function Dashboard() {
  return (
    <div className='bg-gray-50 h-full w-full'>
      <div className='bg-white'><UserDashboardHeader/></div>
      <div className='p-10'>
      <main className='border p-8 bg-white text-gray-600'>
        <div className='flex flex-col gap-3'>
          <h2>Welcome Silas Oldopio</h2>
        <p>Dashboard Summary</p>
        </div>
      </main>
      </div>
    </div>
  )
}

export default Dashboard