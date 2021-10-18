import React, { useState } from 'react';
import IconDropDownSmall from 'library/assets/images/icon-drop-down-small.png';

/* eslint-disable  @typescript-eslint/no-explicit-any */
const ShowListTr = ({ item, setIsModalVisible }: any) => {
  const [idDetails, setIdDetails] = useState(-1);

  const handleShowDetail = (id: number) => {
    setIdDetails(id);
    if (idDetails >= 0) {
      setIdDetails(-1);
    }
    setIsModalVisible();
  };

  return (
    <tr>
      <td>{item.asset}</td>
      <td>
        {item.deposited_qty.value}&nbsp;{item.deposited_qty.unit}
      </td>
      <td>
        {item.interest.value}&nbsp;{item.deposited_qty.unit}
      </td>
      <td>
        {item.rewards.value}&nbsp;{item.rewards.unit}
      </td>
      <td>{item.apr.value + '' + item.apr.unit}</td>
      <td>{item.apy.value + '' + item.apy.unit}</td>
      <td>{item.cost_basis.unit + '' + item.cost_basis.value}</td>
      <td>
        {item.total_current_cake.value}&nbsp;
        {item.total_current_cake.unit}+{item.total_current_bunny.value}
        &nbsp;{item.total_current_bunny.unit}
      </td>
      <td className="color-13BA9A">
        {item.total_p_l.unit}
        {item.total_p_l.value}
      </td>
      <td>
        <button className="btn-drop-down" onClick={() => handleShowDetail(item.id)}>
          <img src={IconDropDownSmall} alt="" />
        </button>
      </td>
    </tr>
  );
};

export default ShowListTr;
