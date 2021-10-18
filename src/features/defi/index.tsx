import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Row, Col, Typography } from 'antd';
import { setTitleDocument } from 'utils/common';
import CardTotal from 'library/components/feature-defi/card-total/CardTotal';
import CardSelect from 'library/components/feature-defi/card-select/CardSelect';
import ListProductive from 'library/components/feature-defi/list-productive/ListProductive';
import DarkMode from 'library/components/feature-defi/dark-mode/DarkMode';
import TitlePage from 'library/components/title-page/TitlePage';
import ModalSingleAssets from './modalSingleAssets';
import './styles.modules.scss';
const { Text, Title } = Typography;

const data = {
  total_floor: {
    ethereum: '1.350.928',
    binance_smart_chain: '2.090.244',
    polygon: '182,392.84',
  },
  total_productive: {
    total_productive_assets: '2,734,211',
    total_liabilities: '0.0',
    interests_and_rewards: '393,019',
    total_profit_and_loss: '726,526',
    daily_interest: '726,526',
  },
  next_word: {
    others: 40,
    polygon: 200,
    ethereum: 190,
    bsc: 300,
    total: 730,
  },
  chart: [
    {
      name: 'Jan',
      polygon: 33,
      ethereum: 11,
      bsc: 4,
      others: 8,
    },
    {
      name: 'FEB',
      polygon: 30,
      ethereum: 6,
      bsc: 11,
      others: 5,
    },
    {
      name: 'MAR',
      polygon: 35,
      ethereum: 11,
      bsc: 33,
      others: 22,
    },
    {
      name: 'APR',
      polygon: 38,
      ethereum: 6,
      bsc: 22,
      others: 11,
    },
    {
      name: 'MAY',
      polygon: 60,
      ethereum: 22,
      bsc: 34,
      others: 22,
    },
    {
      name: 'JUN',
      polygon: 38,
      ethereum: 12,
      bsc: 30,
      others: 5,
    },
    {
      name: 'AUG',
      polygon: 45,
      ethereum: 33,
      bsc: 20,
      others: 1,
    },
    {
      name: 'SEPT',
      polygon: 50,
      ethereum: 30,
      bsc: 20,
      others: 11,
    },
    {
      name: 'OCT',
      polygon: 60,
      ethereum: 20,
      bsc: 40,
      others: 22,
    },
    {
      name: 'NOV',
      polygon: 50,
      ethereum: 10,
      bsc: 5,
      others: 0,
    },
    {
      name: 'DEC',
      polygon: 75,
      ethereum: 30,
      bsc: 0,
      others: 11,
    },
  ],
};

