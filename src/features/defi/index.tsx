import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Row, Col, Typography, Spin, Alert, Empty } from 'antd';
import { setTitleDocument } from 'utils/common';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getListDeFi, getListProductiveEthereum } from 'app/redux/defiSlice';
import { optionSortBy, optionsNextWords } from 'data/constant/defi';

import CardTotal from 'library/components/feature-defi/card-total/CardTotal';
import CardSelect from 'library/components/feature-defi/card-select/CardSelect';
import ListProductive from 'library/components/feature-defi/list-productive/ListProductive';
import DarkMode from 'library/components/feature-defi/dark-mode/DarkMode';
import TitlePage from 'library/components/title-page/TitlePage';
import ModalSingleAssets from './modalSingleAssets';
import './styles.modules.scss';

const { Text, Title } = Typography;

const DeFi: React.FC = () => {
  setTitleDocument('DeFi Analytics | Productive Assets');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [percentOthers, setPercentOthers] = useState('');
  const [percentPolygon, setPercentPolygon] = useState('');
  const [percentEthereum, setPercentEthereum] = useState('');
  const [percentBsc, setPercentBsc] = useState('');
  const [dataViewDetails, setDataViewDetails] = useState({});

  const { entities, productive_ethereum, isLoading } = useAppSelector((state) => state.defiSlide);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListDeFi());
    dispatch(getListProductiveEthereum());
  }, []);

  useEffect(() => {
    if (Object.keys(entities).length > 0) {
      const total = entities.next_word.total;
      setPercentOthers((entities.next_word.others / total) * 100 + '%');
      setPercentPolygon((entities.next_word.polygon / total) * 100 + '%');
      setPercentEthereum((entities.next_word.ethereum / total) * 100 + '%');
      setPercentBsc((entities.next_word.bsc / total) * 100 + '%');
    }
  }, [entities]);

  return (
    <>
      {entities && (
        <Row className="wrapper-de-fi">
          <Row className="de-fi__wrapper-title w-100" justify="space-between">
            <TitlePage title={'DeFi Analytics | Productive Assets'} />
            <DarkMode />
          </Row>
          <Row className="de-fi__list-card w-100">
            <CardTotal price={entities?.total_productive?.total_productive_assets} text="Total Productive Assets" prefix={'$'} />
            <CardTotal price={entities?.total_productive?.total_liabilities} text="Total Liabilities" prefix={'$'} />
            <CardTotal price={entities?.total_productive?.interests_and_rewards} text="Interests & Rewards" prefix={'$'} />
            <CardTotal price={entities?.total_productive?.total_profit_and_loss} text="Total Profit & Loss" prefix={'$'} />
            <CardTotal price={entities?.total_productive?.daily_interest} text="Daily Interest" prefix={'$'} />
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

              {entities.chart ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={entities.chart}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 50,
                    }}
                  >
                    <defs>
                      <linearGradient id="polygon" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8F76FA" stopOpacity={1} />
                        <stop offset="95%" stopColor="#8F76FA" stopOpacity={0.1} />
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
                    <Area type="monotone" dataKey="ethereum" stroke="#FFC04E" fillOpacity={0.3} activeDot={{ r: 6 }} fill="url(#bsc)" strokeWidth={0.7} />
                    <Area type="monotone" dataKey="bsc" stroke="#EC5956" fillOpacity={0.3} activeDot={{ r: 6 }} fill="url(#colorUv)" strokeWidth={0.5} />
                    <Area type="monotone" dataKey="others" stroke="#6B6B6B" fillOpacity={0.3} activeDot={{ r: 6 }} fill="url(#others)" strokeWidth={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <Empty />
              )}
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
            <ListProductive
              detailsProductive={productive_ethereum}
              title={'Ethereum'}
              price={entities.total_floor?.ethereum}
              setIsModalVisible={() => setIsModalVisible(!isModalVisible)}
              setDataViewDetails={setDataViewDetails}
            />
            <ListProductive
              detailsProductive={productive_ethereum}
              title={'Binance Smart Chain'}
              price={entities.total_floor?.binance_smart_chain}
              setIsModalVisible={() => setIsModalVisible(!isModalVisible)}
              setDataViewDetails={setDataViewDetails}
            />
            <ListProductive
              detailsProductive={productive_ethereum}
              title={'Polygon'}
              price={entities.total_floor?.polygon}
              setIsModalVisible={() => setIsModalVisible(!isModalVisible)}
              setDataViewDetails={setDataViewDetails}
            />
          </Row>
          <ModalSingleAssets dataViewDetails={dataViewDetails} isModalVisible={isModalVisible} setIsModalVisible={() => setIsModalVisible(!isModalVisible)} />
        </Row>
      )}
      {isLoading && (
        <Spin tip="Loading...">
          <Alert message="Alert message title" description="Further details about the context of this alert." type="info" />
        </Spin>
      )}
    </>
  );
};

export default DeFi;
