import React from 'react';
import TitlePage from 'library/components/title-page/TitlePage';
import { setTitleDocument } from 'utils/common';

const Home: React.FC = () => {
  setTitleDocument('Home');
  return (
    <div className="wrapper-content">
      <TitlePage title="Home"></TitlePage>
    </div>
  );
};

export default Home;