const DeFi: React.FC = () => {
  setTitleDocument('DeFi Analytics | Productive Assets');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [percentOthers, setPercentOthers] = useState('');
  const [percentPolygon, setPercentPolygon] = useState('');
  const [percentEthereum, setPercentEthereum] = useState('');
  const [percentBsc, setPercentBsc] = useState('');

  const optionsNextWords = [
    {
      label: 'BSC',
      value: 'BSC',
    },
    {
      label: 'Ethereum',
      value: 'Ethereum',
    },
    {
      label: 'Polygon',
      value: 'Polygon',
    },
    {
      label: 'Others',
      value: 'Others',
    },
  ];

  const optionSortBy = [
    {
      label: 'Default',
      value: 'Default',
    },
    {
      label: 'Name',
      value: 'Name',
    },
  ];

  useEffect(() => {
    const total = data.next_word.total;
    setPercentOthers((data.next_word.others / total) * 100 + '%');
    setPercentPolygon((data.next_word.polygon / total) * 100 + '%');
    setPercentEthereum((data.next_word.ethereum / total) * 100 + '%');
    setPercentBsc((data.next_word.bsc / total) * 100 + '%');
  }, [data]);

  return (
    <Row className="wrapper-de-fi">
      <Row className="de-fi__wrapper-title w-100" justify="space-between">
        <TitlePage title={'DeFi Analytics | Productive Assets'} />
        <DarkMode />
      </Row>
      <Row className="de-fi__list-card w-100">
        <CardTotal price={data.total_productive.total_productive_assets} text="Total Productive Assets" />
        <CardTotal price={data.total_productive.total_liabilities} text="Total Liabilities" />
        <CardTotal price={data.total_productive.interests_and_rewards} text="Interests & Rewards" />
        <CardTotal price={data.total_productive.total_profit_and_loss} text="Total Profit & Loss" />
        <CardTotal price={data.total_productive.daily_interest} text="Daily Interest" />
      </Row>
      <Row className="wrapper-char">
        <Row className="container-char" justify="center">
          <Row className="de-fi__list-box" justify="center">
            <Row className="de-fi__box">
              <Text className="active">USD</Text>
              <Text>BTC</Text>
            </Row>
            <Row className="de-fi__box">
              <Text>Daily</Text>
              <Text>Weekly</Text>
              <Text>Monthly</Text>
              <Text>Yearly</Text>
              <Text>YTD</Text>
            </Row>
            <Row className="de-fi__box">
              <Text>Daily</Text>
              <Text>My Portfolio</Text>
            </Row>
            <Row className="de-fi__box">
              <Text>Daily</Text>
              <Text>Benchmark</Text>
            </Row>
          </Row>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data.chart}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 50,
              }}
            >
              <defs>
                <linearGradient id="polygon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8F76FA" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8F76FA" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="ethereum" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFC04E" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FFC04E" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="bsc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EC5956" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#EC5956" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="others" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6B6B6B" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6B6B6B" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Area type="monotone" dataKey="polygon" stroke="#8F76FA" fillOpacity={0.3} activeDot={{ r: 6 }} fill="url(#polygon)" strokeWidth={4} />
              <Area type="monotone" dataKey="ethereum" stroke="#FFC04E" fillOpacity={0.3} activeDot={{ r: 6 }} fill="url(#bsc)" strokeWidth={1} />
              <Area type="monotone" dataKey="bsc" stroke="#EC5956" fillOpacity={0.3} activeDot={{ r: 6 }} fill="url(#colorUv)" strokeWidth={0.5} />
              <Area type="monotone" dataKey="others" stroke="#6B6B6B" fillOpacity={0.3} activeDot={{ r: 6 }} fill="url(#others)" strokeWidth={0.7} />
            </AreaChart>
          </ResponsiveContainer>
        </Row>
        <Row className="wrapper-next-word">
          <Typography.Text className="next-word__title">
            Network
            <br />
            Allocation
          </Typography.Text>
          <Row className="next-word__list">
            <Col className="other w-100 text-center" style={{ height: percentOthers }}>
              Other
            </Col>
            <Col className="polygon w-100 text-center" style={{ height: percentPolygon }}>
              Polygon
            </Col>
            <Col className="ethereum w-100 text-center" style={{ height: percentEthereum }}>
              Ethereum
            </Col>
            <Col className="bsc w-100 text-center" style={{ height: percentBsc }}>
              BSC
            </Col>
          </Row>
        </Row>
      </Row>
      <Row className="productive-assets w-100 d-block">
        <Title level={2} className="de-fi__title">
          Productive Assets
        </Title>
        <Row className="d-flex mt-24">
          <CardSelect defaultValue="BSC" name="NextWords" options={optionsNextWords} />
          <CardSelect name="Platforms" options={optionsNextWords} placeholder="Select" />
          <CardSelect name="Sort by" defaultValue="Default" options={optionSortBy} />
        </Row>
        <ListProductive title={'Ethereum'} price={data.total_floor.ethereum} setIsModalVisible={() => setIsModalVisible(!isModalVisible)} />
        <ListProductive
          title={'Binance Smart Chain'}
          price={data.total_floor.binance_smart_chain}
          setIsModalVisible={() => setIsModalVisible(!isModalVisible)}
        />
        <ListProductive title={'Polygon'} price={data.total_floor.polygon} setIsModalVisible={() => setIsModalVisible(!isModalVisible)} />
      </Row>
      <ModalSingleAssets isModalVisible={isModalVisible} setIsModalVisible={() => setIsModalVisible(!isModalVisible)} />
    </Row>
  );
};

export default DeFi;
