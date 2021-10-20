/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Row, Typography } from 'antd';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, Line } from 'recharts';
import IconChartTotal from 'library/assets/icons/icon-chart-total';
import './BarChartModal.modules.scss';

const { Text } = Typography;

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
      <Text className="flex-center">
        <span className="total-images mr-12">
          <IconChartTotal />
        </span>
        Total PNL
      </Text>
    </Row>
  );
};

const BarChartModal = ({ data }: any) => {
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
        <Line type="monotone" dataKey="medium" stroke="#6b6b6b" fill="#6b6b6b" strokeWidth={4} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default BarChartModal;
