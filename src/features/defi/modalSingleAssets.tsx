import React from 'react';
import { Modal, Row, Typography, Button, Col, Divider, Image } from 'antd';

import IconDropDownSmall from 'library/assets/images/icon-drop-down-small.png';
import IconExclamation from 'library/assets/icons/icon-exclamation';
import hood_one from 'library/assets/images/hood-1.png';
import hood_two from 'library/assets/images/hood-2.png';
import hood_third from 'library/assets/images/hood-3.png';
import BarChartModal from 'library/components/feature-defi/bar-chart-modal/BarChartModal';
import './modal.modules.scss';

const { Text, Title, Paragraph } = Typography;

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: (val: boolean) => void;
  dataViewDetails: any;
}

const modalSingleAssets = ({ isModalVisible, setIsModalVisible, dataViewDetails }: Props) => {
  const { history_p_l, current_p_l, asset, deposited_qty, interest, rewards, apr, apy, cost_basis, total_current_cake, total_current_bunny, total_p_l } =
    dataViewDetails;

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Yield information single assets"
      className="modal"
      width={1122}
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
      ]}
    >
      {Object.keys(dataViewDetails).length && (
        <>
          <Row className="modal__info" justify="space-between">
            <Text>{asset}</Text>
            <Text>
              <Paragraph className="mb-0">
                {deposited_qty?.value} {deposited_qty.unit}
              </Paragraph>
              <Paragraph className="color-13BA9A">($550,000)</Paragraph>
            </Text>
            <Text>
              <Paragraph className="mb-0">
                {interest.value} {interest.unit}
              </Paragraph>
              <Paragraph className="color-13BA9A">($94,600)</Paragraph>
            </Text>
            <Text>
              <Paragraph className="mb-0">
                {rewards.value} {rewards.unit}
              </Paragraph>
              <Paragraph className="color-13BA9A">($6,200)</Paragraph>
            </Text>
            <Text>
              {apr.value}
              {apr.unit}
            </Text>
            <Text>
              {apy.value}
              {apy.unit}
            </Text>
            <Text>
              {cost_basis.value}
              {cost_basis.unit}
            </Text>
            <Text>
              <Paragraph className="mb-0">
                {total_current_cake.value}
                {total_current_cake.unit} + {total_current_bunny.value}
                {total_current_bunny.unit}
              </Paragraph>
              <Paragraph className="color-13BA9A">$650,800</Paragraph>
            </Text>
            <Text className="color-13BA9A">
              {total_p_l.unit}
              {total_p_l.value}
            </Text>
            <Text>
              <Button className="btn-drop-down">
                <Image src={IconDropDownSmall} preview={false} alt="" />
              </Button>
            </Text>
          </Row>
          <Row className="modal__list-tab" justify="space-between">
            <Col className="modal__item-tab active">
              <Text>Single Asset Yield Information</Text>
            </Col>
            <Col className="modal__item-tab">
              <Text>Protocol & Pool Information</Text>
            </Col>
            <Col className="modal__item-tab">
              <Text>Past Transactions</Text>
            </Col>
          </Row>
          <Row className="wrapper-current-yield">
            <Title level={3} className="modal__title">
              Current P&L and Yield
            </Title>
            <Row className="margin-auto">
              <Col className="modal__card mr-24">
                <Paragraph>
                  <Text className="text">+${current_p_l.total_p_l}</Text>
                  <small>
                    Total P&L
                    <sup>
                      <IconExclamation />
                    </sup>
                  </small>
                </Paragraph>
              </Col>
              <Col className="modal__card mr-24">
                <Paragraph className="mr-24">
                  <Text className="text">+${current_p_l.total_interests_rewards}</Text>
                  <small>
                    Total Interests and Rewards
                    <sup>
                      <IconExclamation />
                    </sup>
                  </small>
                </Paragraph>
                <Divider type="vertical" className="h-100" />
                <Paragraph className="mr-24 ml-24">
                  <Text className="text">+${current_p_l.claimed}</Text>
                  <small>
                    Claimed
                    <sup>
                      <IconExclamation />
                    </sup>
                  </small>
                </Paragraph>
                <Paragraph className="ml-24">
                  <Text className="text">+${current_p_l.unclaimed}</Text>
                  <small>
                    Unclaimed
                    <sup>
                      <IconExclamation />
                    </sup>
                  </small>
                </Paragraph>
              </Col>
              <Col className="modal__card-custom">
                <Row className="flex-center" justify="space-between">
                  <Text>Daily</Text>
                  <Image src={hood_one} />
                  <Text className="w-60 bold bold">${current_p_l.daily}</Text>
                </Row>
                <Row className="flex-center" justify="space-between">
                  <Text>Weekly</Text>
                  <Image src={hood_two} />
                  <Text className="bold">${current_p_l.weekly}</Text>
                </Row>
                <Row className="flex-center" justify="space-between">
                  <Text>Monthly</Text>
                  <Image src={hood_third} />
                  <Text className="bold">${current_p_l.monthly}</Text>
                </Row>
              </Col>
            </Row>
            <Row className="process-text">
              <Col className="flex-center card__delta background-white pb-12">
                <Text>Δ Delta</Text>
              </Col>
              <Row className="process-percent">
                <Col className="flex-center card__interest background-white pb-12" style={{ width: '40%' }}>
                  <Text>Interest Earned</Text>
                </Col>
                <Col className="flex-center card__rewards background-white pb-12" style={{ width: '60%' }}>
                  <Text>Rewards Earned</Text>
                </Col>
              </Row>
            </Row>
            <Row className="process-price">
              <Col className="flex-center card__delta">
                <Text>-${current_p_l.delta}</Text>
              </Col>
              <Row className="process-percent">
                <Col className="flex-center card__interest" style={{ width: '40%' }}>
                  <Text>+${current_p_l.interest_earned}</Text>
                </Col>
                <Col className="flex-center card__rewards" style={{ width: '60%' }}>
                  <Text>+${current_p_l.rewards_earned}</Text>
                </Col>
              </Row>
            </Row>
            <Col className="card__total">
              <Text className="number">= ${current_p_l.total_detailed_view}</Text>
              <Text className="text">Detailed View</Text>
            </Col>
          </Row>
          <Row className="wrapper-chart">
            <Title level={3} className="modal__title">
              Current P&L and Yield
            </Title>
            <Row className="de-fi__list-box" justify="space-between">
              <Col className="chart-content">
                <Row className="de-fi__box">
                  <Text className="active-text">USD</Text>
                  <Text>BTC</Text>
                </Row>
                <Row className="de-fi__box">
                  <Text>Daily</Text>
                  <Text>Weekly</Text>
                  <Text>Monthly</Text>
                  <Text>Yearly</Text>
                  <Text>YTD</Text>
                </Row>
              </Col>
              <Col className="de-fi__box">
                <Text>Line</Text>
                <Text>Bar</Text>
              </Col>
            </Row>
            <BarChartModal data={history_p_l} />
          </Row>
        </>
      )}
    </Modal>
  );
};

export default modalSingleAssets;
