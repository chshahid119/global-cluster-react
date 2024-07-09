import React from 'react';
import { GoChevronDown } from 'react-icons/go';
import BonusStatistic from '../../components/BonusStatistic';
import EarningCard from '../../components/EarningCard';
import NewMember from '../../components/NewMember';
import PermoteCard from '../../components/PermoteCard';
import Ranking from '../../components/Ranking';
import RefererStatisticsGraph from '../../components/RefererStatisticsGraph';
import TeamPerfomance from '../../components/TeamPerfomance';
import UserDashboardPayout from '../../components/UserDashboardPayout';
import UserImg from './../../assets/images/userImg.png';
import UserDashboardHeader from './../../components/ui/Header';

function Dashboard() {
  return (
    <div className="bg-gray-50 h-full w-full">
      <div className="bg-white">
        <UserDashboardHeader />
      </div>
      <main className="m-10 rounded-xl flex flex-col gap-4">
        <div className="p-10 flex flex-col gap-6 bg-white rounded-md">
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-3xl">Welcome Silas Oladipo</h2>
            <p>Dashboard Summary</p>
          </div>
          <div className="flex gap-4">
            <EarningCard
              icon="icon"
              earnings="$1,000,00.00"
              whichEarning="Total Earning"
              rateIncDec="6.7% Increase"
            />
            <EarningCard
              icon="icon"
              earnings="$1,000,00.00"
              whichEarning="Total Earning"
              rateIncDec="6.7% Increase"
            />
            <PermoteCard />
          </div>
        </div>

        {/* Bonus Statistics  */}
        <div className="flex flex-col gap-4 bg-white p-8">
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
            <BonusStatistic iconBgColor="pink" purpose="Matching bonus" />
            <BonusStatistic iconBgColor="orange" purpose="Stair Step bonus" />
            <BonusStatistic iconBgColor="pink" purpose="Board Breaker bonus" />
            <BonusStatistic
              iconBgColor="green"
              purpose="Permote & Earn bonus"
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-7/12 flex flex-col gap-10 p-6 rounded-md bg-white">
            <div className="flex justify-between items-center">
              <p>Bonus Statics</p>
              <p className="flex gap-3 items-center justify-between p-2 border rounded-lg text-lg">
                Today <GoChevronDown />
              </p>
            </div>
            <RefererStatisticsGraph />
          </div>

          <div className="flex-1 bg-white p-6 flex flex-col gap-20 rounded-md">
            <p className="font-semibold">New Members</p>
            <div className="flex flex-col gap-3">
              <NewMember
                memberName="Silas Dahun"
                userName="SilasDahun"
                date="20 May 2024"
                img={UserImg}
              />
              <NewMember
                memberName="Silas Dahun"
                userName="SilasDahun"
                date="20 May 2024"
                img={UserImg}
              />
              <NewMember
                memberName="Silas Dahun"
                userName="SilasDahun"
                date="20 May 2024"
                img={UserImg}
              />
              <NewMember
                memberName="Silas Dahun"
                userName="SilasDahun"
                date="20 May 2024"
                img={UserImg}
              />
              <NewMember
                memberName="Silas Dahun"
                userName="SilasDahun"
                date="20 May 2024"
                img={UserImg}
              />
            </div>
          </div>
        </div>

        <div className="flex p-8 gap-4">
          <div className="flex-1 bg-white p-8 rounded-md">
            <TeamPerfomance />
          </div>
          <div className="flex-1 bg-white py-8 px-10 rounded-md">
            <Ranking />
          </div>
          <div className="flex-1 bg-white py-8 px-10 rounded-md">
            <UserDashboardPayout />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
