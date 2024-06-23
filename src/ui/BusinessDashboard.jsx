import React from 'react';
import BusinessDashboardHeader from './../components/BusinessDashboardHeader';
import InsightsCard from './../components/InsightsCard';
import GrowBusinessCard from '../components/GrowBusinessCard';
import TrafficReportGraph from './../components/TrafficReportGraph';
import TopProducts from './../components/TopProducts';
import ProductsBusiness from './../components/ProductsBusiness';

function BusinessDashboard() {
  return (
    <div>
      <BusinessDashboardHeader />
      <div className="px-6 py-10 flex gap-12 flex-wrap">
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
      <ProductsBusiness />
    </div>
  );
}

export default BusinessDashboard;
