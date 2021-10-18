import { Row } from 'antd';
import React from 'react';
import './WrapperContent.modules.scss';

interface PropsInterface {
  children?: React.ReactNode;
}

const WrapperContent: React.FC = ({ children }: PropsInterface) => {
  return (
    <Row className="wrapper-content" wrap gutter={[0, 24]}>
      {children}
    </Row>
  );
};

export default WrapperContent;
