import React from 'react';
import { Row, Typography } from 'antd';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, Line } from 'recharts';
import './BarChartModal.modules.scss';

const { Text } = Typography;

const data = [
  {
    name: 'Jan',
    earned: 20000,
    interest: 10000,
    delta: -15000,
  },
  {
    name: 'FEB',
    earned: 19000,
    interest: 8000,
    delta: 6000,
  },
  {
    name: 'MAR',
    earned: 21000,
    interest: 7000,
    delta: 10000,
  },
  {
    name: 'APR',
    earned: 25000,
    interest: 20000,
    delta: 18000,
  },
  {
    name: 'MAY',
    earned: 21000,
    interest: 5000,
    delta: -10000,
  },
  {
    name: 'JUN',
    earned: 10000,
    interest: 20000,
    delta: 8000,
  },
  {
    name: 'AUG',
    earned: 3000,
    interest: 9000,
    delta: -15000,
  },
  {
    name: 'SEPT',
    earned: 25000,
    interest: 20000,
    delta: 18000,
  },
  {
    name: 'OCT',
    earned: 19000,
    interest: 8000,
    delta: -6000,
  },
  {
    name: 'NOV',
    earned: 18000,
    interest: 9000,
    delta: 7500,
  },
  {
    name: 'DEC',
    earned: 14000,
    interest: 23000,
    delta: -9000,
  },
];
/* eslint-disable  @typescript-eslint/no-explicit-any */

const RenderLegend = () => {
  return (
    <Row className="wrapper-legend">
      <Text>
        <span className="box box-delta"></span> Delta
      </Text>
      <Text>+</Text>
      <Text>
        <span className="box box-interest"></span>Interest Earned
      </Text>
      <Text>+</Text>
      <Text>
        <span className="box box-rewards"></span>Rewards Earned
      </Text>
      <Text>=</Text>
      <Text>
        <span className="total-images"></span>Total PNL
      </Text>
    </Row>
  );
};

const BarChartModal = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={600}
        data={data}
        stackOffset="sign"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 100,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend content={<RenderLegend />} />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="earned" fill="#8F76FA" stackId="stack" opacity={0.4} barSize={30} />
        <Bar dataKey="interest" fill="#FFC04E" stackId="stack" opacity={0.4} barSize={30} />
        <Bar dataKey="delta" fill="#EC5956" stackId="stack" opacity={0.4} barSize={30} />
        <Line type="monotone" dataKey="earned" stroke="#6b6b6b" fill="#6b6b6b" strokeWidth={4} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default BarChartModal;
