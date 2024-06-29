import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Sample data for the bar chart
const data = [
  { month: 'Jan', views: 230 },
  { month: 'Feb', views: 180 },
  { month: 'Mar', views: 450 },
  { month: 'Apr', views: 400 },
  { month: 'May', views: 350 },
  { month: 'Jun', views: 250 },
  { month: 'Jul', views: 330 },
  { month: 'Aug', views: 390 },
  { month: 'Sep', views: 200 },
  { month: 'Oct', views: 240 },
  { month: 'Nov', views: 280 },
  { month: 'Dec', views: 180 },
];

function TrafficReportChart() {
  return (
    <div className="w-[60%] flex flex-col gap-12 shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4 rounded-xl">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold px-6">Traffic Report</h2>
        <p className="flex items-center justify-center gap-6 text-xl text-gray-400">
          Last 12 Months <BiChevronDown style={{ fontSize: '2.5rem' }} />
        </p>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          barCategoryGap="30%" // Increase space between categories (bars)
          barGap={4} // Increase space between individual bars (for multiple bars in a category)
        >
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tickMargin={10} // Increase space between bars and month names
            tick={{ fill: '#9ca3af', fontSize: 12 }} // Style month names
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={10} // Increase space between bars and Y-axis labels
            tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 'semibold' }} // Style Y-axis labels
            domain={[0, 500]} // Set the range of the Y-axis to make bars appear shorter
          />
          <Tooltip
            cursor={{ fill: 'transparent' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-[#1e2b3c] text-white p-2 rounded">
                    <p>{`${payload[0].value} Views`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar
            dataKey="views"
            fill="#0369a1"
            radius={[4, 4, 0, 0]} // Rounded top corners of the bars
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrafficReportChart;
