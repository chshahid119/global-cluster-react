import React from 'react'
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import PropTypes from 'prop-types'

function TrafficReportChart({
  data,
  type = 'default',
  highestGraphNumber = 2000,
}) {
  return (
    <div className="w-full flex flex-col gap-12 rounded-xl">
      {type === 'recruitementStatiscs' && (
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart
            data={data}
            barCategoryGap="30%" // Increase space between categories (bars)
            barGap={4} // Increase space between individual bars (for multiple bars in a category)
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }} // Add margins around the chart
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
              domain={[0, highestGraphNumber]} // Set the range of the Y-axis to accommodate the highest value
            />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#1e2b3c] text-white p-2 rounded">
                      <p>{`${payload[0].value} users`}</p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Bar
              dataKey="users"
              fill="#0369a1"
              radius={[4, 4, 0, 0]} // Rounded top corners of the bars
            />
          </BarChart>
        </ResponsiveContainer>
      )}
      {type === 'default' && (
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart
            data={data}
            barCategoryGap="30%" // Increase space between categories (bars)
            barGap={4} // Increase space between individual bars (for multiple bars in a category)
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }} // Add margins around the chart
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
                  )
                }
                return null
              }}
            />
            <Bar
              dataKey="views"
              fill="#0369a1"
              radius={[4, 4, 0, 0]} // Rounded top corners of the bars
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

TrafficReportChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string,
      users: PropTypes.number,
    }),
  ),
  type: PropTypes.string,
  highestGraphNumber: PropTypes.number,
}

export default TrafficReportChart
