import React from 'react';
import IconDropDownSmall from 'library/assets/images/icon-drop-down-small.png';

const ShowListTr = ({ item, setIsModalVisible, setDataViewDetails }: any) => {
  const handleShowDetail = (item: any) => {
    setDataViewDetails(item);
    setIsModalVisible();
  };

  return (
    <tr>
      <td>{item.asset}</td>
      <td>
        {item.deposited_qty.value}&nbsp;{item.deposited_qty.unit}
        <p className="color-13BA9A">($550,000)</p>
      </td>
      <td>
        {item.interest.value}&nbsp;{item.deposited_qty.unit}
        <p className="color-13BA9A">($94,600)</p>
      </td>
      <td>
        {item.rewards.value}&nbsp;{item.rewards.unit}
        <p className="color-13BA9A">($6,200)</p>
      </td>
      <td>{item.apr.value + '' + item.apr.unit}</td>
      <td>{item.apy.value + '' + item.apy.unit}</td>
      <td>{item.cost_basis.unit + '' + item.cost_basis.value}</td>
      <td>
        {item.total_current_cake.value}&nbsp;
        {item.total_current_cake.unit}+{item.total_current_bunny.value}
        &nbsp;{item.total_current_bunny.unit}
        <p className="color-13BA9A">$650,600</p>
      </td>
      <td className="color-13BA9A">
        {item.total_p_l.unit}
        {item.total_p_l.value}
      </td>
      <td>
        <button className="btn-drop-down" onClick={() => handleShowDetail(item)}>
          <img src={IconDropDownSmall} alt="" />
        </button>
      </td>
    </tr>
  );
};

export default ShowListTr;
