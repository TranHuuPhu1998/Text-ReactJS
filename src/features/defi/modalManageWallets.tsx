import React, { useEffect } from 'react';
import { Modal, Button, Row, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { connectWallets, getListManageWallets } from 'app/redux/defiSlice';
import RowInfoWallets from 'library/components/feature-defi/row-info-wallets/RowInfoWallets';
import './modal.modules.scss';

const { Text } = Typography;

interface Props {
  isModalWalletsVisible: boolean;
}

const modalManageWallets = ({ isModalWalletsVisible }: Props) => {
  const dispatch = useAppDispatch();
  const { manage_wallets } = useAppSelector((state) => state.defiSlide);
  const handleCancel = () => {
    dispatch(connectWallets());
  };

  const handleSubmit = () => {
    dispatch(connectWallets());
  };

  useEffect(() => {
    dispatch(getListManageWallets());
  }, []);

  return (
    <Modal
      title="Manage Wallets"
      className="modal-manage-wallets"
      width={446}
      visible={isModalWalletsVisible}
      onCancel={handleCancel}
      onOk={handleSubmit}
      footer={[
        <Button key="submit" onClick={handleSubmit}>
          Confirm
        </Button>,
      ]}
    >
      <Row className="nav-connected__list">
        <Text className="text-title">Connected</Text>
        {manage_wallets?.connected?.map((item: any, index: number) => (
          <RowInfoWallets key={index} id_connect={item.id_connect} type_name={item.type_name} />
        ))}
      </Row>
      <Row className="nav-connected__list">
        <Text className="text-title">Watching</Text>
        {manage_wallets?.watching?.map((item: any, index: number) => (
          <RowInfoWallets key={index} id_connect={item.id_watching} type_name={item.type_name} />
        ))}
      </Row>
    </Modal>
  );
};

export default modalManageWallets;
