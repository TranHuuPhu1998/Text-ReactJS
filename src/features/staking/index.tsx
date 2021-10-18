import React from 'react';
import TitlePage from 'library/components/title-page/TitlePage';
import { setTitleDocument } from 'utils/common';

const Staking: React.FC = () => {
  setTitleDocument('Staking');
  return (
    <div className="wrapper-content">
      <TitlePage title="Staking Page"></TitlePage>
    </div>
  );
};

export default Staking;
