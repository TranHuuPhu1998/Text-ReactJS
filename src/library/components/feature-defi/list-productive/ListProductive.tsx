import React, { useState } from 'react';
import BreakDown from 'library/components/feature-defi/break-down/BreakDown';
import IconDropDownBig from 'library/assets/images/icon-drop-down.png';
import iconBunny from 'library/assets/images/icon-bunny.png';
import iconAutoFarm from 'library/assets/images/icon-auto-farm.png';
import iconVenus from 'library/assets/images/icon-venus.png';
import iconBelt from 'library/assets/images/icon-belt.png';
import './ListProductive.modules.scss';

interface Props {
  title: string;
  price: string;
  setIsModalVisible: (val: boolean) => void;
  detailsProductive: any;
  setDataViewDetails: any;
}

const ListProductive = ({ title, price, setIsModalVisible, detailsProductive, setDataViewDetails }: Props) => {
  const [isShow, setIsShow] = useState(false);
  const handleShowLayout = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="wrapper-list">
      <div className="flex-between">
        <h3 className="break-down__title">
          {title} - <span>${price}</span>
        </h3>
        <button className={isShow ? 'btn-drop-down active-icon' : 'btn-drop-down'} onClick={handleShowLayout}>
          <img src={IconDropDownBig} alt="" />
        </button>
      </div>
      <div className={isShow ? 'show-list mt-12 active' : 'show-list'}>
        <BreakDown
          title={'BUNNY'}
          price={'509.891'}
          icon={iconBunny}
          detailsProductive={detailsProductive?.details_bunny}
          setIsModalVisible={setIsModalVisible}
          setDataViewDetails={setDataViewDetails}
        />
        <BreakDown
          title={'AUTOFARM'}
          price={'1.563.968'}
          icon={iconAutoFarm}
          detailsProductive={detailsProductive?.details_auto_farm}
          setIsModalVisible={setIsModalVisible}
          setDataViewDetails={setDataViewDetails}
        />
        <BreakDown
          title={'VENUS'}
          price={'12,324'}
          icon={iconVenus}
          detailsProductive={detailsProductive?.details_venus}
          setIsModalVisible={setIsModalVisible}
          setDataViewDetails={setDataViewDetails}
        />
        <BreakDown
          title={'BELT'}
          price={'4,062'}
          icon={iconBelt}
          detailsProductive={detailsProductive.details_belt}
          setIsModalVisible={setIsModalVisible}
          setDataViewDetails={setDataViewDetails}
        />
      </div>
    </div>
  );
};

export default ListProductive;
