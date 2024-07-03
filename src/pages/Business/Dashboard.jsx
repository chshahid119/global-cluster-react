import React from 'react';

import BusinessDashboardHeader from '../../components/ui/Header';
import InsightsCard from '../../components/ui/InsightsCard';
import GrowBusinessCard from '../../components/ui/GrowBusinessCard';
import TrafficReportGraph from '../../components/ui/TrafficReportGraph';
import TopProducts from '../../components/ui/TopProducts';
import TableData from '../../components/ui/TableData';

const productsData = [
  {
    name: 'lorem Ipsum',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident? Atque, provident?',
    shares: 10,
    status: 'Pending',
    traffic: '1200',
    action: 'Edit',
  },
  {
    name: 'lorem Ipsum',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident? Atque, provident?',
    shares: 10,
    status: 'Active',
    traffic: '1200',
    action: 'Edit',
  },
  {
    name: 'lorem Ipsum',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
    shares: 10,
    status: 'Declined',
    traffic: '1200',
    action: 'Edit',
  },
  {
    name: 'lorem Ipsum',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. orem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident? Atque, provident?',
    shares: 10,
    status: 'Active',
    traffic: '1200',
    action: 'Edit',
  },
  {
    name: 'lorem Ipsum',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. orem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident? Atque, provident?',
    shares: 10,
    status: 'Declined',
    traffic: '1200',
    action: 'Edit',
  },
  {
    name: 'lorem Ipsum',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident? orem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident',
    shares: 10,
    status: 'Active',
    traffic: '1200',
    action: 'Edit',
  },
];

function Dashboard() {
  return (
    <div className="bg-gray-50">
  
      <BusinessDashboardHeader />
      <div className="px-6 py-10 flex gap-6 flex-wrap">
        <InsightsCard
          CardName="Total Share"
          TotalCount="40,689"
          TotalIncDec="8.5"
        />

        <InsightsCard
          CardName="Total Visit"
          TotalCount="10293"
          TotalIncDec="1.3"
        />

        <GrowBusinessCard />
      </div>
      <div className="px-6 py-6 flex gap-6">
        <TrafficReportGraph />
        <TopProducts />
      </div>

      <div className="my-8 mx-8 rounded-2xl flex flex-col gap-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] ">
        <div className="flex  justify-between px-8 py-8 items-center">
          <h2 className="text-xl font-semibold">Products</h2>
          <select className="bg-[#f9f9fc] p-2 text-xl outline-none cursor-pointer">
            <option selected value="All">
              All
            </option>
            <option value="Active">Januaray</option>
            <option value="Declined">Feburary</option>
          </select>
        </div>
        <div className="px-4">
          <TableData
            data={productsData}
            tableHeadNames={[
              'Product Name',
              'Description',
              'No of Shares',
              'Traffic',
              'Status',
              'Action',
            ]}
          />
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
