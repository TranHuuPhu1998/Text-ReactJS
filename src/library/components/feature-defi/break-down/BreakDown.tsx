import React from 'react';
import IconExclamation from 'library/assets/icons/icon-exclamation';
import ShowListTr from '../show-list-tr/ShowListTr';
import './BreakDown.modules.scss';

interface Props {
  title: string;
  price: string;
  icon: string;
  detailsProductive: any;
  setDataViewDetails: any;
  setIsModalVisible: (val: boolean) => void;
}

const BreakDown = ({ icon, detailsProductive, setIsModalVisible, setDataViewDetails }: Props) => {
  const listText = ['Asset', 'Deposited Qty', 'Interest', 'Rewards', 'APR', 'APY', 'Cost Basis', 'Total Current Value', 'Total P & L'];

  return (
    <div className="wrapper-break-down">
      <div className="content">
        <h4 className="content__title-info">
          <img src={icon} alt="" />
          <span>BUNNY - $509,891</span>
        </h4>
        <div className="content__list-th">
          <table className="table">
            <thead className="thead">
              <tr>
                {listText.map((item, index) => (
                  <th key={index}>
                    <span>{item}</span>
                    <sup>
                      <IconExclamation />
                    </sup>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="tbody">
              {detailsProductive?.map((item: any, index: number) => (
                <ShowListTr key={index} item={item} setIsModalVisible={setIsModalVisible} setDataViewDetails={setDataViewDetails} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BreakDown;
