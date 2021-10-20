import React from 'react';
import { Button, Row, Image, Typography, Col } from 'antd';
import IconRenameWallet from 'library/assets/icons/icon-rename-wallet';
import IconCopyAddress from 'library/assets/icons/icon-copy-address';
import IconDisconnect from 'library/assets/icons/icon-disconnect';
import IconEllipse from 'library/assets/images/icon-ellipse.png';
import './RowInfoWallets.modules.scss';

const { Text, Paragraph } = Typography;

const RowInfoWallets = ({ id_connect, type_name }: any) => {
  const renterId = (id_connect: string) => {
    return id_connect.slice(0, 4) + '...' + id_connect.slice(id_connect.length - 4, id_connect.length);
  };

  return (
    <Paragraph className="flex-center nav-connected__item">
      <Image src={IconEllipse} preview={false} width={26} />
      <Row className="text-right">
        <Text className="text-id">{renterId(id_connect)}</Text>
        <Text className="text-name">{type_name}</Text>
        <Col className="flex-center">
          <Button htmlType="submit" className="border-none">
            <IconRenameWallet />
          </Button>
          <Button
            htmlType="submit"
            className="border-none"
            onClick={() => {
              navigator.clipboard.writeText(id_connect);
            }}
          >
            <IconCopyAddress />
          </Button>
          <Button htmlType="submit" className="border-none">
            <IconDisconnect />
          </Button>
        </Col>
      </Row>
    </Paragraph>
  );
};

export default RowInfoWallets;
