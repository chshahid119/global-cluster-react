import PropTypes from 'prop-types'
import React from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function RefererStatisticsGraph({ data }) {
  return (
    <div
      className="p-6"
      style={{ width: '100%', height: 300 }}
    >
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            axisLine={{ stroke: '#E5E7EB', strokeWidth: 1 }}
            tickLine={false}
            dy={10}
            padding={{ left: 0, right: 0 }}
          />
          <YAxis
            axisLine={{ stroke: '#E5E7EB', strokeWidth: 1 }}
            tickLine={false}
            domain={[0, 'dataMax + 10']}
            padding={{ top: 20, bottom: 0 }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#0080ff"
            strokeWidth={2}
            dot={{ r: 4, fill: '#0080ff' }}
            activeDot={{ r: 6, fill: '#0080ff' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

RefererStatisticsGraph.propTypes = {
  data: PropTypes.object,
}

export default RefererStatisticsGraph
