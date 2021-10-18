import React from 'react';
import TitlePage from 'library/components/title-page/TitlePage';
import { setTitleDocument } from 'utils/common';

const AnalyticApp: React.FC = () => {
  setTitleDocument('Analytic App');
  return (
    <div className="wrapper-content">
      <TitlePage title="Analytic App"></TitlePage>
    </div>
  );
};

export default AnalyticApp;
