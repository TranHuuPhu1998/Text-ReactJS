import React from 'react';
import { Select } from 'antd';
import './CardSelect.modules.scss';

const { Option } = Select;

interface Props {
  name: string;
  defaultValue?: string;
  options: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
}

const CardSelect: React.FC<Props> = ({ name, options, defaultValue, placeholder }) => {
  return (
    <div className="wrapper-select">
      <p className="text-select">{name}</p>
      <Select defaultValue={defaultValue} className="custom-select" placeholder={placeholder}>
        {options.map((item, index) => (
          <React.Fragment key={index}>
            <Option value={item.label}>{item.value}</Option>
          </React.Fragment>
        ))}
      </Select>
    </div>
  );
};

export default CardSelect;
