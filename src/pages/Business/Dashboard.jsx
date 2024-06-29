import React from 'react';

import BusinessDashboardHeader from './../../ui/Business/Header';
import InsightsCard from '../../ui/Business/InsightsCard';
import GrowBusinessCard from '../../ui/Business/GrowBusinessCard';
import TrafficReportGraph from '../../ui/Business/TrafficReportGraph';
import TopProducts from './../../ui/Business/TopProducts';
import ProductsBusiness from '../../ui/Business/ProductsBusiness';

function Dashboard() {
  return (
    <div>
    
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

        <GrowBusinessCard/>
      </div>
      <div className="px-6 py-6 flex gap-6">
        <TrafficReportGraph />
        <TopProducts />
      </div>

      <div className="px-6 py-6 ">
        <ProductsBusiness />
      </div>
  
    </div>
  );
}

export default Dashboard;
