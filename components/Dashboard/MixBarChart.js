import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'December',
    uv: 4000,
    Market: 2400,
    Profit: 2400,
  },
  {
    name: 'January',
    uv: 3000,
    Market: 1398,
    Profit: 2210,
  },
  {
    name: 'February',
    uv: 2000,
    Market: 9800,
    Profit: 2290,
  },
  {
    name: 'March',
    uv: 2780,
    Market: 3908,
    Profit: 2000,
  },
  {
    name: 'April',
    uv: 1890,
    Market: 4800,
    Profit: 2181,
  },
  {
    name: 'May',
    uv: 2390,
    Market: 3800,
    Profit: 2500,
  },
  {
    name: 'June',
    uv: 3490,
    Market: 4300,
    Profit: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/mixed-bar-chart-q4hgc';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Market" stackId="a" fill="#0373f2" />
          <Bar dataKey="Profit" stackId="a" fill="#3da859" />
          <Bar dataKey="uv" fill="#8a03f2" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
