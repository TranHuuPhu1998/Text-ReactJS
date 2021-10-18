import React from 'react';
import './index.modules.scss';
import { setTitleDocument } from 'utils/common';

const NotFound: React.FC = () => {
  setTitleDocument('Not Found');
  return (
    <div className="wrapper">
      <div className="title">404</div>
      <div className="description">Page not found</div>
    </div>
  );
};

export default NotFound;
