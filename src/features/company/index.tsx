import React from 'react';
import TitlePage from 'library/components/title-page/TitlePage';
import { setTitleDocument } from 'utils/common';

const Company: React.FC = () => {
  setTitleDocument('Company');
  return (
    <div className="wrapper-content">
      <TitlePage title="Company"></TitlePage>
    </div>
  );
};

export default Company;
