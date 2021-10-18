import React from 'react';
import TitlePage from 'library/components/title-page/TitlePage';
import { setTitleDocument } from 'utils/common';

const WordSpace: React.FC = () => {
  setTitleDocument('WordSpace');
  return (
    <div className="wrapper-content">
      <TitlePage title="WordSpace"></TitlePage>
    </div>
  );
};

export default WordSpace;
