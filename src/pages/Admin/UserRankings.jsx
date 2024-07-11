import React from 'react'
import LevelTable from './../../components/LavelTables'
import AdminDashboardHeader from './../../components/ui/Header'

const levels = [
  { level: 1, name: 'Silver', totalRecruits: 1000, bonus: 1.0 },
  { level: 2, name: 'Silver Pro', totalRecruits: 2000, bonus: 2.0 },
  { level: 3, name: 'Gold', totalRecruits: 3000, bonus: 3.0 },
  { level: 4, name: 'Gold Pro', totalRecruits: 4000, bonus: 5.0 },
  { level: 5, name: 'Platinum', totalRecruits: 5000, bonus: 10.0 },
]

function UserRankings() {
  return (
    <div className="bg-gray-50 h-full w-full">
      <div className="bg-white">
        <AdminDashboardHeader />
      </div>
      <main className="m-10 bg-white py-20 px-12 rounded-xl flex flex-col gap-4">
        <LevelTable levels={levels} />
      </main>
    </div>
  )
}

export default UserRankings
