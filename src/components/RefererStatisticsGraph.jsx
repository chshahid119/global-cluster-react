import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', value: 29 },
  { month: 'Feb', value: 41 },
  { month: 'Mar', value: 30 },
  { month: 'Apr', value: 30 },
  { month: 'May', value: 37 },
  { month: 'Jun', value: 41 },
  { month: 'Jul', value: 37 },
  { month: 'Aug', value: 42 },
  { month: 'Sep', value: 42 },
  { month: 'Oct', value: 42 },
  { month: 'Nov', value: 58 },
  { month: 'Dec', value: 58 },
];

function RefererStatisticsGraph() {
  return (
    <div className='p-6' style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
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
            dot={{ r: 4, fill: "#0080ff" }} 
            activeDot={{ r: 6, fill: "#0080ff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RefererStatisticsGraph