import React from 'react';
import TitlePage from 'library/components/title-page/TitlePage';
import { setTitleDocument } from 'utils/common';

const Overview: React.FC = () => {
  setTitleDocument('Overview');

  return (
    <div className="wrapper-content">
      <TitlePage title="Overview"></TitlePage>
    </div>
  );
};

export default Overview;
