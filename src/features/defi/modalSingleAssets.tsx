import React from 'react';
import IconDropDownSmall from 'library/assets/images/icon-drop-down-small.png';
import IconExclamation from 'library/assets/icons/icon-exclamation';
import { Modal, Row, Typography, Button, Col, Divider, Image } from 'antd';
import hood_one from 'library/assets/images/hood-1.png';
import hood_two from 'library/assets/images/hood-2.png';
import hood_third from 'library/assets/images/hood-3.png';
import './modal.modules.scss';

const { Text, Title, Paragraph } = Typography;

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: (val: boolean) => void;
}

const modalSingleAssets = ({ isModalVisible, setIsModalVisible }: Props) => {
  // const [isModalVisible, setIsModalVisible] = useState(true);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

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
      <Row className="modal__info" justify="space-between">
        <Text>BTCB</Text>
        <Text>
          <Paragraph className="mb-0">10 BTCB</Paragraph>
          <Paragraph className="color-13BA9A">($550,000)</Paragraph>
        </Text>
        <Text>
          <Paragraph className="mb-0">1.72 BTCB</Paragraph>
          <Paragraph className="color-13BA9A">($94,600)</Paragraph>
        </Text>
        <Text>
          <Paragraph className="mb-0">2.254 AUTO</Paragraph>
          <Paragraph className="color-13BA9A">($6,200)</Paragraph>
        </Text>
        <Text>284.2%</Text>
        <Text>487.1%</Text>
        <Text>$600,000</Text>
        <Text>
          <Paragraph className="mb-0">11.72 BTC + 2.254 AUTO</Paragraph>
          <Paragraph className="color-13BA9A">$650,800</Paragraph>
        </Text>
        <Text className="color-13BA9A">+$50,800</Text>
        <Text>
          <Button className="btn-drop-down">
            <img src={IconDropDownSmall} alt="" />
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
              <Text className="text">+$50,800 (+27.2%)</Text>
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
              <Text className="text">+$20,800</Text>
              <small>
                Total Interests and Rewards
                <sup>
                  <IconExclamation />
                </sup>
              </small>
            </Paragraph>
            <Divider type="vertical" className="h-100" />
            <Paragraph className="mr-24 ml-24">
              <Text className="text">+$10,000</Text>
              <small>
                Claimed
                <sup>
                  <IconExclamation />
                </sup>
              </small>
            </Paragraph>
            <Paragraph className="ml-24">
              <Text className="text">+$10,800</Text>
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
              <Text className="w-60 bold bold">$1,000</Text>
            </Row>
            <Row className="flex-center" justify="space-between">
              <Text>Weekly</Text>
              <Image src={hood_two} />
              <Text className="bold">$10,000</Text>
            </Row>
            <Row className="flex-center" justify="space-between">
              <Text>Monthly</Text>
              <Image src={hood_third} />
              <Text className="bold">$18,000</Text>
            </Row>
          </Col>
        </Row>
      </Row>
    </Modal>
  );
};

export default modalSingleAssets;
