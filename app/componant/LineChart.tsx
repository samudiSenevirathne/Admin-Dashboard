'use client';

import React from 'react';
import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
} from 'recharts';

const salesData = [
  {
    name: 'Jan',
    revenue: 0,
  },
  {
    name: 'Feb',
    revenue: 10000,
  },
  {
    name: 'Mar',
    revenue: 5000,
  },
  {
    name: 'Apr',
    revenue: 15000,
  },
  {
    name: 'May',
    revenue: 10000,
  },
  {
    name: 'Jun',
    revenue: 20000,
  },
  {
    name: 'Jul',
    revenue: 15000,
  },
  {
    name: 'Aug',
    revenue: 25000,
  },
  {
    name: 'Sep',
    revenue: 20000,
  },
  {
    name: 'Oct',
    revenue: 30000,
  },
  {
    name: 'Nov',
    revenue: 25000,
  },
  {
    name: 'Dec',
    revenue: 40000,
  },
];

interface CustomTooltipProps {
  active: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white ring-2 ring-black ring-opacity-5 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-start text-gray-600">{label}</p>
        <p className="text-sm text-gray-500">
        Earnings:
          <span className="ml-2">${Number(payload[0].value).toLocaleString()}</span>
        </p>
      </div>
    );
  }
  return null; // Return null if not active
};

export default function LineChartComponent() {
  const formatYAxis = (revenue: any) => {
    const formattedRevenue = Number(revenue).toLocaleString();
    return `$${formattedRevenue}`;
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart  width={500} height={300} data={salesData}
        margin={{right: 40,left:30,top:40,bottom:30}}>
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis axisLine={false} tickLine={false} 
          dataKey="name" 
          tick={(props) => {
            const { x, y, payload } = props;
            if (payload.index % 2 != 0) { 
              return <text x={x} y={y} visibility="hidden">{payload.value}</text>;
            }
            return <text x={x} y={y} dy={16} textAnchor="middle" fill="#4b5563">{payload.value}</text>;
          }}/>
        <YAxis axisLine={false} tickLine={false} tickFormatter={formatYAxis} />
        <Tooltip content={<CustomTooltip  active={false} />}  cursor={false} />
        <Area type="monotone" dataKey="revenue" stroke="#6366f1" fill="#eef2ff" strokeWidth={3}
        dot={(props) => (
          <circle {...props} strokeWidth={2} r={4} fill="#6366f1" fillOpacity={1}/>
        )} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
