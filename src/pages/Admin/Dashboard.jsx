import React from 'react'
import { GoChevronDown } from 'react-icons/go'
import NewMembers from '../../components/NewMembers'
import TopEarners from '../../components/TopEarners'
import TopRecruiters from '../../components/TopRecruiters'
import Welcome from '../../components/Welcome'
import BonusStatistic from './../../components/BonusStatistic'
import AdminDashboardHeader from './../../components/ui/Header'
import TrafficReportGraph from './../../components/ui/TrafficReportGraph'

const recruiters = [
  { memberName: 'Alice Brown', userName: 'AliceBrown', recruits: '25' },
  { memberName: 'Bob White', userName: 'BobWhite', recruits: '20' },
  { memberName: 'Charlie Green', userName: 'CharlieGreen', recruits: '22' },
]

const earners = [
  { memberName: 'Silas Dahun', userName: 'SilasDahun', amount: 'N1500' },
  { memberName: 'Jane Doe', userName: 'JaneDoe', amount: 'N2000' },
  { memberName: 'John Smith', userName: 'JohnSmith', amount: 'N1800' },
]

const newMembers = [
  { memberName: 'Silas Dahun', userName: 'SilasDahun', date: '20 May 2024' },
  { memberName: 'Silas Dahun', userName: 'SilasDahun', date: '20 May 2024' },
  { memberName: 'Silas Dahun', userName: 'SilasDahun', date: '20 May 2024' },
  { memberName: 'Silas Dahun', userName: 'SilasDahun', date: '20 May 2024' },
]

const recruitmentStatisticsDummyData = [
  { month: 'Jan', users: 1500 },
  { month: 'Feb', users: 2000 },
  { month: 'Mar', users: 1000 },
  { month: 'Apr', users: 450 },
  { month: 'May', users: 2500 },
  { month: 'Jun', users: 390 },
  { month: 'Jul', users: 1625 },
  { month: 'Aug', users: 1500 },
  { month: 'Sep', users: 750 },
  { month: 'Oct', users: 2500 },
  { month: 'Nov', users: 2300 },
  { month: 'Dec', users: 1490 },
]

function Dashboard() {
  const highestGraphNumber = recruitmentStatisticsDummyData.reduce(
    (acc, cur) => (cur.users < acc ? acc : (acc = cur.users)),
    0,
  )

  return (
    <div className="bg-gray-50 h-full w-full">
      <section className="bg-white">
        <AdminDashboardHeader />
      </section>
      <main className="m-10 rounded-xl flex flex-col gap-4">
        <Welcome
          welcomeNote="Welcome Silas Oladipo"
          purpose="Sales Purpose"
          data=""
        />

        <section className="flex">
          <div className="m-10 flex-1 bg-white p-8 rounded-lg">
            <div className="flex flex-col gap-4">
              <p className="font-semibold p-6 border-b">Top Recruiters</p>
              <TopRecruiters
                recruiters={recruiters}
                type="recruiters"
              />
            </div>
          </div>
          <div className="m-10 flex-1 bg-white p-8 rounded-lg">
            <div className="flex flex-col gap-4">
              <p className="font-semibold p-6 border-b">Top Earners</p>
              <TopEarners earners={earners} />
            </div>
          </div>
          <div className="m-10 flex-1 bg-white p-8 rounded-lg">
            <div className="flex flex-col gap-4">
              <p className="font-semibold p-6 border-b">New Members</p>
              <NewMembers newMembers={newMembers} />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-xl bg-white p-8">
          <div className="flex justify-between items-center">
            <p>Bonus Statics</p>
            <p className="flex gap-3 items-center justify-between p-2 border rounded-lg text-lg">
              Today <GoChevronDown />
            </p>
          </div>
          <div className="flex gap-3">
            <BonusStatistic
              iconBgColor="green"
              purpose="Direct Referal bonus"
            />
            <BonusStatistic
              iconBgColor="pink"
              purpose="Matching bonus"
            />
            <BonusStatistic
              iconBgColor="orange"
              purpose="Stair Step bonus"
            />
            <BonusStatistic
              iconBgColor="pink"
              purpose="Board Breaker bonus"
            />
            <BonusStatistic
              iconBgColor="green"
              purpose="Permote & Earn bonus"
            />
          </div>
        </section>

        <section className="px-6 py-6 flex  flex-col gap-8 rounded-xl bg-white">
          <div className="flex justify-between p-6 items-center">
            <p className="font-semibold">Recruitement Statistics</p>
            <div className="cursor-pointer">
              <select
                className="p-2 outline-none cursor-pointer bg-white text-xl text-gray-500"
                name="month"
                id="month"
                defaultValue="last12Months"
              >
                <option value="last12Months">Last 12 Months</option>
                <option value="last6Months">Last 6 Months</option>
                <option value="last3Months">Last 3 Months</option>
              </select>
            </div>
          </div>
          <TrafficReportGraph
            data={recruitmentStatisticsDummyData}
            type="recruitementStatiscs"
            highestGraphNumber={highestGraphNumber}
          />
        </section>
      </main>
    </div>
  )
}

export default Dashboard
