import React from 'react';
import TitlePage from 'library/components/title-page/TitlePage';
import { setTitleDocument } from 'utils/common';

const History: React.FC = () => {
  setTitleDocument('History');
  return (
    <div className="wrapper-content">
      <TitlePage title="History"></TitlePage>
    </div>
  );
};

export default History;
