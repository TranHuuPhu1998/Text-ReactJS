import React from 'react';
import TitlePage from 'library/components/title-page/TitlePage';
import { setTitleDocument } from 'utils/common';

const LearnDeFi: React.FC = () => {
  setTitleDocument('Learn DeFi');
  return (
    <div className="wrapper-content">
      <TitlePage title="Learn DeFi"></TitlePage>
    </div>
  );
};

export default LearnDeFi;
