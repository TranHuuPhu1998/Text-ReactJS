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
}

const detailsBunny = [
  {
    id: 1,
    asset: 'CAKE',
    deposited_qty: { unit: 'CAKE', value: 433.2 },
    interest: { unit: 'CAKE', value: 11.2 },
    rewards: { unit: 'BUNNY', value: 2.254 },
    apr: { unit: '%', value: 302.4 },
    apy: { unit: '%', value: 674.9 },
    cost_basis: { unit: '$', value: 17.808 },
    total_current_cake: { unit: 'CAKE', value: 444.4 },
    total_current_bunny: { unit: 'BUNNY', value: 2.254 },
    total_p_l: { unit: '+$', value: 138.145 },
  },
  {
    id: 2,
    asset: 'CAKE-BNB',
    deposited_qty: { unit: 'LP', value: 709.5 },
    interest: { unit: 'LP', value: 200.0 },
    rewards: { unit: 'BUNNY', value: 10.0 },
    apr: { unit: '%', value: 222.4 },
    apy: { unit: '%', value: 321.9 },
    cost_basis: { unit: '$', value: 210.14 },
    total_current_cake: { unit: 'LP', value: 909 },
    total_current_bunny: { unit: 'BUNNY', value: 10 },
    total_p_l: { unit: '+$', value: 143.798 },
  },
];

const detailsAutoFarm = [
  {
    id: 1,
    asset: 'BTCB',
    deposited_qty: { unit: 'BTCB', value: 10 },
    interest: { unit: 'BTCB', value: 1.72 },
    rewards: { unit: 'AUTO', value: 2.254 },
    apr: { unit: '%', value: 302.4 },
    apy: { unit: '%', value: 674.9 },
    cost_basis: { unit: '$', value: 17.808 },
    total_current_cake: { unit: 'BTC', value: 444.4 },
    total_current_bunny: { unit: 'AUTO', value: 2.254 },
    total_p_l: { unit: '+$', value: 138.145 },
  },
  {
    id: 2,
    asset: 'WBNB-AUTO',
    deposited_qty: { unit: 'LP', value: 709.5 },
    interest: { unit: 'LP', value: 200.0 },
    rewards: { unit: 'BUNNY', value: 10.0 },
    apr: { unit: '%', value: 222.4 },
    apy: { unit: '%', value: 321.9 },
    cost_basis: { unit: '$', value: 210.14 },
    total_current_cake: { unit: 'LP', value: 909 },
    total_current_bunny: { unit: 'BUNNY', value: 10 },
    total_p_l: { unit: '+$', value: 143.798 },
  },
];

const detailsVenus = [
  {
    id: 1,
    asset: 'DAI',
    deposited_qty: { unit: 'DAI', value: 10 },
    interest: { unit: 'DAI', value: 1.72 },
    rewards: { unit: 'XVS', value: 2.254 },
    apr: { unit: '%', value: 302.4 },
    apy: { unit: '%', value: 674.9 },
    cost_basis: { unit: '$', value: 17.808 },
    total_current_cake: { unit: 'DAI', value: 444.4 },
    total_current_bunny: { unit: 'XVS', value: 2.254 },
    total_p_l: { unit: '+$', value: 138.145 },
  },
];

const detailsBelt = [
  {
    id: 1,
    asset: 'BUSD',
    deposited_qty: { unit: 'BUSD', value: 10 },
    interest: { unit: 'BUSD', value: 1.72 },
    rewards: { unit: 'BELT', value: 2.254 },
    apr: { unit: '%', value: 302.4 },
    apy: { unit: '%', value: 674.9 },
    cost_basis: { unit: '$', value: 17.808 },
    total_current_cake: { unit: 'BUSD', value: 444.4 },
    total_current_bunny: { unit: 'BELT', value: 2.254 },
    total_p_l: { unit: '+$', value: 138.145 },
  },
];

const detailsProductive = {
  detailsBunny: detailsBunny,
  detailsAutoFarm: detailsAutoFarm,
  detailsVenus: detailsVenus,
  detailsBelt: detailsBelt,
};

const ListProductive = ({ title, price, setIsModalVisible }: Props) => {
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
          detailsProductive={detailsProductive.detailsBunny}
          setIsModalVisible={setIsModalVisible}
        />
        <BreakDown
          title={'AUTOFARM'}
          price={'1.563.968'}
          icon={iconAutoFarm}
          detailsProductive={detailsProductive.detailsAutoFarm}
          setIsModalVisible={setIsModalVisible}
        />
        <BreakDown title={'VENUS'} price={'12,324'} icon={iconVenus} detailsProductive={detailsProductive.detailsVenus} setIsModalVisible={setIsModalVisible} />
        <BreakDown title={'BELT'} price={'4,062'} icon={iconBelt} detailsProductive={detailsProductive.detailsBelt} setIsModalVisible={setIsModalVisible} />
      </div>
    </div>
  );
};

export default ListProductive;
